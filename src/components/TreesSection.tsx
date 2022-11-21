import Image from 'next/image'
import React from 'react'

import treesLogo from '../assets/milliontreeslogo.svg';

export default function TreesSection() {
  return (
    <section className='min-h-[30rem] w-full mb-[8.75rem] rounded-md p-8 bg-forestImage bg-no-repeat bg-cover flex items-center justify-center flex-col gap-12'>
      <Image src={treesLogo} alt={''} />
      <p className='text-zinc-50 max-w-[50rem] text-center p-4'>
        We&#39;ve planted more than one million trees in national forest across the United States. Now, we&#39;re on a mission to plant one million more trees. Learn more about our reforestation efforts and how you can help us build a #BetterPlanet.
      </p>
      <button className='text-zinc-50 border rounded-md py-2 px-4 hover:text-zinc-800 hover:bg-zinc-50 duration-200'>
        NAME A TREE
      </button>
    </section>
  )
}
