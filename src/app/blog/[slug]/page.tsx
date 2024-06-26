// src/app/blog/[slug]/page.tsx

import { getPost } from "@/data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

interface Params {
  slug: string;
}

interface Post {
  source: string;
  metadata: {
    [key: string]: any;
    title: string;
    summary: string;
    publishedAt: string;
    image?: string;
  };
  slug: string;
  content: string; // Ensure content property is included
}

export async function generateMetadata({ params }: { params: Params }) {
  const post = await getPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.metadata.title} | Sanchay Thalnerkar's Blog`,
    description: post.metadata.summary,
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const post = await getPost(params.slug);

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <BlurFade>
        <h1 className="text-4xl font-bold mb-4">{post.metadata.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        {post.metadata.image && (
          <div className="mb-8">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              width={1200}
              height={630}
              className="rounded-lg"
            />
          </div>
        )}
        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </BlurFade>
    </article>
  );
}
