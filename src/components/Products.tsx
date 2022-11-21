import Image from 'next/image'
import React from 'react'

import productImage from '../assets/boxedwaterproduct.svg';

export default function Products() {
  return (
    <section id='products' className='my-[8.75rem] flex items-center justify-center'>
      <div className='bg-zinc-100 h shadow-base max-w-[42.5rem] rounded-md flex flex-col md:flex-row gap-8 p-5'>
        <Image className='max-h-full max-w-full md:max-w-[12.5rem] md:max-h-[21.875rem] w-full h-full' src={productImage} alt={'Hand holding an boxed water'} />
        <div className='flex flex-col h-sm justify-between gap-4'>
          <h2 className='text-2xl font-medium'>BOXED WATER IS BETTER.</h2>
          <p className='text-lg text-zinc-600'>
            Our paper-based cartons are 92% renewable and way less destructive to our planet than single-use plastic bottles and aluminum cans.
          </p>
          <span className='text-lime-600'>Healthy &#8226; Sustainable &#8226; Better</span>
          <div className='text-xs flex items-center gap-x-4'>
            <button className='py-3 px-4 border border-cyan-600 text-cyan-600 rounded-md hover:bg-cyan-600 hover:text-zinc-50 duration-200'>MORE ABOUT</button>
            <button className='py-3 px-4 border border-lime-600 text-lime-600 rounded-md hover:bg-lime-600 hover:text-zinc-50 duration-200'>ORDER NOW</button>
          </div>
        </div>
      </div>
    </section>
  )
}
