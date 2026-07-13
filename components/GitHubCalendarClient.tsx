'use client';

import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

type GitHubCalendarClientProps = {
  username: string;
  fontSize: number;
  blockSize: number;
  blockMargin: number;
};

export default function GitHubCalendarClient({ username, fontSize, blockSize, blockMargin }: GitHubCalendarClientProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-56 items-center justify-center rounded-2xl border border-white/10 bg-black/10 text-gray-400">
        Loading contribution calendar...
      </div>
    );
  }

  return (
    <GitHubCalendar
      username={username}
      colorScheme={"dark"}
      fontSize={fontSize}
      blockSize={blockSize}
      blockMargin={blockMargin}
    />
  );
}
