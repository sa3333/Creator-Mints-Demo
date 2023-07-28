import React from "react";
import logo from "../assets/logo1.svg";
import Image from "next/image";

const Mint = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen font-sans bg-gradient-to-r from-indigo-500 to-pink-500">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 p-10 lg:p-16">
        {/* Adjust the maximum width of the text container for larger screens */}
        <h1 className="text-4xl lg:text-6xl text-center lg:text-left">
          Creator Mints Collectible Purchase Demo Page
        </h1>
        <p className="text-lg lg:text-xl text-center lg:text-left max-w-lg mt-4">
          On this page, users can mint (purchase) a creator's digital
          collectible. There will be a set supply of digital pieces of art which
          will be all unique pieces of art related to the creator. These
          collectibles are securely backed by blockchain technology, ensuring
          their authenticity and protection. Users can easily mint the digital
          collectibles using their credit card, and will then receive them via
          email. By acquiring these collectibles, users gain access to an
          exclusive holders-only page as shown below.
        </p>
        {/* Adjust the padding around the "Connect Wallet" button for larger screens */}
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center lg:justify-center lg:w-1/2 p-10 lg:p-16">
        {/* Adjust the maximum size of the image container for larger screens */}
        <div className="w-full lg:w-4/5 bg-black rounded-lg max-w-4xl flex flex-col justify-between p-6 mt-1 flex-grow">
          {/* Logo */}
          <Image src={logo} alt="Creator Mints" className="w-36 h-36" />

          {/* Title */}
          <h2 className="text-white text-2xl font-bold mt-4">Creator Mints</h2>

          {/* Description */}
          <p className="text-white mt-2">
            Purchase Creator Mints Digital Collectables. When purchasing a
            collectable you will get a unique piece of collectible art which
            will be sent to your email.
          </p>

          {/* Mint button */}
          <a
            href="https://withpaper.com/checkout/7b053899-bfda-4dcf-ae23-32b2b1f71fe4"
            target="_blank"
          >
            <button className="mt-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-lg hover:scale-105 w-full">
              Mint Test Collectable
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mint;
