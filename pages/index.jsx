import React, { useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import checkBalance from "../util/checkBalance";
import { useRouter } from "next/router";
import lock from "../assets/lock-icon.svg";
import Image from "next/image";

export default function Home() {
  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen h-full font-sans bg-gradient-to-r from-teal-400 to-blue-500">
      {/* Right Section */}
      <div className="flex justify-center items-center lg:justify-center lg:w-1/2 p-10 lg:p-16">
        {/* Adjust the maximum size of the image container for larger screens */}
        <div className="w-full lg:w-4/5">
          {/* Adjust the image size to be responsive and grow with the screen */}
          <Image
            src={lock}
            alt="Creator Mints Image"
            layout="responsive"
            className="w-full drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Left Section */}
      <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 p-10 lg:p-16">
        {/* Adjust the maximum width of the text container for larger screens */}
        <h1 className="text-4xl lg:text-6xl text-center lg:text-left">
        Holders Only Page
        </h1>
        <p className="text-lg lg:text-xl text-center lg:text-left max-w-lg mt-4">
          This page is accessible only to users who hold the exclusive Creator
          Mints Collectibles. Creators can customize this private page with
          unique content, offers, giveaways, videos, and more. It&rsquo;s an exclusive
          space for the Collectibles&rsquo; holders to engage with the creator&rsquo;s
          community and access special perks.
        </p>
        {/* Adjust the padding around the "Connect Wallet" button for larger screens */}
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }

  // Instantiate our SDK
  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.THIRDWEB_AUTH_PRIVATE_KEY,
    "mumbai"
  );

  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "does not have an NFT! Redirecting...");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}
