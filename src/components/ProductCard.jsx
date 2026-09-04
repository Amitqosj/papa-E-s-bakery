import Button from './Button'

export default function ProductCard({ product, onOrder, compact = false }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-cocoa/8 bg-white/60 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className={`relative overflow-hidden ${compact ? 'aspect-[4/3]' : 'aspect-[5/4]'}`}>
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-2.5 top-2.5 rounded-full bg-cream/95 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-cocoa-soft backdrop-blur-sm sm:left-3 sm:top-3 sm:px-3 sm:text-[0.65rem]">
          {product.category.replace('-', ' ')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <h3 className="font-display text-xl leading-snug text-cocoa sm:text-2xl">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa-soft/85">{product.description}</p>
        <div className="mt-5 flex items-center justify-end">
          <Button
            variant="secondary"
            className="!px-4 !py-2.5 text-xs"
            onClick={() => onOrder?.(product)}
            ariaLabel={`Order ${product.name}`}
          >
            {compact ? 'Order' : 'Order This'}
          </Button>
        </div>
      </div>
    </article>
  )
}
