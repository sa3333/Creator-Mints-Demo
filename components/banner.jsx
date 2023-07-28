// components/ClosableBanner.js
import { useState } from 'react';

const ClosableBanner = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const handleBannerClose = () => {
    setIsBannerOpen(false);
  };

  return (
    <>
      {isBannerOpen && (
        <div className="fixed top-0 left-0 right-0 ">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-2 text-white text-center relative ">
            <p className="text-xl">
              This is a demo website all ui components are only for example purposes
              <button
                onClick={handleBannerClose}
                className="text-white font-bold ml-2"
          >
              </button>
            </p>
            <span
              onClick={handleBannerClose}
              className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer text-white text-2xl "
            >
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ClosableBanner;
