import React, { useState } from 'react'
import Container from './Container'
import FullContainer from './FullContainer'

export default function Navbar() {
    const [whoWeHelpOpen, setWhoWeHelpOpen] = useState(false);

    return (
        <FullContainer>
            <Container className='flex flex-row justify-between items-center py-4'> 
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="relative w-8 h-8">
                        {/* Stylized K with overlapping shapes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 bg-blue-500 rounded-sm transform rotate-12"></div>
                            <div className="w-6 h-6 bg-yellow-400 rounded-sm transform -rotate-12 absolute"></div>
                            <div className="w-6 h-6 bg-red-500 rounded-sm transform rotate-6 absolute"></div>
                        </div>
                        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">K</span>
                    </div>
                    <span className="text-gray-700 font-medium">keyword.com</span>
                </div>

                {/* Navigation Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                        <span className="text-gray-700">Features</span>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* Who We Help Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setWhoWeHelpOpen(true)}
                        onMouseLeave={() => setWhoWeHelpOpen(false)}
                    >
                        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                            <span className="text-gray-700">Who We Help</span>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        
                        {/* Dropdown Menu */}
                        {whoWeHelpOpen && (
                            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                <div className="p-6 space-y-4">
                                    <div className="cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                                        <div className="font-semibold text-gray-800">SEO Agencies</div>
                                        <div className="text-sm text-gray-600 mt-1">Agency rank tracking made easy</div>
                                    </div>
                                    
                                    <div className="cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                                        <div className="font-semibold text-gray-800">SEO Teams</div>
                                        <div className="text-sm text-gray-600 mt-1">You can do SEO twice as fast as you think</div>
                                    </div>
                                    
                                    <div className="cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                                        <div className="font-semibold text-gray-800">Enterprise SEO</div>
                                        <div className="text-sm text-gray-600 mt-1">Enterprise rank tracking tool without any limits</div>
                                    </div>
                                    
                                    <div className="cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                                        <div className="font-semibold text-gray-800">SEO for Law</div>
                                        <div className="text-sm text-gray-600 mt-1">Keyword tracking for law firms</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="cursor-pointer hover:text-blue-600">
                        <span className="text-gray-700">Pricing</span>
                    </div>

                    <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                        <span className="text-gray-700">Resources</span>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                        <span className="text-gray-700">Free Tools</span>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div className="cursor-pointer hover:text-blue-600">
                        <span className="text-gray-700">Book a Demo</span>
                    </div>

                    <div className="cursor-pointer hover:text-blue-600">
                        <span className="text-gray-700">Login</span>
                    </div>

                    <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Sign Up Button */}
                <div className="flex items-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                        Sign Up
                    </button>
                </div>
            </Container>
        </FullContainer>
    )
}
