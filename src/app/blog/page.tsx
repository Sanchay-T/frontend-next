import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import type { Post } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="min-h-screen bg-white p-8">
      <section className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-4 text-gray-800 animate-fade-in-up">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
          Dive into my thoughts, stories, and ideas on software development,
          life, and more. Join me on this exciting journey of learning and
          growth.
        </p>

        <div className="mt-8 flex justify-center animate-fade-in-up animate-delay-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blog posts..."
              className="pl-10 pr-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800 animate-fade-in-up">
          Featured Post
        </h2>
        <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden animate-fade-in-up animate-delay-100">
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 animate-fade-in-up">
              An Exciting Journey Begins
            </h3>
            <p className="text-gray-600 animate-fade-in-up animate-delay-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              malesuada velit vel velit bibendum, vel bibendum odio facilisis.
            </p>
            <div className="mt-4 animate-fade-in-up animate-delay-200">
              <Link
                href="/blog/featured-post"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
              >
                Read more
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="rounded-lg shadow-lg bg-gray-50 overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="p-6">
                <h2 className="font-semibold text-xl mb-2 text-gray-900">
                  {post.metadata.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {new Date(post.metadata.publishedAt).toLocaleDateString()}
                </p>
                <p className="mt-4 text-gray-600">{post.metadata.summary}</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
}