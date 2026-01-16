import { Globe, ArrowLeft } from 'lucide-react'
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
                    <svg
                      viewBox="0 0 48 48"
                      className="w-5 h-5 transition-colors duration-200"
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

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              
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
    </div>
  )
}