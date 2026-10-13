import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const { pathname } = request.nextUrl;

  // Serve llms.txt when an AI Agent requests markdown content negotiation on root
  if (
    pathname === "/" &&
    (acceptHeader.includes("text/markdown") || acceptHeader.includes("text/x-markdown"))
  ) {
    return NextResponse.rewrite(new URL("/llms.txt", request.url));
  }

  const response = NextResponse.next();

  // Add agent & crawler identification header
  response.headers.set("X-Agent-Ready", "1.0.0");
  response.headers.set(
    "Link",
    '<https://ibradigital.id/llms.txt>; rel="alternate"; type="text/markdown", <https://ibradigital.id/.well-known/agents.json>; rel="agent-description"'
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, icons
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
