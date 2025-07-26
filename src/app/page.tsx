import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
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
            Don&apos;t Let AI Mistakes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Cost You
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto hero-description">
            A single security breach or performance issue can cost far more than an expert review. Get peace of mind knowing your AI-generated project is ready for the real world.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-10 py-5 rounded-lg text-white font-medium accent-gradient shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hero-cta"
          >
            Get a Free Audit - Limited Slots
            <i className="fas fa-arrow-right ml-3"></i>
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Human Expertise Behind Every Audit</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our audit team consists of senior developers with 10+ years of experience building production applications. Unlike automated tools, our experts understand the nuances of good architecture and scalable design.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm card-hover">
              <div className="flex items-start">
                <i className="fas fa-user-tie text-indigo-600 mt-1 mr-3 text-xl"></i>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Expert-Led Reviews</h3>
                  <p className="text-gray-600">
                    Every audit is performed by developers who have built and scaled real-world applications. We understand what makes code maintainable, secure, and ready for production because we&apos;ve spent years in the trenches building such systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm card-hover">
              <div className="flex items-start">
                <i className="fas fa-lightbulb text-indigo-600 mt-1 mr-3 text-xl"></i>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Practical Solutions</h3>
                  <p className="text-gray-600">
                    We don&apos;t just identify problems—we provide actionable fixes based on industry experience. Our recommendations focus on practical improvements that will make your application more robust, secure, and scalable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Telegram Bots Service Highlight */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
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
                <a 
                  href="/telegram-bots" 
                  className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Common Issues with AI-Generated Code</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Our auditors identify and fix these problems before they impact your business
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition service-card">
              <div className="flex items-center mb-4">
                <div className="p-4 rounded-full mr-4 shadow-md" style={{background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'}}>
                  <i className="fas fa-coins text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Unexpected Cloud Spending</h3>
              </div>
              <p className="text-gray-600">
                AI often generates inefficient database queries or resource-intensive operations that can cause your cloud bill to skyrocket once you scale. Our experts identify these issues before they become expensive problems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition service-card">
              <div className="flex items-center mb-4">
                <div className="p-4 rounded-full mr-4 shadow-md" style={{background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'}}>
                  <i className="fas fa-shield-alt text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Security Vulnerabilities</h3>
              </div>
              <p className="text-gray-600">
                AI tools often generate code with security flaws like improper authentication, insecure API endpoints, or SQL injection risks. Our security reviews catch these issues before hackers can exploit them.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition service-card">
              <div className="flex items-center mb-4">
                <div className="p-4 rounded-full mr-4 shadow-md" style={{background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'}}>
                  <i className="fas fa-tachometer-alt text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Performance Bottlenecks</h3>
              </div>
              <p className="text-gray-600">
                AI-generated code often works fine with test data but collapses under real-world loads. We identify performance issues like memory leaks, N+1 queries, and blocking operations that would slow your application.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition service-card">
              <div className="flex items-center mb-4">
                <div className="p-4 rounded-full mr-4 shadow-md" style={{background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'}}>
                  <i className="fas fa-tools text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Outdated Dependencies</h3>
              </div>
              <p className="text-gray-600">
                AI systems often reference deprecated libraries or outdated practices from their training data. We ensure your codebase uses current, maintained technologies to avoid technical debt and security risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us?</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Seasoned developers who understand both code quality and business needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm card-hover">
              <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-award text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">10+ Years Experience</h3>
              <p className="text-gray-600">
                Our auditors have built and maintained production systems at scale for over a decade
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm card-hover">
              <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-cogs text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tool Agnostic</h3>
              <p className="text-gray-600">
                We audit projects built with any AI tool including GPT-4, Claude, GitHub Copilot or custom models
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm card-hover">
              <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-briefcase text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Business-Focused</h3>
              <p className="text-gray-600">
                We prioritize fixes that protect your business and user experience, not theoretical concerns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Ready to Audit Your AI generated project?</h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Get expert eyes on your AI-generated code today
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
