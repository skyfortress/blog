// JSON-LD structured data for SEO
export interface StructuredDataConfig {
  type: 'Organization' | 'Website' | 'Article' | 'Service' | 'BlogPosting';
  title?: string;
  description?: string;
  url?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

const baseUrl = 'https://skyfortress.dev';

export function generateStructuredData(config: StructuredDataConfig) {
  const { type, title, description, url, publishedTime, modifiedTime, author, tags } = config;

  const commonData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url: url || baseUrl,
  };

  switch (type) {
    case 'Organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SkyFortress',
        url: baseUrl,
        logo: `${baseUrl}/assets/logo.png`,
        description: 'Expert AI development and MLOps services for enterprises and startups',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'hello@skyfortress.dev',
        },
        sameAs: [
          'https://twitter.com/skyfortress',
          'https://linkedin.com/company/skyfortress',
          'https://github.com/skyfortress',
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US',
        },
        founder: {
          '@type': 'Person',
          name: 'SkyFortress Team',
        },
        foundingDate: '2024',
        industry: 'Artificial Intelligence',
        numberOfEmployees: '10-50',
        knowsAbout: [
          'Artificial Intelligence',
          'Machine Learning',
          'MLOps',
          'Chatbot Development',
          'AI Auditing',
          'Custom AI Solutions',
        ],
      };

    case 'Website':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SkyFortress',
        url: baseUrl,
        description: 'Expert AI development and MLOps services',
        publisher: {
          '@type': 'Organization',
          name: 'SkyFortress',
          logo: `${baseUrl}/assets/logo.png`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      };

    case 'Article':
    case 'BlogPosting':
      return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        url,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
          '@type': 'Person',
          name: author || 'SkyFortress Team',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SkyFortress',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/assets/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
        keywords: tags?.join(', '),
        articleSection: 'AI Development',
      };

    case 'Service':
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        description,
        url,
        provider: {
          '@type': 'Organization',
          name: 'SkyFortress',
          url: baseUrl,
        },
        areaServed: 'Worldwide',
        serviceType: 'AI Development Services',
        category: 'Technology',
      };

    default:
      return commonData;
  }
}

// Predefined structured data for common pages
export const structuredDataTemplates = {
  organization: () => generateStructuredData({ type: 'Organization' }),
  website: () => generateStructuredData({ type: 'Website' }),
  customAIService: () => generateStructuredData({
    type: 'Service',
    title: 'Custom AI Solutions',
    description: 'Build tailored AI solutions from the ground up with machine learning models, generative AI applications, and intelligent systems.',
    url: `${baseUrl}/custom-ai-services`,
  }),
  mlopsService: () => generateStructuredData({
    type: 'Service',
    title: 'MLOps Services',
    description: 'Streamline your ML lifecycle with enterprise-grade MLOps infrastructure and automated ML pipelines.',
    url: `${baseUrl}/mlops-services`,
  }),
  chatbotService: () => generateStructuredData({
    type: 'Service',
    title: 'AI Chatbots & Voicebots',
    description: 'Build sophisticated conversational AI experiences with cutting-edge chatbots and voicebots.',
    url: `${baseUrl}/chatbot-voicebot-services`,
  }),
  telegramBotsService: () => generateStructuredData({
    type: 'Service',
    title: 'AI-Powered Telegram Bots',
    description: 'Transform your business with intelligent Telegram bots powered by cutting-edge AI and LLM technology.',
    url: `${baseUrl}/telegram-bots`,
  }),
  ecommerceService: () => generateStructuredData({
    type: 'Service',
    title: 'AI-Enhanced E-commerce Apps',
    description: 'Transform your online store with intelligent custom apps for Shopify and BigCommerce.',
    url: `${baseUrl}/ecommerce-apps`,
  }),
};
