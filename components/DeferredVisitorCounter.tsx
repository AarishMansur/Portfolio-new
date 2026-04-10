'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const VisitorCounter = dynamic(() => import('@/components/VisitorCounter'), {
  ssr: false,
});

export default function DeferredVisitorCounter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = wrapperRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return <div ref={wrapperRef}>{isVisible ? <VisitorCounter /> : null}</div>;
}
