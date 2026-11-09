import { useState, useEffect } from 'react';

// Total intro length in milliseconds. The sequence is:
//   0.0s  main pencil cloud starts drawing
//   ~1.7s your name fades in
//   ~2.2s scattered clouds pop in around the screen
//   ~3.8s whole overlay dissolves to reveal the site
const INTRO_MS = 4500;

// Scattered clouds that appear after the name. Mix of sizes, positions,
// rotations and two shapes for variety.
const EXTRA_CLOUDS = [
  { top: '13%', left: '9%',  w: 130, delay: 2.2,  rot: -6, variant: 0, op: 0.95 },
  { top: '20%', right: '11%', w: 95,  delay: 2.35, rot: 5,  variant: 1, op: 0.85 },
  { top: '40%', left: '4%',  w: 72,  delay: 2.5,  rot: 8,  variant: 1, op: 0.8 },
  { top: '62%', left: '15%', w: 160, delay: 2.45, rot: -3, variant: 0, op: 0.9 },
  { top: '70%', right: '16%', w: 115, delay: 2.6,  rot: 4,  variant: 1, op: 0.85 },
  { bottom: '12%', left: '44%', w: 85, delay: 2.75, rot: 0, variant: 0, op: 0.75 },
  { top: '30%', right: '30%', w: 60,  delay: 2.65, rot: -8, variant: 1, op: 0.7 },
];

function MiniCloud({ variant }) {
  const d =
    variant === 0
      ? 'M28 48 Q14 48 13 37 Q3 31 11 22 Q12 9 30 12 Q38 1 56 7 Q74 0 77 19 Q96 18 94 37 Q98 48 82 48 Z'
      : 'M24 46 Q10 46 12 34 Q6 24 18 22 Q22 8 40 12 Q52 2 66 10 Q86 8 84 28 Q94 34 82 44 Z';
  return (
    <svg viewBox="0 0 108 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <path d={d} fill="#ffffff" />
      <path d={d} fill="none" stroke="#7dd3fc" strokeWidth="2" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );
}

export default function IntroLoader() {
  const [phase, setPhase] = useState('draw'); // 'draw' -> 'out' -> 'done'

  useEffect(() => {
    const outT = setTimeout(() => setPhase('out'), INTRO_MS - 700);
    const doneT = setTimeout(() => setPhase('done'), INTRO_MS);
    return () => {
      clearTimeout(outT);
      clearTimeout(doneT);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`intro-overlay ${phase === 'out' ? 'intro-out' : ''}`} aria-hidden="true">
      {/* scattered clouds that pop in after the name */}
      {EXTRA_CLOUDS.map((c, i) => (
        <div
          key={i}
          className="intro-extra"
          style={{
            top: c.top,
            bottom: c.bottom,
            left: c.left,
            right: c.right,
            width: `${c.w}px`,
            opacity: 0,
            animationDelay: `${c.delay}s`,
            ['--rot']: `${c.rot}deg`,
            ['--intro-op']: c.op,
          }}
        >
          <MiniCloud variant={c.variant} />
        </div>
      ))}

      {/* main pencil-drawn cloud + name */}
      <div className="intro-center">
        <svg
          className="intro-cloud"
          viewBox="0 0 220 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="intro-cloud-path"
            pathLength="100"
            d="M55 110 Q26 110 24 84 Q4 72 18 50 Q20 18 58 24 Q76 2 112 14 Q152 0 158 40 Q198 38 194 78 Q202 110 168 110 Z"
            stroke="#0ea5e9"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="intro-caption">Priyanshu Rana</p>
      </div>

      <button className="intro-skip" onClick={() => setPhase('done')}>
        Skip
      </button>
    </div>
  );
}
