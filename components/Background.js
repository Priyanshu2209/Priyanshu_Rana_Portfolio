function Cloud({ style, className = '', opacity = 0.9 }) {
  return (
    <svg
      className={`absolute ${className}`}
      style={style}
      viewBox="0 0 120 60"
      fill="#ffffff"
      opacity={opacity}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="34" cy="40" rx="30" ry="17" />
      <ellipse cx="60" cy="30" rx="27" ry="22" />
      <ellipse cx="86" cy="40" rx="26" ry="16" />
      <rect x="18" y="38" width="86" height="20" rx="10" />
    </svg>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base sky wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-sky-50" />

      {/* Soft glows for depth */}
      <div className="absolute -top-40 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-sky-100 to-transparent blur-3xl opacity-70" />
      <div className="absolute top-1/2 -left-48 w-[34rem] h-[34rem] rounded-full bg-sky-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] rounded-full bg-sky-50 blur-3xl opacity-60" />

      {/* Clouds — soft-blurred, gently drifting */}
      <Cloud
        className="w-64"
        opacity={0.95}
        style={{ top: '10%', left: '4%', filter: 'blur(6px)', animation: 'cloud-drift 34s ease-in-out infinite alternate' }}
      />
      <Cloud
        className="w-44"
        opacity={0.8}
        style={{ top: '22%', right: '8%', filter: 'blur(5px)', animation: 'cloud-drift 42s ease-in-out infinite alternate', animationDelay: '4s' }}
      />
      <Cloud
        className="w-72"
        opacity={0.7}
        style={{ top: '52%', left: '12%', filter: 'blur(8px)', animation: 'cloud-drift 50s ease-in-out infinite alternate', animationDelay: '2s' }}
      />
      <Cloud
        className="w-52"
        opacity={0.85}
        style={{ top: '66%', right: '14%', filter: 'blur(6px)', animation: 'cloud-drift 38s ease-in-out infinite alternate', animationDelay: '7s' }}
      />
      <Cloud
        className="w-40"
        opacity={0.6}
        style={{ top: '84%', left: '30%', filter: 'blur(7px)', animation: 'cloud-drift 46s ease-in-out infinite alternate', animationDelay: '5s' }}
      />
    </div>
  );
}