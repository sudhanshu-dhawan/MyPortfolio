import Image from 'next/image'
import React from 'react'
import { SparklesPreview } from './ui/SparkleText'
import { projects } from '@/data'
import { PinContainer } from './ui/PinContainer' 
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20'>
        <SparklesPreview />

        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-[-250px]'>
        {
            projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[35vh] mb-10'>
                           
                            <Image src={img} alt={title} layout="fill" objectFit="cover" />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm'>
                            {des}
                        </p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            {
                                iconLists.map((Icon, index) => (
                                    <div
                                        key={index}
                                        className='border border-white rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                        style={{
                                            transform: `translateX(-${5 * index * 2}px)`
                                        }}
                                    >
                                        <Icon className='text-white lg:text-2xl text-xl' />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='flex lg:text-xl md:text-sm text-sm text-purple'>Check live site</p>
                            <FaLocationArrow className='ms-3' color='#CBACE9' />
                        </div>
                    </PinContainer>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default RecentProjects
