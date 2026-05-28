'use client';

import React, { useEffect, useRef, useState } from 'react';

interface VisitorCounterProps {
    className?: string;
}

const VisitorCounter: React.FC<VisitorCounterProps> = ({ className }) => {
    const [count, setCount] = useState<number | null>(null);
    const countRef = useRef<HTMLSpanElement>(null);

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
        let isMounted = true;

        const animateCounter = async () => {
            if (count === null || !countRef.current) {
                return;
            }

            const { gsap } = await import('gsap');

            if (!isMounted || !countRef.current) {
                return;
            }

            gsap.fromTo(
                countRef.current,
                { innerText: 0 },
                {
                    innerText: count,
                    duration: 2.5,
                    ease: 'expo.out',
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        if (countRef.current) {
                            countRef.current.innerText = Math.ceil(
                                this.targets()[0].innerText
                            ).toLocaleString();
                        }
                    },
                }
            );
        };

        animateCounter();

        return () => {
            isMounted = false;
        };
    }, [count]);

    return (
        <div
            className={`relative overflow-hidden rounded-2xl p-[1px] group ${className}`}
        >

            <div className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite] opacity-60 group-hover:opacity-90 transition-opacity duration-500 bg-[conic-gradient(from_0deg,transparent_0%,transparent_72%,rgba(255,255,255,0.15)_82%,rgba(34,197,94,0.9)_100%)]" />


            <div className="absolute top-1/2 left-1/2 w-[250%] h-[250%] animate-[reverse-spin_10s_linear_infinite] opacity-40 group-hover:opacity-70 transition-opacity duration-500 bg-[conic-gradient(from_180deg,transparent_0%,transparent_75%,rgba(255,255,255,0.08)_85%,rgba(255,255,255,0.7)_100%)]" />


            <div className="relative flex flex-col justify-center px-6 py-3 bg-[#0a0a0a] rounded-[15px] h-full w-full border border-white/[0.05] backdrop-blur-xl">
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-white/40 leading-none mb-1.5">
                    Visitor Rank
                </span>

                <p className="text-xs font-medium text-white/90 whitespace-nowrap">
                    You are the{' '}
                    <span
                        ref={countRef}
                        className="text-sm font-bold text-white font-mono bg-white/5 px-1.5 py-0.5 rounded mx-0.5 border border-white/10"
                    >
                        {count !== null ? count : '...'}
                    </span>{' '}
                    visitor
                </p>
            </div>
        </div>
    );
};

export default VisitorCounter;