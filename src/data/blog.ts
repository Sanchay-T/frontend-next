import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  excerpt: string;
};

export type Post = {
  source: string;
  metadata: Metadata;
  slug: string;
  content: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  excerpt: string;
};

type Post = {
  source: string;
  metadata: Metadata;
  slug: string;
  content: string; // Add content property
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join("content", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null; // Return null if the file does not exist
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);

  return {
    source,
    metadata: metadata as Metadata,
    slug,
    content, // Ensure content property is included
  };
}

async function getAllPosts(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const post = await getPost(slug);
      if (post) {
        const { metadata, source } = post;
        return {
          metadata,
          slug,
          source,
        };
      }
      return null;
    })
  );
}

In page.tsx:
We've imported the Post type from blog.ts.
We've removed the filter function from the posts.map() call, as null values are now filtered out in the getBlogPosts function.
These changes should resolve the type errors you were experiencing. The component now expects the correct structure for blog posts and their metadata, aligning with the types defined in your blog.ts file.

If you're still encountering any errors, please let me know, and I'll be happy to help you resolve them.

Copy
Retry


Claude can make mistakes. Please double-check responses.





3.5 Sonnet
1
Subscribe to Pro for 5x more usage with Claude 3.5 Sonnet.

Subscribe to Pro


Updated blog.ts

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  excerpt: string;
};

export type Post = {
  source: string;
  metadata: Metadata;
  slug: string;
  content: string;
};

// ... (rest of the file remains the same until getBlogPosts function)

export async function getBlogPosts(): Promise<Omit<Post, 'content'>[]> {
  const posts = await getAllPosts(path.join(process.cwd(), "content"));
  return posts.filter((post): post is Omit<Post, 'content'> => post !== null);
}