import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Renxiang Chu | AI for Biological Design and Discovery',
    template: '%s | Renxiang Chu',
  },
  description: 'Renxiang Chu is a Peking University undergraduate researcher working on scientific memory, biological representation learning, clinical world-model evaluation, and AI for Science.',
  keywords: [
    'Renxiang Chu',
    'AI for medicine',
    'AI for Science',
    'protein design',
    'RNA design',
    'molecular design',
    'computational biology',
    'medical imaging',
    'AI co-scientist',
    'scientific memory',
    'clinical world models',
    'Peking University',
  ],
  authors: [{ name: 'Renxiang Chu', url: 'https://irrrricardo.github.io/' }],
  openGraph: {
    title: 'Renxiang Chu | AI for Biological Design and Discovery',
    description: 'Scientific memory, generative biomolecular AI, clinical world-model evaluation, and AI for Science.',
    url: 'https://irrrricardo.github.io/',
    siteName: 'Renxiang Chu',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
