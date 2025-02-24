import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import environment from "./config/environment";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: environment.AUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Jika user sudah login, cegah akses ke halaman root ("/") dan halaman login/register
  if (token && (pathname === "/" || pathname.startsWith("/auth"))) {
    return NextResponse.redirect(new URL("/main/dashboard", request.url));
  }

  // Jika user belum login dan mencoba akses ke /main, arahkan ke login
  if (pathname.startsWith("/main") && !token) {
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Lanjutkan ke halaman yang diminta jika tidak ada kondisi redirect
}

export const config = {
  matcher: ["/", "/auth/:path*", "/main/:path*"],
};
