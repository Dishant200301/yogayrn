export interface BlogDetailSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: string;
  quote?: string;
}

export interface BlogDetail {
  id: string;
  slug: string;
  title: string;
  category: "Yoga" | "Lifestyle" | "Resources";
  date: string;
  heroImage: string;
  excerpt: string;
  sections: BlogDetailSection[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const blogDetails: BlogDetail[] = [
  {
    id: "1",
    slug: "playlists-to-accompany-your-yoga-practice",
    title: "Playlists to accompany your yoga practice",
    category: "Resources",
    date: "Nov 23, 2025",
    heroImage: "/images/blog-image-1.png",
    excerpt:
      "Find the perfect playlist to elevate your yoga flow with our curated music suggestions.",
    sections: [
      {
        paragraphs: [
          "Music has the power to transform your yoga practice, creating an atmosphere that supports your journey inward. Whether you're flowing through vinyasa or settling into yin, the right soundtrack can deepen your experience and help you stay present on the mat.",
        ],
      },
      {
        heading: "Why music matters in yoga",
        paragraphs: [
          "The relationship between music and movement is profound. Carefully selected tracks can help regulate your breath, maintain rhythm in your flow, and create a sanctuary of sound that blocks out distractions.",
          "Different styles of yoga call for different musical approaches. A dynamic power yoga session might benefit from uplifting, rhythmic beats, while a restorative practice pairs beautifully with ambient soundscapes and gentle melodies.",
        ],
      },
      {
        heading: "Curated playlists for every practice",
        paragraphs: [
          "We've created specialized playlists to match your mood and practice style:",
        ],
        bullets: [
          "Morning Flow: Uplifting acoustic tracks to energize your sunrise practice",
          "Power Yoga: Rhythmic beats to fuel your dynamic sequences",
          "Yin & Restore: Ambient soundscapes for deep relaxation",
          "Meditation: Minimal instrumentation for focused awareness",
        ],
      },
      {
        image: "/images/blog-content-image.png",
      },
      {
        paragraphs: [
          "Each playlist is thoughtfully curated to support the natural arc of a yoga class—building energy, sustaining it through the peak, and gently guiding you into savasana.",
        ],
      },
      {
        quote:
          "Music is the space between the notes. In yoga, it's the breath between the poses that creates the magic.",
      },
      {
        heading: "Creating your personal soundtrack",
        paragraphs: [
          "While our playlists offer a great starting point, we encourage you to explore and create your own. Pay attention to how different sounds affect your practice. Notice which songs help you drop in and which might be distracting.",
          "Remember, silence is also a powerful choice. Some days, the most profound practice happens in complete quiet, with only the sound of your breath as your guide.",
        ],
      },
    ],
    author: {
      name: "Danna Smith",
      role: "YOGA INSTRUCTOR",
      avatar: "/images/instructor-1.png",
    },
  },
  {
    id: "2",
    slug: "yoga-as-a-tool-for-self-care-and-introspection",
    title: "Yoga as a tool for self-care and introspection",
    category: "Yoga",
    date: "Nov 21, 2025",
    heroImage: "/images/blog-image-2.png",
    excerpt:
      "Yoga is more than just physical exercise; it's a powerful pathway to inner peace and self-awareness. This post explores how to use your practice as a dedicated form of self-care. Learn techniques for integrating mindfulness, breathwork, and quiet reflection on the mat to reduce stress and foster a deep connection.",
    sections: [
      {
        heading: "Props like blocks, straps, and blankets can help you maintain proper alignment",
        paragraphs: [
          "Using props is key to a safe and effective yoga practice, especially when focusing on fitness. A block can bring the floor closer in standing poses, preventing overstretching. A strap aids alignment in seated forward folds, and a folded blanket provides essential support for your knees.",
        ],
        bullets: [
          "Blocks can effectively extend your reach for deeper, safer stretches.",
          "Use a blanket under your hips during seated poses to improve spinal alignment.",
          "Props help you hold poses longer, building strength and endurance safely.",
        ],
      },
      {
        heading:
          "Look for classes labeled as beginner or introductory to learn the basics and proper alignment",
        paragraphs: [
          "Starting with beginner-friendly classes ensures you learn foundational poses and proper techniques. Touch on the fundamentals poses and breathing techniques correctly from the outset. This ensures you build strength and flexibility safely, preventing injuries and maximizing the physical benefits of your practice.",
        ],
      },
      {
        image: "/images/blog-content-image.png",
      },
      {
        paragraphs: [
          "These foundational classes focus on posture and breath, building a strong base.",
        ],
      },
      {
        heading: "Honour your limits and don't push yourself too hard",
        paragraphs: [
          "The key to a sustainable fitness routine is listening to your body. Yoga is not a competition. Some days you will feel stronger and more flexible than others. Acknowledging your current state and working within it is not a sign of weakness. This prevents injury and ensures your practice remains a positive and sustaining experience.",
        ],
        bullets: [
          "If a pose causes sharp pain, gently ease out of it immediately.",
          "Use modifications or props to meet poses where your body is today.",
          "Remember that progress in flexibility and strength happens gradually over time.",
          "Rest is just as important as the active parts of your practice.",
        ],
      },
      {
        heading: "Consistency is key to yoga",
        paragraphs: [
          "To see real change in your fitness and flexibility, regular practice is far more effective than infrequent, intense sessions. Even 15–20 minutes of yoga a few times a week can lead to noticeable improvements in strength, balance, and overall well-being. Consistency builds habits, and these habits create lasting strength and a calmer mind over time.",
        ],
      },
      {
        quote:
          "The rhythm of the body, the melody of the mind, and the harmony of the soul create the symphony of life. A consistent practice keeps them all in tune and playing together.",
      },
      {
        heading: "Pay attention to your breath, inhaling and exhaling deeply",
        paragraphs: [
          "Your breath, or pranayama, is the force that animates every movement in yoga. By synchronizing your breath with each pose, you create a moving meditation that calms the nervous system and increases focus. Deep, conscious breathing delivers more oxygen to your muscles, enhancing performance and endurance, while also grounding you mentally and emotionally. This breath-centered approach transforms yoga into a holistic practice that energizes and restores you completely.",
        ],
      },
    ],
    author: {
      name: "Danna Smith",
      role: "YOGA INSTRUCTOR",
      avatar: "/images/instructor-2.png",
    },
  },
  {
    id: "3",
    slug: "7-yoga-poses-to-keep-your-body-fit",
    title: "7 Yoga poses to keep your body fit",
    category: "Yoga",
    date: "Nov 28, 2025",
    heroImage: "/images/blog-1.png",
    excerpt:
      "Master these essential poses perfect for improving strength, balance, and overall physical fitness.",
    sections: [
      {
        heading: "Building a strong foundation",
        paragraphs: [
          "Building a strong, flexible body doesn't require hours at the gym. These seven foundational yoga poses work together to create a complete fitness routine that strengthens, stretches, and centers you. Regular practice of these asanas will improve your posture, increase your energy levels, and enhance your overall well-being.",
        ],
      },
      {
        heading: "The essential seven poses",
        paragraphs: [
          "Each of these poses targets specific muscle groups while promoting balance and stability. Remember to breathe deeply and listen to your body as you move through each posture.",
        ],
        bullets: [
          "Downward-Facing Dog: Full-body strengthener and energizer",
          "Warrior II: Builds leg strength and improves balance",
          "Plank Pose: Core stability and upper body strength",
          "Tree Pose: Balance and focus enhancement",
          "Bridge Pose: Strengthens back and opens chest",
          "Seated Forward Fold: Hamstring flexibility and calm",
          "Child's Pose: Rest and restoration",
        ],
      },
      {
        image: "/images/blog-content-image.png",
      },
      {
        heading: "Creating a routine",
        paragraphs: [
          "Practice these poses in sequence for a complete 20-minute routine that will leave you feeling strong, centered, and energized. Hold each pose for 5-10 breaths, maintaining steady, even breathing throughout.",
        ],
      },
      {
        quote:
          "Yoga is the journey of the self, through the self, to the self. Let your practice be a celebration of what your body can do.",
      },
    ],
    author: {
      name: "Danna Smith",
      role: "YOGA INSTRUCTOR",
      avatar: "/images/instructor-3.png",
    },
  },
  {
    id: "4",
    slug: "how-to-introduce-yoga-into-the-family-routine",
    title: "How to introduce yoga into the family routine",
    category: "Lifestyle",
    date: "Nov 26, 2025",
    heroImage: "/images/blog-2.png",
    excerpt:
      "Discover fun, practical ways to make yoga a joyful bonding activity for the whole family.",
    sections: [
      {
        heading: "Yoga for the whole family",
        paragraphs: [
          "Yoga isn't just for adults—it's a wonderful practice to share with children and family members of all ages. Creating a family yoga routine builds connection, teaches mindfulness, and establishes healthy habits early. It provides a unique opportunity to unplug from screens and connect with each other on a deeper level.",
        ],
      },
      {
        heading: "Making it fun for everyone",
        paragraphs: [
          "The key to successful family yoga is keeping it playful and accessible. Use animal names for poses, create stories, and celebrate effort over perfection. Let go of the idea of a 'perfect' practice and embrace the laughter and wobbles.",
        ],
        bullets: [
          "Start with just 10-15 minutes to keep attention spans engaged",
          "Use props and music to make it more interactive",
          "Let children take turns being the 'teacher'",
          "Focus on poses that can be modified for all ages",
        ],
      },
      {
        image: "/images/blog-content-image.png",
      },
      {
        heading: "Benefits beyond the mat",
        paragraphs: [
          "Remember, the goal isn't perfect alignment—it's quality time together and building a positive relationship with movement and mindfulness. Family yoga teaches patience, cooperation, and self-regulation, skills that serve children well beyond the yoga mat.",
        ],
      },
      {
        quote:
          "The family that flows together, grows together. Create memories that strengthen both body and bond.",
      },
    ],
    author: {
      name: "Danna Smith",
      role: "YOGA INSTRUCTOR",
      avatar: "/images/instructor-4.png",
    },
  },
  {
    id: "5",
    slug: "tips-postures-and-advice-for-beginners",
    title: "Tips, postures and advice for beginners",
    category: "Lifestyle",
    date: "Dec 13, 2025",
    heroImage: "/images/Resources-1.png",
    excerpt:
      "New to yoga? Start with easy poses, tips, and guidance to begin your practice confidently.",
    sections: [
      {
        heading: "Embarking on your yoga journey",
        paragraphs: [
          "Starting a yoga practice can feel overwhelming with so many styles, poses, and philosophies to explore. This guide breaks down everything you need to know to begin your journey with confidence. Remember, every master was once a beginner.",
        ],
      },
      {
        heading: "Essential tips for new yogis",
        paragraphs: [
          "Set yourself up for success by keeping these simple tips in mind. The most important step is simply showing up to your mat.",
        ],
        bullets: [
          "Start with beginner-friendly classes or videos",
          "Invest in a good quality yoga mat",
          "Wear comfortable, breathable clothing",
          "Don't compare yourself to others",
          "Focus on breath as much as movement",
          "Be patient with your progress",
        ],
      },
      {
        image: "/images/blog-content-image.png",
      },
      {
        heading: "Your first poses",
        paragraphs: [
          "Begin with these foundational poses that build strength and flexibility while teaching proper alignment and breath awareness. Mountain Pose (Tadasana), Easy Pose (Sukhasana), and Cat-Cow are excellent places to start.",
        ],
      },
      {
        quote:
          "Yoga is not about touching your toes, it is about what you learn on the way down.",
      },
    ],
    author: {
      name: "Danna Smith",
      role: "YOGA INSTRUCTOR",
      avatar: "/images/instructor-5.png",
    },
  },
  {
    id: "6",
    slug: "the-best-yoga-tools-to-practice-at-any-time",
    title: "The best yoga tools to practice at any time",
    category: "Resources",
    date: "Nov 16, 2025",
    heroImage: "/images/Resources-2.png",
    excerpt:
      "Explore props that support your team and deepen your yoga practice at home.",
    sections: [
      {
        heading: "Enhancing your practice with props",
        paragraphs: [
          "While yoga requires minimal equipment, the right tools can significantly enhance your practice, making poses more accessible and helping you go deeper safely. Props are not crutches; they are tools for intelligence and alignment.",
        ],
      },
      {
        heading: "Essential yoga props",
        paragraphs: [
          "Here are the most useful props to consider adding to your home practice kit:",
        ],
        bullets: [
          "Yoga Mat: Your foundation for practice - choose one with good grip",
          "Blocks: Bring the floor closer and support alignment in standing poses",
          "Strap: Extend your reach in stretches and help open tight shoulders",
          "Bolster: Support for restorative poses and meditation",
          "Blanket: Cushioning for knees and warmth for savasana",
        ],
      },
      {
        image: "/images/blog-content-image.png",
      },
      {
        heading: "Investing in yourself",
        paragraphs: [
          "Quality props are an investment in your practice that will serve you for years. Choose items that feel good to use and support your specific needs. Having your own set of tools can make your home practice feel more sacred and inviting.",
        ],
      },
      {
        quote:
          "The body is your temple. Keep it pure and clean for the soul to reside in.",
      },
    ],
    author: {
      name: "Danna Smith",
      role: "YOGA INSTRUCTOR",
      avatar: "/images/instructor-6.png",
    },
  },
];
