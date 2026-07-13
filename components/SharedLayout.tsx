'use client';

import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import React, { useEffect, useRef, useState } from 'react';
import BackgroundEffects from '@/components/BackgroundEffects';
import MenuOverlay from '@/components/MenuOverlay';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            syncTouch: false,
        });

        const animate = (time: number) => {
            lenis.raf(time);
            rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);

        return () => {
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
            lenis.destroy();
        };
    }, []);

    const toggleMenu = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        if (!isMenuOpen) {
            setIsMenuOpen(true);
            setTimeout(() => setIsAnimating(false), 800);
        } else {
            setIsMenuOpen(false);
            setTimeout(() => setIsAnimating(false), 600);
        }
    };

    return (
        <div className={`relative w-full min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black ${isMenuOpen ? 'overflow-hidden' : 'overflow-y-auto'}`}>
            <BackgroundEffects />
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div
                className={`relative z-10 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen
                    ? '-translate-y-25 opacity-30 select-none pointer-events-none'
                    : 'translate-y-0 opacity-100'
                    }`}
            >
                <div className="max-w-4xl mx-auto border-x border-white/5 min-h-screen bg-black/50 backdrop-blur-sm antialiased">
                    <div className="px-6 py-12 md:px-12 md:py-16">
                        {children}
                    </div>
                </div>
            </div>
            <MenuOverlay isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
    );
};

export default SharedLayout;
