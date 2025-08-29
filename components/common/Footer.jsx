import React from 'react'
import Link from 'next/link'
import Container from './Container'
import { Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'

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
                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#08112D]  via-[#08112D] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#08112D]  via-[#08112D] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#08112D]  via-[#08112D] to-transparent"></div>
            </div>

            {/* CTA Banner */}
            {/* <div className="bg-gradient-to-r from-red-600 to-red-700 py-12 relative z-10">
                <Container>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Start tracking your keywords now — Free Trial
                        </h2>
                        <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
                            Join thousands of agencies who trust KeywordMinds for accurate, reliable rank tracking.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-red-600 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                                Start Free Trial
                            </button>
                            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-red-600 transition-colors duration-200 transform hover:scale-105">
                                Book Demo
                            </button>
                        </div>
                        <p className="text-sm text-red-200 mt-4">No credit card required • 14-day free trial</p>
                    </div>
                </Container>
            </div> */}

            {/* Main Footer Content */}
            <Container className="relative z-10">
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Column 1: Brand */}
                        <div className="space-y-4">
                            <Link href="/" className="flex items-center space-x-2">
                                <Image src="/st-images/logo.png" alt="Logo" width={32} height={32} />
                                <span className="text-white font-bold">keyword minds</span>
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                The most accurate keyword rank tracking tool for SEO agencies and professionals.
                            </p>
                            <div className="flex space-x-4">
                                <Link href="https://twitter.com/keywordminds" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                                <Link href="https://linkedin.com/company/keywordminds" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                                <Link href="https://facebook.com/keywordminds" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    <Facebook className="w-5 h-5" />
                                </Link>
                                <Link href="https://instagram.com/keywordminds" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    <Instagram className="w-5 h-5" />
                                </Link>
                                <Link href="https://youtube.com/keywordminds" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    <Youtube className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Column 2: Product Links */}
                        <div className="space-y-4">
                            <h3 className="text-white font-semibold text-lg">Product</h3>
                            <div className="space-y-2">
                                <Link href="/features" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    Features
                                </Link>
                                <Link href="/pricing" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    Pricing
                                </Link>
                                <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    Blog
                                </Link>
                                <Link href="/integrations" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    Integrations
                                </Link>
                                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    Support
                                </Link>
                            </div>
                        </div>

                        {/* Column 3: Company Links */}
                        <div className="space-y-4">
                            <h3 className="text-white font-semibold text-lg">Company</h3>
                            <div className="space-y-2">
                                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    About Us
                                </Link>
                                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    Contact
                                </Link>
                                <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    Careers
                                </Link>
                                <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    Partners
                                </Link>
                            </div>
                        </div>

                        {/* Column 4: Resources */}
                        <div className="space-y-4">
                            <h3 className="text-white font-semibold text-lg">Resources</h3>
                            <div className="space-y-2">
                                <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    SEO Blog
                                </Link>
                                <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    Help Center
                                </Link>
                                <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    API Documentation
                                </Link>
                                <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                                    Status Page
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Copyright and Legal Links */}
                <div className="border-t border-gray-800 pt-8 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © 2025 Keyword.com. All rights reserved.
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-gray-400 text-sm">
                            <Link href="#" className="hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors duration-200">
                                Terms of Service
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors duration-200">
                                Cookie Policy
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors duration-200">
                                GDPR
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}