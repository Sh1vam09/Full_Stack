"use client";
import Link from "next/link";
import Container from "@/components/Containers";
import { useSession, signOut } from "@/lib/auth-client"; // Added signOut here

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            My Portfolio
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <Link href="/projects" className="hover:text-indigo-600">
              Projects
            </Link>

            {/* Show Admin Link if user is admin */}
            {session?.user?.role === "admin" && (
              <Link href="/admin" className="text-red-600 hover:text-red-800">
                Admin Panel
              </Link>
            )}
          </nav>

          <div>
            {session ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">{session.user.name}</span>
                <button
                  onClick={() => signOut()}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
