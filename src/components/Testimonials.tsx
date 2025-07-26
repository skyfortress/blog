interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

interface TestimonialsProps {
  title?: string;
  description?: string;
  backgroundColor?: 'white' | 'gray';
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    content: "The AI chatbot they developed for our customer service increased response efficiency by 300% and customer satisfaction by 45%. Their technical expertise and understanding of our business needs was exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "DataVault Analytics",
    content: "Working with this team transformed our data processing capabilities. The custom ML models they built reduced our analysis time from hours to minutes, directly impacting our bottom line.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Head of Operations",
    company: "RetailGenius",
    content: "Their AI-powered inventory management system helped us reduce stockouts by 60% and optimize our supply chain. The ROI was evident within the first quarter of implementation.",
    rating: 5
  },
];

export default function Testimonials({ 
  title = "What Our Clients Say",
  description = "See how we've helped businesses transform with AI solutions that deliver real results",
  backgroundColor = 'white',
  testimonials = defaultTestimonials
}: TestimonialsProps) {
  const bgClass = backgroundColor === 'white' ? 'bg-white' : 'bg-gray-50';

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index}
        className={`fas fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
      />
    ));
  };

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px] border border-gray-100 hover:border-gray-200 animate-fade-in-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-2">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-gray-500">({testimonial.rating}.0)</span>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
