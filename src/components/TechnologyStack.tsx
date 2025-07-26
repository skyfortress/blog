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
  
  // Dynamically determine grid layout based on categories count
  const getGridClasses = (count: number) => {
    if (count <= 2) return 'md:grid-cols-2';
    if (count === 3) return 'md:grid-cols-3';
    if (count === 4) return 'md:grid-cols-2 lg:grid-cols-4';
    if (count === 5) return 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
    if (count === 6) return 'md:grid-cols-2 lg:grid-cols-3';
    return 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'; // 7+ items
  };

  const gridCols = getGridClasses(categories.length);

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          {description}
        </p>
        
        <div className={`grid grid-cols-1 ${gridCols} gap-6 lg:gap-8`}>
          {categories.map((category, index) => {
            const iconColor = getColorClasses(category.colorTheme, index);
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px] border border-gray-100 hover:border-gray-200 animate-fade-in-up group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center group-hover:text-gray-800 transition-colors duration-300">
                  <i className={`${category.icon} ${iconColor} mr-3 text-2xl group-hover:scale-110 transition-transform duration-300`}></i>
                  {category.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {category.technologies.map((tech, techIndex) => (
                    <li 
                      key={techIndex} 
                      className="flex items-center hover:text-gray-800 transition-colors duration-200"
                    >
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 flex-shrink-0 group-hover:bg-gray-400 transition-colors duration-300"></span>
                      {tech}
                    </li>
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
