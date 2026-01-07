'use client';
import { Playfair_Display } from 'next/font/google';

const nextFont = Playfair_Display({ subsets: ['latin'], weight: '700' });

export default function FontTest() {
  return (
    <main className="p-10 space-y-20">
      {/* Test Case 1: Standard CSS */}
      <section>
        <h2 className="text-sm text-red-500 font-mono">Method: Standard CSS Import</h2>
        <h1 className="css-font text-6xl">
          This heading might jump when the font loads.
        </h1>
      </section>

      <hr />

      {/* Test Case 2: Next/Font */}
      <section>
        <h2 className="text-sm text-green-500 font-mono">Method: next/font/google</h2>
        <h1 className={`${nextFont.className} text-6xl`}>
          This heading should stay stable.
        </h1>
      </section>
    </main>
  );
}