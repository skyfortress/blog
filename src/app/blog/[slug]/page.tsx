import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog';
import { generateMetadata as genMetadata } from '@/lib/metadata';
import { generateStructuredData } from '@/lib/structured-data';
import Script from 'next/script';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | SkyFortress Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return genMetadata({
    title: `${post.title}`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || 'AI development, machine learning, technology insights',
    canonicalUrl: `https://skyfortress.dev/blog/${slug}`,
    ogImage: `https://skyfortress.dev/assets/blog-og-${slug}.png`, // Custom OG image per post if available
    ogType: 'article',
    publishedTime: post.date,
    authors: [post.author],
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <header className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Blog
          </Link>
          
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gray-500">{formatDate(post.date)}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{post.author}</span>
              {post.featured && (
                <>
                  <span className="text-gray-400">•</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                    Featured
                  </span>
                </>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        <div
          className="prose prose-lg prose-indigo max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg border border-indigo-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Expert Help with Your AI Project?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team of AI experts can help you audit, optimize, and secure your AI-generated applications. 
            Get professional insights and ensure your project is production-ready.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Your Project Audited
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </main>

      <Footer />
      
      {/* Structured Data for SEO */}
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData({
            type: 'BlogPosting',
            title: post.title,
            description: post.excerpt,
            url: `https://skyfortress.dev/blog/${post.slug}`,
            publishedTime: post.date,
            modifiedTime: post.date,
            author: post.author,
            tags: post.tags,
          })),
        }}
      />
    </div>
  );
}
