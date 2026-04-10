'use client';

import { useEffect, useRef, useState } from 'react';

type ProjectVideoProps = {
  src: string;
  name: string;
  className?: string;
};

export default function ProjectVideo({ src, name, className }: ProjectVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {shouldLoad ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className={className}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/10 font-black text-xl uppercase italic tracking-tighter transition-transform group-hover:scale-110 duration-700">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}
