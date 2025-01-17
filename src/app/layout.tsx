import StyledComponentsRegistry from '@/lib/registry';
import ReactQueryProvider from '@/utils/providers/ReactQueryProvider';
import '../styles/globals.css';
import { NavBar } from '@/components/NavBar';
import { Inter, Syne } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${syne.variable}`}>
      <body>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <NavBar />
            {children}
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
