import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set('admin_auth', '', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    maxAge: 0, // This immediately expires the cookie
  });
  return response;
} 