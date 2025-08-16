import React, { useState, useEffect } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import { ChevronLeftIcon, ChevronsLeftRight, ChevronsRightLeft } from 'lucide-react'

export default function Popular() {
    const [selected, setSelected] = useState(true) // Annual vs Monthly
    const [daily, setDaily] = useState(true) // Daily vs Weekly
    const [keywordCount, setKeywordCount] = useState(50) // Selected keyword count
    const [displayPrice, setDisplayPrice] = useState('$13')
    const [isAnimating, setIsAnimating] = useState(false)

    // Pricing structure based on keywords and frequency
    const pricingStructure = {
        daily: {
            50: { monthly: 13, annual: 11 },
            100: { monthly: 19, annual: 16 },
            200: { monthly: 29, annual: 25 },
            500: { monthly: 49, annual: 42 },
            1000: { monthly: 79, annual: 67 },
            2000: { monthly: 129, annual: 110 },
            5000: { monthly: 199, annual: 169 },
            10000: { monthly: 299, annual: 254 }
        },
        weekly: {
            50: { monthly: 9, annual: 8 },
            100: { monthly: 14, annual: 12 },
            200: { monthly: 22, annual: 19 },
            500: { monthly: 35, annual: 30 },
            1000: { monthly: 55, annual: 47 },
            2000: { monthly: 89, annual: 76 },
            5000: { monthly: 139, annual: 118 },
            10000: { monthly: 209, annual: 178 }
        }
    }

    useEffect(() => {
        setIsAnimating(true)
        const timer = setTimeout(() => {
            const frequency = daily ? 'daily' : 'weekly'
            const billing = selected ? 'annual' : 'monthly'
            const basePrice = pricingStructure[frequency][keywordCount][billing]
            
            let newPrice = `$${basePrice}`
            setDisplayPrice(newPrice)
            setIsAnimating(false)
        }, 150)
        
        return () => clearTimeout(timer)
    }, [selected, daily, keywordCount])

    const keywordOptions = [
        { value: 50, label: '50 keywords' },
        { value: 100, label: '100 keywords' },
        { value: 200, label: '200 keywords' },
        { value: 500, label: '500 keywords' },
        { value: 1000, label: '1,000 keywords' },
        { value: 2000, label: '2,000 keywords' },
        { value: 5000, label: '5,000 keywords' },
        { value: 10000, label: '10,000 keywords' }
    ]

    return (
        <FullContainer className="bg-background-light py-24">
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
                    <div className='lg:col-span-1 h-full space-y-4'>
                        <h3 className='text-2xl text-text-primary'>Plus</h3>
                        <div className='flex flex-row gap-2 items-center justify-start'>
                            <button
                                onClick={() => { setSelected(!selected) }}
                                className={`relative flex items-center h-8 w-16 rounded-full transition-all duration-300 ease-in-out ${selected ? "bg-text-secondary/20" : "bg-primary"}`}
                            >
                                <div className={`absolute left-1 top-1 bg-white rounded-full h-6 w-6 transition-all duration-300 ease-in-out ${selected ? "translate-x-0" : "translate-x-8"}`}></div>
                            </button>
                            <h3 className='text-text-primary'> 
                                {selected ? 'Annually' : 'Monthly'}
                                {selected && <span className="text-primary"> (2 months free)</span>}
                            </h3>
                        </div>
                        <p className='text-lg text-text-secondary'>Accurate rank tracking with flexible plans. Monitor unlimited domains with daily or weekly updates and scale your tracking from 50 to 100,000+ keywords.</p>
                        <h3 className='text-primary text-lg 👇'>see plans</h3>
                    </div>
                    <div className='lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 shadow-md bg-white lg:py-8 gap-16 sm:gap-0 rounded-md px-4 md:px-0 '>
                        <div className=' w-full h-full p-4 space-y-4 '>
                            <h3 className='text-2xl text-center w-full text-text-primary'>Free Trial</h3>
                            <p className='text-text-secondary'>Get a 14-day Business Plan free trial with 200 keywords and daily updates. No credit card required.</p>
                            <div className='flex flex-row gap-2 items-center justify-center border border-primary text-primary rounded-md px-4 py-3'>
                                Start Free Trial
                            </div>
                        </div>
                        <div className='w-full h-full flex flex-col items-center justify-centers space-y-4'>
                            <div className='bg-primary w-full h-full p-4 text-white space-y-4 rounded-md'>
                                <h3 className='text-2xl text-center w-full'>Business</h3>
                                <p>Get a 14-day Business Plan free trial with 200 keywords and daily updates. No credit card required.</p>
                                <div className='flex flex-row gap-2 items-center justify-center border border-white text-primary bg-white rounded-md px-4 py-3'>
                                    Start Free Trial
                                </div>
                            </div>
                            <div>
                                <h3 className='text-text-primary'>Ranking update frequency</h3>
                            </div>
                            <div className='flex flex-row w-full max-w-[150px] items-center justify-center h-12'>
                                <div className={` w-2 h-2 rounded-full cursor-pointer aspect-square flex justify-center items-center transition-all duration-300 ease-in-out ${daily ? "h-2 w-2 bg-text-secondary/20" : "h-6 w-6 bg-primary"}`} onClick={() => { setDaily(false) }}><ChevronsLeftRight className='w-4 h-4 text-white' /></div>
                                <div className='w-full border border-text-secondary/20'></div>
                                <div className={` w-2 h-2 rounded-full cursor-pointer aspect-square flex justify-center items-center transition-all duration-300 ease-in-out ${daily ? "h-6 w-6 bg-primary" : "h-2 w-2 bg-text-secondary/20"}`} onClick={() => { setDaily(true) }}><ChevronsLeftRight className='w-4 h-4 text-white' /></div>
                            </div>
                            <div className='flex flex-row w-full max-w-[180px] items-center justify-between'>
                                <div className={` rounded-full cursor-pointer text-text-secondary ${daily ? "text-primary" : "text-text-secondary"}`} onClick={() => { setDaily(false) }}>weekly</div>
                                <div className={` rounded-full cursor-pointer text-text-secondary ${daily ? "text-text-secondary" : "text-primary"}`} onClick={() => { setDaily(true) }}>daily</div>
                            </div>
                            <div className='w-full px-4 rounded-md flex flex-col items-center justify-center mb-4'>
                                <select 
                                    className='w-full border border-text-secondary/20 rounded-md px-4 py-3 focus:outline-none focus:border-primary'
                                    value={keywordCount}
                                    onChange={(e) => setKeywordCount(Number(e.target.value))}
                                >
                                    {keywordOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-2'>
                                <div className='text-3xl font-bold text-text-primary'>
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
                                <p className='text-text-secondary'>/{selected ? 'month' : 'month'}</p>
                            </div>
                            {selected && (
                                <div className='text-sm text-green-600 font-medium'>
                                    Save up to 15% with annual billing
                                </div>
                            )}
                        </div>
                        <div className='w-full h-full p-4 space-y-4 '>
                            <h3 className='text-2xl text-center w-full text-text-primary'>Enterprise</h3>
                            <p className='text-text-secondary'>Get a 14-day Business Plan free trial with 200 keywords and daily updates. No credit card required.</p>
                            <div className='flex flex-row gap-2 items-center justify-center border border-primary text-primary rounded-md px-4 py-3'>
                                Start Free Trial
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </FullContainer>
    )
}