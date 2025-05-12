import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  const url = request.nextUrl

  if (!token && url.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/public/login', request.url))
  }

  return NextResponse.next()
}
