import StyledComponentsRegistry from '@/lib/registry';
import ReactQueryProvider from '@/utils/providers/ReactQueryProvider';
import '../styles/globals.css';
import { NavBar } from '@/components/NavBar';
import { Inter, Josefin_Sans, Syne } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
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
    <html
      lang='en'
      className={`${inter.variable} ${josefin_sans.variable} ${syne.variable}`}
    >
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
