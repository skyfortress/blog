'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    // Try to scroll to contact section, or open contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no contact section, scroll to bottom of page
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-200/60' 
        : 'bg-white/95 backdrop-blur-lg shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <span className="text-white font-bold text-base sm:text-lg lg:text-xl">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 logo-text tracking-tight leading-tight">
                  <span className="hidden sm:inline">Skyfortress</span>
                  <span className="sm:hidden">Skyfortress</span>
                </span>
                <span className="text-xs lg:text-xs tracking-wider uppercase text-gray-600 font-medium hidden sm:block -mt-0.5">
                  AI solutions
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/telegram-bots" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
              isActiveLink('/telegram-bots') 
                ? 'text-indigo-600' 
                : 'text-gray-700 hover:text-indigo-600'
            }`}>
              <span className="relative z-10">Bots</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/telegram-bots') ? 'w-full' : 'group-hover:w-full'
              }`}></span>
            </Link>
            <Link href="/chatbot-voicebot-services" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
              isActiveLink('/chatbot-voicebot-services') 
                ? 'text-indigo-600' 
                : 'text-gray-700 hover:text-indigo-600'
            }`}>
              <span className="relative z-10">AI Chat</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/chatbot-voicebot-services') ? 'w-full' : 'group-hover:w-full'
              }`}></span>
            </Link>
            <Link href="/ecommerce-apps" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
              isActiveLink('/ecommerce-apps') 
                ? 'text-indigo-600' 
                : 'text-gray-700 hover:text-indigo-600'
            }`}>
              <span className="relative z-10">E-commerce</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/ecommerce-apps') ? 'w-full' : 'group-hover:w-full'
              }`}></span>
            </Link>
            <Link href="/custom-ai-services" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
              isActiveLink('/custom-ai-services') 
                ? 'text-indigo-600' 
                : 'text-gray-700 hover:text-indigo-600'
            }`}>
              <span className="relative z-10">Custom AI</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/custom-ai-services') ? 'w-full' : 'group-hover:w-full'
              }`}></span>
            </Link>
            <Link href="/mlops-services" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
              isActiveLink('/mlops-services') 
                ? 'text-indigo-600' 
                : 'text-gray-700 hover:text-indigo-600'
            }`}>
              <span className="relative z-10">MLOps</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/mlops-services') ? 'w-full' : 'group-hover:w-full'
              }`}></span>
            </Link>
            <Link href="/blog" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
              isActiveLink('/blog') 
                ? 'text-indigo-600' 
                : 'text-gray-700 hover:text-indigo-600'
            }`}>
              <span className="relative z-10">Blog</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/blog') ? 'w-full' : 'group-hover:w-full'
              }`}></span>
            </Link>
            <div className="ml-3 pl-3 border-l border-gray-300">
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden group btn-gradient-enhanced"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 sm:p-3 text-gray-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg sm:rounded-xl transition-all duration-300 relative group min-h-[44px] min-w-[44px]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg 
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${mobileMenuOpen ? 'rotate-180 scale-90' : 'rotate-0 scale-100'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-500 ease-out transform ${
        mobileMenuOpen 
          ? 'max-h-screen opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-2 overflow-hidden'
      }`}>
        <div className="bg-white/98 backdrop-blur-xl border-t border-gray-200/60 shadow-2xl">
          <div className="px-4 py-4 sm:py-6 space-y-1">
            <Link 
              href="/telegram-bots" 
              className={`block px-3 sm:px-4 py-3 sm:py-4 text-base font-medium transition-all duration-300 relative group min-h-[44px] ${
                isActiveLink('/telegram-bots') 
                  ? 'text-indigo-600' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
              onClick={closeMobileMenu}
            >
              <span className="relative">Telegram Bots</span>
              <span className={`absolute bottom-2 left-3 sm:left-4 right-3 sm:right-4 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/telegram-bots') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
            </Link>
            <Link 
              href="/chatbot-voicebot-services" 
              className={`block px-3 sm:px-4 py-3 sm:py-4 text-base font-medium transition-all duration-300 relative group min-h-[44px] ${
                isActiveLink('/chatbot-voicebot-services') 
                  ? 'text-indigo-600' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
              onClick={closeMobileMenu}
            >
              <span className="relative">AI Assistants</span>
              <span className={`absolute bottom-2 left-3 sm:left-4 right-3 sm:right-4 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/chatbot-voicebot-services') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
            </Link>
            <Link 
              href="/ecommerce-apps" 
              className={`block px-3 sm:px-4 py-3 sm:py-4 text-base font-medium transition-all duration-300 relative group min-h-[44px] ${
                isActiveLink('/ecommerce-apps') 
                  ? 'text-indigo-600' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
              onClick={closeMobileMenu}
            >
              <span className="relative">E-commerce</span>
              <span className={`absolute bottom-2 left-3 sm:left-4 right-3 sm:right-4 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/ecommerce-apps') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
            </Link>
            <Link 
              href="/custom-ai-services" 
              className={`block px-3 sm:px-4 py-3 sm:py-4 text-base font-medium transition-all duration-300 relative group min-h-[44px] ${
                isActiveLink('/custom-ai-services') 
                  ? 'text-indigo-600' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
              onClick={closeMobileMenu}
            >
              <span className="relative">Custom AI</span>
              <span className={`absolute bottom-2 left-3 sm:left-4 right-3 sm:right-4 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/custom-ai-services') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
            </Link>
            <Link 
              href="/mlops-services" 
              className={`block px-3 sm:px-4 py-3 sm:py-4 text-base font-medium transition-all duration-300 relative group min-h-[44px] ${
                isActiveLink('/mlops-services') 
                  ? 'text-indigo-600' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
              onClick={closeMobileMenu}
            >
              <span className="relative">MLOps</span>
              <span className={`absolute bottom-2 left-3 sm:left-4 right-3 sm:right-4 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/mlops-services') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
            </Link>
            <Link 
              href="/blog" 
              className={`block px-3 sm:px-4 py-3 sm:py-4 text-base font-medium transition-all duration-300 relative group min-h-[44px] ${
                isActiveLink('/blog') 
                  ? 'text-indigo-600' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
              onClick={closeMobileMenu}
            >
              <span className="relative">Blog</span>
              <span className={`absolute bottom-2 left-3 sm:left-4 right-3 sm:right-4 h-0.5 bg-indigo-600 transition-all duration-300 ${
                isActiveLink('/blog') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
            </Link>
            <div className="pt-3 sm:pt-4 border-t border-gray-200/60 mt-2">
              <button 
                onClick={handleGetStarted}
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-base hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group btn-gradient-enhanced min-h-[44px]"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
