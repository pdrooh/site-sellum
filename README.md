# site-sellum

Repositório do site da Sellum.

## Supabase (produção serverless)

Este projeto pode rodar sem banco (posts em `content/blog` e membros em `data/members.json`), mas em deploy serverless o filesystem é efêmero. O caminho recomendado é usar Supabase.

### Variáveis de ambiente

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only; usado apenas nas rotas admin)

### Schema

Rode o SQL em `supabase/schema.sql` no Supabase SQL Editor.

