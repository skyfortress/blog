import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { getFeaturedPosts, formatDate } from '@/lib/blog';

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <header className="relative pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 bg-gray-900 overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900"></div>
          
          {/* Animated radial gradients */}
          <div className="absolute inset-0 hero-bg-animate opacity-80" style={{background: 'radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)'}}></div>
          
          {/* Additional animated overlay */}
          <div 
            className="absolute inset-0 opacity-60" 
            style={{
              background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(99, 102, 241, 0.1) 60deg, transparent 120deg, rgba(147, 51, 234, 0.1) 180deg, transparent 240deg, rgba(59, 130, 246, 0.1) 300deg, transparent 360deg)',
              animation: 'spin 20s linear infinite'
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium mb-6 sm:mb-8 hero-title">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="hidden sm:inline">Available for New Projects</span>
            <span className="sm:hidden">Available Now</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight hero-title px-2">
            <span className="block sm:inline">Transform Your Business</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
              With AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto hero-description font-light px-2">
            From custom AI solutions to intelligent automation, we build cutting-edge AI systems that 
            <span className="text-indigo-400 font-medium"> scale your business</span> and unlock unprecedented growth opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-6 justify-center items-center mb-10 sm:mb-12 hero-cta px-2">
            <Link 
              href="#contact" 
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 transform hover:translate-y-[-2px] text-sm sm:text-base lg:text-lg min-w-[200px]"
            >
              Start Your AI Journey
              <i className="fas fa-arrow-right ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link>
            
            <Link 
              href="#services" 
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg text-white font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:translate-y-[-2px] text-sm sm:text-base lg:text-lg min-w-[200px]"
            >
              View Our Services
              <i className="fas fa-external-link-alt ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto px-2">
            <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-indigo-400/30 transition-all duration-500 transform hover:scale-105 hover:translate-y-[-4px] group animate-fade-in-up hover:shadow-lg hover:shadow-indigo-500/20" style={{animationDelay: '0.6s'}}>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 transition-all duration-300 group-hover:text-indigo-400 animate-count-up group-hover:scale-110">30+</div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">AI Projects Delivered</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-500 transform hover:scale-105 hover:translate-y-[-4px] group animate-fade-in-up hover:shadow-lg hover:shadow-purple-500/20" style={{animationDelay: '0.8s'}}>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 transition-all duration-300 group-hover:text-purple-400 animate-pulse-subtle group-hover:scale-110">24hr</div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">Response Time</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-green-400/30 transition-all duration-500 transform hover:scale-105 hover:translate-y-[-4px] group animate-fade-in-up hover:shadow-lg hover:shadow-green-500/20" style={{animationDelay: '1.0s'}}>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 transition-all duration-300 group-hover:text-green-400 animate-bounce-subtle group-hover:scale-110">100%</div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6">AI Development Services</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            We specialize in building cutting-edge AI solutions that transform businesses. From machine learning models to intelligent automation, our expert team delivers custom AI systems that scale with your needs.
          </p>
          
          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 card-hover">
              <div className="flex items-start">
                <i className="fas fa-brain text-blue-600 mt-1 mr-3 text-2xl"></i>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Custom AI Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Machine learning models, generative AI applications, computer vision, and NLP solutions tailored to your specific business challenges and requirements.
                  </p>
                  <Link 
                    href="/custom-ai-services" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-100 card-hover">
              <div className="flex items-start">
                <i className="fas fa-cogs text-purple-600 mt-1 mr-3 text-2xl"></i>
                <div>
                  <h3 className="font-semibold text-xl mb-2">MLOps Infrastructure</h3>
                  <p className="text-gray-600 mb-4">
                    End-to-end MLOps solutions for model deployment, monitoring, and automation. Build scalable ML pipelines that accelerate your AI initiatives.
                  </p>
                  <Link 
                    href="/mlops-services" 
                    className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                  >
                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Telegram Bots Service Highlight */}
          <div className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <i className="fab fa-telegram-plane text-blue-500 mr-3 text-3xl"></i>
                  AI-Powered Telegram Bot Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform your business with intelligent Telegram bots powered by cutting-edge AI and LLM technology. From simple automation to complex conversational AI, we build bots that understand and engage.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  href="/telegram-bots" 
                  className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* E-commerce Apps Service Highlight */}
          <div className="mt-8 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <i className="fas fa-shopping-cart text-green-500 mr-3 text-3xl"></i>
                  AI-Enhanced E-commerce Apps
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom Shopify and BigCommerce apps enhanced with AI capabilities. From intelligent recommendations to smart inventory management, build apps that leverage AI to scale your online business.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  href="/ecommerce-apps" 
                  className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Chatbot & Voicebot Service Highlight */}
          <div className="mt-8 p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-100">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <i className="fas fa-microphone text-purple-500 mr-3 text-3xl"></i>
                  Advanced Chatbots & Voicebots
                </h3>
                <p className="text-gray-600 mb-4">
                  Build sophisticated conversational AI with cutting-edge chatbots and voicebots. Powered by state-of-the-art models, ElevenLabs voice synthesis, Twilio integration, and real-time WebSocket communication.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  href="/chatbot-voicebot-services" 
                  className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our AI Development Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            We deliver enterprise-grade AI solutions with proven expertise and cutting-edge technology
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition service-card">
              <div className="flex items-center mb-4">
                <div className="p-4 rounded-full mr-4 shadow-md" style={{background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'}}>
                  <i className="fas fa-brain text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Advanced AI & ML Models</h3>
              </div>
              <p className="text-gray-600">
                We build custom machine learning models, integrate LLMs like GPT-4 and Claude, and create computer vision solutions that solve real business problems with measurable results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition service-card">
              <div className="flex items-center mb-4">
                <div className="p-4 rounded-full mr-4 shadow-md" style={{background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'}}>
                  <i className="fas fa-rocket text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Scalable AI Infrastructure</h3>
              </div>
              <p className="text-gray-600">
                Our MLOps expertise ensures your AI solutions scale efficiently. We build robust pipelines with monitoring, automation, and deployment strategies that grow with your business.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition service-card">
              <div className="flex items-center mb-4">
                <div className="p-4 rounded-full mr-4 shadow-md" style={{background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'}}>
                  <i className="fas fa-cogs text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">End-to-End Development</h3>
              </div>
              <p className="text-gray-600">
                From concept to deployment, we handle the complete AI development lifecycle. Our team manages data preparation, model training, testing, and production deployment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition service-card">
              <div className="flex items-center mb-4">
                <div className="p-4 rounded-full mr-4 shadow-md" style={{background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'}}>
                  <i className="fas fa-shield-alt text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Enterprise-Grade Security</h3>
              </div>
              <p className="text-gray-600">
                Security is built into every AI solution we develop. We implement robust data protection, secure API endpoints, and compliance-ready architectures for enterprise environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our AI Development Team?</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Expert AI developers who understand both cutting-edge technology and business impact
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm card-hover">
              <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-graduation-cap text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI/ML Expertise</h3>
              <p className="text-gray-600">
                Deep expertise in machine learning, LLMs, computer vision, and NLP with proven track record in production AI systems
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm card-hover">
              <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-layer-group text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Full-Stack AI Development</h3>
              <p className="text-gray-600">
                End-to-end AI solution development from data pipelines to user interfaces, including cloud deployment and monitoring
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm card-hover">
              <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Business-Focused Results</h3>
              <p className="text-gray-600">
                We focus on AI solutions that deliver measurable business value and ROI, not just impressive technical demonstrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials backgroundColor="gray" />

      {/* Featured Blog Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest AI development best practices, security insights, and industry trends.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 card-hover">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View All Articles
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our AI solutions can accelerate your business growth and innovation. Get a free consultation and discover the possibilities.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
