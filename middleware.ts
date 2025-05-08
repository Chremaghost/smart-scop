import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuth = request.cookies.get('token')

  if (!isAuth && request.nextUrl.pathname.startsWith('/(protected)')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
