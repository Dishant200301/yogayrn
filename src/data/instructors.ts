export interface Instructor {
  id: string;
  name: string;
  role: string;
  image: string;
  classImage: string;
  shortBio: string;
  about: string;
  experience: string;
  experienceBullets: string[];
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export const instructors: Instructor[] = [
  {
    id: "sophie-moore",
    name: "Sophie Moore",
    role: "YOGA INSTRUCTOR",
    image: "/images/instructor-1.png",
    classImage: "/images/blog-content-image.png",
    shortBio: "Sophie Moore, passionate about Vinyasa flow and restorative yoga, guides students to strength and serenity. Her classes emphasize mindful movement and breath-body connection for a holistic yoga experience.",
    about: "Sophie discovered yoga over a decade ago and was immediately drawn to its power to heal both mind and body. She believes that yoga is for everyone and strives to create an inclusive, welcoming space in all her classes. Her teaching style is nurturing yet challenging, encouraging students to explore their limits safely.",
    experience: "Sophie completed her 200-hour Yoga Teacher Training in 2018 and has since pursued advanced certifications in prenatal and trauma-informed yoga. She has taught in various studios across the country, leading workshops and retreats focused on deepening the mind-body connection through dedicated practice.",
    experienceBullets: [
      "Certified E-RYT 200 with Yoga Alliance, specializing in Vinyasa.",
      "Specializes in creating dynamic flow sequences suitable for all levels.",
      "Completed advanced training in restorative and yin yoga methodologies.",
      "Blends creativity and structure in flow-based yoga sessions."
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#"
    }
  },
  {
    id: "emily-woods",
    name: "Emily Woods",
    role: "YOGA INSTRUCTOR",
    image: "/images/instructor-2.png",
    classImage: "/images/blog-content-image.png",
    shortBio: "Emily brings a calm and grounded energy to her classes, focusing on the meditative aspects of yoga.",
    about: "With a background in psychology, Emily integrates mindfulness and emotional well-being into her teaching.",
    experience: "Emily has over 5 years of experience teaching Hatha and Yin yoga.",
    experienceBullets: [
      "Certified Hatha Yoga Teacher.",
      "Specialized in Yin Yoga and Meditation.",
      "Focuses on stress reduction and mental clarity."
    ],
    socials: {
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: "danna-smith",
    name: "Danna Smith",
    role: "YOGA INSTRUCTOR",
    image: "/images/instructor-3.png",
    classImage: "/images/blog-content-image.png",
    shortBio: "Danna is known for her high-energy Vinyasa flows and challenging sequences.",
    about: "A former athlete, Danna discovered yoga as a way to heal her body and found a lifelong passion.",
    experience: "Danna has been teaching dynamic yoga for 8 years.",
    experienceBullets: [
      "Advanced Vinyasa Flow certification.",
      "Expert in power yoga and core strength.",
      "Leads annual yoga retreats in Bali."
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#"
    }
  },
  {
    id: "rose-miller",
    name: "Rose Miller",
    role: "YOGA INSTRUCTOR",
    image: "/images/instructor-4.png",
    classImage: "/images/blog-content-image.png",
    shortBio: "Rose specializes in Iyengar yoga, emphasizing precision and the use of props.",
    about: "Rose believes that alignment is the key to a safe and sustainable practice.",
    experience: "Rose has studied Iyengar yoga for over 15 years.",
    experienceBullets: [
      "Certified Iyengar Yoga Instructor.",
      "Expert in therapeutic yoga and injury recovery.",
      "Focuses on structural alignment and stability."
    ],
    socials: {
      linkedin: "#"
    }
  },
  {
    id: "emma-jones",
    name: "Emma Jones",
    role: "YOGA INSTRUCTOR",
    image: "/images/instructor-5.png",
    classImage: "/images/blog-content-image.png",
    shortBio: "Emma's classes are a blend of traditional yoga and modern movement science.",
    about: "Emma is passionate about anatomy and helping students understand their bodies.",
    experience: "Emma has a degree in Kinesiology and is a certified yoga therapist.",
    experienceBullets: [
      "Certified Yoga Therapist.",
      "Specialized in functional movement.",
      "Focuses on mobility and longevity."
    ],
    socials: {
      instagram: "#",
      youtube: "#"
    }
  },
  {
    id: "ella-davis",
    name: "Ella Davis",
    role: "YOGA INSTRUCTOR",
    image: "/images/instructor-6.png",
    classImage: "/images/blog-content-image.png",
    shortBio: "Ella teaches gentle yoga and restorative practices for all ages.",
    about: "Ella's mission is to make yoga accessible and enjoyable for everyone, regardless of age or ability.",
    experience: "Ella has been teaching community yoga for over 10 years.",
    experienceBullets: [
      "Certified Restorative Yoga Teacher.",
      "Specialized in Senior Yoga.",
      "Focuses on relaxation and gentle movement."
    ],
    socials: {
      facebook: "#",
      instagram: "#"
    }
  },
];

