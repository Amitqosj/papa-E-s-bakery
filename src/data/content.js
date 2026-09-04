/**
 * DEMO CONTENT — reviews, occasions, gallery, brand constants
 * Replace with real customer reviews, photos, and links when going live.
 */

export const brand = {
  name: "Papa E's Bakery",
  shortName: "Papa E's",
  location: 'Atlanta, GA',
  email: 'papa.e.bakery@gmail.com',
  instagramHandle: '@papa_e_bakery',
  // DEMO: replace with the real Instagram profile URL
  instagramUrl: 'https://instagram.com/papa_e_bakery',
  tagline: 'Handcrafted sweets made with creativity, passion and a little extra love.',
  followersLabel: '20.6K followers on Instagram',
}

/** DEMO testimonials — swap with real customer reviews */
export const reviews = [
  {
    id: 1,
    name: 'Maya R.',
    text: 'Absolutely beautiful cake and even better than I imagined. Every detail was perfect!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jordan T.',
    text: 'Ordered cupcakes for a birthday and they looked stunning. Soft, flavorful, and so thoughtfully decorated.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Alicia M.',
    text: 'The custom design brought our theme to life. Communication was easy and the cake was a showstopper.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Chris & Sam',
    text: 'Cookies arrived looking like little works of art. Fresh, delicious, and perfect for our celebration.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Priya K.',
    text: 'From the first message to pickup, everything felt personal and premium. Already planning our next order.',
    rating: 5,
  },
]

export const occasions = [
  {
    id: 'birthday',
    title: 'Birthday',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80',
    alt: 'DEMO: Colorful birthday celebration cake with candles',
  },
  {
    id: 'graduation',
    title: 'Graduation',
    image:
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
    alt: 'DEMO: Elegant cake suitable for a graduation celebration',
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower',
    image:
      'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80',
    alt: 'DEMO: Soft pastel cupcakes for a baby shower',
  },
  {
    id: 'wedding',
    title: 'Wedding',
    image:
      'https://images.unsplash.com/photo-1519657323259-f5df4c69fabe?auto=format&fit=crop&w=800&q=80',
    alt: 'DEMO: Elegant wedding-style cake with florals',
  },
  {
    id: 'anniversary',
    title: 'Anniversary',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    alt: 'DEMO: Romantic layered cake for an anniversary',
  },
  {
    id: 'holiday',
    title: 'Holiday',
    image:
      'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=800&q=80',
    alt: 'DEMO: Festive holiday dessert spread',
  },
  {
    id: 'just-because',
    title: 'Just Because',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80',
    alt: 'DEMO: Assorted sweet treats for any occasion',
  },
]

/** DEMO Instagram gallery imagery — replace with real bakery photos */
export const instagramGallery = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
    alt: 'DEMO: Decorated chocolate celebration cake',
    tall: true,
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=700&q=80',
    alt: 'DEMO: Soft frosted cupcakes',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80',
    alt: 'DEMO: Hand-decorated cookies',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
    alt: 'DEMO: Fresh brownies',
    tall: true,
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80',
    alt: 'DEMO: Cake decorating process',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80',
    alt: 'DEMO: Dessert packaging and presentation',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    alt: 'DEMO: Behind-the-scenes baking',
    tall: true,
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80',
    alt: 'DEMO: Berry-topped celebration cake',
  },
  {
    id: 9,
    image:
      'https://images.unsplash.com/photo-1535254973040-607b474d7f5a?auto=format&fit=crop&w=700&q=80',
    alt: 'DEMO: Custom frosted cake details',
  },
]

export const orderSteps = [
  {
    number: '01',
    title: 'Find Us On Instagram',
    text: 'Browse real cakes, cookies, and custom work at @papa_e_bakery — then hop over here to order.',
  },
  {
    number: '02',
    title: 'Tell Us What You Want',
    text: 'Use the order form for flavors, colors, themes, and your event date — clearer than a long DM thread.',
  },
  {
    number: '03',
    title: 'Pick Up Your Sweet Creation',
    text: "We'll confirm details with you, then you collect your handcrafted treat and celebrate.",
  },
]

export const trustItems = [
  { label: '20.6K On Instagram', icon: 'instagram' },
  { label: 'Custom Creations', icon: 'sparkles' },
  { label: 'Made Fresh', icon: 'heart' },
  { label: 'Atlanta, GA', icon: 'map' },
  { label: 'Organized Ordering', icon: 'party' },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#custom-cakes', label: 'Custom Cakes' },
  { href: '#story', label: 'Our Story' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]
