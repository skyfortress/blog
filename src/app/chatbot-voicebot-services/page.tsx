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
    title: "Advanced AI",
    titleHighlight: "Chatbots & Voicebots",
    description: "Build sophisticated conversational AI experiences with cutting-edge chatbots and voicebots. From text-based assistants to natural voice interactions, we create AI solutions that understand, respond, and engage users across all platforms.",
    ctaText: "Start Your AI Assistant Project"
  },
  aiExpertise: {
    title: "State-of-the-Art Conversational AI",
    description: "We leverage the latest AI models, voice synthesis, and real-time communication technologies to create intelligent conversational experiences that feel natural and provide real value.",
    features: [
      {
        icon: "fas fa-comments",
        title: "Advanced Chatbots",
        description: "Multi-platform chatbots powered by GPT-4, Claude, and custom AI models with context awareness, memory, and intelligent routing capabilities.",
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-microphone",
        title: "Natural Voice AI",
        description: "Voicebots with ElevenLabs neural voice synthesis, real-time speech processing, and natural conversation flows for phone and web applications.",
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-network-wired",
        title: "Real-Time Integration",
        description: "WebSocket-powered real-time communication, Twilio integration for phone systems, and seamless API connectivity for enterprise systems.",
        colorTheme: "green" as const
      }
    ]
  },
  platforms: {
    title: "Multi-Platform AI Assistants",
    description: "Deploy your AI assistants across all major platforms and communication channels",
    features: [
      {
        icon: "fas fa-globe",
        title: "Web Chat Widgets",
        description: "Embeddable chat widgets with real-time WebSocket connections, file upload support, and seamless escalation to human agents."
      },
      {
        icon: "fas fa-phone",
        title: "Voice Phone Systems",
        description: "Twilio-powered voicebots for customer service, appointment booking, lead qualification, and automated phone support."
      },
      {
        icon: "fab fa-whatsapp",
        title: "WhatsApp Business",
        description: "AI-powered WhatsApp bots with rich media support, automated responses, and integration with your business systems."
      },
      {
        icon: "fab fa-facebook-messenger",
        title: "Messenger & Social",
        description: "Facebook Messenger, Instagram, and other social platform bots with AI-driven conversations and e-commerce integration."
      },
      {
        icon: "fab fa-slack",
        title: "Workplace Integration",
        description: "Slack, Microsoft Teams, and Discord bots for internal automation, HR assistance, IT support, and productivity enhancement."
      },
      {
        icon: "fas fa-mobile-alt",
        title: "Mobile Applications",
        description: "Native mobile app integration with voice and text AI assistants, offline capabilities, and push notification support."
      }
    ]
  },
  technologyStack: {
    title: "Cutting-Edge Technology Stack",
    description: "Comprehensive AI and communication technologies for building sophisticated conversational experiences",
    categories: [
      {
        icon: "fas fa-brain",
        title: "AI & Language Models",
        technologies: [
          "OpenAI GPT-4 & GPT-4o",
          "Anthropic Claude 3.5",
          "Google Gemini Pro",
          "Custom Fine-tuned Models",
          "Retrieval Augmented Generation (RAG)",
          "Function Calling & Tool Use"
        ],
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-microphone-alt",
        title: "Voice & Speech Technology",
        technologies: [
          "ElevenLabs Neural Voice Synthesis",
          "Azure Cognitive Speech Services",
          "Google Cloud Speech-to-Text",
          "Real-time Voice Processing",
          "Custom Voice Cloning",
          "Multi-language Support"
        ],
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-network-wired",
        title: "Communication Infrastructure",
        technologies: [
          "Twilio Voice & Messaging",
          "WebSocket Real-time Communication",
          "WebRTC for Browser Voice",
          "SIP Integration",
          "SMS & MMS Support",
          "Push Notifications"
        ],
        colorTheme: "green" as const
      }
    ]
  },
  serviceTypes: {
    title: "Comprehensive AI Assistant Services",
    description: "Choose the perfect conversational AI solution for your business needs",
    tiers: [
      {
        icon: "fas fa-comments",
        title: "Smart Chatbot",
        description: "Intelligent text-based conversational AI for websites and messaging platforms",
        features: [
          "GPT-4 powered conversations",
          "Custom knowledge base integration",
          "Multi-platform deployment",
          "Basic analytics dashboard",
          "Email escalation system",
          "Mobile-responsive design",
          "API integrations (up to 3)",
          "30 days support & maintenance"
        ],
        popular: false,
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-microphone",
        title: "Advanced Voicebot",
        description: "Full-featured voice AI with natural speech synthesis and phone system integration",
        features: [
          "ElevenLabs neural voice synthesis",
          "Twilio phone system integration",
          "Real-time speech processing",
          "Advanced conversation flows",
          "CRM & business system integration",
          "Call analytics & reporting",
          "Custom voice training",
          "Multi-language support",
          "60 days support & maintenance"
        ],
        popular: true,
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-cogs",
        title: "Enterprise AI Platform",
        description: "Complete conversational AI platform with custom models and enterprise integrations",
        features: [
          "Custom AI model development",
          "Omnichannel deployment",
          "Advanced WebSocket infrastructure",
          "Enterprise security & compliance",
          "Custom voice cloning",
          "Advanced analytics & AI insights",
          "Multi-tenant architecture",
          "24/7 monitoring & support",
          "Dedicated project manager",
          "6 months support & updates"
        ],
        popular: false,
        colorTheme: "green" as const
      }
    ]
  },
  process: {
    title: "AI Assistant Development Process",
    description: "Our proven methodology for building successful conversational AI solutions",
    steps: [
      {
        number: "1",
        title: "Discovery & Strategy",
        description: "We analyze your use cases, define conversation flows, select optimal AI models, and design the user experience for your chatbot or voicebot."
      },
      {
        number: "2",
        title: "AI Model Configuration",
        description: "Fine-tune language models, configure voice synthesis, set up knowledge bases, and create custom training data for your specific domain."
      },
      {
        number: "3",
        title: "Development & Integration",
        description: "Build the conversational AI system, integrate with your platforms, implement real-time communication, and connect to your business systems."
      },
      {
        number: "4",
        title: "Testing & Optimization",
        description: "Comprehensive testing of conversation flows, voice quality, response accuracy, and performance optimization for real-world usage."
      },
      {
        number: "5",
        title: "Deployment & Monitoring",
        description: "Deploy to production environments, set up monitoring and analytics, train your team, and provide ongoing optimization based on user interactions."
      }
    ]
  },
  useCases: {
    title: "Real-World Applications",
    description: "Our AI assistants solve real business challenges across industries",
    cases: [
      {
        icon: "fas fa-headset",
        title: "Customer Support Automation",
        description: "24/7 intelligent customer service with escalation to human agents, ticket creation, and knowledge base integration."
      },
      {
        icon: "fas fa-calendar-check",
        title: "Appointment Scheduling",
        description: "Voice and chat-based appointment booking with calendar integration, reminder systems, and automated confirmations."
      },
      {
        icon: "fas fa-user-tie",
        title: "Sales & Lead Qualification",
        description: "AI assistants that qualify leads, schedule demos, answer product questions, and guide prospects through the sales funnel."
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Educational Assistants",
        description: "AI tutors and educational bots that provide personalized learning experiences, answer questions, and track progress."
      },
      {
        icon: "fas fa-stethoscope",
        title: "Healthcare Support",
        description: "HIPAA-compliant medical assistants for appointment scheduling, symptom checking, and patient education."
      },
      {
        icon: "fas fa-shopping-cart",
        title: "E-commerce Assistance",
        description: "Shopping assistants that help customers find products, process orders, handle returns, and provide personalized recommendations."
      }
    ]
  }
};

export default function ChatbotVoicebotServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Hero
        title={content.hero.title}
        titleHighlight={content.hero.titleHighlight}
        description={content.hero.description}
        ctaText={content.hero.ctaText}
      />

      {/* AI Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FeatureGrid 
            title={content.aiExpertise.title}
            description={content.aiExpertise.description}
            features={content.aiExpertise.features} 
          />
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.platforms.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.platforms.description}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {content.platforms.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.useCases.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.useCases.description}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {content.useCases.cases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${useCase.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologyStack 
        title={content.technologyStack.title}
        description={content.technologyStack.description}
        categories={content.technologyStack.categories} 
      />
      
      <ServiceTiers 
        title={content.serviceTypes.title}
        description={content.serviceTypes.description}
        tiers={content.serviceTypes.tiers}
      />
      
      <ProcessSteps 
        title={content.process.title}
        description={content.process.description}
        steps={content.process.steps}
      />
      
      <ContactSection 
        title="Ready to Build Your AI Assistant?"
        description="Let's discuss your chatbot or voicebot project and create an intelligent conversational experience that engages your users and grows your business."
      />
      
      <Footer />
    </div>
  );
}
