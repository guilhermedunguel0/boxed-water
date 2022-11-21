import Image from 'next/image'
import React from 'react'

import bigLogo from '../assets/boxedwaterbiglogo.svg';

export default function Footer() {
  return (
    <footer className='bg-zinc-800  w-full p-12 '>
      <div className='flex flex-col 2xl:flex-row items-center justify-between gap-8 max-w-[1440px] m-auto'>
        <div className='flex gap-8 items-center flex-col 2xl:flex-row'>
          <Image width="160" height="160" src={bigLogo} alt={''} />
          <div className='max-w-[18.20rem] text-center 2xl:text-left flex flex-col justify-between text-zinc-200 text-sm'>
            <p className=''>
              Project builded for study porpuses 
              <strong className='block'> this is not an Boxed Water&#39;s oficial website</strong> 
            </p>
            <span className='block'>
              Any legal issue or request to remove content contact me by:
            </span>
            <a className='underline' href="mailto:guilhermedunguel@gmail.com">guilhermedunguel@gmail.com</a>
          </div>
        </div>
        <div className='flex items-right flex-col text-center 2xl:text-right text-zinc-200 text-sm gap-3.5 '>
          <span>Design & Code by: <strong>Guilherme Dunguel</strong></span>
          <a href='https://guilhermedunguel.com' target={'blank'}><strong>Website:</strong> https://guilhermedunguel.com/</a>
          <a href='https://github.com/GuilhermeDunguel' target={'blank'}><strong>Github:</strong> https://github.com/GuilhermeDunguel</a>
        </div>
      </div>
    </footer>
  )
}
