import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPosts, formatDate, type BlogPostMeta } from '@/lib/blog';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Insights, best practices, and expert knowledge about AI development, security, and optimization.
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-600">{post.author}</span>
          </div>
          {post.featured && (
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
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
          
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            Read more
            <i className="fas fa-arrow-right ml-2 text-sm"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}
