export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* base sky wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-sky-50" />
      {/* subtle clouds */}
      <div className="cloud" style={{ width: 320, height: 90, top: '12%', left: '-60px', animationDelay: '0s' }} />
      <div className="cloud" style={{ width: 240, height: 70, top: '30%', right: '-40px', animationDelay: '6s' }} />
      <div className="cloud" style={{ width: 380, height: 100, top: '58%', left: '10%', animationDelay: '3s' }} />
      <div className="cloud" style={{ width: 200, height: 60, top: '78%', right: '15%', animationDelay: '9s' }} />
    </div>
  );
}