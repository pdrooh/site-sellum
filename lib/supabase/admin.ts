import 'server-only'

import { createClient } from '@supabase/supabase-js'
import { getSupabaseEnv } from './env'

export function createSupabaseAdminClient() {
  const env = getSupabaseEnv()
  if (!env?.url || !env.serviceRoleKey) {
    throw new Error('Supabase admin não configurado (SUPABASE_SERVICE_ROLE_KEY).')
  }

  return createClient(env.url, env.serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  })
}

