import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const PopularProducts = () => {
  return (
    <div className="pt-15 pl-22 pr-22 bg-white">
      <div className="p-5 flex justify-between items-center">
        <h2 className="text-[30px]">PopularProducts</h2>
        <button className="text-[20px] text-red-300 cursor-pointer">
          See All Products
        </button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            buttonText={product.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
