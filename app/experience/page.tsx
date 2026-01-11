import React from 'react'
import { GitMerge, GitPullRequest, Briefcase, GraduationCap } from 'lucide-react'
import { CONTRIBUTIONS } from '@/lib/data'

export default function ExperiencePage() {
    return (
        <div className="flex flex-col gap-y-16 py-8 animate-blur-fade">

            <section id="work">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
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
                    <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                        All Open Source Contributions
                        <span className="text-xs font-normal bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-gray-500">
                            {CONTRIBUTIONS.length}
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {CONTRIBUTIONS.map((contrib, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all group"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    {contrib.merged ? (
                                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full">
                                            <GitMerge className="w-3 h-3" />
                                            Merged
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                                            <GitPullRequest className="w-3 h-3" />
                                            Open
                                        </div>
                                    )}
                                    <span className="text-[10px] text-gray-600 tabular-nums">{contrib.date}</span>
                                </div>
                                <h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors mb-1">
                                    {contrib.name}
                                </h3>
                                <a
                                    href={contrib.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                                >
                                    View on GitHub <span className="text-xs">↗</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Recap */}
            <section id="education">
                <div className="space-y-6">
                    <h2 className="text-xl font-bold tracking-tight">Education</h2>
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