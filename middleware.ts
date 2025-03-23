import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { publicPaths, validPaths } from "./lib/paths";

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

  const token = request.cookies.get("token")?.value;

  if (token && isPublicPath(path)) {
    const redirectPath = "/";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  return response;
}

function checkIfPathExists(path: string): boolean {
  return validPaths.some((validPath) => {
    if (validPath instanceof RegExp) {
      return validPath.test(path);
    }
    return validPath === path;
  });
}

function isPublicPath(path: string): boolean {
  return publicPaths.some((publicPath) => {
    if (publicPath instanceof RegExp) {
      return publicPath.test(path);
    }
    return publicPath === path;
  });
}
