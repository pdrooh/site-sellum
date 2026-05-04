-- Sellum site (Next.js) — Supabase schema
-- Apply this in Supabase SQL Editor.

-- MEMBERS
create table if not exists public.members (
  id uuid primary key,
  name text not null,
  email text not null unique,
  role text not null,
  created_at timestamptz not null default now()
);

-- BLOG POSTS
create table if not exists public.blog_posts (
  slug text primary key,
  title text not null,
  description text not null,
  published_at timestamptz not null default now(),
  updated_at timestamptz,
  author text not null default 'Sellum',
  author_role text,
  category text,
  image text,
  "index" boolean not null default true,
  content_md text not null default ''
);

create index if not exists blog_posts_published_at_idx on public.blog_posts (published_at desc);
create index if not exists blog_posts_index_idx on public.blog_posts ("index");

-- RLS
alter table public.members enable row level security;
alter table public.blog_posts enable row level security;

-- Public can only read indexed posts.
drop policy if exists "blog_posts_public_read_indexed" on public.blog_posts;
create policy "blog_posts_public_read_indexed"
on public.blog_posts
for select
to anon, authenticated
using ("index" is true);

-- Members: no public access by default.
-- Admin APIs use service role (bypasses RLS). If you later migrate admin login to Supabase Auth,
-- add policies for authenticated users with a custom claim/role.

