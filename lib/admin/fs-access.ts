/**
 * Escrita em disco pelo admin (artigos .md e members.json).
 * Em deploy serverless (ex.: Vercel), o filesystem é efêmero — habilite apenas em self-hosted
 * ou defina ALLOW_BLOG_FS_ADMIN=true com storage persistente montado.
 */
export function canWriteAdminFilesystem() {
  return process.env.NODE_ENV === 'development' || process.env.ALLOW_BLOG_FS_ADMIN === 'true'
}
