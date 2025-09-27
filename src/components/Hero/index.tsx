import React from 'react'
import Image from 'next/image'
const BLUR_FADE_DELAY = 0.04;
import {BlurFade} from "../ui/blur-fade";
function index() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 p-6 md:p-12'>
        <div className='flex flex-col gap-4 max-w-xl text-center md:text-left'>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h1 className="text-xl  sm:text-2xl md:text-4xl font-black mb-6 md:mb-8 text-foreground">
                        
          Hey, I'm Abdulmateen </h1>
         
            <p>Building full-stack applications and AI-driven systems that transform ideas into scalable, high-impact products. I focus on creating solutions that drive results and enhance user experiences.</p>
         </BlurFade>
        </div>
        <div>
            <Image src="/images/pfp.png" alt="Abdulmateen" width={200} height={200} className='rounded-full'/>
        </div>
    </div>
  )
}

export default index