import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'

export default function Princing() {
    return (
        <FullContainer className="py-24 bg-background-light">
            <Container className='flex flex-col gap-5 !max-w-[800px] mx-auto'>
                <h5 className='text-center text-xl font-bold uppercase text-text-secondary'>Our Pricing</h5>
                <div className='flex flex-col md:flex-row gap-4 w-full'>
                    <div className='bg-primary w-full text-center items-center justify-center py-2 rounded-lg text-white text-lg font-semibold flex flex-row gap-2'>
                        <span className='py-2 text-xl'>Google</span>
                        <span className=' h-full text-base font-[400]'>Plateform</span>
                    </div>
                    <div className='border border-text-secondary/20 w-full text-center items-center justify-center py-2 rounded-lg text-lg font-semibold text-text-secondary flex flex-row gap-2'>
                        <span className='py-2 text-xl'>Google</span>
                        <span className='h-full text-base font-[400]'>API-Only</span>
                    </div>
                    <div className='border border-secondary w-full text-center items-center justify-center py-2 rounded-lg text-lg font-semibold text-secondary flex flex-row gap-2'>
                        <span className='py-2 text-xl'>AI Visibility</span>
                        <span className='h-full text-base font-[400]'>NEW</span>
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-4xl font-bold text-text-primary'>See your rankings climb, not your billing</h2>
                    <p className='text-center text-lg font-light text-text-secondary'>Get the accuracy all-in-one tools can't provide, at a fraction of what they are charging you.</p>
                </div>
            </Container>
        </FullContainer>
    )
}