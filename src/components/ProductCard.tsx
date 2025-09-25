import React from 'react';

interface ProductItems {
  name: string;
  price: string;
  image: string;
  buttonText: string;
}

const ProductCard = ({ name, price, image, buttonText }: ProductItems) => {
  return (
    <div className="flex flex-col">
      <img src={image} className="h-50" />
      <div className="p-3 flex flex-col gap-3">
        <div className="text-gray-700 text-md font-bold">{name}</div>
        <div>
          <div className="text-gray-500 text-sm font-bold">STARTING AT</div>
          <div className="font-semibold text-gray-700 text-2xl">{price}</div>
        </div>
        <button className="text-left text-white p-2 cursor-pointer bg-red-200 h-10 rounded-md">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
