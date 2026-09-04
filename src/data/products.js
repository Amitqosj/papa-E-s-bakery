/**
 * DEMO PRODUCT DATA — Papa E's Bakery
 * ------------------------------------
 * Sample products for the pitch demo only.
 * Replace names, descriptions, and image URLs with real bakery
 * products when connecting this site to live inventory.
 *
 * Prices are intentionally OMITTED — exact menu pricing is unknown.
 * When pitching: "These are sample products. We can replace them with
 * your actual cakes, cookies, prices and photos."
 */

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'cakes', label: 'Cakes' },
  { id: 'cupcakes', label: 'Cupcakes' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'brownies', label: 'Brownies' },
  { id: 'dessert-boxes', label: 'Dessert Boxes' },
]

export const products = [
  {
    id: 'classic-celebration',
    name: 'Classic Celebration Cake',
    description: 'A timeless layered cake finished with smooth buttercream — perfect for birthdays and milestones.',
    category: 'cakes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Tall chocolate celebration cake with glossy ganache drip',
  },
  {
    id: 'strawberry-dream',
    name: 'Strawberry Dream Cake',
    description: 'Soft vanilla layers, fresh strawberry filling, and delicate rose-toned frosting.',
    category: 'cakes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Pink strawberry cake with fresh berries on top',
  },
  {
    id: 'chocolate-lovers',
    name: "Chocolate Lover's Cake",
    description: 'Rich cocoa sponge with silky chocolate frosting for the ultimate chocolate moment.',
    category: 'cakes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Decadent chocolate layer cake with frosting swirls',
  },
  {
    id: 'custom-design',
    name: 'Custom Design Cake',
    description: 'Your colors, theme, and flavor — baked into a one-of-a-kind celebration centerpiece.',
    category: 'cakes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1535254973040-607b474d7f5a?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Elegantly decorated custom celebration cake',
  },
  {
    id: 'signature-cupcake-box',
    name: 'Signature Cupcake Box',
    description: 'A curated mix of frosted cupcakes — soft, colorful, and ready to share.',
    category: 'cupcakes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Assorted frosted cupcakes with pastel swirls',
  },
  {
    id: 'vanilla-blush-cupcakes',
    name: 'Vanilla Blush Cupcakes',
    description: 'Light vanilla cupcakes topped with dusty-rose buttercream peaks.',
    category: 'cupcakes',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1426869981800-95ebf51cefd4?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Soft pink frosted vanilla cupcakes',
  },
  {
    id: 'decorated-sugar-cookies',
    name: 'Decorated Sugar Cookies',
    description: 'Hand-decorated cookies with custom designs for parties, gifts, and holidays.',
    category: 'cookies',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Beautifully decorated sugar cookies with icing details',
  },
  {
    id: 'chocolate-chip-batch',
    name: 'Chocolate Chip Cookie Batch',
    description: 'Golden, chewy cookies with melty chocolate — comfort in every bite.',
    category: 'cookies',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Freshly baked chocolate chip cookies',
  },
  {
    id: 'fudge-brownie-box',
    name: 'Fudge Brownie Box',
    description: 'Dense, fudgy brownies with a crackly top — boxed and ready to gift.',
    category: 'brownies',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Fudgy chocolate brownies cut into squares',
  },
  {
    id: 'salted-caramel-brownies',
    name: 'Salted Caramel Brownies',
    description: 'Rich brownie squares finished with a whisper of salted caramel.',
    category: 'brownies',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Chocolate brownies with caramel drizzle',
  },
  {
    id: 'sweet-sampler-box',
    name: 'Sweet Sampler Dessert Box',
    description: 'A little of everything — cakes, cookies, and treats for sharing.',
    category: 'dessert-boxes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Assorted dessert box with cakes and treats',
  },
  {
    id: 'celebration-treat-box',
    name: 'Celebration Treat Box',
    description: 'Party-ready sweets curated for birthdays, showers, and gatherings.',
    category: 'dessert-boxes',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
    alt: 'DEMO: Celebration dessert assortment in a gift box',
  },
]

export const getFeaturedProducts = () => products.filter((p) => p.featured)

export const getProductsByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') return products
  return products.filter((p) => p.category === categoryId)
}
