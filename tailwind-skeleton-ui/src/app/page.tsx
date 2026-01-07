'use client';

import { useState, useEffect } from 'react';
import Skeleton from '@/components/Skeleton';

// Define what a User looks like
interface User {
  id: number;
  email: string;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Artificial 3-second delay
    const timer = setTimeout(async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser({ id: data.id, email: data.email });
      } catch (error) {
        console.error("Failed to fetch:", error);
      } finally {
        setLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-2xl font-bold mb-8">User Profile</h1>

      {loading ? (
        // Show the skeleton while loading
        <div className="space-y-4 w-full flex flex-col items-center">
          <Skeleton />
          <p className="text-sm text-gray-500 animate-bounce">Fetching data</p>
        </div>
      ) : (
        // Show the actual data after 3 seconds
        <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100 max-w-sm w-full text-center">
          <h2 className="text-xl font-semibold text-blue-600">User Found!</h2>
          <div className="mt-4 text-left space-y-2">
            <p className="text-gray-700"><strong>ID:</strong> {user?.id}</p>
            <p className="text-gray-700"><strong>Email:</strong> {user?.email}</p>
          </div>
        </div>
      )}
    </main>
  );
}