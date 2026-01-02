export interface ClassDetail {
  slug: string;
  title: string;
  intro: string;
  heroImage: string;
  icon: string;
  about: string;
  moreDetails?: string;
  bullets: string[];
  details: {
    level: string;
    duration: string;
    intensity: string;
    schedule: string;
  };
  relatedClasses: string[];
  cardDescription?: string;
}

export const classDetails: ClassDetail[] = [
 {
    slug: 'hatha-yoga',
    title: 'Hatha yoga',
    intro: 'A classic approach to yoga, focusing on basic postures and breathing techniques. Perfect for beginners and those seeking a gentle, mindful practice.',
    heroImage: '/images/Yoga-1.png',
    icon: '/icons/classes-1.svg',
    about: 'Hatha Yoga is the foundation of most modern yoga styles. It is a gentle yet effective practice that focuses on static poses (asanas) and breathing exercises (pranayama). In this class, we move at a slower pace, holding poses for longer periods to build strength, flexibility, and balance. It is an excellent way to relieve stress, improve posture, and cultivate a sense of inner peace.',
    bullets: [
      'Focus on alignment and breath awareness',
      'Gentle stretching and strengthening',
      'Suitable for all fitness levels',
      'Includes relaxation and meditation techniques',
      'Improves flexibility and reduces stress'
    ],
    details: {
      level: 'All levels',
      duration: '60 min',
      intensity: 'Low to Medium',
      schedule: 'Mon, Wed, Fri - 9:00 AM'
    },
    relatedClasses: ['vinyasa-yoga', 'iyengar-yoga']
 },
  {
    slug: 'vinyasa-yoga',
    title: 'Vinyasa yoga',
    intro: 'A dynamic, flowing class that links breath with movement in creative sequences. Build strength, flexibility, and cardiovascular endurance.',
    heroImage: '/images/Yoga-2.png',
    icon: '/icons/classes-2.svg',
    about: 'Vinyasa Yoga, often called "Flow Yoga," is characterized by fluid transitions between poses synchronized with the breath. This dynamic practice builds heat in the body, improves cardiovascular health, and enhances coordination. Each class offers a unique sequence of poses, keeping the practice fresh and engaging. Expect to move, sweat, and leave feeling energized and centered.',
    bullets: [
      'Continuous movement linked with breath',
      'Builds strength, endurance, and flexibility',
      'Creative and varied sequences',
      'Enhances cardiovascular health',
      'Promotes mindfulness in motion'
    ],
    details: {
      level: 'Intermediate',
      duration: '75 min',
      intensity: 'High',
      schedule: 'Tue, Thu - 6:00 PM'
    },
    relatedClasses: ['hatha-yoga', 'iyengar-yoga']
  },
  {
    slug: 'iyengar-yoga',
    title: 'Iyengar yoga',
    intro: 'Alignment-based practice using props for support and precision. Focus on the details of each posture to deepen your understanding.',
    heroImage: '/images/classes-image.png',
    icon: '/icons/classes-3.svg',
    about: 'Iyengar Yoga emphasizes precision and alignment in the performance of posture (asana) and breath control (pranayama). We use props such as belts, blocks, and blankets to help students of all levels perform the poses correctly and safely. This attention to detail helps to develop strength, mobility, and stability, while also correcting structural imbalances in the body.',
    bullets: [
      'Emphasis on precise alignment and technique',
      'Use of props to support and deepen poses',
      'Develops strength, stability, and flexibility',
      'Therapeutic benefits for injuries and chronic pain',
      'Suitable for all ages and abilities'
    ],
    details: {
      level: 'All levels',
      duration: '90 min',
      intensity: 'Medium',
      schedule: 'Sat - 10:00 AM'
    },
    relatedClasses: ['hatha-yoga', 'vinyasa-yoga']
  },
  {
    slug: 'private-yoga',
    title: 'Private yoga class',
    intro: 'Book a personalized one-on-one yoga session perfect for beginners, experienced yogis, or those recovering from injury. Your practice, your goals.',
    heroImage: '/images/classes-image.png',
    icon: '/icons/classes-4.svg',
    about: 'A private yoga class offers a unique opportunity to focus entirely on your personal practice and goals. Working one-on-one with an experienced instructor allows you to receive undivided attention, ask questions freely, and move at your own pace. It\'s the perfect setting to build confidence and deepen your understanding.',
    moreDetails: 'Your session will be completely customized. We can focus on learning foundational poses, work towards an advanced posture like an arm balance, develop a therapeutic practice to address pain or injury, or simply create a relaxing, restorative experience. We begin with a consultation to design the perfect class for you.',
    bullets: [
      'Ideal for beginners seeking foundational knowledge.',
      'Perfect for experienced students looking to refine their practice.',
      'Best suited for experienced learners wanting to perfect their technique.',
      'Designed for seasoned students seeking to elevate their skills.'
    ],
    details: {
      level: 'All levels',
      duration: '60 min',
      intensity: 'High',
      schedule: 'Monday, Friday'
    },
    cardDescription: 'Customized to your goals. Focuses on your needs, from beginner basics to advanced poses.',
    relatedClasses: ['hatha-yoga', 'vinyasa-yoga']
  }
  
];
