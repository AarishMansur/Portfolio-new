'use client';

import { useEffect, useRef, useState } from 'react';

type BannerVideoProps = {
  src: string;
  alt?: string;
  className?: string;
};

export default function BannerVideo({
  src,
  alt = 'Banner video',
  className = '',
}: BannerVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={`h-full w-full object-cover ${className}`.trim()}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
      src={shouldLoad ? src : undefined}
    />
  );
}
