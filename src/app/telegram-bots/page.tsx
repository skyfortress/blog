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
    title: "AI-Powered",
    titleHighlight: "Telegram Bots",
    description: "Transform your business with intelligent Telegram bots powered by cutting-edge AI and LLM technology. From simple automation to complex conversational AI, we build bots that understand and engage.",
    ctaText: "Start Your Bot Project"
  },
  aiExpertise: {
    title: "AI & LLM Integration Expertise",
    description: "We specialize in integrating advanced AI models and Large Language Models into Telegram bots, creating intelligent conversational experiences that understand context, intent, and deliver meaningful responses.",
    features: [
      {
        icon: "fas fa-brain",
        title: "GPT & Claude Integration",
        description: "Seamless integration with OpenAI GPT models, Anthropic Claude, and other leading LLMs for natural conversations and intelligent responses.",
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-cogs",
        title: "Custom AI Models",
        description: "Fine-tuned models trained on your specific data and use cases for domain-specific expertise and brand-consistent interactions.",
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-magic",
        title: "Multi-Modal AI",
        description: "Image recognition, voice processing, document analysis, and other AI capabilities integrated into your Telegram bot experience.",
        colorTheme: "purple" as const
      }
    ]
  },
  complexityLevels: {
    title: "Bots for Every Complexity Level",
    description: "From simple automation to sophisticated AI assistants, we develop Telegram bots that scale with your needs",
    levels: [
      {
        icon: "fas fa-play",
        title: "Simple Automation",
        features: [
          "Basic commands and responses",
          "Schedule notifications",
          "Simple data collection",
          "Basic integrations"
        ],
        description: "Perfect for straightforward automation tasks and basic user interactions.",
        popular: false,
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-rocket",
        title: "Advanced Intelligence",
        features: [
          "AI-powered conversations",
          "Context awareness",
          "Database integration",
          "API connections",
          "User personalization"
        ],
        description: "Ideal for businesses needing intelligent customer support and engagement.",
        popular: true,
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-crown",
        title: "Enterprise Solutions",
        features: [
          "Custom AI model training",
          "Multi-language support",
          "Complex workflows",
          "Advanced analytics",
          "Enterprise security"
        ],
        description: "Comprehensive solutions for large organizations with complex requirements.",
        popular: false,
        colorTheme: "purple" as const
      }
    ]
  },
  useCases: {
    title: "Popular Bot Use Cases",
    description: "Real-world applications where AI-powered Telegram bots make a difference",
    cases: [
      {
        icon: "fas fa-headset",
        title: "Customer Support",
        description: "24/7 intelligent customer service with escalation to human agents",
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-shopping-cart",
        title: "E-commerce",
        description: "Product recommendations, order tracking, and sales assistance",
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Education",
        description: "Interactive learning assistants and course management",
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-chart-line",
        title: "Business Analytics",
        description: "Data insights, reporting, and business intelligence delivery",
        colorTheme: "orange" as const
      }
    ]
  },
  techStack: {
    title: "Our Technology Stack",
    description: "Built with modern, scalable technologies for reliable and efficient bot performance",
    categories: [
      {
        icon: "fab fa-python",
        title: "Backend Development",
        technologies: [
          "Python with aiogram/python-telegram-bot",
          "Node.js with Grammy/Telegraf",
          "FastAPI and NestJS frameworks",
          "Webhook and polling implementations"
        ],
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-brain",
        title: "AI & Machine Learning",
        technologies: [
          "OpenAI GPT-4/GPT-3.5 integration",
          "Anthropic Claude API",
          "Custom model training with Hugging Face",
          "LangChain for complex AI workflows"
        ],
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-database",
        title: "Infrastructure",
        technologies: [
          "PostgreSQL, MongoDB databases",
          "Redis for caching and sessions",
          "Docker containerization",
          "AWS/GCP cloud deployment"
        ],
        colorTheme: "green" as const
      }
    ]
  },
  process: {
    title: "Our Development Process",
    description: "From concept to deployment, we follow a proven process to deliver exceptional Telegram bots",
    steps: [
      {
        number: "1",
        title: "Discovery & Planning",
        description: "Understanding your needs, use cases, and technical requirements"
      },
      {
        number: "2",
        title: "AI Integration Design",
        description: "Selecting optimal AI models and designing intelligent conversation flows"
      },
      {
        number: "3",
        title: "Development & Testing",
        description: "Building, training, and rigorously testing your bot for reliability"
      },
      {
        number: "4",
        title: "Deployment & Support",
        description: "Launching your bot and providing ongoing maintenance and improvements"
      }
    ]
  },
  contact: {
    title: "Ready to Build Your AI-Powered Bot?",
    description: "Let's discuss your Telegram bot project and how AI can enhance your business operations"
  }
};

export default function TelegramBots() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title={content.hero.title}
        titleHighlight={content.hero.titleHighlight}
        description={content.hero.description}
        ctaText={content.hero.ctaText}
        ctaIcon="fab fa-telegram-plane"
        theme="blue"
      />

      {/* AI Expertise Section */}
      <FeatureGrid
        title={content.aiExpertise.title}
        description={content.aiExpertise.description}
        features={content.aiExpertise.features}
        columns={3}
        backgroundColor="white"
      />

      {/* Bot Complexity Levels */}
      <ServiceTiers
        title={content.complexityLevels.title}
        description={content.complexityLevels.description}
        tiers={content.complexityLevels.levels}
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
