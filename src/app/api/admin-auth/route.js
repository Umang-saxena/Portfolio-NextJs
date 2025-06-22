import { NextResponse } from 'next/server';

export async function GET(request) {
  const cookieStore = request.cookies;
  const isAdmin = cookieStore.get('admin_auth')?.value === 'true';

  if (isAdmin) {
    return NextResponse.json({ authenticated: true });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
