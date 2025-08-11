import React from 'react'
import Container from '../common/Container'
import FullContainer from '../common/FullContainer'
import Image from 'next/image'
export default function Hero({title, description,tagline, buttonText, image}) {
    return (
        <FullContainer className="bg-gray-100 py-10 pt-20 lg:py-40">
            <Container className='flex flex-col md:flex-row gap-10 items-center justify-center'>
                <div className='flex flex-col md:w-[40%] items-start gap-4 justify-start'>
                    <h4 className='text-xs text-gray-700'>    
                        {tagline}
                    </h4>
                    <h2 className='text-4xl font-bold'>
                        {title}
                    </h2>
                    <p className='text-base text-gray-500'>
                        {description}
                    </p>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                        {buttonText}
                    </button>
                </div>
                <div className='flex flex-row  md:w-[60%] items-center justify-center rounded-xl overflow-hidden shadow-xl'>
                    <Image src={image} alt='hero' width={1500} height={1500} className='w-full h-full object-cover' />
                </div>
            </Container>
        </FullContainer>
    )
}
