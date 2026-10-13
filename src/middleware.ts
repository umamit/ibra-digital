import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { homeMarkdown } from "@/data/homeMarkdown";

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const { pathname } = request.nextUrl;

  const isMarkdownRequested =
    acceptHeader.includes("text/markdown") ||
    acceptHeader.includes("text/x-markdown");

  // Return direct Markdown representation when Accept: text/markdown is present
  if (isMarkdownRequested && (pathname === "/" || pathname === "")) {
    const tokens = 485; // Token count for home markdown
    return new NextResponse(homeMarkdown, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "x-markdown-tokens": tokens.toString(),
        "Vary": "Accept",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        "Access-Control-Allow-Origin": "*",
        "Link": '<https://ibradigital.id/llms.txt>; rel="alternate"; type="text/markdown", <https://ibradigital.id/.well-known/agents.json>; rel="agent-description"',
      },
    });
  }

  const response = NextResponse.next();

  response.headers.set("Vary", "Accept");
  response.headers.set("X-Agent-Ready", "1.0.0");
  response.headers.set(
    "Link",
    '<https://ibradigital.id/llms.txt>; rel="alternate"; type="text/markdown", <https://ibradigital.id/.well-known/agents.json>; rel="agent-description"'
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
