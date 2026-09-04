/**
 * DEMO PRODUCT DATA — Papa E's Bakery
 * Sample products for the pitch demo.
 * Replace name, description, image, priceLabel, and category with real menu data.
 *
 * priceLabel uses "Starting at…" demo values — not live bakery pricing.
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
    priceLabel: 'Starting at $55',
    category: 'cakes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Tall chocolate celebration cake',
  },
  {
    id: 'strawberry-dream',
    name: 'Strawberry Dream Cake',
    description: 'Soft vanilla layers, fresh strawberry filling, and delicate rose-toned frosting.',
    priceLabel: 'Starting at $62',
    category: 'cakes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Pink strawberry cake with berries',
  },
  {
    id: 'chocolate-lovers',
    name: "Chocolate Lover's Cake",
    description: 'Rich cocoa sponge with silky chocolate frosting for the ultimate chocolate moment.',
    priceLabel: 'Starting at $58',
    category: 'cakes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Decadent chocolate layer cake',
  },
  {
    id: 'custom-design',
    name: 'Custom Design Cake',
    description: 'Your colors, theme, and flavor — baked into a one-of-a-kind celebration centerpiece.',
    priceLabel: 'Starting at $75',
    category: 'cakes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Custom celebration cake',
  },
  {
    id: 'signature-cupcake-box',
    name: 'Signature Cupcake Box',
    description: 'A curated mix of frosted cupcakes — soft, colorful, and ready to share.',
    priceLabel: 'Starting at $32',
    category: 'cupcakes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Assorted frosted cupcakes',
  },
  {
    id: 'vanilla-blush-cupcakes',
    name: 'Vanilla Blush Cupcakes',
    description: 'Light vanilla cupcakes topped with dusty-rose buttercream peaks.',
    priceLabel: 'Starting at $28',
    category: 'cupcakes',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Soft pink frosted vanilla cupcakes',
  },
  {
    id: 'decorated-sugar-cookies',
    name: 'Decorated Sugar Cookies',
    description: 'Hand-decorated cookies with custom designs for parties, gifts, and holidays.',
    priceLabel: 'Starting at $24',
    category: 'cookies',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Decorated sugar cookies',
  },
  {
    id: 'chocolate-chip-batch',
    name: 'Chocolate Chip Cookie Batch',
    description: 'Golden, chewy cookies with melty chocolate — comfort in every bite.',
    priceLabel: 'Starting at $18',
    category: 'cookies',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Chocolate chip cookies',
  },
  {
    id: 'fudge-brownie-box',
    name: 'Fudge Brownie Box',
    description: 'Dense, fudgy brownies with a crackly top — boxed and ready to gift.',
    priceLabel: 'Starting at $22',
    category: 'brownies',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Fudgy chocolate brownies',
  },
  {
    id: 'salted-caramel-brownies',
    name: 'Salted Caramel Brownies',
    description: 'Rich brownie squares finished with a whisper of salted caramel.',
    priceLabel: 'Starting at $26',
    category: 'brownies',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Brownies with caramel',
  },
  {
    id: 'sweet-sampler-box',
    name: 'Sweet Sampler Dessert Box',
    description: 'A little of everything — cakes, cookies, and treats for sharing.',
    priceLabel: 'Starting at $45',
    category: 'dessert-boxes',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Assorted dessert box',
  },
  {
    id: 'celebration-treat-box',
    name: 'Celebration Treat Box',
    description: 'Party-ready sweets curated for birthdays, showers, and gatherings.',
    priceLabel: 'Starting at $48',
    category: 'dessert-boxes',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=80',
    alt: 'DEMO: Celebration dessert assortment',
  },
]

export const getFeaturedProducts = () => products.filter((p) => p.featured)

export const getProductsByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') return products
  return products.filter((p) => p.category === categoryId)
}
