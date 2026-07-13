'use client';

type ProjectVideoProps = {
  src: string;
  name: string;
  className?: string;
};

export default function ProjectVideo({ src, name, className }: ProjectVideoProps) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
      aria-label={name}
    />
  );
}
