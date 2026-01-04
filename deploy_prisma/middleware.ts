import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("better-auth.session_token");

  // Only protect specific routes to avoid infinite loops
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");

  if (!sessionCookie && (isAdminRoute || isDashboardRoute)) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
