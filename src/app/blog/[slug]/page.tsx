import { getPost } from "@/data/blog";
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaArrowLeft, FaTwitter, FaLinkedin } from 'react-icons/fa';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.metadata.title} | Sanchay's Blog`,
    description: post.metadata.summary,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      images: [{ url: post.metadata.headerImage || '/default-og-image.jpg' }],
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/blog" className="inline-flex items-center text-blue-600 hover:underline mb-8">
        <FaArrowLeft className="mr-2" />
        Back to all posts
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {post.metadata.title}
        </h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
          <FaCalendar className="mr-2" />
          <time dateTime={post.metadata.publishedAt}>{formatDate(post.metadata.publishedAt)}</time>
          <span className="mx-2">•</span>
          <FaClock className="mr-2" />
          <span>{post.metadata?.readingTime || '5 min read'}</span>
        </div>
        {post.metadata.headerImage && (
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={post.metadata.headerImage}
              alt={post.metadata.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Share this post</h2>
        <div className="flex space-x-4">
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.metadata.title)}&url=${encodeURIComponent(`https://yourdomain.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 inline-flex items-center">
            <FaTwitter className="mr-2" />
            Twitter
          </a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://yourdomain.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.metadata.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 inline-flex items-center">
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
        </div>
      </footer>
    </article>
  );
}
