import React from 'react'
import Container from '../../common/Container'

// Logos data
const logos = [
    {
        name: 'seonotebook.com',
        type: 'search',
        alt: 'SEO Notebook'
    },
    {
        name: 'HUZIO',
        type: 'text',
        alt: 'HUZIO'
    },
    {
        name: 'PRIMAL',
        type: 'geometric',
        alt: 'PRIMAL'
    },
    {
        name: 'DiamondLinks',
        type: 'diamond',
        alt: 'DiamondLinks'
    },
    {
        name: 'webgenius',
        type: 'arrow',
        subtitle: 'Websites & Web Marketing',
        alt: 'WebGenius - Websites & Web Marketing'
    }
];

export default function LogosSlider() {
    return (
        <Container>
            <div className="py-16 border-t border-gray-200">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <p className="text-lg text-text-secondary font-medium">
                        Empowering agencies to double their clients' LTV since 2011
                    </p>
                </div>
                
                {/* Logos Slider */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll space-x-16">
                        {/* First set of logos */}
                        {logos.map((logo, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center justify-center ">
                                {logo.type === 'search' && (
                                    <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                                        <span className="text-text-primary font-medium text-sm">{logo.name}</span>
                                        <svg className="w-4 h-4 text-text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                                {logo.type === 'text' && (
                                    <div className="text-text-primary font-bold text-lg">
                                        <span className="relative">
                                            HU
                                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-text-secondary rounded-full opacity-60"></span>
                                        </span>
                                        <span className="ml-1">ZIO</span>
                                    </div>
                                )}
                                {logo.type === 'geometric' && (
                                    <div className="flex items-center space-x-2">
                                        <div className="relative w-6 h-6">
                                            <div className="absolute inset-0 bg-text-secondary transform rotate-45"></div>
                                            <div className="absolute inset-1 bg-gray-300 transform rotate-45"></div>
                                        </div>
                                        <span className="text-text-primary font-bold text-lg">{logo.name}</span>
                                    </div>
                                )}
                                {logo.type === 'diamond' && (
                                    <div className="flex items-center space-x-2">
                                        <div className="relative w-6 h-6">
                                            <div className="absolute inset-0 bg-text-secondary transform rotate-45"></div>
                                            <div className="absolute inset-0 bg-white transform rotate-45 scale-75"></div>
                                            <div className="absolute inset-0 bg-text-secondary transform rotate-45 scale-50"></div>
                                        </div>
                                        <span className="text-text-primary font-bold text-lg">{logo.name}</span>
                                    </div>
                                )}
                                {logo.type === 'arrow' && (
                                    <div className="text-center">
                                        <div className="text-text-primary font-bold text-lg flex items-center justify-center">
                                            webgenius
                                            <span className="ml-1 text-primary">↑</span>
                                        </div>
                                        <div className="text-text-secondary text-xs mt-1">{logo.subtitle}</div>
                                    </div>
                                )}
                            </div>
                        ))}
                        
                        {/* Second set of logos (for seamless loop) */}
                        {logos.map((logo, index) => (
                            <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center justify-center">
                                {logo.type === 'search' && (
                                    <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                                        <span className="text-text-primary font-medium text-sm">{logo.name}</span>
                                        <svg className="w-4 h-4 text-text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                                {logo.type === 'text' && (
                                    <div className="text-text-primary font-bold text-lg">
                                        <span className="relative">
                                            HU
                                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-text-secondary rounded-full opacity-60"></span>
                                        </span>
                                        <span className="ml-1">ZIO</span>
                                    </div>
                                )}
                                {logo.type === 'geometric' && (
                                    <div className="flex items-center space-x-2">
                                        <div className="relative w-6 h-6">
                                            <div className="absolute inset-0 bg-text-secondary transform rotate-45"></div>
                                            <div className="absolute inset-1 bg-gray-300 transform rotate-45"></div>
                                        </div>
                                        <span className="text-text-primary font-bold text-lg">{logo.name}</span>
                                    </div>
                                )}
                                {logo.type === 'diamond' && (
                                    <div className="flex items-center space-x-2">
                                        <div className="relative w-6 h-6">
                                            <div className="absolute inset-0 bg-text-secondary transform rotate-45"></div>
                                            <div className="absolute inset-0 bg-white transform rotate-45 scale-75"></div>
                                            <div className="absolute inset-0 bg-text-secondary transform rotate-45 scale-50"></div>
                                        </div>
                                        <span className="text-text-primary font-bold text-lg">{logo.name}</span>
                                    </div>
                                )}
                                {logo.type === 'arrow' && (
                                    <div className="text-center">
                                        <div className="text-text-primary font-bold text-lg flex items-center justify-center">
                                            webgenius
                                            <span className="ml-1 text-primary">↑</span>
                                        </div>
                                        <div className="text-text-secondary text-xs mt-1">{logo.subtitle}</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
} 