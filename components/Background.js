function Cloud({ style, className = '', opacity = 1 }) {
  return (
    <svg
      className={`absolute ${className}`}
      style={style}
      viewBox="0 0 120 60"
      opacity={opacity}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* filled soft cloud */}
      <g fill="#ffffff">
        <ellipse cx="34" cy="40" rx="30" ry="17" />
        <ellipse cx="60" cy="30" rx="27" ry="22" />
        <ellipse cx="86" cy="40" rx="26" ry="16" />
        <rect x="18" y="38" width="86" height="20" rx="10" />
      </g>
      {/* pencil-sketch outline (subtle artist touch) */}
      <path
        d="M20 52 Q10 52 12 44 Q4 34 16 30 Q18 14 38 18 Q46 6 64 12 Q84 8 86 26 Q104 26 102 42 Q106 52 92 52 Z"
        fill="none"
        stroke="#7dd3fc"
        strokeWidth="1.2"
        opacity="0.5"
      />
    </svg>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base sky wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-sky-100" />

      {/* Soft glows for depth */}
      <div className="absolute -top-40 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-sky-200/60 to-transparent blur-3xl" />
      <div className="absolute top-1/2 -left-48 w-[34rem] h-[34rem] rounded-full bg-sky-200/40 blur-3xl" />

      {/* Drifting clouds — cross the whole screen at different speeds */}
      <Cloud className="w-64" opacity={0.95}
        style={{ top: '12%', left: 0, filter: 'blur(2px)', animation: 'cloud-cross 60s linear infinite' }} />
      <Cloud className="w-40" opacity={0.85}
        style={{ top: '26%', left: 0, filter: 'blur(1px)', animation: 'cloud-cross 44s linear infinite', animationDelay: '8s' }} />
      <Cloud className="w-72" opacity={0.8}
        style={{ top: '55%', left: 0, filter: 'blur(3px)', animation: 'cloud-cross 78s linear infinite', animationDelay: '3s' }} />
      <Cloud className="w-48" opacity={0.9}
        style={{ top: '70%', left: 0, filter: 'blur(2px)', animation: 'cloud-cross 52s linear infinite', animationDelay: '15s' }} />
      <Cloud className="w-36" opacity={0.75}
        style={{ top: '84%', left: 0, filter: 'blur(1px)', animation: 'cloud-cross 66s linear infinite', animationDelay: '22s' }} />
    </div>
  );
}