import { getBlogPosts } from "@/data/blog";
import BlogPagination from './BlogPagination';

export const metadata = {
  title: "Insights | Sanchay Thalnerkar",
  description: "Exploring ideas in tech, code, and beyond.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <section className="max-w-4xl mx-auto px-4 pb-12">
      <div className="text-center mb-16">
        <h1 className="inline-block text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 leading-tight pb-1">
          My Insights
        </h1>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2"></div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Exploring the realms of technology and beyond</p>
      </div>
      <BlogPagination posts={sortedPosts} />
    </section>
  );
}