interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  colorTheme?: 'blue' | 'green' | 'purple' | 'orange';
}

interface FeatureGridProps {
  title: string;
  description: string;
  features: FeatureCardProps[];
  columns?: 2 | 3 | 4;
  backgroundColor?: 'white' | 'gray';
}

export default function FeatureGrid({ 
  title, 
  description, 
  features, 
  columns = 3,
  backgroundColor = 'white'
}: FeatureGridProps) {
  const getColorClasses = (theme: FeatureCardProps['colorTheme'], index: number) => {
    const themes = {
      blue: {
        gradient: 'from-blue-50 to-indigo-50',
        iconBg: 'bg-blue-500',
        iconColor: 'text-blue-600'
      },
      green: {
        gradient: 'from-green-50 to-emerald-50',
        iconBg: 'bg-green-500',
        iconColor: 'text-green-600'
      },
      purple: {
        gradient: 'from-purple-50 to-violet-50',
        iconBg: 'bg-purple-500',
        iconColor: 'text-purple-600'
      },
      orange: {
        gradient: 'from-orange-50 to-red-50',
        iconBg: 'bg-orange-500',
        iconColor: 'text-orange-600'
      }
    };

    if (theme) return themes[theme];
    
    // Fallback to index-based colors if no theme specified
    const defaultThemes = [themes.blue, themes.green, themes.purple, themes.orange];
    return defaultThemes[index % defaultThemes.length];
  };

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  const bgClass = backgroundColor === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.colorTheme, index);
            return (
              <div 
                key={index} 
                className={`p-6 bg-gradient-to-br ${colors.gradient} rounded-lg shadow-sm card-hover text-center`}
              >
                <div className={`flex items-center justify-center w-16 h-16 ${colors.iconBg} rounded-full mb-4 mx-auto`}>
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
