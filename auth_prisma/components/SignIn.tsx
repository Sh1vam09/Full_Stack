"use client";
import { signIn, signOut, useSession } from "@/lib/auth-client";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-3">
        {session.user.image ? (
          <img
            src={session.user.image}
            alt="User"
            className="w-8 h-8 rounded-full border border-gray-200"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
            {session.user.name?.charAt(0) || "U"}
          </div>
        )}

        <button
          onClick={() => signOut()}
          className="text-sm text-gray-500 hover:text-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      {/* GitHub Icon Button */}
      <button
        onClick={() => signIn.social({ provider: "github" })}
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-gray-700 transition"
        title="Sign in with GitHub"
      >
        GitHub
      </button>

      {/* Google Icon Button */}
      <button
        onClick={() => signIn.social({ provider: "google" })}
        className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 text-white transition"
        title="Sign in with Google"
      >
        Google
      </button>
    </div>
  );
}
