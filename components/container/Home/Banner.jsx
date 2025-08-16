import React from 'react'
import Image from 'next/image'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import LogosSlider from './LogosSlider'

export default function Banner() {
    return (
        <FullContainer className='relative overflow-hidden'>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
            
            {/* Floating Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <Container>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20 md:pt-32 pb-20">
                    {/* Left Section - Text Content */}
                    <div className="space-y-8 animate-fadeInUp">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                            Trusted by 10,000+ SEO professionals
                        </div>

                        {/* Headline */}
                        <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                                    Track keywords.
                                </span>
                                <br />
                                <span className="text-text-primary">
                                    Win rankings.
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                    Grow traffic.
                                </span>
                            </h1>
                        </div>

                        {/* Body Text */}
                        <div className="space-y-4 text-lg text-text-secondary leading-relaxed animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                            <p className="text-xl">
                                Monitor keyword performance easily and accurately with <span className="font-semibold text-primary">Keyword.com</span>. Track keyword rankings, SERP features and other important SEO metrics for your SEO campaigns from any location and device.
                            </p>
                            <p>
                                Uncover hidden opportunities, outrank competitors, and build unshakeable client trust with white-label reports.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
                                    <span className="relative z-10">Start Free Trial</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </button>
                                <button className="group relative border-2 border-secondary text-secondary hover:text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-secondary hover:to-primary transform hover:scale-105 hover:-translate-y-1">
                                    <span className="relative z-10">Book Demo</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                            <p className="text-sm text-text-secondary flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                No credit card needed • 14-day free trial
                            </p>
                        </div>

                        {/* Awards/Ratings */}
                        <div className="flex flex-col md:flex-row gap-6 items-start pt-6 animate-fadeInUp" style={{animationDelay: '1s'}}>
                            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-gray-100">
                                <div className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-md text-xs font-bold">
                                    G2
                                </div>
                                <span className="text-sm font-medium text-text-primary">Momentum Leader WINTER 2025</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-gray-100">
                                <div className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-md text-xs font-bold">
                                    G2
                                </div>
                                <span className="text-sm font-medium text-text-primary">High Performer WINTER 2025</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-gray-100">
                                <div className="bg-gradient-to-r from-primary to-secondary text-white px-2 py-1 rounded-md text-xs font-bold">
                                    G2
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary text-sm font-bold">★★★★★</span>
                                    <span className="text-xs text-text-secondary">4.7 out of 5 stars</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Visual Mockup */}
                    <div className="relative animate-scaleIn" style={{animationDelay: '0.5s'}}>
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                        
                        {/* Main Banner Image with Enhanced Styling */}
                        <div className="relative">
                            {/* Image Container with Gradient Border */}
                            <div className="relative p-8">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
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
                            
                            {/* Floating Stats Cards */}
                            <div className="absolute -top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 animate-fadeInUp" style={{animationDelay: '1.2s'}}>
                                <div className="text-2xl font-bold text-primary">+45%</div>
                                <div className="text-xs text-text-secondary">Traffic Growth</div>
                            </div>
                            
                            <div className="absolute -bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 animate-fadeInUp" style={{animationDelay: '1.4s'}}>
                                <div className="text-2xl font-bold text-secondary">Top 3</div>
                                <div className="text-xs text-text-secondary">Average Ranking</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            
            {/* Logos Slider Section */}
            <div className="relative z-10">
                <LogosSlider />
            </div>
        </FullContainer>
    )
}