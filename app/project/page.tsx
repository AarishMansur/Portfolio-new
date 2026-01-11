import { Github, Globe, ArrowLeft } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="space-y-12 animate-blur-fade">
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition group w-fit"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back
        </Link>

        <div>
          <p className="text-gray-500 uppercase tracking-[0.25em] text-[10px] font-semibold">
            Featured
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight italic">
            Projects
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col overflow-hidden rounded-4xl border border-white/10 bg-[#0A0A0A] transition-all duration-300 hover:border-white/20"
          >
            {/* Project Preview */}
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
                <h3 className="text-lg font-bold tracking-tight group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-3">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-gray-400 text-[10px] leading-relaxed line-clamp-2 opacity-70">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="space-y-2">
                <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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

      <div className="flex justify-center pt-6">
        <Link
          href="/project"
          className="px-6 py-2 rounded-full border border-white/15 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-white/30 hover:text-white transition"
        >
          View all projects
        </Link>
      </div>
    </div>
  )
}