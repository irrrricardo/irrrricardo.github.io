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

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/85 backdrop-blur-md">
      <nav className="section-shell h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-white focus-ring rounded-sm">
          <span className="flex h-7 w-7 items-center justify-center border border-white/25 text-xs font-semibold">
            RC
          </span>
          <span className="text-sm font-semibold">Renxiang Chu</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors focus-ring ${
                pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
                  ? 'bg-white/10 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="focus-ring rounded-sm border border-white/15 px-2.5 py-1.5 text-xs font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            title="Toggle language"
          >
            {lang === 'en' ? '中' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="focus-ring rounded-sm border border-white/15 px-2.5 py-1.5 text-xs font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            title="Toggle theme"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus-ring rounded-sm border border-white/15 px-2.5 py-1.5 text-sm font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-gray-950 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-5 py-3 text-sm font-medium transition-colors ${
                pathname === link.href ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
