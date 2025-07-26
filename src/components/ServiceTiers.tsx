interface ServiceTier {
  icon: string;
  title: string;
  features: string[];
  description: string;
  popular?: boolean;
  colorTheme?: 'green' | 'blue' | 'purple';
}

interface ServiceTiersProps {
  title: string;
  description: string;
  tiers: ServiceTier[];
  backgroundColor?: 'white' | 'gray';
}

export default function ServiceTiers({ 
  title, 
  description, 
  tiers, 
  backgroundColor = 'gray' 
}: ServiceTiersProps) {
  const getColorClasses = (theme: ServiceTier['colorTheme'], index: number) => {
    const themes = {
      green: {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        checkColor: 'text-green-500'
      },
      blue: {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        checkColor: 'text-blue-500'
      },
      purple: {
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        checkColor: 'text-purple-500'
      }
    };

    if (theme) return themes[theme];
    
    // Fallback to index-based colors
    const defaultThemes = [themes.green, themes.blue, themes.purple];
    return defaultThemes[index % defaultThemes.length];
  };

  const bgClass = backgroundColor === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          {description}
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const colors = getColorClasses(tier.colorTheme, index);
            return (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition ${
                  tier.popular ? 'border-2 border-blue-200' : ''
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-full mr-4 ${colors.iconBg}`}>
                    <i className={`${tier.icon} ${colors.iconColor} text-xl`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold">{tier.title}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <i className={`fas fa-check ${colors.checkColor} mr-3`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600">{tier.description}</p>
                {tier.popular && (
                  <div className="mt-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full inline-block">
                    Most Popular
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
