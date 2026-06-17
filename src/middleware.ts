import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  
  if (ua.toLowerCase().includes('curl') && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/cli.txt', request.url));
  }
  
  return NextResponse.next();
}