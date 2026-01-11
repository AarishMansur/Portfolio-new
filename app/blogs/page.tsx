import { getAllBlogs } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function AllBlogsPage() {
    const blogs = getAllBlogs();
    return (
        <div className="space-y-12 animate-blur-fade">
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-gray-500 uppercase tracking-[0.25em] text-[10px] font-semibold">
                        Featured
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight italic">
                        Blogs
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                {blogs.map((blog) => (
                    <Link
                        key={blog.slug}
                        href={`/blogs/${blog.slug}`}
                        className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] transition-all duration-300 hover:border-white/20"
                    >
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                            <Image
                                src={blog.image || "/character.jpg"}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                        </div>

                        <div className="flex flex-col p-6 gap-y-4">
                            <h3 className="text-lg font-bold tracking-tight group-hover:text-white transition-colors line-clamp-2 leading-snug">
                                {blog.title}
                            </h3>

                            <p className="text-gray-400 text-[10px] leading-relaxed line-clamp-2 opacity-70">
                                {blog.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                                    <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                </div>

                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors flex items-center gap-1">
                                    Read More <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center pt-6">
            </div>
        </div>
    );
}
