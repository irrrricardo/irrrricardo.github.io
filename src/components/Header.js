'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { translations } from '@/lib/translations';

export default function Header() {
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    const savedTheme = localStorage.getItem('theme');
    setLang(savedLang);
    setIsDark(savedTheme === 'dark');
    if (savedTheme === 'dark') document.documentElement.classList.add('dark');
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'zh' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    window.dispatchEvent(new Event('langChange'));
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newIsDark);
  };

  const t = translations[lang].nav;
  const links = [
    { href: '/', label: t.home },
    { href: '/about', label: t.about },
    { href: '/projects', label: t.projects },
    { href: '/blog', label: t.blog },
    { href: '/resume', label: t.resume },
    { href: '/contact', label: t.contact },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 shadow-[0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/70">
      <nav className="section-shell h-14 flex items-center justify-between">
        <Link href="/" className="focus-ring group flex items-center gap-3 rounded-lg text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/[0.07] text-[11px] font-semibold tracking-wide transition duration-200 group-hover:border-white/35 group-hover:bg-white/10">RC</span>
          <span className="text-sm font-semibold tracking-[-0.01em]">Renxiang Chu</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring rounded-lg px-3 py-2 text-sm font-medium transition duration-200 ${
                pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
                  ? 'bg-white/[0.12] text-white shadow-sm'
                  : 'text-white/65 hover:bg-white/[0.07] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggleLang} className="focus-ring rounded-lg border border-white/15 bg-white/[0.03] px-2.5 py-1.5 text-xs font-semibold text-white/75 transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white" title="Toggle language">
            {lang === 'en' ? '中' : 'EN'}
          </button>
          <button onClick={toggleTheme} className="focus-ring rounded-lg border border-white/15 bg-white/[0.03] px-2.5 py-1.5 text-xs font-semibold text-white/75 transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white" title="Toggle theme">
            {isDark ? 'Light' : 'Dark'}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus-ring rounded-lg border border-white/15 bg-white/[0.03] px-2.5 py-1.5 text-sm font-semibold text-white/75 transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white md:hidden" aria-label="Toggle menu">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`block px-5 py-3 text-sm font-medium transition-colors ${pathname === link.href ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/[0.07] hover:text-white'}`}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
