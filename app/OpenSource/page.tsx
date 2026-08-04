import { GitMerge, Briefcase, GraduationCap } from 'lucide-react'
import { CONTRIBUTIONS } from '@/lib/data'

const GridHeading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <h2 className={`text-2xl font-bold tracking-tight text-white ${className}`}>{children}</h2>
)

export default function ExperiencePage() {
    return (
        <div className="flex flex-col gap-y-16 py-8 animate-blur-fade">

            <section id="work">
                <div className="space-y-6">
                    <GridHeading>Experiences</GridHeading>
                    <div className="flex flex-col gap-y-8">
                        <div className="flex items-start justify-between group">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mt-1">
                                    <Briefcase className="w-6 h-6 text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Open Source Contributor</h3>
                                    <p className="text-sm text-gray-500">Self-driven • Remote</p>
                                    <p className="text-sm text-gray-400 mt-2 max-w-xl">
                                        Actively contributing to various high-profile open-source projects, improving performance, fixing critical bugs, and enhancing user experience across the modern web ecosystem.
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 tabular-nums">2025 - Present</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contributions">
                <div className="space-y-6">
                    <GridHeading className="text-xl md:text-2xl">
                        All Open Source Contributions
                        <span className="text-xs ml-4 font-normal bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-gray-500">
                            {CONTRIBUTIONS.length}
                        </span>
                    </GridHeading>
                    <div className="flex flex-col">
                        {CONTRIBUTIONS.map((contrib, idx) => (
                            <a
                                key={idx}
                                href={contrib.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0 group hover:bg-white/[0.02] -mx-3 px-3 rounded-lg transition-colors"
                            >
                                <GitMerge className="w-4 h-4 text-purple-400 shrink-0" />
                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                                    {contrib.name}
                                </span>
                                <span className="ml-auto text-xs text-gray-600 tabular-nums shrink-0">{contrib.date}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section id="education">
                <div className="space-y-6">
                    <GridHeading>Education</GridHeading>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <GraduationCap className="w-5 h-5 text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base">B.Tech in AI & Data Science</h3>
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
