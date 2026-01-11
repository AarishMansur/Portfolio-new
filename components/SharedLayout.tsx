'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const linksWrapperRef = useRef<HTMLDivElement>(null);
    const highlighterRef = useRef<HTMLDivElement>(null);

    const currentX = useRef(0);
    const targetX = useRef(0);
    const currentHighlighterX = useRef(0);
    const targetHighlighterX = useRef(0);
    const currentHighlighterWidth = useRef(0);
    const targetHighlighterWidth = useRef(0);

    const animationFrameRef = useRef<number | null>(null);

    const links = [
        { text: 'HOME', href: '/' },
        { text: 'PROJECTS', href: '/project' },
        { text: 'BLOGS', href: '/blogs' },
        { text: 'EXPERIENCE', href: '/experience' },
    ];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                initializeHighlighter();
            }, 100);
            animate();
        }

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    const initializeHighlighter = () => {
        const firstLink = document.querySelector('.menu-link-text');
        if (firstLink && highlighterRef.current && linksWrapperRef.current) {
            const width = firstLink.getBoundingClientRect().width;
            const linkRect = firstLink.getBoundingClientRect();
            const wrapperRect = linksWrapperRef.current.getBoundingClientRect();
            const offset = linkRect.left - wrapperRect.left;

            currentHighlighterWidth.current = width;
            targetHighlighterWidth.current = width;
            currentHighlighterX.current = offset;
            targetHighlighterX.current = offset;

            highlighterRef.current.style.width = `${width}px`;
            highlighterRef.current.style.transform = `translateX(${offset}px)`;
        }
    };

    const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
    };

    const animate = () => {
        currentX.current = lerp(currentX.current, targetX.current, 0.1);
        currentHighlighterX.current = lerp(currentHighlighterX.current, targetHighlighterX.current, 0.15);
        currentHighlighterWidth.current = lerp(currentHighlighterWidth.current, targetHighlighterWidth.current, 0.15);

        if (linksWrapperRef.current) {
            linksWrapperRef.current.style.transform = `translateX(${currentX.current}px)`;
        }

        if (highlighterRef.current) {
            highlighterRef.current.style.transform = `translateX(${currentHighlighterX.current}px)`;
            highlighterRef.current.style.width = `${currentHighlighterWidth.current}px`;
        }

        animationFrameRef.current = requestAnimationFrame(animate);
    };

    const toggleMenu = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        if (!isMenuOpen) {

            setIsMenuOpen(true);

            setTimeout(() => {
                const linkElements = document.querySelectorAll('.menu-link');
                linkElements.forEach((link, index) => {
                    setTimeout(() => {
                        (link as HTMLElement).style.transform = 'translateY(0)';
                        (link as HTMLElement).style.opacity = '1';
                    }, index * 80);
                });

                if (highlighterRef.current) {
                    setTimeout(() => {
                        highlighterRef.current!.style.bottom = '0';
                        highlighterRef.current!.style.opacity = '1';
                    }, 400);
                }

                setTimeout(() => setIsAnimating(false), 1000);
            }, 50);
        } else {

            const linkElements = document.querySelectorAll('.menu-link');
            linkElements.forEach((link) => {
                (link as HTMLElement).style.transform = 'translateY(100px)';
                (link as HTMLElement).style.opacity = '0';
            });

            if (highlighterRef.current) {
                highlighterRef.current.style.bottom = '-20px';
                highlighterRef.current.style.opacity = '0';
            }

            setTimeout(() => {
                setIsMenuOpen(false);
                setIsAnimating(false);
                currentX.current = 0;
                targetX.current = 0;
                if (linksWrapperRef.current) {
                    linksWrapperRef.current.style.transform = 'translateX(0)';
                }
            }, 800);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (window.innerWidth < 1000) return;

        const mouseX = e.clientX;
        const viewportWidth = window.innerWidth;
        const wrapperWidth = linksWrapperRef.current?.scrollWidth || 0;

        const moveLimit = Math.min(0, viewportWidth - wrapperWidth);
        const sensitivityZone = viewportWidth * 0.5;
        const zoneStart = (viewportWidth - sensitivityZone) / 2;
        const zoneEnd = zoneStart + sensitivityZone;

        let normalizedPosition = 0;

        if (mouseX < zoneStart) {
            normalizedPosition = 0;
        } else if (mouseX > zoneEnd) {
            normalizedPosition = 1;
        } else {
            normalizedPosition = (mouseX - zoneStart) / sensitivityZone;
        }

        targetX.current = moveLimit * normalizedPosition;
    };

    const handleLinkMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (window.innerWidth < 1000) return;

        const link = e.currentTarget;
        const linkText = link.querySelector('.menu-link-text');

        if (linkText && linksWrapperRef.current) {
            const linkRect = linkText.getBoundingClientRect();
            const wrapperRect = linksWrapperRef.current.getBoundingClientRect();

            targetHighlighterX.current = linkRect.left - wrapperRect.left;
            targetHighlighterWidth.current = linkRect.width;
        }


        const topSpan = link.querySelector('.link-top') as HTMLElement;
        const bottomSpan = link.querySelector('.link-bottom') as HTMLElement;

        if (topSpan && bottomSpan) {
            const topChars = topSpan.querySelectorAll('.char');
            const bottomChars = bottomSpan.querySelectorAll('.char');

            topChars.forEach((char, index) => {
                setTimeout(() => {
                    (char as HTMLElement).style.transform = 'translateY(-100%)';
                }, index * 20);
            });

            bottomChars.forEach((char, index) => {
                setTimeout(() => {
                    (char as HTMLElement).style.transform = 'translateY(0%)';
                }, index * 20);
            });
        }
    };

    const handleLinkMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        if (window.innerWidth < 1000) return;

        const link = e.currentTarget;
        const topSpan = link.querySelector('.link-top') as HTMLElement;
        const bottomSpan = link.querySelector('.link-bottom') as HTMLElement;

        if (topSpan && bottomSpan) {
            const topChars = topSpan.querySelectorAll('.char');
            const bottomChars = bottomSpan.querySelectorAll('.char');

            topChars.forEach((char, index) => {
                setTimeout(() => {
                    (char as HTMLElement).style.transform = 'translateY(0%)';
                }, index * 20);
            });

            bottomChars.forEach((char, index) => {
                setTimeout(() => {
                    (char as HTMLElement).style.transform = 'translateY(100%)';
                }, index * 20);
            });
        }
    };

    const handleWrapperMouseLeave = () => {
        const firstLink = document.querySelector('.menu-link-text');
        if (firstLink && linksWrapperRef.current) {
            const linkRect = firstLink.getBoundingClientRect();
            const wrapperRect = linksWrapperRef.current.getBoundingClientRect();

            targetHighlighterX.current = linkRect.left - wrapperRect.left;
            targetHighlighterWidth.current = linkRect.width;
        }
    };

    const splitText = (text: string) => {
        return text.split('').map((char, index) => (
            <span key={index} className="char inline-block transition-transform duration-300 ease-out">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <>
            <div className={`relative w-full min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black ${isMenuOpen ? 'overflow-hidden' : 'overflow-y-auto'}`}>

                <div className="fixed inset-0 pointer-events-none opacity-10 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

                <div
                    ref={containerRef}
                    className={`relative z-10 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen
                        ? '-translate-y-25 opacity-30 select-none pointer-events-none'
                        : 'translate-y-0 opacity-100'
                        }`}
                >
                    {/* Background Stripes for Layout */}
                    <div className="fixed inset-0 pointer-events-none hidden lg:block overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-[calc((100vw-42rem)/2)] border-r border-white/5 opacity-20"
                            style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 12px)' }} />
                        <div className="absolute right-0 top-0 bottom-0 w-[calc((100vw-42rem)/2)] border-l border-white/5 opacity-20"
                            style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 12px)' }} />
                    </div>

                    <div className="max-w-2xl mx-auto border-x border-white/5 min-h-screen bg-black/50 backdrop-blur-sm antialiased">
                        <div className="px-6 py-12 md:px-12 md:py-16">
                            {children}
                        </div>
                    </div>
                </div>


                <div
                    ref={overlayRef}
                    className={`fixed inset-0 bg-black text-white z-40 transition-all duration-700 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
                        }`}
                    style={{
                        clipPath: isMenuOpen ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
                        transition: 'clip-path 0.7s cubic-bezier(0.76, 0, 0.24, 1)',
                    }}
                    onMouseMove={handleMouseMove}
                >

                    <div
                        ref={contentRef}
                        className={`absolute top-1/2 left-0 w-full -translate-y-1/2 px-8 md:px-16 flex justify-between gap-8 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12.5 opacity-0'
                            }`}
                    >
                        <div className="flex flex-col gap-2 text-xs uppercase">
                            <p className="opacity-50">Developer</p>
                            <p>I build Cool Websites</p>
                            <p className="flex items-center gap-2">
                                <span className="font-medium">Currently Open to Work</span>
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 text-xs uppercase text-right">
                            <p className="opacity-50">Contact</p>
                            <p>aarishmansur@gmail.com</p>
                            <p>+91 9887687220</p>
                        </div>
                    </div>


                    <div
                        ref={imageRef}
                        className={`absolute top-1/2 left-1/2 w-40 h-40 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] hidden md:block ${isMenuOpen
                            ? '-translate-x-1/2 -translate-y-1/2 scale-100 opacity-100'
                            : '-translate-x-1/2 -translate-y-1/2 scale-80 opacity-0'
                            }`}
                    >
                        <Image
                            src="/character.jpg"
                            alt="A character Image"
                            width={400}
                            height={400}
                            className="rounded-full object-cover w-full h-full"
                        />
                    </div>


                    <div
                        ref={linksWrapperRef}
                        className="absolute bottom-12 md:bottom-24 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 px-8 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-16 w-full md:w-auto text-center md:text-left"
                        onMouseLeave={handleWrapperMouseLeave}
                    >
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="menu-link inline-block opacity-0 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                                style={{ transform: 'translateY(100px)' }}
                                onMouseEnter={handleLinkMouseEnter}
                                onMouseLeave={handleLinkMouseLeave}
                            >
                                <Link href={link.href} className="relative block overflow-hidden" onClick={toggleMenu}>
                                    <span className="menu-link-text link-top block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none whitespace-nowrap">
                                        {splitText(link.text)}
                                    </span>
                                    <span className="link-bottom absolute top-0 left-0 block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none whitespace-nowrap">
                                        {splitText(link.text)}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>


                    <div
                        ref={highlighterRef}
                        className="absolute h-2 bg-yellow-500 opacity-0 hidden md:block transition-all duration-300 ease-out"
                        style={{ bottom: '-20px', left: '4rem' }}
                    />
                </div>
            </div>
        </>
    );
};

export default SharedLayout;