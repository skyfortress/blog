import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import ServiceTiers from '@/components/ServiceTiers';
import TechnologyStack from '@/components/TechnologyStack';
import ProcessSteps from '@/components/ProcessSteps';
import ContactSection from '@/components/ContactSection';

const content = {
  hero: {
    title: "Custom AI",
    titleHighlight: "Solutions",
    description: "Transform your business with tailored AI solutions built from the ground up. We leverage state-of-the-art models and cutting-edge expertise to create intelligent systems that address your specific business challenges and unlock unprecedented growth opportunities.",
    ctaText: "Start Your AI Journey"
  },
  aiCapabilities: {
    title: "Comprehensive AI Development Services",
    description: "From machine learning models to generative AI applications, we build custom solutions that integrate seamlessly with your existing infrastructure and scale with your business needs.",
    features: [
      {
        icon: "fas fa-brain",
        title: "Machine Learning Models",
        description: "Custom ML models for prediction, classification, and optimization tasks. From recommendation systems to fraud detection and demand forecasting.",
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-robot",
        title: "Generative AI Applications",
        description: "Leverage GPT-4, Claude, and other LLMs to build intelligent content generation, automated writing, and conversational AI systems.",
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-eye",
        title: "Computer Vision Solutions",
        description: "Advanced image and video processing using CNNs and transformer models for object detection, facial recognition, and quality control.",
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-language",
        title: "Natural Language Processing",
        description: "Sophisticated text analysis, sentiment analysis, document processing, and multilingual AI solutions for global businesses.",
        colorTheme: "orange" as const
      }
    ]
  },
  serviceTypes: {
    title: "AI Solutions for Every Scale",
    description: "Whether you're a startup looking to integrate AI or an enterprise seeking advanced automation, we have the expertise to deliver",
    levels: [
      {
        icon: "fas fa-lightbulb",
        title: "AI Proof of Concept",
        features: [
          "Feasibility analysis and planning",
          "Prototype development",
          "Data assessment and preparation",
          "Performance benchmarking",
          "Technology recommendation"
        ],
        description: "Validate your AI ideas with rapid prototyping and proof-of-concept development.",
        popular: false,
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-cogs",
        title: "Production AI Systems",
        features: [
          "End-to-end AI application development",
          "Model training and optimization",
          "API integration and deployment",
          "Real-time monitoring and alerts",
          "Continuous learning pipelines",
          "Scalable cloud infrastructure"
        ],
        description: "Full-scale AI solutions ready for production with enterprise-grade reliability and performance.",
        popular: true,
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-building",
        title: "Enterprise AI Transformation",
        features: [
          "AI strategy consulting",
          "Legacy system integration",
          "Multi-model AI orchestration",
          "Compliance and governance",
          "Team training and knowledge transfer",
          "Ongoing optimization and support"
        ],
        description: "Comprehensive AI transformation for large organizations with complex requirements and regulatory needs.",
        popular: false,
        colorTheme: "purple" as const
      }
    ]
  },
  industries: {
    title: "Industry-Specific AI Solutions",
    description: "We understand that each industry has unique challenges. Our AI solutions are tailored to address specific sector requirements",
    cases: [
      {
        icon: "fas fa-chart-line",
        title: "Financial Services",
        description: "Risk assessment, algorithmic trading, fraud detection, credit scoring, and regulatory compliance automation",
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-heartbeat",
        title: "Healthcare & Life Sciences",
        description: "Medical image analysis, drug discovery acceleration, patient outcome prediction, and clinical decision support",
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-shopping-cart",
        title: "Retail & E-commerce",
        description: "Personalized recommendations, dynamic pricing, inventory optimization, and customer lifetime value prediction",
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-industry",
        title: "Manufacturing",
        description: "Predictive maintenance, quality control automation, supply chain optimization, and production planning",
        colorTheme: "orange" as const
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Education & Training",
        description: "Adaptive learning platforms, automated grading, personalized curricula, and student performance analytics",
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-leaf",
        title: "Sustainability & Energy",
        description: "Smart grid optimization, renewable energy forecasting, carbon footprint tracking, and environmental monitoring",
        colorTheme: "green" as const
      }
    ]
  },
  techStack: {
    title: "State-of-the-Art Technology Stack",
    description: "We use the latest AI frameworks, cloud platforms, and development tools to build robust, scalable, and cutting-edge AI solutions",
    categories: [
      {
        icon: "fas fa-brain",
        title: "AI/ML Frameworks",
        technologies: [
          "TensorFlow & Keras for deep learning",
          "PyTorch for research and production",
          "Scikit-learn for classical ML",
          "Hugging Face Transformers",
          "LangChain for LLM applications"
        ],
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud AI Platforms",
        technologies: [
          "AWS SageMaker & Bedrock",
          "Google Cloud AI Platform",
          "Azure Machine Learning",
          "OpenAI API integration",
          "Anthropic Claude integration"
        ],
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-database",
        title: "Data Infrastructure",
        technologies: [
          "Vector databases (Pinecone, Weaviate)",
          "Data lakes and warehouses",
          "Real-time streaming (Kafka, Kinesis)",
          "MLOps with MLflow and Kubeflow",
          "Feature stores and data versioning"
        ],
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-code",
        title: "Development & Deployment",
        technologies: [
          "Python, R, and Julia for ML",
          "Docker & Kubernetes orchestration",
          "CI/CD for ML pipelines",
          "Model monitoring and observability",
          "A/B testing frameworks"
        ],
        colorTheme: "blue" as const
      }
    ]
  },
  process: {
    title: "Our AI Development Methodology",
    description: "A proven approach that ensures your AI solution is not just technically sound, but also aligned with your business objectives and ethical standards",
    steps: [
      {
        number: "1",
        title: "Discovery & Strategy",
        description: "Deep dive into your business challenges, data landscape, and success metrics to define the optimal AI approach"
      },
      {
        number: "2",
        title: "Data Engineering & Preparation",
        description: "Clean, transform, and prepare your data while establishing robust data pipelines and governance frameworks"
      },
      {
        number: "3",
        title: "Model Development & Training",
        description: "Build and train custom AI models using state-of-the-art techniques, with rigorous testing and validation"
      },
      {
        number: "4",
        title: "Integration & Deployment",
        description: "Seamlessly integrate AI capabilities into your existing systems with production-ready deployment and monitoring"
      },
      {
        number: "5",
        title: "Optimization & Evolution",
        description: "Continuous monitoring, performance optimization, and model updates to ensure long-term success and ROI"
      }
    ]
  },
  contact: {
    title: "Ready to Transform Your Business with AI?",
    description: "Let's explore how custom AI solutions can revolutionize your operations, enhance customer experiences, and drive unprecedented growth"
  }
};

export default function CustomAIServices() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title={content.hero.title}
        titleHighlight={content.hero.titleHighlight}
        description={content.hero.description}
        ctaText={content.hero.ctaText}
        ctaIcon="fas fa-rocket"
        theme="blue"
      />

      {/* AI Capabilities Section */}
      <FeatureGrid
        title={content.aiCapabilities.title}
        description={content.aiCapabilities.description}
        features={content.aiCapabilities.features}
        columns={4}
        backgroundColor="white"
      />

      {/* Service Types */}
      <ServiceTiers
        title={content.serviceTypes.title}
        description={content.serviceTypes.description}
        tiers={content.serviceTypes.levels}
        backgroundColor="gray"
      />

      {/* Industries Section */}
      <FeatureGrid
        title={content.industries.title}
        description={content.industries.description}
        features={content.industries.cases}
        columns={3}
        backgroundColor="white"
      />

      {/* Technology Stack */}
      <TechnologyStack
        title={content.techStack.title}
        description={content.techStack.description}
        categories={content.techStack.categories}
        backgroundColor="gray"
      />

      {/* Process Section */}
      <ProcessSteps
        title={content.process.title}
        description={content.process.description}
        steps={content.process.steps}
        backgroundColor="white"
        accentColor="purple"
      />

      {/* Contact Section */}
      <ContactSection
        title={content.contact.title}
        description={content.contact.description}
      />

      <Footer />
    </div>
  );
}
