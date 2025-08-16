import React from 'react'
import Image from 'next/image'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import LogosSlider from './LogosSlider'

export default function Banner() {
    return (
        <FullContainer className=' bg-background-light'>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  pt-20 md:pt-32">
                    {/* Left Section - Text Content */}
                    <div className="space-y-8">
                        {/* Headline */}
                        <div>
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-text-primary leading-tight">
                                Track keywords. Win rankings. Grow traffic.
                            </h1>
                        </div>

                        {/* Body Text */}
                        <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                            <p>
                                Monitor keyword performance easily and accurately with Keyword.com. Track keyword rankings, SERP features and other important SEO metrics for your SEO campaigns from any location and device.
                            </p>
                            <p>
                                Uncover hidden opportunities, outrank competitors, and build unshakeable client trust with white-label reports.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-primary hover:bg-secondary text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg transform hover:scale-105">
                                    Start Free Trial
                                </button>
                                <button className="border-2 border-secondary text-secondary !hover:text-secondary font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-primary transform hover:scale-105">
                                    Book Demo
                                </button>
                            </div>
                            <p className="text-sm text-text-secondary">No credit card needed</p>
                        </div>

                        {/* Awards/Ratings */}
                        <div className="flex flex-col md:flex-row gap-4 items-start md:justify-center space-x-6 pt-4">
                            <div className="flex items-start space-x-2">
                                <div className="bg-primary text-white px-3 py-1 rounded text-xs font-semibold">
                                    G2
                                </div>
                                <span className="text-sm font-medium">Momentum Leader WINTER 2025</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <div className="bg-primary text-white px-3 py-1 rounded text-xs font-semibold">
                                    G2
                                </div>
                                <span className="text-sm font-medium">High Performer WINTER 2025</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <div className="bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
                                    G2
                                </div>
                                <div className="flex flex-col items-center space-x-1">
                                    <span className="text-primary">★★★★★</span>
                                    <span className="text-sm font-medium">4.7 out of 5 stars</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Visual Mockup */}
                    <div className="relative">
                        {/* Main Banner Image */}
                        <div className="relative p-16">
                            <Image
                                src="/st-images/banner.webp"
                                alt="Keyword tracking tool interface"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </Container>
            
            {/* Logos Slider Section */}
            
        </FullContainer>
    )
}