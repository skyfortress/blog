import { Metadata } from 'next';

interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  tags?: string[];
}

const baseUrl = 'https://skyfortress.dev';
const defaultOgImage = `${baseUrl}/assets/og-image.png`;

export function generateMetadata(config: MetadataConfig): Metadata {
  const {
    title,
    description,
    keywords = '',
    canonicalUrl,
    ogImage = defaultOgImage,
    ogType = 'website',
    publishedTime,
    authors,
    tags,
  } = config;

  const fullTitle = title.includes('SkyFortress') ? title : `${title} | SkyFortress`;
  const url = canonicalUrl || baseUrl;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords || 'AI development, AI services, machine learning, MLOps, chatbots, AI audit, expert code review',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'SkyFortress',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: ogType,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@skyfortress',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  // Add article-specific metadata
  if (ogType === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      authors: authors || [],
      tags: tags || [],
    };
  }

  return metadata;
}

// Predefined metadata for common pages
export const pageMetadata = {
  home: {
    title: 'SkyFortress - Expert AI Development & MLOps Services',
    description: 'Transform your business with custom AI solutions, MLOps infrastructure, intelligent chatbots, and expert code audits. Professional AI development services for enterprises and startups.',
    keywords: 'AI development, machine learning, MLOps, chatbots, voicebots, Telegram bots, e-commerce apps, AI audit, custom AI solutions, artificial intelligence services',
    canonicalUrl: baseUrl,
  },
  blog: {
    title: 'AI Development Blog - Expert Insights & Best Practices',
    description: 'Expert insights, best practices, and cutting-edge knowledge about AI development, security, MLOps, and optimization from industry professionals.',
    keywords: 'AI blog, machine learning insights, MLOps best practices, AI security, AI development tutorials, AI trends, expert AI knowledge',
    canonicalUrl: `${baseUrl}/blog`,
  },
  customAI: {
    title: 'Custom AI Solutions - Machine Learning & Generative AI Development',
    description: 'Build tailored AI solutions from the ground up. Custom machine learning models, generative AI applications, computer vision, and NLP solutions for your business.',
    keywords: 'custom AI development, machine learning models, generative AI, computer vision, NLP, AI consulting, bespoke AI solutions, enterprise AI',
    canonicalUrl: `${baseUrl}/custom-ai-services`,
  },
  mlops: {
    title: 'MLOps Services - Machine Learning Pipeline Automation',
    description: 'Streamline your ML lifecycle with enterprise-grade MLOps infrastructure. Automated ML pipelines, model monitoring, and cloud ML infrastructure solutions.',
    keywords: 'MLOps, machine learning operations, ML pipeline automation, model monitoring, data engineering, cloud ML infrastructure, ML deployment',
    canonicalUrl: `${baseUrl}/mlops-services`,
  },
  chatbotVoicebot: {
    title: 'AI Chatbots & Voicebots - Advanced Conversational AI Development',
    description: 'Build sophisticated conversational AI experiences with cutting-edge chatbots and voicebots. Natural voice interactions and intelligent assistants across all platforms.',
    keywords: 'AI chatbots, voicebots, conversational AI, voice assistants, chatbot development, AI customer service, natural language processing',
    canonicalUrl: `${baseUrl}/chatbot-voicebot-services`,
  },
  telegramBots: {
    title: 'AI-Powered Telegram Bots - Intelligent Automation & LLM Integration',
    description: 'Transform your business with intelligent Telegram bots powered by GPT, Claude, and custom AI models. From automation to complex conversational AI.',
    keywords: 'Telegram bots, AI Telegram bots, LLM integration, GPT bots, Claude bots, Telegram automation, conversational Telegram bots',
    canonicalUrl: `${baseUrl}/telegram-bots`,
  },
  ecommerce: {
    title: 'AI-Enhanced E-commerce Apps - Shopify & BigCommerce Development',
    description: 'Transform your online store with intelligent apps for Shopify and BigCommerce. AI-powered recommendations, smart inventory, and enhanced customer experiences.',
    keywords: 'Shopify apps, BigCommerce apps, e-commerce AI, AI recommendations, smart inventory, e-commerce development, AI shopping experiences',
    canonicalUrl: `${baseUrl}/ecommerce-apps`,
  },
};
