import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <i className="fas fa-file-alt text-6xl text-gray-300 mb-6"></i>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the blog post you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Blog
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
