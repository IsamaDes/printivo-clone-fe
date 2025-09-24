 
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import PopularProducts from '@/components/PopularProducts'
import React from 'react'

function HomePage() {
  return (
    <div>
    <NavBar/>
    <Hero/>
    <PopularProducts/>
    </div>
    
  )
}

export default HomePage