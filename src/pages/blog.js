import React, { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import Container from '../../components/common/Container'
import FullContainer from '../../components/common/FullContainer'
import Footer from '../../components/common/Footer'
import { Calendar, Clock, User, ArrowRight, Search, TrendingUp, BookOpen, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'rank-tracking', name: 'Rank Tracking Tips', icon: TrendingUp },
    { id: 'case-studies', name: 'SEO Case Studies', icon: Zap },
    { id: 'updates', name: 'Platform Updates', icon: Search },
    { id: 'guides', name: 'SEO Guides', icon: BookOpen }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "How to Track Local SEO Rankings in 2024: Complete Guide",
      excerpt: "Learn the latest strategies for tracking local SEO rankings, including Google Business Profile optimization and local keyword research techniques.",
      category: 'rank-tracking',
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true
    },
    {
      id: 2,
      title: "Case Study: How Agency X Increased Client Rankings by 300%",
      excerpt: "Discover the exact strategies and tools used by a leading SEO agency to achieve remarkable ranking improvements for their clients.",
      category: 'case-studies',
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true
    },
    {
      id: 3,
      title: "New AI Search Tracking Features: ChatGPT & Gemini Integration",
      excerpt: "We've launched comprehensive AI search tracking capabilities. Learn how to monitor your presence in ChatGPT and Gemini search results.",
      category: 'updates',
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    },
    {
      id: 4,
      title: "The Ultimate Keyword Research Guide for 2024",
      excerpt: "Master keyword research with our comprehensive guide covering search intent, competition analysis, and long-tail keyword strategies.",
      category: 'guides',
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    },
    {
      id: 5,
      title: "5 Common Rank Tracking Mistakes That Hurt Your SEO",
      excerpt: "Avoid these critical mistakes that many agencies make when tracking keyword rankings and learn how to get more accurate data.",
      category: 'rank-tracking',
      author: "Sarah Johnson",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    },
    {
      id: 6,
      title: "How to Create White-Label SEO Reports That Clients Love",
      excerpt: "Learn the art of creating professional, branded reports that impress clients and help you retain business long-term.",
      category: 'guides',
      author: "Emily Rodriguez",
      date: "March 3, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    },
    {
      id: 7,
      title: "Case Study: E-commerce SEO Success with Local Targeting",
      excerpt: "How a local e-commerce store increased organic traffic by 450% using targeted local SEO strategies and rank tracking.",
      category: 'case-studies',
      author: "Michael Chen",
      date: "February 28, 2024",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    },
    {
      id: 8,
      title: "API Integration Guide: Connect KeywordMinds to Your Workflow",
      excerpt: "Step-by-step guide to integrating our API with your existing tools and automating your rank tracking processes.",
      category: 'guides',
      author: "David Kim",
      date: "February 25, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    },
    {
      id: 9,
      title: "Understanding SERP Features: How to Track and Optimize",
      excerpt: "Deep dive into SERP features like featured snippets, local packs, and knowledge panels - and how to track them effectively.",
      category: 'rank-tracking',
      author: "Sarah Johnson",
      date: "February 22, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <FullContainer className="bg-gradient-to-br from-background-light to-text-secondary/10">
        <Container>
          <div className="pt-20 md:pt-32 pb-16 text-center">
            <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Blog & Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              SEO Insights & Resources
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Expert guides, case studies, and tips to help you master SEO and rank tracking. 
              Stay ahead with the latest strategies and platform updates.
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* Featured Posts */}
      <FullContainer className="bg-white py-20">
        <Container>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-text-secondary/20"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out',
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="h-48 bg-gradient-to-br from-background-light to-text-secondary/20 rounded-t-2xl overflow-hidden">
                    <Image src={post.image} alt={post.title} width={800} height={400} className='w-full h-full object-cover' />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-background-light rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-text-secondary" />
                        </div>
                        <span className="text-sm text-text-secondary">{post.author}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* Categories & All Posts */}
      <FullContainer className="bg-background-light py-20">
        <Container>
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-8">Browse by Category</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-text-secondary hover:bg-background-light border border-text-secondary/20'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="group bg-white rounded-xl overflow-hidden  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-text-secondary/20"
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="h-40 bg-gradient-to-br from-background-light to-text-secondary/20 rounded-t-xl flex items-center justify-center">
                  <div className="text-text-secondary text-center">
                    <Image src={post.image} alt={post.title} width={1900} height={1900} className='w-full h-full object-cover' />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-background-light rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-text-secondary" />
                      </div>
                      <span className="text-sm text-text-secondary">{post.author}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with SEO Insights</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get the latest SEO tips, case studies, and platform updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-secondary/90 text-text-primary focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-background-light transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-white/60 mt-3">No spam, unsubscribe anytime</p>
          </div>
        </Container>
      </FullContainer>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
} 