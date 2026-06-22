import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <h1 className="text-xl font-bold tracking-wider text-teal-400">SOFYAN</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-teal-400 transition">Tentang</a>
          <a href="#projects" className="hover:text-teal-400 transition">Proyek</a>
          <a href="#contact" className="hover:text-teal-400 transition">Kontak</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          I Messi, <span className="text-teal-400">Informatics Student</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-8">
          Saya suka membangun aplikasi web yang interaktif, cepat, dan responsif menggunakan teknologi modern seperti React dan Next.js.
        </p>
        <a href="#projects" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold py-3 px-6 rounded-full transition shadow-lg shadow-teal-500/20">
          Lihat Karya Saya
        </a>
      </header>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800">
        <h3 className="text-2xl font-bold mb-8 text-center text-teal-400">Proyek Unggulan</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition">
            <h4 className="text-xl font-semibold mb-2">Website E-Commerce</h4>
            <p className="text-slate-400 mb-4">Toko online responsif dengan fitur keranjang belanja dan integrasi payment gateway.</p>
            <span className="text-xs font-mono bg-slate-700 px-3 py-1 rounded text-teal-300">Next.js</span>
          </div>
          {/* Project 2 */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition">
            <h4 className="text-xl font-semibold mb-2">Aplikasi Manajemen Tugas</h4>
            <p className="text-slate-400 mb-4">Aplikasi To-Do list tingkat lanjut dengan fitur drag-and-drop dan manajemen waktu.</p>
            <span className="text-xs font-mono bg-slate-700 px-3 py-1 rounded text-teal-300">Tailwind CSS</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} By Ahmad Sofyan. Built with Next.js & Vercel.
      </footer>
    </div>
  );
}