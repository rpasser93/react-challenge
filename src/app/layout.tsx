import StyledComponentsRegistry from '@/lib/registry';
import ReactQueryProvider from '@/utils/providers/ReactQueryProvider';
import './globals.css';
import { NavBar } from '@/components/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
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
