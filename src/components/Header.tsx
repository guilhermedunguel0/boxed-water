import Image from 'next/image'
import React, { useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import smallLogo from '../assets/boxedwatersmalllogo.svg';
import { List, X } from 'phosphor-react';

export default function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className='m-auto p-3 w-full flex justify-between items-center'>
      <Image src={smallLogo} width="64" height="64" alt="Boxed Water logo" quality={100} />
      <nav className=' items-center gap-[5rem] text-sm hidden md:flex text-zinc-800 '>
        <a href="#" className='hover:text-zinc-500' >Home</a>
        <a href="#products" className='hover:text-zinc-500' >Our products</a>
        <button className='border border-lime-600 text-lime-600 px-3 py-2 rounded-md font-normal text-sm hover:bg-lime-600 hover:text-neutral-100 duration-200'>
          ORDER NOW
        </button>
      </nav>
      <DropdownMenu.Root onOpenChange={() => setIsDropdownOpen(!isDropdownOpen)}>
        <DropdownMenu.Trigger className='md:hidden'>
          {isDropdownOpen ? <X size={32} /> : <List size={32}/>}
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className='flex flex-col items-center shadow-base py-5 px-3 gap-3 rounded-md mr-5'>
            <a href="#" className='hover:text-zinc-500' >Home</a>
            <a href="#products" className='hover:text-zinc-500' >Our products</a>
            <button className='border border-lime-600 text-lime-600 px-3 py-2 rounded-md font-normal text-sm hover:bg-lime-600 hover:text-neutral-100 duration-200'>
              ORDER NOW
            </button>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </header>
  )
}
