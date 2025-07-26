import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { getFeaturedPosts, formatDate } from '@/lib/blog';

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 px-4 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-900 opacity-90"></div>
          <div className="absolute inset-0 hero-bg-animate" style={{background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)'}}></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight hero-title">
            Transform Your Business{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              With AI
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto hero-description">
            From custom AI solutions to intelligent automation, we build cutting-edge AI systems that scale your business and unlock unprecedented growth opportunities.
          </p>
          <Link 
            href="#contact" 
            className="inline-flex items-center px-10 py-5 rounded-lg text-white font-medium accent-gradient shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hero-cta"
          >
            Start Your AI Journey
            <i className="fas fa-arrow-right ml-3"></i>
          </Link>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">AI Development Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We specialize in building cutting-edge AI solutions that transform businesses. From machine learning models to intelligent automation, our expert team delivers custom AI systems that scale with your needs.
          </p>
          
          {/* Main Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
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

      {/* Featured Blog Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest AI development best practices, security insights, and industry trends.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post) => (
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
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how our AI solutions can accelerate your business growth and innovation
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
