import React, { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import Container from '../../components/common/Container'
import FullContainer from '../../components/common/FullContainer'
import Footer from '../../components/common/Footer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send,
  CheckCircle,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react'

export default function Contact() {
  const [formType, setFormType] = useState('support')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    phone: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "support@keywordminds.com",
        "sales@keywordminds.com"
      ],
      description: "Get in touch for support or sales inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "Mon-Fri, 9AM-6PM EST"
      ],
      description: "Speak directly with our team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 SEO Street",
        "New York, NY 10001"
      ],
      description: "Our headquarters location"
    }
  ]

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/keywordminds', color: 'text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/keywordminds', color: 'text-blue-600' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/keywordminds', color: 'text-blue-500' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/keywordminds', color: 'text-pink-500' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/keywordminds', color: 'text-red-500' }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <FullContainer className="bg-gradient-to-br from-background-light to-text-secondary/10">
        <Container>
          <div className="pt-20 md:pt-32 pb-16 text-center">
            <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Have questions about KeywordMinds? Need support with your account? 
              Want to discuss enterprise solutions? We're here to help.
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* Contact Information */}
      <FullContainer className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-background-light rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out',
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-text-secondary font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary/60">{info.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </FullContainer>

      {/* Contact Form Section */}
      <FullContainer className="bg-background-light py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Send us a Message</h2>
                <p className="text-text-secondary">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Form Type Selector */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => setFormType('support')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    formType === 'support'
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-background-light text-text-secondary hover:bg-text-secondary/10'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Support
                </button>
                <button
                  onClick={() => setFormType('sales')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    formType === 'sales'
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-background-light text-text-secondary hover:bg-text-secondary/10'
                  }`}
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Sales
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-text-secondary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-text-secondary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-text-secondary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-text-secondary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-text-secondary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={formType === 'support' ? 'How can we help?' : 'Tell us about your needs'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-text-secondary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder={formType === 'support' ? 'Describe your issue or question...' : 'Tell us about your SEO needs and goals...'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Email Support</h4>
                      <p className="text-text-secondary">support@keywordminds.com</p>
                      <p className="text-sm text-text-secondary/60">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Phone Support</h4>
                      <p className="text-text-secondary">+1 (555) 123-4567</p>
                      <p className="text-sm text-text-secondary/60">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Office Address</h4>
                      <p className="text-text-secondary">123 SEO Street</p>
                      <p className="text-text-secondary">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-white p-6 rounded-xl border border-text-secondary/20">
                <h4 className="font-semibold text-text-primary mb-4">Response Times</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Email Support</span>
                    <span className="text-secondary font-medium">24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Phone Support</span>
                    <span className="text-secondary font-medium">Immediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Sales Inquiries</span>
                    <span className="text-secondary font-medium">4 hours</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-background-light rounded-full flex items-center justify-center hover:bg-text-secondary/10 transition-colors duration-200 ${social.color}`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* FAQ Section */}
      <FullContainer className="bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Quick answers to common questions about our support and contact process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-background-light p-6 rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">How quickly do you respond to support requests?</h3>
                <p className="text-text-secondary">We typically respond to all support emails within 24 hours, and most issues are resolved within 48 hours.</p>
              </div>
              <div className="bg-background-light p-6 rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">Do you offer phone support?</h3>
                <p className="text-text-secondary">Yes, we offer phone support Monday through Friday, 9AM-6PM EST for all paid plans.</p>
              </div>
              <div className="bg-background-light p-6 rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">Can I schedule a demo call?</h3>
                <p className="text-text-secondary">Absolutely! You can schedule a personalized demo by contacting our sales team or using the contact form above.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-background-light p-6 rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">What information should I include in my support request?</h3>
                <p className="text-text-secondary">Please include your account details, a clear description of the issue, and any relevant screenshots or error messages.</p>
              </div>
              <div className="bg-background-light p-6 rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">Do you offer enterprise support?</h3>
                <p className="text-text-secondary">Yes, enterprise customers receive priority support with dedicated account managers and faster response times.</p>
              </div>
              <div className="bg-background-light p-6 rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">How can I get help with API integration?</h3>
                <p className="text-text-secondary">Our technical team can help with API integration. Contact us with your specific requirements and we'll guide you through the process.</p>
              </div>
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
      `}</style>
    </>
  )
} 