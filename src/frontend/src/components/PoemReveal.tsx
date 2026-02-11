import { useEffect, useRef, useState } from 'react';

interface PoemRevealProps {
  poem: {
    title: string;
    lines: string[];
  };
}

export default function PoemReveal({ poem }: PoemRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const poemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (poemRef.current) {
      observer.observe(poemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={poemRef}
      className="max-w-2xl mx-auto text-center bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl"
    >
      <h2 className="font-cursive text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 md:mb-8">
        {poem.title}
      </h2>
      <div className="space-y-2 md:space-y-3">
        {poem.lines.map((line, index) => (
          <p
            key={index}
            className={`font-cursive text-lg md:text-xl lg:text-2xl text-gray-700 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            {line || '\u00A0'}
          </p>
        ))}
      </div>
    </div>
  );
}
