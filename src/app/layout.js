import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'irrrricardo | Deep Learning Researcher',
    template: '%s | irrrricardo',
  },
  description: 'Peking University | Basic Medicine & Economics | Deep Learning Researcher - Exploring the intersection of AI and healthcare.',
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
