// src/app/page.tsx
import { prisma } from "@/lib/db";
import { addEntry } from "../actions";
export default async function Home() {
  // Fetch messages from the database
  const entries = await prisma.guestMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Guesthouse Book</h1>

      {/* --- FORM SECTION --- */}
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md mb-10">
        <form action={addEntry} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="border p-2 rounded text-black"
          />
          <textarea
            name="message"
            placeholder="Leave a message..."
            required
            className="border p-2 rounded text-black"
            rows={3}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Sign Guestbook
          </button>
        </form>
      </div>

      {/* --- DISPLAY SECTION --- */}
      <div className="w-full max-w-md flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Recent Messages</h2>
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white p-4 rounded shadow border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm mb-1">
              <strong>{entry.name}</strong> • {entry.createdAt.toLocaleDateString()}
            </p>
            <p className="text-gray-800">{entry.message}</p>
          </div>
        ))}

        {entries.length === 0 && (
          <p className="text-gray-500 text-center">No messages yet. Be the first!</p>
        )}
      </div>
    </main>
  );
}