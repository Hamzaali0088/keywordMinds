import React, { useState, useEffect } from 'react'
import Navbar from '../../components/common/Navbar'
import Container from '../../components/common/Container'
import FullContainer from '../../components/common/FullContainer'
import Footer from '../../components/common/Footer'
import { Calendar, Clock, User, ArrowRight, Search, TrendingUp, BookOpen, Zap, Star, Eye, Heart, Share2, Filter, Grid, List, ChevronRight, Play, ExternalLink, Tag, Award, Target, BarChart3 } from 'lucide-react'
import Image from 'next/image'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 9, color: 'from-blue-500 to-purple-600' },
    { id: 'rank-tracking', name: 'Rank Tracking', icon: TrendingUp, count: 3, color: 'from-green-500 to-emerald-600' },
    { id: 'case-studies', name: 'Case Studies', icon: Award, count: 2, color: 'from-orange-500 to-red-600' },
    { id: 'updates', name: 'Platform Updates', icon: Zap, count: 1, color: 'from-yellow-500 to-orange-600' },
    { id: 'guides', name: 'SEO Guides', icon: Target, count: 3, color: 'from-purple-500 to-pink-600' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "How to Track Local SEO Rankings in 2024: Complete Guide",
      excerpt: "Learn the latest strategies for tracking local SEO rankings, including Google Business Profile optimization and local keyword research techniques that drive real results.",
      category: 'rank-tracking',
      author: "Sarah Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      featured: true,
      views: 2847,
      likes: 156,
      tags: ['Local SEO', 'Google Business Profile', 'Rank Tracking']
    },
    {
      id: 2,
      title: "Case Study: How Agency X Increased Client Rankings by 300%",
      excerpt: "Discover the exact strategies and tools used by a leading SEO agency to achieve remarkable ranking improvements for their clients in just 6 months.",
      category: 'case-studies',
      author: "Michael Chen",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      date: "March 12, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      featured: true,
      views: 3421,
      likes: 203,
      tags: ['Case Study', 'Agency', 'Rankings']
    },
    {
      id: 3,
      title: "New AI Search Tracking Features: ChatGPT & Gemini Integration",
      excerpt: "We've launched comprehensive AI search tracking capabilities. Learn how to monitor your presence in ChatGPT and Gemini search results effectively.",
      category: 'updates',
      author: "Emily Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "March 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      featured: false,
      views: 1892,
      likes: 98,
      tags: ['AI', 'ChatGPT', 'Gemini', 'New Features']
    },
    {
      id: 4,
      title: "The Ultimate Keyword Research Guide for 2024",
      excerpt: "Master keyword research with our comprehensive guide covering search intent, competition analysis, and long-tail keyword strategies that convert.",
      category: 'guides',
      author: "David Kim",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      date: "March 8, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      featured: false,
      views: 2156,
      likes: 134,
      tags: ['Keyword Research', 'SEO Strategy', 'Long-tail Keywords']
    },
    {
      id: 5,
      title: "5 Common Rank Tracking Mistakes That Hurt Your SEO",
      excerpt: "Avoid these critical mistakes that many agencies make when tracking keyword rankings and learn how to get more accurate, actionable data.",
      category: 'rank-tracking',
      author: "Sarah Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      featured: false,
      views: 1678,
      likes: 89,
      tags: ['Rank Tracking', 'SEO Mistakes', 'Best Practices']
    },
    {
      id: 6,
      title: "How to Create White-Label SEO Reports That Clients Love",
      excerpt: "Learn the art of creating professional, branded reports that impress clients and help you retain business long-term with actionable insights.",
      category: 'guides',
      author: "Emily Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "March 3, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      featured: false,
      views: 1987,
      likes: 112,
      tags: ['White Label', 'Client Reports', 'Agency Tools']
    },
    {
      id: 7,
      title: "Case Study: E-commerce SEO Success with Local Targeting",
      excerpt: "How a local e-commerce store increased organic traffic by 450% using targeted local SEO strategies and comprehensive rank tracking.",
      category: 'case-studies',
      author: "Michael Chen",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      date: "February 28, 2024",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      featured: false,
      views: 2341,
      likes: 145,
      tags: ['E-commerce', 'Local SEO', 'Traffic Growth']
    },
    {
      id: 8,
      title: "API Integration Guide: Connect KeywordMinds to Your Workflow",
      excerpt: "Step-by-step guide to integrating our API with your existing tools and automating your rank tracking processes for maximum efficiency.",
      category: 'guides',
      author: "David Kim",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      date: "February 25, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      featured: false,
      views: 1456,
      likes: 78,
      tags: ['API', 'Integration', 'Automation']
    },
    {
      id: 9,
      title: "Understanding SERP Features: How to Track and Optimize",
      excerpt: "Deep dive into SERP features like featured snippets, local packs, and knowledge panels - and how to track them effectively for better visibility.",
      category: 'rank-tracking',
      author: "Sarah Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      date: "February 22, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      featured: false,
      views: 1789,
      likes: 95,
      tags: ['SERP Features', 'Featured Snippets', 'Local Packs']
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)

  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (query.trim() === '') {
      setSearchResults([])
      setShowSearchResults(false)
      setIsLoading(false)
      return
    }
    
    setIsLoading(true)
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const results = performSearch(query)
      setSearchResults(results)
      setShowSearchResults(true)
      setIsLoading(false)
    }, 300)
  }

  const performSearch = (query) => {
    const searchTerm = query.toLowerCase().trim()
    
    return blogPosts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(searchTerm)
      const excerptMatch = post.excerpt.toLowerCase().includes(searchTerm)
      const authorMatch = post.author.toLowerCase().includes(searchTerm)
      const categoryMatch = categories.find(cat => cat.id === post.category)?.name.toLowerCase().includes(searchTerm)
      const tagMatch = post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      
      return titleMatch || excerptMatch || authorMatch || categoryMatch || tagMatch
    })
  }

  const handleSearchFocus = () => {
    if (searchQuery.trim() !== '') {
      setShowSearchResults(true)
    }
  }

  const handleSearchBlur = () => {
    // Delay hiding results to allow for clicks
    setTimeout(() => setShowSearchResults(false), 200)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
    setShowSearchResults(false)
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <FullContainer className="relative bg-gradient-to-br from-background-light via-white to-text-secondary/5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="pt-20 md:pt-32 pb-20 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary text-sm font-semibold px-6 py-3 rounded-full mb-8 border border-primary/20">
              <BookOpen className="w-4 h-4" />
              <span>Blog & Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight">
              SEO Insights & 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Resources</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
              Expert guides, case studies, and actionable tips to help you master SEO and rank tracking. 
              Stay ahead with the latest strategies and platform updates.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, guides, and case studies..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className="w-full pl-12 pr-12 py-4 bg-white rounded-xl border border-text-secondary/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-lg"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                {isLoading && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent"></div>
                  </div>
                )}
              </div>
              
              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-text-secondary/20 max-h-96 overflow-y-auto z-50">
                  <div className="p-4 border-b border-text-secondary/10">
                    <p className="text-sm text-text-secondary">
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  {searchResults.map((post, index) => (
                    <div
                      key={post.id}
                      className="p-4 hover:bg-background-light transition-colors cursor-pointer border-b border-text-secondary/5 last:border-b-0"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image 
                            src={post.image} 
                            alt={post.title} 
                            width={48} 
                            height={48} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-text-primary mb-1 line-clamp-1">
                            {post.title}
                          </h4>
                          <p className="text-sm text-text-secondary mb-2 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-text-secondary">
                            <span className={`bg-gradient-to-r ${categories.find(cat => cat.id === post.category)?.color} text-white px-2 py-1 rounded-full`}>
                              {categories.find(cat => cat.id === post.category)?.name}
                            </span>
                            <span>{post.readTime}</span>
                            <span>{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* No Results */}
              {showSearchResults && searchQuery.trim() !== '' && searchResults.length === 0 && !isLoading && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-text-secondary/20 p-6 text-center z-50">
                  <div className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <Search className="w-6 h-6 text-text-secondary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">No results found</h4>
                  <p className="text-sm text-text-secondary mb-4">
                    Try searching with different keywords or browse our categories
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {categories.slice(1, 4).map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id)
                          clearSearch()
                        }}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary text-white'
                            : 'bg-background-light text-text-secondary hover:bg-primary hover:text-white'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* Featured Posts */}
      <FullContainer className="bg-white py-20">
        <Container>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Featured Articles
                </h2>
                <p className="text-text-secondary text-lg">Hand-picked content to help you succeed</p>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-primary text-white' : 'bg-background-light text-text-secondary hover:bg-text-secondary/10'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-primary text-white' : 'bg-background-light text-text-secondary hover:bg-text-secondary/10'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-text-secondary/10 overflow-hidden"
                  style={{
                    animation: 'fadeInUp 0.8s ease-out',
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={800} 
                      height={400} 
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-4 text-white text-sm">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                      <span className={`bg-gradient-to-r ${categories.find(cat => cat.id === post.category)?.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
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
                    <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-200 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-background-light text-text-secondary px-2 py-1 rounded-md text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Image 
                          src={post.authorAvatar} 
                          alt={post.author} 
                          width={40} 
                          height={40} 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-text-primary">{post.author}</p>
                          <p className="text-xs text-text-secondary">SEO Expert</p>
                        </div>
                      </div>
                      <button className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors duration-200 group-hover:scale-110">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* Categories & All Posts */}
      <FullContainer className="bg-gradient-to-br from-background-light to-white py-20">
        <Container>
          {/* Category Filter */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-4">Browse by Category</h2>
                <p className="text-text-secondary">Filter content by topic and expertise level</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon
                const isSelected = selectedCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group relative p-6 rounded-2xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-white shadow-xl border-2 border-primary'
                        : 'bg-white/80 hover:bg-white shadow-lg hover:shadow-xl border-2 border-transparent hover:border-primary/20'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className={`font-semibold mb-2 ${isSelected ? 'text-primary' : 'text-text-primary'}`}>
                      {category.name}
                    </h3>
                    <p className="text-sm text-text-secondary">{category.count} articles</p>
                    {isSelected && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-text-secondary">
              {searchQuery.trim() !== '' 
                ? `Showing ${searchResults.length} search result${searchResults.length !== 1 ? 's' : ''} for "${searchQuery}"`
                : `Showing ${filteredPosts.length} of ${blogPosts.length} articles`
              }
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-text-secondary hover:bg-background-light'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-text-secondary hover:bg-background-light'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Posts Grid/List */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {(searchQuery.trim() !== '' ? searchResults : filteredPosts).map((post, index) => (
              <div
                key={post.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-text-secondary/10 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-1/3 h-48' : 'h-48'
                }`}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={800} 
                    height={400} 
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`bg-gradient-to-r ${categories.find(cat => cat.id === post.category)?.color} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <h3 className={`font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200 ${
                    viewMode === 'list' ? 'text-xl' : 'text-lg'
                  }`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-background-light text-text-secondary px-2 py-1 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Image 
                        src={post.authorAvatar} 
                        alt={post.author} 
                        width={32} 
                        height={32} 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-text-primary">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-text-secondary hover:text-primary transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors duration-200 group-hover:scale-110">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Stay Updated with SEO Insights</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Get the latest SEO tips, case studies, and platform updates delivered to your inbox. 
                Join 10,000+ SEO professionals who trust our insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border border-white/20 text-text-primary focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/90 backdrop-blur-sm"
                />
                <button className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-background-light transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Subscribe Free
                </button>
              </div>
              <p className="text-sm text-white/70 mt-4">No spam, unsubscribe anytime • 2,000+ subscribers</p>
            </div>
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
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </>
  )
} 