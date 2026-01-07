import { Playfair_Display } from 'next/font/google';

// Configure the font
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap', // This tells the browser to show fallback text until the font is ready
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}