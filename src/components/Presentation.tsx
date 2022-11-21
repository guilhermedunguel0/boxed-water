import Image from 'next/image'
import React from 'react'

import Folliages from '../assets/folliages.svg';
import bgBlur from '../assets/backgroundblur.svg';
import { CaretDown } from 'phosphor-react';

export default function Presentation() {
  return (
    <section id="#home" className='w-full h-[calc(100vh_-_5.5rem)] flex items-center justify-center'>
      <div className='flex items-center flex-col z-10 gap-4'>
        <h1 className='text-5xl font-bold text-zinc-800 text-center'>
          Your new ecology way to drink water
        </h1>
        <p className='text-xl font-normal text-zinc-600 max-w-[50rem] w-full text-center'>
          Our mission is to renew the way you drink water, providing ecologic alternatives that also helps our planet.
        </p>
      </div>
      <Image src={Folliages} alt="" className='absolute overflow-hidden' />
      <Image src={bgBlur} alt="" className='absolute overflow-hidden z-0' />
      <div className='flex items-center justify-center flex-col gap-2 absolute bottom-0' >
        <span className='text-sm'>
          More about
        </span>
        <CaretDown size={22} />
      </div>
    </section>
  )
}
