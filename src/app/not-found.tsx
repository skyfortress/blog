import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const metadata = genMetadata({
  title: 'Page Not Found - 404',
  description: 'The page you are looking for could not be found. Explore our AI development services and expert solutions.',
  keywords: 'page not found, 404, AI development, SkyFortress services',
  canonicalUrl: 'https://skyfortress.dev/404',
});

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Let&apos;s get you back on track with our AI development services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link
              href="/"
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-home text-indigo-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Home</h3>
              <p className="text-gray-600 text-sm">Explore our AI development services</p>
            </Link>

            <Link
              href="/custom-ai-services"
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-brain text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom AI</h3>
              <p className="text-gray-600 text-sm">Tailored AI solutions for your business</p>
            </Link>

            <Link
              href="/blog"
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-blog text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Blog</h3>
              <p className="text-gray-600 text-sm">Latest insights on AI development</p>
            </Link>
          </div>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
