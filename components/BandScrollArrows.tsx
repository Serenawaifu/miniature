'use client';
import { useRef } from 'react';

export default function BandScrollArrows({ direction = 'horizontal', scrollRef }: { direction?: 'horizontal' | 'vertical', scrollRef: React.RefObject<HTMLDivElement> }) {
  const scroll = (amount: number) => {
    if (!scrollRef.current) return;
    if (direction === 'horizontal') {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ top: amount, behavior: 'smooth' });
    }
  };
  return (
    <>
      <button
        className="absolute left-2 inset-y-0 flex items-center z-10 cursor-pointer hover:text-blue-300 text-3xl"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        onClick={() => scroll(direction === 'horizontal' ? -300 : -200)}
        aria-label="Scroll left/up"
      >
        {direction === 'horizontal' ? '🡸' : '🡹'}
      </button>
      <button
        className="absolute right-2 inset-y-0 flex items-center z-10 cursor-pointer hover:text-blue-300 text-3xl"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        onClick={() => scroll(direction === 'horizontal' ? 300 : 200)}
        aria-label="Scroll right/down"
      >
        {direction === 'horizontal' ? '🡺' : '🡻'}
      </button>
    </>
  );
}
