import Image from 'next/image'
import { InstagramLogo } from 'phosphor-react'
import React from 'react'
import { PostsType } from '../pages'
import bgBlur from '../assets/backgroundblur.svg';

export default function Instagram({posts}: PostsType) {
  return (
    <section className='flex flex-col items-center text-center gap-y-12 mb-[8.75rem] z-10'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='font-semibold text-2xl'>#BETTERPLANET</h2>
        <p className='max-w-[32rem]'>
          You&#8226;ve helped us plant over 1,000,000 trees! Post a picture of Boxed Water&#8482; with the hashtag #BetterPlanet, and we&#39;ll plant 2 more trees for you
        </p>
        <div className='flex items-center gap-2 underline'>
          <InstagramLogo size={32} />
          <a href='https://www.instagram.com/boxedwater/'>@boxedwater</a>
        </div>
        <Image className='absolute z-0 top0' src={bgBlur} alt={''} />
      </div>
      <div className='flex flex-col gap-5 z-10 2xl:flex-row'>
        {
          posts.map(post => {
            return (
             <a key={post.id} className="hover:brightness-75 duration-200 relative z-0"  href={post.postUrl} target="_blank" rel="noreferrer">
              <div className='absolute w-full h-full opacity-0 hover:opacity-100 flex items-center justify-center'>
                <InstagramLogo className='text-zinc-50 z-10 duration-200' size={32} />
              </div>
              <Image src={post.imageUrl} width="270" height="270"  alt={''} />
             </a>
            )
          })
        }
      </div>
    </section>
  )
}
