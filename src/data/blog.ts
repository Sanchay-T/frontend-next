import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  headerImage?: string;
  readingTime?: string;
};

type BlogPost = {
  content: string;
  metadata: Metadata;
  slug: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  
  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);
  
  return {
    content,
    metadata: data as Metadata,
    slug,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), "content");
  const mdxFiles = getMDXFiles(postsDirectory);
  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const post = await getPost(slug);
      return post;
    })
  );
  return posts.filter((post): post is BlogPost => post !== null);
}