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
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: t.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg">
          irrrricardo
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggleLang} className="p-2 text-white/70 hover:text-white transition-colors" title="Toggle Language">
            🌐
          </button>
          <button onClick={toggleTheme} className="p-2 text-white/70 hover:text-white transition-colors" title="Toggle Theme">
            {isDark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white/70 hover:text-white transition-colors">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium transition-colors ${
                pathname === link.href ? 'text-white bg-white/10' : 'text-white/70'
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
