import 'server-only'

import { createClient } from '@supabase/supabase-js'
import { getSupabaseEnv } from './env'

export function createSupabaseServerClient() {
  const env = getSupabaseEnv()
  if (!env) {
    throw new Error('Supabase não configurado (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY).')
  }

  return createClient(env.url, env.anonKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  })
}

