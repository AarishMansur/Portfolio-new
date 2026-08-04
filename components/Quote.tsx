'use client';

import { useState } from 'react';

interface Quote {
  text: string;
  author: string;
}

const QUOTES: Quote[] = [
  { text: "How can you have an affair if you're scared of your wife Dammit !!", author: "Kagura" },
  { text: "Ochi san ... for Men everyday is a haunted house", author: "Gintoki" },
  { text: "When you go to a funeral for the first time You're surprised by how the Happy people are ", author: "unknown" },
  { text: "Love is neither plus nor minus", author: "Anonymous" },
  { text: "If your hard work dont produce any result, there is no point you good for nothing.", author: "an old uncle in anime" },
  { text: "A conversation with a barber, during a haircut is the most pointless thing in the world", author: "Gintoki" },
  { text: "I was so bothered that I couldn't sleep so I decided to wake up .", author: "a side character" },
];

const Quote = () => {
  const [quote] = useState<Quote>(
    () => QUOTES[Math.floor(Math.random() * QUOTES.length)]
  );

  return (
    <div className="rounded-2xl border-r-4 border-white bg-gradient-to-br from-white/[0.03] to-transparent p-8 md:p-10">
      <div className="flex gap-5">
        <span className="hidden md:block text-6xl text-blue-400/20 select-none leading-none font-serif" aria-hidden="true">&ldquo;</span>
        <div className="flex-1">
          <blockquote>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed font-medium" suppressHydrationWarning>
              {quote.text}
            </p>
          </blockquote>
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400/30" />
            <cite className="text-sm text-gray-400 not-italic font-semibold tracking-wide" suppressHydrationWarning>{quote.author}</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
