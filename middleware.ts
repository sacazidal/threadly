import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validPaths } from "./lib/paths";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (
    path.startsWith("/_next/") ||
    path.startsWith("/api/") ||
    path.startsWith("/images/") ||
    path.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("last-visited-path")?.value;

  const response = NextResponse.next();
  response.cookies.set("last-visited-path", path);

  const isPathExists = checkIfPathExists(path);

  if (!isPathExists) {
    const redirectPath = cookie || "/";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }
  return response;
}

function checkIfPathExists(path: string): boolean {
  return validPaths.includes(path);
}
