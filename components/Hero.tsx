import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffects'
import Image from 'next/image'
import Sudhanshu from "../images/sudhanshu_portfolio.png"
import Sudhanshu2 from "../images/sudhanshu_linkedin_pic.jpeg"
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { ResumeLink } from './ui/ResumeLink'



function Hero() {
  return (
    <>

<div className='pb-20 pt-36'>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]' fill='blue'/>
        <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]' fill='yellow'/>
        <Spotlight className='top-28 -left-80  h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 -left-80  h-[80vh] w-[50vw]' fill='white'/>
        <div className='  lg:absolute lg:left-[900px] top-24 z-50 sm:relative lg:ml-0 lg:mt-0 sm:ml-[100px] sm:mt-[100px] ' >
       <Image src={Sudhanshu2} alt="Sudhanshu Dhawan" className=' lg:ml-0  relative left-15 -top-14 lg:top-0 h-[300px] w-[300px] rounded-full' />
      
       
       </div>
       
        <div className="h-[200px] w-full dark:bg-black bg-white dark:bg-grid-white/[0.06] top-0 left-0 bg-grid-black/[0.3] flex  ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
     
      <div className='flex justify-center  items-center ml-[90px]  '>
        
       <div className='  max-w-[89vw] md:max-w-2xl lg:max-w-[80vh] flex flex-col justify-center   '>
       
       <TextGenerateEffect
            className='font-serif'
            words='Hey There! '

            />
             <TextGenerateEffect
            className=' font-extrabold  font-serif text-4xl '
            words='I Am SUDHANSHU DHAWAN '
            
            />
            <p className='font-serif mt-3 lg:text-xl md:text-lg sm:text-sm text-gray-400 z-50'>
            A web development enthusiast eager to turn creative ideas into interactive, responsive, and visually appealing web experiences
            </p>
            <br />
            <a href="/files/resume.pdf">
           <MagicButton
           title="View My Resume"
           icon={<FaLocationArrow/>}
           position='right'
           handleClick={()=>{}}
           />
            </a>

        
       </div>
      
     </div>
     
    </div>
    
    </div>
    </>
   
  )
}

export default Hero