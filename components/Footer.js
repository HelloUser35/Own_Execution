export default function Footer() {
  return (
    <footer className="w-full text-center py-8 mt-12 bg-white/50 dark:bg-gray-900/60">
      <div className="container mx-auto px-6 lg:px-20 text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Pritish Panda • Built with Next.js & Tailwind
      </div>
    </footer>
  );
}
