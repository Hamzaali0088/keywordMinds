import React, { useState, useEffect } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import { ChevronLeftIcon, ChevronsLeftRight, ChevronsRightLeft } from 'lucide-react'
export default function Popular() {
    const [selected, setSelected] = useState(true)
    const [daily, setDaily] = useState(true)
    const [displayPrice, setDisplayPrice] = useState('$13')
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        setIsAnimating(true)
        const timer = setTimeout(() => {
            let newPrice = '$13'
            if (selected && daily) newPrice = '$13'
            else if (selected && !daily) newPrice = '$3'
            else if (!selected && daily) newPrice = '$4'
            else if (!selected && !daily) newPrice = '$16'
            
            setDisplayPrice(newPrice)
            setIsAnimating(false)
        }, 150)
        
        return () => clearTimeout(timer)
    }, [selected, daily])

    return (
        <FullContainer className="bg-gray-100 py-24">
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
                    <div className='lg:col-span-1 h-full space-y-4'>
                        <h3 className='text-2xl '>Plus</h3>
                        <div className='flex flex-row gap-2 items-center justify-start'>
                            <button
                                onClick={() => { setSelected(!selected) }}
                                className={`relative flex items-center h-8 w-16 rounded-full transition-all duration-300 ease-in-out ${selected ? "bg-gray-300" : "bg-blue-500"}`}
                            >
                                <div className={`absolute left-1 top-1 bg-white rounded-full h-6 w-6 transition-all duration-300 ease-in-out ${selected ? "translate-x-0" : "translate-x-8"}`}></div>
                            </button>
                            <h3> Anually<span className="text-blue-500">(2 months free)</span> </h3>
                        </div>
                        <p className='text-lg'>Accurate rank tracking with flexible plans. Monitor unlimited domains with daily or weekly updates and scale your tracking from 50 to 100,000+ keywords.</p>
                        <h3 className='text-blue-500 text-lg 👇'>see plans</h3>
                    </div>
                    <div className='lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 shadow-md bg-white lg:py-8 gap-16 sm:gap-0 rounded-md px-4 md:px-0 '>
                        <div className=' w-full h-full p-4 space-y-4 '>
                            <h3 className='text-2xl text-center w-full'>Free Trail</h3>
                            <p>Get a 14-day Business Plan free trial with 200 keywords and daily updates. No credit card required.</p>
                            <div className='flex flex-row gap-2 items-center justify-center border text-[#d73855] rounded-md px-4 py-3'>
                                Start Free Trial
                            </div>
                        </div>
                        <div className='w-full h-full flex flex-col items-center justify-centers space-y-4'>
                            <div className='bg-[#d73855] w-full h-full p-4 text-white space-y-4 rounded-md'>
                                <h3 className='text-2xl text-center w-full'>Business</h3>
                                <p>Get a 14-day Business Plan free trial with 200 keywords and daily updates. No credit card required.</p>
                                <div className='flex flex-row gap-2 items-center justify-center border text-[#d73855] bg-white rounded-md px-4 py-3'>
                                    Start Free Trial
                                </div>
                            </div>
                            <div>
                                <h3>Ranking update frequency</h3>
                            </div>
                            <div className='flex flex-row w-full max-w-[150px] items-center justify-center h-12'>
                                <div className={` w-2 h-2 rounded-full cursor-pointer aspect-square flex justify-center items-center transition-all duration-300 ease-in-out ${daily ? "h-6 w-6 bg-black" : "h-2 w-2 bg-gray-300"}`} onClick={() => { setDaily(true) }}><ChevronsLeftRight className='w-4 h-4 text-white' /></div>
                                <div className='w-full border'></div>
                                <div className={` w-2 h-2 rounded-full cursor-pointer aspect-square flex justify-center items-center transition-all duration-300 ease-in-out ${daily ? "h-2 w-2 bg-gray-300" : "h-6 w-6 bg-black"}`} onClick={() => { setDaily(false) }}><ChevronsLeftRight className='w-4 h-4 text-white' /></div>
                            </div>
                            <div className='flex flex-row w-full max-w-[180px] items-center justify-between'>
                                <div className=' rounded-full cursor-pointer' onClick={() => { setDaily(true) }}>daily</div>
                                <div className=' rounded-full cursor-pointer' onClick={() => { setDaily(false) }}>weekly</div>
                            </div>
                            <div className='w-full px-4 rounded-md flex flex-col items-center justify-center mb-4'>
                                <select className='w-full border border-gray-400  rounded-md px-4 py-3 focus:outline-none'>
                                    <option value="daily">50 keywords</option>
                                    <option value="weekly">100 keywords</option>
                                    <option value="weekly">200 keywords</option>
                                    <option value="weekly">500 keywords</option>
                                    <option value="weekly">1000 keywords</option>
                                    <option value="weekly">2000 keywords</option>
                                    <option value="weekly">5000 keywords</option>
                                    <option value="weekly">10000 keywords</option>
                                </select>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-2'>
                                <div className='text-3xl font-bold'>
                                    <span 
                                        className={`inline-block transition-all duration-300 ease-in-out ${
                                            isAnimating 
                                                ? 'opacity-0 scale-95 transform translate-y-1' 
                                                : 'opacity-100 scale-100 transform translate-y-0'
                                        }`}
                                    >
                                        {displayPrice}
                                    </span>
                                </div>
                                <p>/month</p>
                            </div>
                        </div>
                        <div className='w-full h-full p-4 space-y-4 '>
                            <h3 className='text-2xl text-center w-full'>Enterprise</h3>
                            <p>Get a 14-day Business Plan free trial with 200 keywords and daily updates. No credit card required.</p>
                            <div className='flex flex-row gap-2 items-center justify-center border text-[#d73855] rounded-md px-4 py-3'>
                                Start Free Trial
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </FullContainer>
    )
}