import React, { useState, useRef, useEffect } from 'react'
import Container from './Container'
import FullContainer from './FullContainer'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const [whoWeHelpOpen, setWhoWeHelpOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setWhoWeHelpOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setWhoWeHelpOpen(false);
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const dropdownItems = [
        {
            title: "SEO Agencies",
            description: "Agency rank tracking made easy",
            href: "/seoAgency",
            icon: "🏢"
        },
        {
            title: "SEO Teams", 
            description: "You can do SEO twice as fast as you think",
            href: "/seoTeams",
            icon: "👥"
        },
        {
            title: "Enterprise SEO",
            description: "Enterprise rank tracking tool without any limits", 
            href: "/seoEnterprise",
            icon: "🏢"
        },
        {
            title: "SEO for Law",
            description: "Keyword tracking for law firms",
            href: "/seoLaw", 
            icon: "⚖️"
        }
    ];

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
                : 'bg-white'
        }`}>
            <FullContainer>
                <Container className='flex flex-row justify-between items-center py-4 relative'> 
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                      <Image src="/st-images/logo.png" alt="Logo" width={32} height={32} />
                        <span className="text-text-primary font-medium">keyword minds</span>
                    </Link> 

                    {/* Desktop Navigation Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/features" className="text-text-primary hover:text-primary transition-colors duration-200">
                            Features
                        </Link>

                        {/* Who We Help Dropdown */}
                        <div 
                            ref={dropdownRef}
                            className="relative"
                            onMouseEnter={() => setWhoWeHelpOpen(true)}
                            onMouseLeave={() => setWhoWeHelpOpen(false)}
                        >
                            <button
                                className="flex items-center space-x-1 cursor-pointer group focus:outline-none"
                                onClick={() => setWhoWeHelpOpen(!whoWeHelpOpen)}
                                aria-expanded={whoWeHelpOpen}
                                aria-haspopup="true"
                            >
                                <span className="text-text-primary group-hover:text-primary transition-colors duration-200">Who We Help</span>
                                <svg 
                                    className={`w-4 h-4 text-text-secondary group-hover:text-primary transition-all duration-200 ${whoWeHelpOpen ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {/* Dropdown Menu */}
                            {whoWeHelpOpen && (
                                <>
                                    {/* Invisible bridge to prevent mouse leave */}
                                    <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                                    <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                                        {/* Arrow */}
                                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                                        
                                        <div className="p-6 space-y-3">
                                            {dropdownItems.map((item, index) => (
                                                <Link 
                                                    key={index}
                                                    href={item.href} 
                                                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-200 group cursor-pointer border border-transparent hover:border-primary/20"
                                                >
                                                    <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                                                        {item.icon}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
                                                            {item.title}
                                                        </div>
                                                        <div className="text-sm text-text-secondary mt-1 group-hover:text-text-primary transition-colors duration-200">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                    <svg className="w-4 h-4 text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <Link href="/pricing" className="text-text-primary hover:text-primary transition-colors duration-200">
                            Pricing
                        </Link>

                        <Link href="/blog" className="text-text-primary hover:text-primary transition-colors duration-200">
                            Blog
                        </Link>

                        <Link href="/integrations" className="text-text-primary hover:text-primary transition-colors duration-200">
                            Integrations
                        </Link>

                        <Link href="/about" className="text-text-primary hover:text-primary transition-colors duration-200">
                            About
                        </Link>

                        <Link href="/contact" className="text-text-primary hover:text-primary transition-colors duration-200">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop Sign Up Button */}
                    <div className="hidden lg:flex items-center">
                        <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </Container>

                {/* Mobile Menu */}
                <div 
                    ref={mobileMenuRef}
                    className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-300 ease-in-out ${
                        mobileMenuOpen 
                            ? 'opacity-100 translate-y-0 pointer-events-auto' 
                            : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                >
                    <div className="px-4 py-6 space-y-4">
                        {/* Mobile Navigation Items */}
                        <div className="space-y-3">
                            <Link href="/features" className="block text-text-primary font-medium py-2 hover:text-primary transition-colors duration-200">
                                Features
                            </Link>
                            
                            {/* Mobile Who We Help Dropdown */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => setWhoWeHelpOpen(!whoWeHelpOpen)}
                                    className="flex items-center justify-between w-full text-left text-text-primary font-medium py-2 focus:outline-none"
                                >
                                    Who We Help
                                    <svg 
                                        className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${whoWeHelpOpen ? 'rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                                {whoWeHelpOpen && (
                                    <div className="ml-4 space-y-2 border-l-2 border-gray-100 pl-4">
                                        {dropdownItems.map((item, index) => (
                                            <Link 
                                                key={index}
                                                href={item.href} 
                                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <span className="text-xl">{item.icon}</span>
                                                <div>
                                                    <div className="font-medium text-text-primary">{item.title}</div>
                                                    <div className="text-sm text-text-secondary">{item.description}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            <Link href="/pricing" className="block text-text-primary font-medium py-2 hover:text-primary transition-colors duration-200">
                                Pricing
                            </Link>
                            <Link href="/blog" className="block text-text-primary font-medium py-2 hover:text-primary transition-colors duration-200">
                                Blog
                            </Link>
                            <Link href="/integrations" className="block text-text-primary font-medium py-2 hover:text-primary transition-colors duration-200">
                                Integrations
                            </Link>
                            <Link href="/about" className="block text-text-primary font-medium py-2 hover:text-primary transition-colors duration-200">
                                About
                            </Link>
                            <Link href="/contact" className="block text-text-primary font-medium py-2 hover:text-primary transition-colors duration-200">
                                Contact
                            </Link>
                        </div>
                        
                        {/* Mobile Sign Up Button */}
                        <div className="pt-4 border-t border-gray-200">
                            <button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </FullContainer>
        </div>
    )
}
