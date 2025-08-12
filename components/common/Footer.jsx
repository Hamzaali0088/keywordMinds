import React from 'react'
import Link from 'next/link'
import Container from './Container'

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/st-images/footer.jpg')"
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Blue gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#08112D]  to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#08112D]  to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#08112D]  to-transparent"></div>
            </div>

            {/* Content */}
            <Container className="relative z-10 container mx-auto px-4 py-16">
                <div className="text-center text-white mb-16">
                    {/* Product Name */}
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                        THE KEYWORD RANK TRACKER
                    </h3>

                    {/* Main Headline */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                        For smart, passionate SEOs that drive the industry forward
                    </h2>

                    {/* CTA Button */}
                    <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 mb-4">
                        Start Tracking
                    </button>

                    {/* Offer Text */}
                    <p className="text-sm opacity-90">
                        14-day free trial
                    </p>
                </div>

                {/* Footer Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Column 1: Branding and Social Media */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-b from-yellow-400 to-red-500 rounded flex items-center justify-center">
                                <span className="text-white font-bold text-sm">K</span>
                            </div>
                            <span className="text-white font-semibold text-lg">keyword.com</span>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Product/Company Links */}
                    <div className="space-y-3">
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">Product Tour</Link>
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">Who We Help</Link>
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">FAQ</Link>
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">Pricing</Link>
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">Contact Us</Link>
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">Release Log</Link>
                    </div>

                    {/* Column 3: About/Support Links */}
                    <div className="space-y-3">
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">About Us</Link>
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">Affiliate program</Link>
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">Help Center</Link>
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">Terms of Service</Link>
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">SEO Wiki & Glossary</Link>
                        <Link href="#" className="block text-white hover:text-gray-300 transition-colors">Blog</Link>
                    </div>

                    {/* Column 4: Newsletter Subscription */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Subscribe to our newsletter</h3>
                        <p className="text-gray-300 text-sm">
                            The latest industry updates, news, resources as well as useful tips and tricks.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Bottom Section with Copyright and Policy Links */}
                <div className="border-t border-gray-600 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-300 text-sm">
                            © Keyword.com 2025
                        </div>
                        <div className="flex space-x-6 text-gray-300 text-sm">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Settings</Link>
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}