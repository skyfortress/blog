interface HeroProps {
  title: string;
  titleHighlight?: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  ctaIcon?: string;
  theme?: 'default' | 'blue';
}

export default function Hero({ 
  title, 
  titleHighlight, 
  description, 
  ctaText, 
  ctaHref = "#contact",
  ctaIcon = "fas fa-arrow-right",
  theme = 'default'
}: HeroProps) {
  const themeConfig = {
    default: {
      gradient: 'from-indigo-900 via-gray-900 to-gray-900',
      bgAnimate: 'rgba(99, 102, 241, 0.1)',
      titleGradient: 'from-indigo-400 to-blue-400',
      shadowColor: 'shadow-indigo-500/25 hover:shadow-indigo-500/30'
    },
    blue: {
      gradient: 'from-blue-900 via-gray-900 to-gray-900',
      bgAnimate: 'rgba(59, 130, 246, 0.1)',
      titleGradient: 'from-blue-400 to-cyan-400',
      shadowColor: 'shadow-blue-500/25 hover:shadow-blue-500/30'
    }
  };

  const config = themeConfig[theme];

  return (
    <header className="relative pt-40 pb-24 px-4 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-90`}></div>
        <div 
          className="absolute inset-0 hero-bg-animate" 
          style={{background: `radial-gradient(circle at 50% 0%, ${config.bgAnimate} 0%, transparent 50%)`}}
        ></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight hero-title">
          {title}{' '}
          {titleHighlight && (
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${config.titleGradient}`}>
              {titleHighlight}
            </span>
          )}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto hero-description">
          {description}
        </p>
        <a 
          href={ctaHref}
          className={`inline-flex items-center px-10 py-5 rounded-lg text-white font-medium accent-gradient shadow-lg ${config.shadowColor} hover:shadow-xl transition-all duration-300 hero-cta`}
        >
          {ctaText}
          <i className={`${ctaIcon} ml-3`}></i>
        </a>
      </div>
    </header>
  );
}
