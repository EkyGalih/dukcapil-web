import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // get cookie token
    const token = request.cookies.get("token")?.value;

    // check when not login
    if (!token && request.nextUrl.pathname.startsWith("/admin")) {
        // redirect to login
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // if login, got it
    return NextResponse.next();
}