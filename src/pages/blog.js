import React, { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import Container from '../../components/common/Container'
import FullContainer from '../../components/common/FullContainer'
import Footer from '../../components/common/Footer'
import { Calendar, Clock, User, ArrowRight, Search, TrendingUp, BookOpen, Zap } from 'lucide-react'

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
      image: "/st-images/blog/local-seo-tracking.jpg",
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
      image: "/st-images/blog/agency-case-study.jpg",
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
      image: "/st-images/blog/ai-tracking-update.jpg",
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
      image: "/st-images/blog/keyword-research-guide.jpg",
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
      image: "/st-images/blog/rank-tracking-mistakes.jpg",
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
      image: "/st-images/blog/white-label-reports.jpg",
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
      image: "/st-images/blog/ecommerce-case-study.jpg",
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
      image: "/st-images/blog/api-integration.jpg",
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
      image: "/st-images/blog/serp-features.jpg",
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
      <FullContainer className="bg-gradient-to-br from-gray-50 to-gray-100">
        <Container>
          <div className="pt-20 md:pt-32 pb-16 text-center">
            <div className="inline-block bg-red-200 text-red-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Blog & Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              SEO Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out',
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-2xl flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <BookOpen className="w-12 h-12 mx-auto mb-2" />
                      <span className="text-sm">Blog Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* Categories & All Posts */}
      <FullContainer className="bg-gray-50 py-20">
        <Container>
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-xl flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <BookOpen className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-xs">Blog Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with SEO Insights</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Get the latest SEO tips, case studies, and platform updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-red-200 mt-3">No spam, unsubscribe anytime</p>
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