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
    title: "AI-Enhanced",
    titleHighlight: "E-commerce Apps",
    description: "Transform your online store with intelligent custom apps for Shopify and BigCommerce. From AI-powered recommendations to smart inventory management, we build apps that leverage cutting-edge AI technology to scale your business and enhance customer experience.",
    ctaText: "Start Your AI App Project"
  },
  platformExpertise: {
    title: "AI-Enhanced E-commerce Development",
    description: "We specialize in developing intelligent e-commerce apps for Shopify and BigCommerce platforms, integrating cutting-edge AI capabilities to create smarter, more engaging shopping experiences.",
    features: [
      {
        icon: "fab fa-shopify",
        title: "Shopify App Development",
        description: "Custom Shopify apps using App Bridge, Admin API, and Storefront API for seamless integration with Shopify's ecosystem and app store.",
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-shopping-bag",
        title: "BigCommerce Solutions",
        description: "Native BigCommerce apps leveraging Stencil themes, REST & GraphQL APIs for powerful store customizations and functionality.",
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-brain",
        title: "AI-Powered Features",
        description: "Build new AI-native apps or enhance existing e-commerce apps with intelligent features like personalized recommendations, smart search, automated customer service, and predictive analytics.",
        colorTheme: "purple" as const
      }
    ]
  },
  appTypes: {
    title: "Apps for Every Business Need",
    description: "From simple utilities to complex business solutions, we develop e-commerce apps that solve real problems",
    levels: [
      {
        icon: "fas fa-tools",
        title: "Utility Apps",
        features: [
          "Inventory management tools",
          "Order export/import",
          "Product data optimization",
          "Basic reporting dashboards"
        ],
        description: "Essential tools to streamline your daily store operations and management tasks.",
        popular: false,
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-rocket",
        title: "AI-Enhanced Solutions",
        features: [
          "AI-powered customer recommendations",
          "Intelligent chatbots and support",
          "Predictive analytics and insights",
          "Automated marketing campaigns",
          "Smart search and personalization"
        ],
        description: "Intelligent solutions that use AI to enhance customer experience and drive sales growth.",
        popular: true,
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-crown",
        title: "Enterprise Apps",
        features: [
          "ERP system integration",
          "Multi-store management",
          "Advanced workflow automation",
          "Custom API development",
          "Enterprise security"
        ],
        description: "Scalable solutions for large organizations with complex e-commerce requirements.",
        popular: false,
        colorTheme: "purple" as const
      }
    ]
  },
  useCases: {
    title: "Popular App Categories",
    description: "Real-world applications where AI-enhanced e-commerce apps make a significant impact",
    cases: [
      {
        icon: "fas fa-robot",
        title: "AI-Powered Personalization",
        description: "Smart product recommendations, personalized search results, and dynamic pricing based on customer behavior",
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-chart-line",
        title: "Analytics & Reporting",
        description: "Custom dashboards, sales insights, and performance tracking tools with AI-driven predictions",
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-users",
        title: "Customer Experience",
        description: "AI chatbots, intelligent customer service, loyalty programs, and automated support systems",
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-boxes",
        title: "Smart Inventory",
        description: "AI-driven demand forecasting, automated reordering, and intelligent warehouse management",
        colorTheme: "orange" as const
      }
    ]
  },
  techStack: {
    title: "Our Technology Stack",
    description: "Built with modern, scalable technologies optimized for e-commerce performance, reliability, and AI integration",
    categories: [
      {
        icon: "fas fa-code",
        title: "Frontend Development",
        technologies: [
          "React and Next.js for dynamic UIs",
          "Shopify Polaris design system",
          "TypeScript for type safety",
          "Responsive and mobile-first design"
        ],
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-server",
        title: "Backend & APIs",
        technologies: [
          "Node.js and NestJS",
          "Shopify Admin API & GraphQL",
          "BigCommerce REST & GraphQL APIs",
          "Webhook handling and real-time sync"
        ],
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-brain",
        title: "AI & Machine Learning",
        technologies: [
          "OpenAI GPT-4/GPT-3.5 integration",
          "TensorFlow and PyTorch models",
          "Custom recommendation engines",
          "LangChain for complex AI workflows"
        ],
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-database",
        title: "Infrastructure",
        technologies: [
          "PostgreSQL and MongoDB databases",
          "Redis for caching and sessions",
          "Docker containerization",
          "AWS/Vercel deployment"
        ],
        colorTheme: "green" as const
      }
    ]
  },
  process: {
    title: "Our Development Process",
    description: "From concept to app store approval, we follow a proven process to deliver exceptional e-commerce apps",
    steps: [
      {
        number: "1",
        title: "Requirements Analysis",
        description: "Understanding your business needs, target platform, and technical requirements"
      },
      {
        number: "2",
        title: "Design & Architecture",
        description: "Creating user-friendly interfaces and scalable backend architecture"
      },
      {
        number: "3",
        title: "Development & Testing",
        description: "Building robust apps with comprehensive testing and platform compliance"
      },
      {
        number: "4",
        title: "Deployment & Support",
        description: "App store submission, launch support, and ongoing maintenance"
      }
    ]
  },
  contact: {
    title: "Ready to Build Your E-commerce App?",
    description: "Let's discuss your Shopify or BigCommerce app project and how we can enhance your store's capabilities"
  }
};

export default function EcommerceApps() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title={content.hero.title}
        titleHighlight={content.hero.titleHighlight}
        description={content.hero.description}
        ctaText={content.hero.ctaText}
        ctaIcon="fas fa-shopping-cart"
        theme="blue"
      />

      {/* Platform Expertise Section */}
      <FeatureGrid
        title={content.platformExpertise.title}
        description={content.platformExpertise.description}
        features={content.platformExpertise.features}
        columns={3}
        backgroundColor="white"
      />

      {/* App Types */}
      <ServiceTiers
        title={content.appTypes.title}
        description={content.appTypes.description}
        tiers={content.appTypes.levels}
        backgroundColor="gray"
      />

      {/* Use Cases Section */}
      <FeatureGrid
        title={content.useCases.title}
        description={content.useCases.description}
        features={content.useCases.cases}
        columns={4}
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
        accentColor="blue"
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
