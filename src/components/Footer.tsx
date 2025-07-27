import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group mb-4 sm:mb-6 w-fit">
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <span className="text-white font-bold text-base sm:text-lg lg:text-xl">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 logo-text tracking-tight leading-tight">
                  <span className="hidden sm:inline">Skyfortress</span>
                  <span className="sm:hidden">Skyfortress</span>
                </span>
                <span className="text-xs lg:text-xs tracking-wider uppercase text-gray-400 font-medium hidden sm:block -mt-0.5">
                  AI solutions
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              Transform your business with cutting-edge AI solutions. From custom machine learning models to intelligent automation, we build AI systems that scale and deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="mailto:oleksii@skyfortress.dev" className="flex items-center text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px]">
                <i className="fas fa-envelope mr-2"></i>
                oleksii@skyfortress.dev
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-white">AI Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/custom-ai-services" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm sm:text-base min-h-[44px]">
                  <i className="fas fa-robot mr-2 text-xs sm:text-sm"></i>
                  Custom AI Solutions
                </a>
              </li>
              <li>
                <a href="/mlops-services" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm sm:text-base min-h-[44px]">
                  <i className="fas fa-cogs mr-2 text-xs sm:text-sm"></i>
                  MLOps & Deployment
                </a>
              </li>
              <li>
                <a href="/telegram-bots" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm sm:text-base min-h-[44px]">
                  <i className="fab fa-telegram mr-2 text-xs sm:text-sm"></i>
                  AI Telegram Bots
                </a>
              </li>
              <li>
                <a href="/chatbot-voicebot-services" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm sm:text-base min-h-[44px]">
                  <i className="fas fa-microphone mr-2 text-xs sm:text-sm"></i>
                  Chatbots & Voicebots
                </a>
              </li>
              <li>
                <a href="/ecommerce-apps" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm sm:text-base min-h-[44px]">
                  <i className="fas fa-shopping-cart mr-2 text-xs sm:text-sm"></i>
                  E-commerce AI
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] block">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] block">
                  Why Choose Us
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] block">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] block">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] block">
                  Our Process
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm sm:text-base text-center md:text-left">
              &copy; 2025 SkyFortress. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="text-gray-400 text-xs sm:text-sm text-center">Built with cutting-edge AI technology</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs sm:text-sm">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
