'use client';

import { useEffect, useRef, type ReactNode } from 'react';

const MAX_BLUR = 10;

const ProgressiveBlur = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = Array.from(wrapper.children) as HTMLElement[];

    const update = () => {
      const vh = window.innerHeight;

      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        const overlap = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
        const elHeight = Math.min(rect.height, vh) || 1;
        const visibleRatio = overlap / elHeight;
        const blur = ((1 - visibleRatio) * MAX_BLUR).toFixed(2);
        if (el.style.filter !== `blur(${blur}px)`) {
          el.style.filter = `blur(${blur}px)`;
        }
      }

      rafRef.current = 0;
    };

    const onScrollOrResize = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default ProgressiveBlur;
