import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { DEFAULT_LOCALE } from '@/common/constants/i18nConfig';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const nextPathname = request.nextUrl.pathname;

  if (
    nextPathname.startsWith('/_next') ||
    nextPathname.includes('/api/') ||
    PUBLIC_FILE.test(nextPathname)
  ) {
    return NextResponse.next();
  }

  const isAuthenticated = true;

  const locale = request.nextUrl.locale || DEFAULT_LOCALE;

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL(`/${locale}/signIn`, request.url));
  }

  return NextResponse.next();
}
