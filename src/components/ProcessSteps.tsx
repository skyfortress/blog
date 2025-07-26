interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  description: string;
  steps: ProcessStep[];
  backgroundColor?: 'white' | 'gray';
  accentColor?: 'blue' | 'indigo' | 'green' | 'purple';
}

export default function ProcessSteps({ 
  title, 
  description, 
  steps, 
  backgroundColor = 'white',
  accentColor = 'blue'
}: ProcessStepsProps) {
  const colorClasses = {
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500'
  };

  const bgClass = backgroundColor === 'white' ? 'bg-white' : 'bg-gray-50';
  
  // Dynamic grid columns based on number of steps
  const getGridCols = (stepCount: number) => {
    if (stepCount <= 3) return 'md:grid-cols-3';
    if (stepCount === 4) return 'md:grid-cols-4';
    if (stepCount === 5) return 'md:grid-cols-5';
    return 'md:grid-cols-6'; // For 6 or more steps
  };

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          {description}
        </p>
        
        <div className={`grid ${getGridCols(steps.length)} gap-8`}>
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${colorClasses[accentColor]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
