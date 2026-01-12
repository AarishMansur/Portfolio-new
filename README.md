# Portfolio

This is a modern, high-performance portfolio built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [MDX](https://mdxjs.com/).

##  Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##  Project Structure

- `app/`: Next.js App Router pages and layouts.
  - `app/blogs/`: Blog listing and individual post pages.
  - `app/project/`: Projects showcase page.
  - `app/experience/`: Contributions and experience page.
- `content/`: MDX files for blog posts.
- `components/`: Reusable UI components.
- `lib/`: Utility functions, data, and MDX processing logic.
- `public/`: Static assets like images and resume.

##  How to Add Blogs

1. Create a new `.mdx` file in the `content/` directory.
2. Add frontmatter at the top of the file:
   ```md
   ---
   title: "Your Blog Title"
   description: "A short description of your blog post"
   date: "2024-03-20"
   image: "/blog-image.jpg"
   tags: ["React", "Next.js"]
   ---
   ```
3. Your blog will automatically appear on the `/blogs` page and the home page.
4. Routing is handled dynamically at `/blogs/[slug]`.

##  How to Add Projects

1. Open `lib/data.ts`.
2. Add a new project object to the `PROJECTS` array:
   ```typescript
   {
     name: "Project Name",
     description: "Project description",
     live: "https://live-link.com",
     github: "https://github.com/your-repo",
     video: "/project-video.mp4", // Optional
     technologies: ["Next.js", "Tailwind"]
   }
   ```
3. Projects are displayed on the `/project` page and featured on the home page.

##  Styling

The project uses Tailwind CSS for styling. Global styles can be found in `app/globals.css`. It features a dark-themed, glassmorphic design with smooth animations.

##  License

This project is licensed under the MIT License.
