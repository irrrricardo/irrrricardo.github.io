import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Renxiang Chu | Medical Imaging and Aging Research',
    template: '%s | Renxiang Chu',
  },
  description: 'Renxiang Chu is an undergraduate at Peking University studying Basic Medical Sciences with a dual degree in Economics, working on medical imaging, biological aging, and interpretable representation learning.',
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
