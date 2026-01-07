import Sidebar from '@/components/Sidebar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex' }}>
        <Sidebar />
        {/* Padding-left matches the width of the collapsed sidebar */}
        <main style={{ flex: 1, paddingLeft: '80px' }}>
          <div style={{ padding: '40px', maxWidth: '1200px' }}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}