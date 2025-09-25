import React from 'react';

const Hero = () => {
  return (
    <div className="mt-20 flex flex-col gap-20 pr-22 pl-22 pb-20  justify-between ">
      <div className="flex justify-between items-center">
        <img src="/printivo-logo.svg" alt="Logo" className="h-10" />

        <div className="flex gap-3 justify-between items-center">
          <div className="flex justify-between gap-2">
            <div>All products</div>
            <div>Become a Reseller</div>
            <div>Merch Store</div>
            <div>Marketplace</div>
          </div>

          <div className="flex justify-between gap-3">
            <button className="bg-transparent text-black px-4 py-2 rounded">
              Sign in
            </button>
            <button className="bg-transparent text-black px-4 py-2 rounded">
              Create Account
            </button>
            <img src="/cartimg.svg" alt="Logo" className="h-10" />
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
              <img src="/searchimg.svg" />
            </div>
          </div>
        </div>
        <img src="/printivo-logo.svg" alt="Logo" className="h-10" />
      </div>
    </div>
  );
};

export default Hero;
