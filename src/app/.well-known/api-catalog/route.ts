import { NextResponse } from "next/server";

export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: "https://ibradigital.id/api/",
        "service-desc": [
          {
            href: "https://ibradigital.id/openapi.json",
            type: "application/openapi+json",
          },
        ],
        "service-doc": [
          {
            href: "https://ibradigital.id/llms.txt",
            type: "text/markdown",
          },
        ],
        status: [
          {
            href: "https://ibradigital.id/api/health",
            type: "application/json",
          },
        ],
      },
    ],
  };

  return new NextResponse(JSON.stringify(catalog, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
