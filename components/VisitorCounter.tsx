'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface VisitorCounterProps {
    className?: string;
}

const VisitorCounter: React.FC<VisitorCounterProps> = ({ className }) => {
    const [count, setCount] = useState<number | null>(null);
    const countRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/stats');
                const data = await res.json();
                if (data.visitors !== undefined) {
                    setCount(data.visitors);
                } else {
                    setCount(0);
                }
            } catch (err) {
                console.error('Failed to fetch visitor count', err);
                setCount(0);
            }
        };

        fetchStats();
    }, []);

    useEffect(() => {
        if (count !== null && countRef.current) {
            gsap.fromTo(countRef.current,
                { innerText: 0 },
                {
                    innerText: count,
                    duration: 2.5,
                    ease: "expo.out",
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        if (countRef.current) {
                            countRef.current.innerText = Math.ceil(this.targets()[0].innerText).toLocaleString();
                        }
                    }
                }
            );

            gsap.fromTo(containerRef.current,
                { opacity: 0, scale: 0.95, y: 10 },
                { opacity: 1, scale: 1, y: 0, duration: 1.2, delay: 0.2, ease: "power4.out" }
            );
        }
    }, [count]);

    return (
        <div
            ref={containerRef}
            className={`group relative flex items-center gap-4 px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 ${className}`}
        >
            <div className="absolute inset-0 bg-green-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40 animate-ping"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
            </div>

            <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-white/40 leading-none mb-1">
                    Visitor Rank
                </span>
                <p className="text-xs font-medium text-white/90 whitespace-nowrap">
                    You are the <span ref={countRef} className="text-sm font-bold text-white font-mono bg-white/10 px-1.5 py-0.5 rounded ml-0.5">
                        {count !== null ? 0 : "..."}
                    </span> visitor
                </p>
            </div>
        </div>
    );
};

export default VisitorCounter;
