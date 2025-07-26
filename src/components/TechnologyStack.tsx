interface TechCategory {
  icon: string;
  title: string;
  technologies: string[];
  colorTheme?: 'blue' | 'purple' | 'green';
}

interface TechnologyStackProps {
  title: string;
  description: string;
  categories: TechCategory[];
  backgroundColor?: 'white' | 'gray';
}

export default function TechnologyStack({ 
  title, 
  description, 
  categories, 
  backgroundColor = 'gray' 
}: TechnologyStackProps) {
  const getColorClasses = (theme: TechCategory['colorTheme'], index: number) => {
    const themes = {
      blue: 'text-blue-500',
      purple: 'text-purple-500',
      green: 'text-green-500'
    };

    if (theme) return themes[theme];
    
    // Fallback to index-based colors
    const defaultColors = ['text-blue-500', 'text-purple-500', 'text-green-500'];
    return defaultColors[index % defaultColors.length];
  };

  const bgClass = backgroundColor === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          {description}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const iconColor = getColorClasses(category.colorTheme, index);
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <i className={`${category.icon} ${iconColor} mr-3 text-2xl`}></i>
                  {category.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {category.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>• {tech}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
