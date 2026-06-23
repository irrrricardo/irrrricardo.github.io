import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Renxiang Chu | AI for Medicine',
    template: '%s | Renxiang Chu',
  },
  description: 'Renxiang Chu is a Peking University student working on AI for medicine, medical imaging, biological aging, and agentic AI for research.',
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
