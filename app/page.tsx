import { GitMerge, GitPullRequest,  Globe, ArrowRight, Mail, FileText } from 'lucide-react'
import { CONTRIBUTIONS, PROJECTS } from '@/lib/data'
import { getAllBlogs } from '@/lib/mdx'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const blogs = getAllBlogs();
  return (
    <div className="flex flex-col gap-y-16 py-8">

      <section id="hero" className="animate-blur-fade [animation-delay:100ms] pt-20 md:pt-0 -mx-6 md:-mx-12 md:-mt-16 overflow-hidden">

        <div className="relative w-full aspect-21/9 md:aspect-25/9 mb-8 group overflow-hidden">
          <Image
            src={"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"}
            alt="Banner Image"
            fill
            className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />


          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <p className="text-white font-serif italic text-sm md:text-xl lg:text-2xl max-w-sm md:max-w-xl opacity-90 drop-shadow-2xl leading-relaxed">
              &quot;  The world only cares about result — Gun Park &quot;
            </p>
          </div>
        </div>

        <div className="px-6 md:px-12 flex flex-col gap-6">
          <div className="relative shrink-0">
            <Image
              src="/character.jpg"
              alt="Aarish"
              width={100}
              height={100}
              className="rounded-full aspect-square object-cover border border-white/10 shadow-2xl w-16 h-16 md:w-24 md:h-24 "
            />
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
              Hi, I &apos;m Aarish 👋
            </h1>
            <p className="max-w-150 text-gray-400 text-sm md:text-xl leading-relaxed">
              BTech student in AI & Data Science. I love building things, solving problems, and occasionally breaking the compiler.
            </p>

            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-4">
                <a href="https://github.com/AarishMansur" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
               
                  <svg
  viewBox="0 0 48 48"
  className="w-5 h-5 text-[#858b94] hover:text-white transition-colors duration-200"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M23.9978 0C10.7451 0 0 10.7451 0 24.0007C0 34.6044 6.87609 43.5991 16.413 46.7742C17.6138 46.9937 18.0514 46.2526 18.0514 45.6161C18.0514 45.0474 18.0308 43.5372 18.019 41.535C11.3433 42.9847 9.93474 38.3172 9.93474 38.3172C8.843 35.5458 7.26947 34.8077 7.26947 34.8077C5.0904 33.3181 7.43448 33.3476 7.43448 33.3476C9.8434 33.5185 11.1105 35.8214 11.1105 35.8214C13.2512 39.4885 16.7283 38.4292 18.0956 37.8163C18.3136 36.2648 18.9324 35.207 19.619 34.6073C14.2899 34.0018 8.68682 31.942 8.68682 22.7454C8.68682 20.1258 9.62239 17.9836 11.1576 16.3055C10.9101 15.6985 10.0865 13.2586 11.3919 9.95389C11.3919 9.95389 13.4074 9.30857 17.9924 12.4144C19.9063 11.8825 21.9602 11.6158 24.0007 11.607C26.0384 11.6158 28.0922 11.8825 30.009 12.4144C34.5911 9.30857 36.6022 9.95389 36.6022 9.95389C37.912 13.2586 37.0884 15.6985 36.8409 16.3055C38.3791 17.9836 39.3088 20.1258 39.3088 22.7454C39.3088 31.9656 33.6968 33.9944 28.35 34.5882C29.2119 35.3293 29.9796 36.7938 29.9796 39.0332C29.9796 42.2407 29.9501 44.8294 29.9501 45.6161C29.9501 46.2585 30.3818 47.0055 31.6002 46.7712C41.1298 43.5903 48 34.6014 48 24.0007C48 10.7451 37.2534 0 23.9978 0Z"
  />
</svg>

                </a>
                <a href="https://www.linkedin.com/in/aarish-%E3%82%A2%E3%83%BC%E3%83%AA%E3%83%83%E3%82%B7%E3%83%A5-723b8b377/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <svg
  viewBox="0 0 24 24"
  className="w-5 h-5 text-[#858b94] hover:text-white transition-colors duration-200"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0)">
    <path
      d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z"
    />
  </g>

  <defs>
    <clipPath id="clip0">
      <rect width="24" height="24" />
    </clipPath>
  </defs>
</svg>

                </a>
                <a href="https://x.com/_RsUr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
               <svg
  viewBox="0 0 48 42"
  className="w-5 h-5 text-[#858b94] hover:text-white transition-colors duration-200"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M17.9816 22.3441L0 0H14.2427L25.3426 13.8102L37.2011 0.0621804H45.0452L29.1352 18.529L48 42H33.7998L21.7809 27.0651L8.94951 41.9586H1.06289L17.9816 22.3441ZM35.8696 37.86L8.73314 4.13997H12.1713L39.2736 37.86H35.8696Z"
  />
</svg>
                </a>
                <a href="https://medium.com/@aarishmansur" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.82 6.82 0 010 12a6.82 6.82 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-.81 6.41-1.82 6.41s-1.82-2.87-1.82-6.41.81-6.41 1.82-6.41 1.82 2.87 1.82 6.41zM24 12c0 3.17-.19 5.75-.42 5.75s-.42-2.58-.42-5.75.19-5.75.42-5.75.42 2.58.42 5.75z" />
                  </svg>
                </a>
                <a href="mailto:aarishmansur@gmail.com" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all shadow-lg shadow-white/5"
                >
                  <FileText className="w-4 h-4" />
                  Download CV / Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="animate-blur-fade [animation-delay:200ms]">
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight">About</h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed text-left">
            A developer who cares about clean code and meaningful user experiences. Currently navigating the intersection of Artificial Intelligence and web technologies. I spend most of my time building projects that solve real problems.
          </p>
        </div>
      </section>


      <section id="skills" className="animate-blur-fade [animation-delay:300ms]">
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight">Skills and Tools</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Javascript", "Tailwind CSS", "Framer motion", "GSAP","Git","Github",].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>


      <section id="projects" className="animate-blur-fade [animation-delay:400ms]">
        <div className="space-y-6">
          <div className="flex flex-col">
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-1">Featured</p>
            <h2 className="text-2xl font-bold tracking-tight italic">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.slice(0, 2).map((project, idx) => (
              <div key={idx} className="group flex flex-col overflow-hidden rounded-4xl border border-white/10 bg-[#0A0A0A] transition-all duration-300 hover:border-white/20">

                <div className="relative aspect-video w-full overflow-hidden bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20">
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />

                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 font-black text-xl uppercase italic tracking-tighter transition-transform group-hover:scale-110 duration-700">{project.name}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col p-6 gap-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
                    <div className="flex items-center gap-2">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Globe className="w-4 h-4" />
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                      <svg
  viewBox="0 0 48 48"
  className="w-5 h-5 text-[#858b94] hover:text-white transition-colors duration-200"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M23.9978 0C10.7451 0 0 10.7451 0 24.0007C0 34.6044 6.87609 43.5991 16.413 46.7742C17.6138 46.9937 18.0514 46.2526 18.0514 45.6161C18.0514 45.0474 18.0308 43.5372 18.019 41.535C11.3433 42.9847 9.93474 38.3172 9.93474 38.3172C8.843 35.5458 7.26947 34.8077 7.26947 34.8077C5.0904 33.3181 7.43448 33.3476 7.43448 33.3476C9.8434 33.5185 11.1105 35.8214 11.1105 35.8214C13.2512 39.4885 16.7283 38.4292 18.0956 37.8163C18.3136 36.2648 18.9324 35.207 19.619 34.6073C14.2899 34.0018 8.68682 31.942 8.68682 22.7454C8.68682 20.1258 9.62239 17.9836 11.1576 16.3055C10.9101 15.6985 10.0865 13.2586 11.3919 9.95389C11.3919 9.95389 13.4074 9.30857 17.9924 12.4144C19.9063 11.8825 21.9602 11.6158 24.0007 11.607C26.0384 11.6158 28.0922 11.8825 30.009 12.4144C34.5911 9.30857 36.6022 9.95389 36.6022 9.95389C37.912 13.2586 37.0884 15.6985 36.8409 16.3055C38.3791 17.9836 39.3088 20.1258 39.3088 22.7454C39.3088 31.9656 33.6968 33.9944 28.35 34.5882C29.2119 35.3293 29.9796 36.7938 29.9796 39.0332C29.9796 42.2407 29.9501 44.8294 29.9501 45.6161C29.9501 46.2585 30.3818 47.0055 31.6002 46.7712C41.1298 43.5903 48 34.6014 48 24.0007C48 10.7451 37.2534 0 23.9978 0Z"
  />
</svg>

                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="px-2 py-1 text-[10px] font-medium rounded-md bg-white/5 border border-white/10 text-gray-400 whitespace-nowrap">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/project" className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all mt-4 bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10">
            View All Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>


      <section id="contributions" className="animate-blur-fade [animation-delay:600ms]">
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight">Experience</h2>
          <div className="flex flex-col gap-y-4">
            {CONTRIBUTIONS.slice(0, 2).map((contrib, idx) => (
              <div key={idx} className="flex items-center gap-3 group px-4 py-3 rounded-xl border border-white/5 bg-white/2">
                {contrib.merged ? (
                  <GitMerge className="w-4 h-4 text-purple-400" />
                ) : (
                  <GitPullRequest className="w-4 h-4 text-green-400" />
                )}
                <span className="text-sm text-gray-400 italic">
                  PR: <a href={contrib.url} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white hover:underline transition-colors">{contrib.name}</a>
                </span>
              </div>
            ))}
            <Link href="/experience" className="text-xs text-gray-500 hover:text-gray-300 transition-colors mt-2 flex items-center gap-1">
              View all contributions <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="blogs" className="animate-blur-fade [animation-delay:600ms]">
        <div className="space-y-6">
          <div className="flex flex-col">
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-1">Latest</p>
            <h2 className="text-2xl font-bold tracking-tight italic">Writing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.slice(0, 2).map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col overflow-hidden rounded-4xl border border-white/10 bg-[#0A0A0A] transition-all duration-300 hover:border-white/20"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={blog.image || "/character.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex flex-col p-6 gap-y-4">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-white transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
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

          <Link href="/blogs" className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all mt-4 bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10">
            View All Writing <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="animate-blur-fade [animation-delay:700ms]">
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight">Education</h2>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <span className="text-base">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">B.Tech in AI & Data Science</h3>
                  <p className="text-xs text-gray-500">Modi Institute of Technology Kota</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 tabular-nums">2024 - 2028</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}