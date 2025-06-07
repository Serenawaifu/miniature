'use client';

import { useEffect, useRef } from 'react';

const PETAL_COUNT = 18;

export default function SakuraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const petals: HTMLImageElement[] = [];
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < PETAL_COUNT; i++) {
      const img = document.createElement('img');
      img.src = '/sakura-petal.svg';
      img.className = 'pointer-events-none fixed z-0';
      img.style.left = `${Math.random() * 100}vw`;
      img.style.top = `-${Math.random() * 20 + 5}vh`;
      img.style.width = `${16 + Math.random() * 24}px`;
      img.style.opacity = `${0.5 + Math.random() * 0.5}`;
      img.style.animation = `sakura-fall ${6 + Math.random() * 8}s linear infinite`;
      img.style.animationDelay = `${Math.random() * 8}s`;
      container.appendChild(img);
      petals.push(img);
    }
    return () => {
      petals.forEach((img) => container.removeChild(img));
    };
  }, []);

  return <div ref={containerRef} aria-hidden className="fixed inset-0 pointer-events-none z-0" />;
}
