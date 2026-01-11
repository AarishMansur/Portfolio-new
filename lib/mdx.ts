import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOGS_PATH = path.join(process.cwd(), 'content');

export interface BlogMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    image: string;
    tags: string[];
    category?: string;
    author?: string;
}

export const getBlogBySlug = (slug: string) => {
    const fileName = `${slug}.mdx`;
    const filePath = path.join(BLOGS_PATH, fileName);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
        meta: { ...data, slug } as BlogMeta,
        content: content,
    };
};

export const getAllBlogs = (): BlogMeta[] => {
    if (!fs.existsSync(BLOGS_PATH)) {
        return [];
    }

    const files = fs.readdirSync(BLOGS_PATH);

    return files
        .filter((path) => /\.mdx?$/.test(path))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx?$/, '');
            const { data } = matter(fs.readFileSync(path.join(BLOGS_PATH, fileName), 'utf8'));
            return {
                ...data,
                slug: slug,
            } as BlogMeta;
        })
        .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
};
