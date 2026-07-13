'use client';

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
  return (
    <video
      className={`h-full w-full object-cover ${className}`.trim()}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={alt}
      src={src}
    />
  );
}
