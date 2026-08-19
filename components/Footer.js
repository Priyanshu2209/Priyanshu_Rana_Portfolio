export default function Footer() {
  return (
    <footer className="py-10 border-t border-sky-100">
      <p className="text-center text-ink-500 text-sm">
        © {new Date().getFullYear()} Priyanshu Rana · Built with Next.js &amp; Tailwind CSS
      </p>
    </footer>
  );
}