import Link from 'next/link';

interface HeroProps {
  title: string;
  titleHighlight?: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  ctaIcon?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  secondaryCtaIcon?: string;
  theme?: 'default' | 'blue' | 'purple';
  showStats?: boolean;
  stats?: Array<{ number: string; label: string }>;
  showBadge?: boolean;
  badgeText?: string;
}

export default function Hero({ 
  title, 
  titleHighlight, 
  description, 
  ctaText, 
  ctaHref = "#contact",
  ctaIcon = "fas fa-arrow-right",
  secondaryCtaText,
  secondaryCtaHref = "#services",
  secondaryCtaIcon = "fas fa-external-link-alt",
  theme = 'default',
  showStats = false,
  stats = [
    { number: "30+", label: "AI Projects Delivered" },
    { number: "24hr", label: "Response Time" },
    { number: "100%", label: "Client Satisfaction" }
  ],
  showBadge = false,
  badgeText = "Available for New Projects"
}: HeroProps) {
  const themeConfig = {
    default: {
      gradient: 'from-indigo-900 via-gray-900 to-purple-900',
      radialGradient1: 'rgba(99, 102, 241, 0.3)',
      radialGradient2: 'rgba(147, 51, 234, 0.2)',
      conicGradient: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(99, 102, 241, 0.1) 60deg, transparent 120deg, rgba(147, 51, 234, 0.1) 180deg, transparent 240deg, rgba(59, 130, 246, 0.1) 300deg, transparent 360deg)',
      titleGradient: 'from-indigo-400 via-purple-400 to-blue-400',
      buttonGradient: 'from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700',
      shadowColor: 'shadow-indigo-500/25 hover:shadow-indigo-500/40'
    },
    blue: {
      gradient: 'from-blue-900 via-gray-900 to-cyan-900',
      radialGradient1: 'rgba(59, 130, 246, 0.3)',
      radialGradient2: 'rgba(6, 182, 212, 0.2)',
      conicGradient: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(59, 130, 246, 0.1) 60deg, transparent 120deg, rgba(6, 182, 212, 0.1) 180deg, transparent 240deg, rgba(99, 102, 241, 0.1) 300deg, transparent 360deg)',
      titleGradient: 'from-blue-400 via-cyan-400 to-indigo-400',
      buttonGradient: 'from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700',
      shadowColor: 'shadow-blue-500/25 hover:shadow-blue-500/40'
    },
    purple: {
      gradient: 'from-purple-900 via-gray-900 to-indigo-900',
      radialGradient1: 'rgba(147, 51, 234, 0.3)',
      radialGradient2: 'rgba(99, 102, 241, 0.2)',
      conicGradient: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(147, 51, 234, 0.1) 60deg, transparent 120deg, rgba(99, 102, 241, 0.1) 180deg, transparent 240deg, rgba(168, 85, 247, 0.1) 300deg, transparent 360deg)',
      titleGradient: 'from-purple-400 via-indigo-400 to-pink-400',
      buttonGradient: 'from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700',
      shadowColor: 'shadow-purple-500/25 hover:shadow-purple-500/40'
    }
  };

  const config = themeConfig[theme];

  return (
    <header className="relative pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 bg-gray-900 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`}></div>
        
        {/* Animated radial gradients */}
        <div 
          className="absolute inset-0 hero-bg-animate opacity-80" 
          style={{
            background: `radial-gradient(circle at 30% 20%, ${config.radialGradient1} 0%, transparent 50%), radial-gradient(circle at 70% 80%, ${config.radialGradient2} 0%, transparent 50%)`
          }}
        ></div>
        
        {/* Additional animated overlay */}
        <div 
          className="absolute inset-0 opacity-60" 
          style={{
            background: config.conicGradient,
            animation: 'spin 20s linear infinite'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center w-full">
        {/* Badge */}
        {showBadge && (
          <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium mb-6 sm:mb-8 hero-title">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="hidden sm:inline">{badgeText}</span>
            <span className="sm:hidden">Available Now</span>
          </div>
        )}

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight hero-title px-2">
          <span className="block sm:inline">{title}</span>{' '}
          {titleHighlight && (
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${config.titleGradient}`}>
              {titleHighlight}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto hero-description font-light px-2">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-6 justify-center items-center mb-10 sm:mb-12 hero-cta px-2">
          <Link 
            href={ctaHref}
            className={`group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg text-white font-semibold bg-gradient-to-r ${config.buttonGradient} shadow-xl ${config.shadowColor} hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-2px] text-sm sm:text-base lg:text-lg min-w-[200px]`}
          >
            {ctaText}
            <i className={`${ctaIcon} ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300`}></i>
          </Link>
          
          {secondaryCtaText && (
            <Link 
              href={secondaryCtaHref}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg text-white font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:translate-y-[-2px] text-sm sm:text-base lg:text-lg min-w-[200px]"
            >
              {secondaryCtaText}
              <i className={`${secondaryCtaIcon} ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300`}></i>
            </Link>
          )}
        </div>

        {/* Stats/Trust Indicators */}
        {showStats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto px-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
}
