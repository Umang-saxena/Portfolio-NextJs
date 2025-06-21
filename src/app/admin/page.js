import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const cookieStore = cookies();
  const isAdmin = await cookieStore.get('admin_auth')?.value === 'true';
  if (!isAdmin) {
    redirect('/admin-login');
  }
  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 32 }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, admin! You are authenticated.</p>
    </div>
  );
}
