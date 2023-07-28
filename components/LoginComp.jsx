import {
  ConnectWallet,
  useAddress,
  useUser,
  useContract,
  useOwnedNFTs,
  useLogin,
} from "@thirdweb-dev/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import logo from '../assets/logo.svg';
import { contractAddress, minimumBalance } from "../const/yourDetails";
export default function Login() {
  const address = useAddress(); // Get the user's address
  const { user, isLoggedIn } = useUser();
  console.log({ user, isLoggedIn });
  const { isLoading: logginIn, login } = useLogin();
  const router = useRouter();
  const {
    contract,
    isLoading: loadingContract,
    error: errorLoadingContract,
  } = useContract(contractAddress);
  const { data: nfts, isLoading } = useOwnedNFTs(contract, address);

  useEffect(() => {
    if (!address) return;
    login();
  }, [address]);

  useEffect(() => {
    if (!user || !user.address) return;
    if (!nfts || nfts.length <= minimumBalance)
      return console.log("User logged in but NFT not found");
    router.push("../pages/index.jsx");
  }, [user, nfts]);
  
  return (
<div className="flex flex-col lg:flex-row lg:h-screen h-full font-sans bg-gradient-to-r from-teal-400 to-blue-500">
  {/* Right Section */}
  <div className="flex justify-center items-center lg:justify-center lg:w-1/2 p-10 lg:p-16">
    {/* Adjust the maximum size of the image container for larger screens */}
    <div className="w-full lg:w-4/5">
      {/* Adjust the image size to be responsive and grow with the screen */}
      <Image src={logo} alt="Creator Mints Image" layout="responsive" className="w-full" />
    </div>
  </div>

  {/* Left Section */}
  <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 p-10 lg:p-16">
    {/* Adjust the maximum width of the text container for larger screens */}
    <h1 className="text-4xl lg:text-6xl text-center lg:text-left">Creator Mints Holder Only Demo Page</h1>
    <p className="text-lg lg:text-xl text-center lg:text-left max-w-lg mt-4">
      After a user purchases a digital collectible from Creator Mints, they will get access to the creator&rsquo;s private
      page that will only be accessible by the holders of the Collectables. This page can fully be customized to the
      creator&rsquo;s liking including holder-only videos, merchandise, and more.
    </p>
    {/* Adjust the padding around the "Connect Wallet" button for larger screens */}
    <ConnectWallet 
      btnTitle="Access holder-only page!" 
      className="!mt-6 lg:mt-10 lg:mx-4 p-6 lg:p-6 hover:scale-110 connect-styles !bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 !text-white" 
    />
  </div>
</div>

  );
}

// export default Cards;
