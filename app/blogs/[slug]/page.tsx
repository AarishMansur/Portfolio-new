import { getBlogBySlug, getAllBlogs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Image from "next/image";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ComponentProps } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Custom MDX Components
const components = {
  h1: (props: ComponentProps<'h1'>) => (
    <h1 className="text-4xl font-bold tracking-tight text-white mt-12 mb-6" {...props} />
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="text-3xl font-bold tracking-tight text-white mt-10 mb-4" {...props} />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3 className="text-2xl font-bold tracking-tight text-white mt-8 mb-3" {...props} />
  ),
  h4: (props: ComponentProps<'h4'>) => (
    <h4 className="text-xl font-bold tracking-tight text-white mt-6 mb-2" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className="text-gray-300 leading-8 mb-6" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300" {...props} />
  ),
  ol: (props: ComponentProps<'ol'>) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-300" {...props} />
  ),
  li: (props: ComponentProps<'li'>) => (
    <li className="text-gray-300 leading-7" {...props} />
  ),
  a: (props: ComponentProps<'a'>) => (
    <a
      className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  strong: (props: ComponentProps<'strong'>) => (
    <strong className="font-bold text-white" {...props} />
  ),
  em: (props: ComponentProps<'em'>) => (
    <em className="italic text-gray-200" {...props} />
  ),
  code: (props: ComponentProps<'code'>) => {
    const { children, className } = props;
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : '';

    // Code block with syntax highlighting
    if (match) {
      return (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={language}
          PreTag="div"
          className="rounded-xl !bg-[#0d1117] border border-white/10 shadow-2xl my-6"
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.7',
          }}
          codeTagProps={{
            style: {
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            }
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      );
    }

    // Inline code
    return (
      <code
        className="text-blue-300 bg-white/5 px-1.5 py-0.5 rounded-md text-sm font-mono"
        {...props}
      />
    );
  },
  pre: (props: ComponentProps<'pre'>) => {
    // Let the code component handle the pre wrapper
    return <>{props.children}</>;
  },
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-6 py-2 my-6 italic text-gray-400 bg-white/5 rounded-r-lg"
      {...props}
    />
  ),
  hr: (props: ComponentProps<'hr'>) => (
    <hr className="border-white/10 my-12" {...props} />
  ),
  table: (props: ComponentProps<'table'>) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-white/10" {...props} />
    </div>
  ),
  th: (props: ComponentProps<'th'>) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-white bg-white/5" {...props} />
  ),
  td: (props: ComponentProps<'td'>) => (
    <td className="px-4 py-3 text-sm text-gray-300 border-t border-white/5" {...props} />
  ),
};

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogData = getBlogBySlug(slug);

  if (!blogData) {
    notFound();
  }

  const { meta, content } = blogData;

  return (
    <div className="max-w-4xl mx-auto rounded-2xl shadow-xl px-8 py-14">
      <article className="max-w-3xl mx-auto animate-blur-fade">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back Blogs
        </Link>

        <header className="space-y-6 mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {meta.tags && meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 text-gray-400 rounded-lg hover:bg-white/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
            {meta.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-400 leading-relaxed">
            {meta.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
            {/* Author */}
            {meta.author && (
              <div className="flex items-center gap-2 text-gray-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                  <Image src='/character.jpg' alt="Author pic" width={400} height={400} className="rounded-full" />
                </div>
                <span className="text-sm font-medium">{meta.author}</span>
              </div>
            )}

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {new Date(meta.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            {/* Reading Time (optional - calculated based on content length) */}
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                {Math.ceil(content.split(' ').length / 200)} min read
              </span>
            </div>
          </div>
        </header>

        {meta.image && (
          <div className="my-12">
            <Image
              src={meta.image}
              alt={meta.title}
              width={1200}
              height={600}
              className="rounded-xl object-cover"
              priority
            />
          </div>
        )}

        <div className="mdx-content">
          <MDXRemote source={content} components={components} />
        </div>

        <footer className="mt-20 pt-10 border-t border-white/10">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 italic">
              Built with MDX & Next.js
            </p>
            <div className="flex gap-4">
              <span className="text-2xl opacity-50 hover:opacity-100 transition-opacity cursor-default">(ﾉ´ヮ`) ﾉ*: ･ﾟ</span>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}