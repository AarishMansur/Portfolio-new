"use client"

import React from 'react'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiStripe,
  SiFfmpeg,
  SiGiphy
} from 'react-icons/si'
import { Code2, FileJson } from 'lucide-react'

const ICON_MAP = {
  "react": { icon: SiReact, color: "#61DAFB" },
  "typescript": { icon: SiTypescript, color: "#3178C6" },
  "ts": { icon: SiTypescript, color: "#3178C6" },
  "javascript": { icon: SiJavascript, color: "#F7DF1E" },
  "tailwind css": { icon: SiTailwindcss, color: "#06B6D4" },
  "tailwindcss": { icon: SiTailwindcss, color: "#06B6D4" },
  "tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
  "framer motion": { icon: SiFramer, color: "#0055FF" },
  "gsap": { icon: SiGreensock, color: "#88CE02" },
  "git": { icon: SiGit, color: "#F05032" },
  "github": { icon: SiGithub, color: "#ffffff" },
  "nextjs": { icon: SiNextdotjs, color: "#ffffff" },
  "next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "express": { icon: SiExpress, color: "#ffffff" },
  "postgressql": { icon: SiPostgresql, color: "#4169E1" },
  "postgresql": { icon: SiPostgresql, color: "#4169E1" },
  "prisma": { icon: SiPrisma, color: "#2D3748" },
  "supabase": { icon: SiSupabase, color: "#3ECF8E" },
  "stripe": { icon: SiStripe, color: "#008CDD" },
  "ffmpeg": { icon: SiFfmpeg, color: "#00DDFF" },
  "ffmpeg.wasm": { icon: SiFfmpeg, color: "#00DDFF" },
  "giphy api": { icon: SiGiphy, color: "#CE9FFC" },
  "giphy": { icon: SiGiphy, color: "#CE9FFC" },
} as const;

interface TechIconProps {
  name: string;
  showText?: boolean;
  className?: string;
  size?: string;
}

export default function TechIcon({ name, showText = false, className = "", size = "w-4 h-4" }: TechIconProps) {
  const normalizedName = name.toLowerCase();
  const tech = ICON_MAP[normalizedName as keyof typeof ICON_MAP];

  if (!tech) {

    return (
      <div className={`flex items-center gap-2 group/icon ${className}`}>
        <Code2 className={`${size} text-gray-400 group-hover/icon:text-white transition-colors`} />
        {showText && <span className="text-xs">{name}</span>}
      </div>
    );
  }

  const IconComponent = tech.icon;

  return (
    <span className={`flex items-center gap-2 group/icon ${className}`}>
      <IconComponent
        style={{ color: tech.color }}
        className={`${size} transition-transform duration-300 group-hover/icon:scale-125`}
      />
      {showText && (
        <span className="text-xs text-gray-400 group-hover/icon:text-white transition-colors duration-300">
          {name}
        </span>
      )}
    </span>
  );
}
