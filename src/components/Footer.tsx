export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 mr-3">
                <i className="fas fa-brain text-white text-xl"></i>
              </div>
              <div className="font-bold text-2xl">SkyFortress</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transform your business with cutting-edge AI solutions. From custom machine learning models to intelligent automation, we build AI systems that scale and deliver real results.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:oleksii@skyfortress.dev" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <i className="fas fa-envelope mr-2"></i>
                oleksii@skyfortress.dev
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">AI Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/custom-ai-services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-robot mr-2 text-sm"></i>
                  Custom AI Solutions
                </a>
              </li>
              <li>
                <a href="/mlops-services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-cogs mr-2 text-sm"></i>
                  MLOps & Deployment
                </a>
              </li>
              <li>
                <a href="/telegram-bots" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <i className="fab fa-telegram mr-2 text-sm"></i>
                  AI Telegram Bots
                </a>
              </li>
              <li>
                <a href="/ecommerce-apps" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-shopping-cart mr-2 text-sm"></i>
                  E-commerce AI
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 SkyFortress. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Built with cutting-edge AI technology</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
