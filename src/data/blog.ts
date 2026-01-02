export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: "Yoga" | "Lifestyle" | "Resources";
  date: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Playlists to accompany your yoga practice",
    excerpt: "Find the perfect playlist to elevate your yoga flow with our curated music suggestions.",
    image: "/images/blog-image-1.png",
    category: "Resources",
    date: "Nov 23, 2025",
    slug: "playlists-to-accompany-your-yoga-practice",
  },
  {
    id: "2",
    title: "Yoga as a tool for self-care and introspection",
    excerpt: "Turn your yoga practice into a ritual for clarity, stress relief, and mindful self-care.",
    image: "/images/blog-image-2.png",
    category: "Yoga",
    date: "Nov 21, 2025",
    slug: "yoga-as-a-tool-for-self-care-and-introspection",
  },
  {
    id: "3",
    title: "7 Yoga poses to keep your body fit",
    excerpt: "Master these essential poses perfect for improving strength, balance, and overall physical fitness.",
    image: "/images/blog-1.png",
    category: "Yoga",
    date: "Nov 28, 2025",
    slug: "7-yoga-poses-to-keep-your-body-fit",
  },
  {
    id: "4",
    title: "How to introduce yoga into the family routine",
    excerpt: "Discover fun, practical ways to make yoga a joyful bonding activity for the whole family.",
    image: "/images/blog-2.png",
    category: "Lifestyle",
    date: "Nov 26, 2025",
    slug: "how-to-introduce-yoga-into-the-family-routine",
  },
  {
    id: "5",
    title: "Tips, postures and advice for beginners",
    excerpt: "New to yoga? Start with easy poses, tips, and guidance to begin your practice confidently.",
    image: "/images/Resources-1.png",
    category: "Lifestyle",
    date: "Dec 13, 2025",
    slug: "tips-postures-and-advice-for-beginners",
  },
  {
    id: "6",
    title: "The best yoga tools to practice at any time",
    excerpt: "Explore props that support your team and deepen your yoga practice at home.",
    image: "/images/Resources-2.png",
    category: "Resources",
    date: "Nov 16, 2025",
    slug: "the-best-yoga-tools-to-practice-at-any-time",
  },
];
