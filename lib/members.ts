import 'server-only'

import { promises as fs } from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'
import type { Member } from '@/lib/types/member'

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
  await ensureFile()
  const raw = await fs.readFile(MEMBERS_FILE, 'utf8')
  const parsed = JSON.parse(raw) as unknown
  if (!Array.isArray(parsed)) return []
  return parsed as Member[]
}

export async function saveMembers(members: Member[]) {
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
