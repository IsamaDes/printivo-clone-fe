import React from 'react';

const NavBar = () => {
  return (
    <div className="fixed top-0 flex justify-between items-center pr-22 pl-22 w-full bg-white text-black shadow-md h-[60px] z-50">
      <div className="flex justify-between gap-2">
        <button className="bg-white border-0 cursor-pointer">
          Cost Calculators
        </button>
        <button className="bg-white border-0 cursor-pointer">
          Discover Stores
        </button>
        <button className=" bg-white border-0 cursor-pointer">
          Track Orders
        </button>
        <button className="bg-white cursor-pointer">Marketplace</button>
      </div>

      <div className="flex justify-between gap-3">
        <div className="flex flex-col">
          <div>Need help? Call:</div>
          <div className="flex gap-2">
            <span className="text-blue-500">+2347069000083</span>
            <h3>or</h3>
            <span className="text-blue-500">+2349035000505</span>
          </div>
        </div>

        <img src="/whatsappimg.svg" alt="Logo" className="h-10" />

        <div className="flex items-center p-2 gap-3 border-2 border-gray-500 rounded-full">
          <img src="/nigerianflagimg.svg" alt="Logo" className="h-5" />
          <span>Nigeria</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
