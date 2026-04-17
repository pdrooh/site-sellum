import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    const expected = process.env.ADMIN_SESSION_TOKEN
    if (!expected) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      url.searchParams.set('config', '1')
      return NextResponse.redirect(url)
    }
    const token = request.cookies.get('sellum_admin')?.value
    if (token !== expected) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      url.searchParams.set('next', pathname)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}
