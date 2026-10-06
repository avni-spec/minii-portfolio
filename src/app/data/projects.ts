export type Project = {
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  year: string
}

export const projects: Project[] = [
  {
    slug: 'brand-promotions',
    title: 'Brand Promotions',
    category: 'Brand',
    description: 'Reels, Stories, product features, and paid campaigns for local brands.',
    longDescription: 'Created promotional content for Jamshedpur-based brands with a focus on authentic storytelling and audience engagement. Delivered Instagram Reels, Stories, and product feature videos that drove visibility and enquiries.',
    image: '/images/minii/portrait.jpg',
    tags: ['Instagram Reels', 'Stories', 'Product Features', 'Paid Campaigns'],
    year: '2026',
  },
  {
    slug: 'restaurant-promotions',
    title: 'Restaurant & Café Promotions',
    category: 'Food & Dining',
    description: 'Food experience, ambience, menu highlights, and visit-based reels.',
    longDescription: 'Visit-based promotional content for restaurants and cafés across Jamshedpur. Content blends food experience, ambience shots, and menu highlights to encourage footfall and increase brand awareness.',
    image: '/images/minii/staircase.jpg',
    tags: ['Food Experience', 'Ambience', 'Menu Highlights', 'Visit Reels'],
    year: '2026',
  },
  {
    slug: 'event-promotions',
    title: 'Event Promotions',
    category: 'Events',
    description: 'Event coverage, opening promotions, trade fairs, and crowd/experience reels.',
    longDescription: 'Covered major events including trade fairs and opening promotions. Captured the atmosphere, crowd energy, and experience to build anticipation and reach wider audiences.',
    image: '/images/minii/dress.jpg',
    tags: ['Event Coverage', 'Openings', 'Trade Fairs', 'Crowd Reels'],
    year: '2025',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Content',
    category: 'Real Estate',
    description: 'Property walkthroughs, lifestyle-led reels, and on-camera presenter content.',
    longDescription: 'On-camera model and presenter content for real estate properties. Property walkthroughs combined with lifestyle storytelling to make spaces feel aspirational and worth exploring.',
    image: '/images/minii/portrait.jpg',
    tags: ['Property Walkthrough', 'Lifestyle Reels', 'Presenter Content'],
    year: '2025',
  },
  {
    slug: 'fashion-lifestyle',
    title: 'Fashion & Lifestyle',
    category: 'Fashion',
    description: 'Outfit reels, lifestyle shoots, brand integrations, and UGC-style content.',
    longDescription: 'Fashion and lifestyle content including outfit reels, brand integrations, and UGC-style promotional videos. Focused on trend-aware concepts and natural on-camera presence.',
    image: '/images/minii/hero.jpg',
    tags: ['Outfit Reels', 'Lifestyle Shoots', 'Brand Integrations', 'UGC'],
    year: '2026',
  },
  {
    slug: 'travel-experiences',
    title: 'Travel & Experiences',
    category: 'Travel',
    description: 'Stays, local experiences, destination storytelling, and promotional reels.',
    longDescription: 'Travel and experience-based content featuring stays, local destinations, and lifestyle experiences. Storytelling approach to make destinations feel relatable and inviting.',
    image: '/images/minii/staircase.jpg',
    tags: ['Stays', 'Local Experiences', 'Destination Storytelling'],
    year: '2025',
  },
]