export interface ClassItem {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
}

export const classes: ClassItem[] = [
  {
    slug: 'hatha-yoga',
    title: 'Hatha yoga',
    shortDescription: 'A foundational class focusing on static postures, precise alignment, and breath control. Ideal for building a strong and mindful yoga practice from the ground up. Perfect for beginners.',
    icon: '/icons/classes-1.svg',
  },
  {
    slug: 'vinyasa-yoga',
    title: 'Vinyasa yoga',
    shortDescription: 'A fluid, movement-intensive practice where poses smoothly flow into one another. Connect your breath to your movement, build strength, and invigorate your entire body and mind.',
    icon: '/icons/classes-2.svg',
  },
  {
    slug: 'iyengar-yoga',
    title: 'Iyengar yoga',
    shortDescription: 'Alignment-based practice using props for support and precision in each pose.',
    icon: '/icons/classes-3.svg',
  },
  {
    slug: 'private-yoga',
    title: 'Private yoga class',
    shortDescription: 'A personalized yoga session designed just for your unique goals and needs.',
    icon: '/icons/classes-4.svg',
  },
];
