import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import PopularProducts from '@/components/PopularProducts';
import React from 'react';

function HomePage() {
  return (
    <div className="top-0 flex flex-col gap-2 w-full bg-[#EAE5D6]">
      <NavBar />
      <Hero />
      <PopularProducts />
    </div>
  );
}

export default HomePage;
