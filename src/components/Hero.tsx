import React from 'react';

const Hero = () => {
  return (
    <div className="mt-20 flex flex-col gap-20 pr-22 pl-22 pb-20  justify-between ">
      <div className="flex justify-between items-center">
        <img src="/printivo-logo.svg" alt="Logo" className="h-10" />

        <div className="flex gap-3 justify-between items-center">
          <div className="flex justify-between gap-2">
            <button className='cursor-pointer'>All products</button>
            <button className='cursor-pointer'>Become a Reseller</button>
            <button className='cursor-pointer'>Merch Store</button>
            <button className='cursor-pointer'>Marketplace</button>
          </div>

          <div className="flex justify-between gap-3">
            <button className="bg-transparent text-black px-4 py-2 rounded cursor-pointer">
              Sign in
            </button>
            <button className="bg-transparent text-black px-4 py-2 rounded cursor-pointer">
              Create Account
            </button>
            <button className="bg-transparent text-black px-4 py-2 rounded cursor-pointer">
              <img src="/cartimg.svg" alt="Logo" className="h-10" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-5 w-1/2">
          <div>
            <h2 className="text-[50px] font-bold text-gray-800">
              Quality Prints
            </h2>
          </div>
          <h2 className="text-[30px] font-medium text-gray-500">
            Shipped to your doorsteps
          </h2>
          <div className="flex flex-col">
            <h2 className="text-[15px] text-gray-400 font-bold">
              {' '}
              What would you like to print today?
            </h2>
            <div className="flex justify-between bg-white w-full">
              <input
                placeholder="Search for business"
                className="w-[95%] h-[70px]"
              />
              <button className='cursor-pointer'>
                <img src="/searchimg.svg" />
              </button> 
            </div>
          </div>
        </div>
        <img src="/round-sticker.png" alt="Logo" className="h-[250px]" />
      </div>
    </div>
  );
};

export default Hero;
