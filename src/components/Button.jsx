export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  fullWidth = false,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[0.8rem] font-medium uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose'

  const variants = {
    primary:
      'bg-rose text-cream shadow-soft hover:bg-rose-dark hover:shadow-lift hover:-translate-y-0.5',
    secondary:
      'border border-cocoa/20 bg-transparent text-cocoa hover:border-rose hover:text-rose',
    ghost: 'bg-cream/80 text-cocoa hover:bg-cream',
    sage: 'bg-sage text-cocoa hover:bg-sage-dark',
  }

  const classes = `${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    const external = href.startsWith('http') || href.startsWith('mailto:')
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(external && href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
