import Header from '@/components/molecultes/Header';
import Footer from '@/components/molecultes/Footer';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>{children}</main>
      <Footer />
    </>
  );
}