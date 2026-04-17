import 'server-only'

import { cookies } from 'next/headers'

export async function verifyAdminSession() {
  const expected = process.env.ADMIN_SESSION_TOKEN
  if (!expected) return false
  const cookieStore = await cookies()
  return cookieStore.get('sellum_admin')?.value === expected
}
