import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import ServiceTiers from '@/components/ServiceTiers';
import TechnologyStack from '@/components/TechnologyStack';
import ProcessSteps from '@/components/ProcessSteps';
import ContactSection from '@/components/ContactSection';
import { generateMetadata as genMetadata, pageMetadata } from '@/lib/metadata';
import { structuredDataTemplates } from '@/lib/structured-data';
import Script from 'next/script';

export const metadata = genMetadata(pageMetadata.mlops);

const content = {
  hero: {
    title: "MLOps",
    titleHighlight: "Solutions",
    description: "Streamline your machine learning lifecycle with enterprise-grade MLOps infrastructure. From model development to production deployment and monitoring, we build robust ML pipelines that scale with your business.",
    ctaText: "Optimize Your ML Pipeline"
  },
  mlopsCapabilities: {
    title: "Complete MLOps Infrastructure Services",
    description: "We design and implement end-to-end MLOps solutions that automate your machine learning workflows, ensure model reliability, and accelerate time-to-market for AI initiatives.",
    features: [
      {
        icon: "fas fa-project-diagram",
        title: "ML Pipeline Automation",
        description: "Automated CI/CD pipelines for ML models with version control, testing, and deployment workflows using MLflow, Kubeflow, and custom solutions.",
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-chart-line",
        title: "Model Monitoring & Observability",
        description: "Real-time model performance monitoring, drift detection, and automated alerts using tools like Evidently, WhyLabs, and custom monitoring solutions.",
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-database",
        title: "Data Engineering & Management",
        description: "Scalable data pipelines, feature stores, and data versioning systems to ensure consistent, high-quality data for your ML models.",
        colorTheme: "purple" as const
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud ML Infrastructure",
        description: "Cloud-native MLOps solutions on AWS, GCP, Azure with auto-scaling, cost optimization, and multi-region deployment capabilities.",
        colorTheme: "orange" as const
      }
    ]
  },
  serviceTypes: {
    title: "MLOps Solutions for Every Scale",
    description: "Whether you're a startup with your first ML model or an enterprise managing hundreds of models, we have the expertise to streamline your operations",
    levels: [
      {
        icon: "fas fa-seedling",
        title: "MLOps Foundation",
        features: [
          "Basic CI/CD for ML models",
          "Model versioning setup",
          "Simple monitoring dashboard",
          "Cloud deployment automation",
          "Basic experiment tracking"
        ],
        description: "Perfect for teams getting started with MLOps practices and wanting to establish solid foundations.",
        popular: false,
        colorTheme: "green" as const
      },
      {
        icon: "fas fa-cogs",
        title: "Production MLOps",
        features: [
          "Advanced pipeline automation",
          "A/B testing infrastructure",
          "Comprehensive monitoring",
          "Feature store implementation",
          "Multi-environment management",
          "Performance optimization"
        ],
        description: "Ideal for companies with multiple models in production needing robust MLOps infrastructure.",
        popular: true,
        colorTheme: "blue" as const
      },
      {
        icon: "fas fa-industry",
        title: "Enterprise MLOps",
        features: [
          "Multi-cloud architecture",
          "Advanced governance & compliance",
          "Custom tooling development",
          "Large-scale orchestration",
          "Enterprise security integration",
          "Cost optimization strategies"
        ],
        description: "Comprehensive MLOps platform for large organizations with complex requirements and compliance needs.",
        popular: false,
        colorTheme: "purple" as const
      }
    ]
  },
  techStack: {
    title: "MLOps Technology Stack",
    description: "We work with proven, industry-standard tools to build reliable MLOps solutions",
    categories: [
      {
        title: "Cloud Platforms",
        technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes"],
        icon: "fas fa-cloud"
      },
      {
        title: "Machine Learning",
        technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter"],
        icon: "fas fa-brain"
      },
      {
        title: "Data & Databases",
        technologies: ["PostgreSQL", "MongoDB", "Redis", "Apache Spark", "Pandas"],
        icon: "fas fa-database"
      },
      {
        title: "CI/CD & Deployment",
        technologies: ["GitHub Actions", "Jenkins", "GitLab CI", "Docker Hub", "Terraform"],
        icon: "fas fa-rocket"
      },
      {
        title: "Monitoring & Analytics",
        technologies: ["Grafana", "Prometheus", "DataDog", "Google Analytics", "Elasticsearch"],
        icon: "fas fa-chart-bar"
      },
      {
        title: "Version Control",
        technologies: ["Git", "GitHub", "GitLab", "Bitbucket"],
        icon: "fas fa-code-branch"
      }
    ]
  },
  process: {
    title: "Our MLOps Implementation Process",
    description: "A systematic approach to building and deploying production-ready MLOps infrastructure",
    steps: [
      {
        number: "1",
        title: "Infrastructure Assessment",
        description: "Evaluate current ML workflows, identify bottlenecks, and design optimal MLOps architecture for your specific needs"
      },
      {
        number: "2",
        title: "Platform Setup & Configuration",
        description: "Deploy and configure MLOps tools, establish CI/CD pipelines, and implement monitoring and governance frameworks"
      },
      {
        number: "3",
        title: "Model Pipeline Development",
        description: "Build automated training, validation, and deployment pipelines with proper testing, versioning, and rollback capabilities"
      },
      {
        number: "4",
        title: "Production Deployment",
        description: "Deploy models to production with proper scaling, monitoring, and alerting systems in place for reliable operations"
      },
      {
        number: "5",
        title: "Optimization & Maintenance",
        description: "Continuous monitoring, performance tuning, cost optimization, and platform evolution to meet changing business needs"
      }
    ]
  },
  contact: {
    title: "Ready to Scale Your ML Operations?",
    description: "Let's discuss how our MLOps solutions can accelerate your AI initiatives, improve model reliability, and reduce operational overhead"
  }
};

export default function MLOpsServices() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title={content.hero.title}
        titleHighlight={content.hero.titleHighlight}
        description={content.hero.description}
        ctaText={content.hero.ctaText}
        ctaIcon="fas fa-cogs"
        theme="blue"
      />

      {/* MLOps Capabilities Section */}
      <FeatureGrid
        title={content.mlopsCapabilities.title}
        description={content.mlopsCapabilities.description}
        features={content.mlopsCapabilities.features}
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
      
      {/* Structured Data for SEO */}
      <Script
        id="mlops-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataTemplates.mlopsService()),
        }}
      />
    </div>
  );
}
