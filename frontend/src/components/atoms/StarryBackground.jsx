import { useMemo } from 'react';

export default function StarryBackground() {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1, // 1px to 3px
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 4 + 4}s`, // 4s to 8s
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: star.size > 2 ? '0 0 6px rgba(255, 255, 255, 0.6)' : 'none',
          }}
        />
      ))}
      
      {/* Subtle background nebulae for cosmic depth */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-violet-glow/5 rounded-full blur-[130px] mix-blend-screen"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-cosmic-blue/5 rounded-full blur-[150px] mix-blend-screen"></div>
      <div className="absolute top-[40%] right-[15%] w-[400px] h-[400px] bg-mystic-pink/3 rounded-full blur-[120px] mix-blend-screen"></div>
    </div>
  );
}
