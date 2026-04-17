import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

const linkClass =
  'font-medium text-[#8fa8ff] underline decoration-white/12 underline-offset-[3px] transition hover:text-white hover:decoration-white/25'

const components: Components = {
  a: ({ href, children, ...rest }) => {
    const external = href?.startsWith('http')
    return (
      <a
        href={href}
        {...rest}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : { rel: rest.rel ?? undefined })}
        className={linkClass}
      >
        {children}
      </a>
    )
  },
  h2: ({ children }) => (
    <h2 className="mt-16 scroll-mt-28 text-balance text-[1.28rem] font-semibold leading-snug tracking-[-0.02em] text-white first:mt-0 sm:mt-[4.5rem] sm:text-[1.45rem]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-11 scroll-mt-28 text-[1.05rem] font-semibold leading-snug tracking-tight text-white/92 sm:text-[1.12rem]">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-[1rem] leading-[1.78] text-white/[0.68] first:mt-0 sm:text-[1.0625rem] sm:leading-[1.82]">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2 pl-5 text-[1rem] text-white/[0.68] marker:text-[#7c95ff]/75 sm:text-[1.0625rem] sm:pl-6">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-5 text-[1rem] text-white/[0.68] marker:text-white/35 sm:text-[1.0625rem] sm:pl-6">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-[1.78] [&>p]:mt-0">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-white/[0.92]">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="mt-9 border-l-2 border-[#3d5cff]/45 py-0.5 pl-5 text-[0.98rem] leading-[1.75] text-white/[0.62] sm:text-[1.02rem] [&>p]:mt-3 [&>p:first-child]:mt-0">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-14 border-0 border-t border-white/[0.06]" />,
  code: ({ className, children, ...props }) => {
    const inline = !className
    if (inline) {
      return (
        <code
          className="rounded-[6px] border border-white/[0.09] bg-white/[0.05] px-[0.35em] py-[0.12em] text-[0.88em] font-medium text-[#d4dcff]"
          {...props}
        >
          {children}
        </code>
      )
    }
    return (
      <code className={`${className ?? ''} font-mono text-[0.9em]`} {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre className="mt-8 overflow-x-auto radius-12 border border-white/[0.08] bg-[#050508] p-5 text-[0.875rem] leading-relaxed text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="mt-10 overflow-x-auto radius-12 border border-white/[0.07] bg-white/[0.015]">
      <table className="w-full min-w-[520px] border-collapse text-left text-[0.9375rem] text-white/70">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-white/[0.03] text-white/88">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-white/[0.08] px-4 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">
      {children}
    </th>
  ),
  td: ({ children }) => <td className="border-b border-white/[0.05] px-4 py-3.5 align-top">{children}</td>,
}

export function BlogMarkdown({ content }: { content: string }) {
  return (
    <div className="prose-blog selection:bg-[#161ba9]/40">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
