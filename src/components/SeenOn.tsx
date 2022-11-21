import React from 'react'

import ellenShowLogo from "../assets/ellenshow.svg";
import MindbodyGreenLogo from "../assets/mindbodygreen.svg";
import FastCompanyLogo from "../assets/fastcompany.svg";

import Image from 'next/image';

export default function SeenOn() {
  return (
    <section className='flex items-center justify-center flex-col gap-14 mb-[8.75rem]'>
      <h2 className='font-semibold text-2xl'>
        AS SEEN ON
      </h2>
      <div className='flex flex-col justify-between w-full opacity-30 2xl:flex-row gap-y-12 items-center'>
        <Image src={FastCompanyLogo} alt={''} />
        <Image src={ellenShowLogo} alt={''} />
        <Image src={MindbodyGreenLogo} alt={''} />
      </div>
    </section>
  )
}
