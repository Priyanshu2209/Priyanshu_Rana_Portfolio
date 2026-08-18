export default function Footer() {
  return (
    <footer className="py-10 border-t border-brass-500/10">
      <p className="text-center text-muted text-sm">
        © {new Date().getFullYear()} Priyanshu Rana · Built with Next.js &amp; Tailwind CSS
      </p>
    </footer>
  );
}