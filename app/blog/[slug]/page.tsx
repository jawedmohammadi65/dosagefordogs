import { posts, getPostBySlug } from "../posts";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://dosagefordogs.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://dosagefordogs.com/blog/${post.slug}`,
      siteName: "DosageForDogs",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return <BlogPostClient post={post} />;
}