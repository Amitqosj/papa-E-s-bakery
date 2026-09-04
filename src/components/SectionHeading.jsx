export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <div className={`flex w-full max-w-2xl flex-col px-1 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-rose sm:mb-3 sm:text-[0.7rem]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[1.9rem] leading-[1.12] text-cocoa min-[375px]:text-4xl sm:text-5xl md:text-[3.15rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-cocoa-soft/90 sm:mt-4 sm:text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
