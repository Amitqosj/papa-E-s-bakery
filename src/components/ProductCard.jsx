import Button from './Button'

export default function ProductCard({ product, onOrder, compact = false }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-cocoa/8 bg-white/70 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className={`relative overflow-hidden ${compact ? 'aspect-[4/3]' : 'aspect-[5/4]'}`}>
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-cocoa-soft backdrop-blur-sm">
          {product.category.replace('-', ' ')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl leading-snug text-cocoa sm:text-2xl">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa-soft/85">{product.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          {product.priceLabel && (
            <p className="text-sm font-medium text-rose">{product.priceLabel}</p>
          )}
          <Button
            variant="secondary"
            className="!px-4 !py-2 !text-[0.65rem] !tracking-[0.1em]"
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
