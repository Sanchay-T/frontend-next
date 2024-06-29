'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    headerImage?: string;
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPagination({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="space-y-8">
        {currentPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg flex">
              {post.metadata.headerImage && (
                <div className="w-1/3 relative">
                  <Image
                    src={post.metadata.headerImage}
                    alt={post.metadata.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                  {post.metadata.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {formatDate(post.metadata.publishedAt)}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {post.metadata.summary}
                </p>
                <span className="text-blue-600 dark:text-blue-400 group-hover:underline text-sm">
                  Read more →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-1 px-4 py-2 rounded-full ${
              currentPage === number
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors duration-300`}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
}