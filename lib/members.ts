import 'server-only'

import { promises as fs } from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'
import type { Member } from '@/lib/types/member'
import { hasSupabaseAdmin } from '@/lib/supabase/env'
import { createSupabaseAdminClient } from '@/lib/supabase/admin'

const MEMBERS_FILE = path.join(process.cwd(), 'data/members.json')

export type { Member }

async function ensureFile() {
  try {
    await fs.access(MEMBERS_FILE)
  } catch {
    await fs.mkdir(path.dirname(MEMBERS_FILE), { recursive: true })
    await fs.writeFile(MEMBERS_FILE, '[]', 'utf8')
  }
}

export async function getMembers(): Promise<Member[]> {
  if (hasSupabaseAdmin()) {
    const supabase = createSupabaseAdminClient()
    const { data, error } = await supabase
      .from('members')
      .select('id,name,email,role,created_at')
      .order('created_at', { ascending: false })

    if (error) throw new Error(error.message)
    return (data ?? []).map((row) => ({
      id: String(row.id),
      name: String(row.name),
      email: String(row.email),
      role: String(row.role),
      createdAt: new Date(String(row.created_at)).toISOString(),
    }))
  }

  await ensureFile()
  const raw = await fs.readFile(MEMBERS_FILE, 'utf8')
  const parsed = JSON.parse(raw) as unknown
  if (!Array.isArray(parsed)) return []
  return parsed as Member[]
}

export async function saveMembers(members: Member[]) {
  if (hasSupabaseAdmin()) {
    const supabase = createSupabaseAdminClient()
    const { error: delErr } = await supabase.from('members').delete().neq('id', '__never__')
    if (delErr) throw new Error(delErr.message)

    if (members.length > 0) {
      const { error: insErr } = await supabase.from('members').insert(
        members.map((m) => ({
          id: m.id,
          name: m.name,
          email: m.email,
          role: m.role,
          created_at: m.createdAt,
        })),
      )
      if (insErr) throw new Error(insErr.message)
    }
    return
  }

  await fs.mkdir(path.dirname(MEMBERS_FILE), { recursive: true })
  await fs.writeFile(MEMBERS_FILE, `${JSON.stringify(members, null, 2)}\n`, 'utf8')
}

export function createMember(input: Omit<Member, 'id' | 'createdAt'>): Member {
  return {
    id: randomUUID(),
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    role: input.role.trim(),
    createdAt: new Date().toISOString(),
  }
}
