import Link from "next/link";
import Container from "@/components/Containers";
import SignIn from "@/components/SignIn";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 tracking-tight"
          >
            My Portfolio
          </Link>

          {/* Navigation - Hidden on mobile, visible on medium screens + */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <Link
              href="/projects"
              className="hover:text-indigo-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="hover:text-indigo-600 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Login Buttons */}
          <div>
            <SignIn />
          </div>
        </div>
      </Container>
    </header>
  );
}
