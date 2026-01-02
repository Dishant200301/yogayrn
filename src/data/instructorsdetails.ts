export interface InstructorDetails {
  id: string;
  slug: string;
  name: string;
  role: string;
  profileImage: string;
  coverImage: string;
  intro: string;
  about: string;
  experience: string;
  highlights: string[];
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export const instructorsDetails: InstructorDetails[] = [
  {
    id: "sophie-moore",
    slug: "sophie-moore",
    name: "Sophie Moore",
    role: "Yoga Instructor",
    profileImage: "/images/instructor-1.png",
    coverImage: "/images/coverImage.png",
    intro:
      "Sophie Moore, passionate about Vinyasa flow and restorative yoga, guides students to strength and serenity. Her classes emphasize mindful movement and breath-body connection for a holistic yoga experience.",
    about:
      "Sophie discovered yoga over a decade ago and was immediately drawn to its power to heal both mind and body. She believes that yoga is for everyone and strives to create an inclusive, welcoming space in all her classes. Her teaching style is nurturing yet challenging, encouraging students to explore their limits safely.",
    experience:
      "Sophie completed her 200-hour Yoga Teacher Training in 2018 and has since pursued advanced certifications in prenatal and trauma-informed yoga. She has taught in various studios across the country, leading workshops and retreats focused on deepening the mind-body connection through dedicated practice.",
    highlights: [
      "Certified E-RYT 200 with Yoga Alliance, specializing in Vinyasa.",
      "Specializes in creating dynamic flow sequences suitable for all levels.",
      "Completed advanced training in restorative and yin yoga methodologies.",
      "Blends creativity and structure in flow-based yoga sessions.",
    ],
    socials: {
      facebook: "https://facebook.com/sophiemoore",
      instagram: "https://instagram.com/sophiemoore",
      linkedin: "https://linkedin.com/in/sophiemoore",
      youtube: "https://youtube.com/@sophiemoore",
    },
  },
  {
    id: "emily-woods",
    slug: "emily-woods",
    name: "Emily Woods",
    role: "Yoga Instructor",
    profileImage: "/images/instructor-2.png",
    coverImage: "/images/coverImage.png",
    intro:
      "Emily Woods brings a gentle yet powerful approach to yoga, focusing on alignment and breath work. Her classes create a safe space for students to explore their practice with mindfulness and intention.",
    about:
      "Emily's journey into yoga began as a way to manage stress and anxiety. Over the years, she has developed a deep understanding of how yoga can transform not just the body, but the mind and spirit. She is committed to making yoga accessible to all, regardless of age, fitness level, or experience.",
    experience:
      "Emily is a certified 500-hour RYT with specialized training in Hatha and Yin yoga. She has been teaching for over 8 years and has led numerous workshops on meditation, pranayama, and yoga philosophy. Her teaching is informed by her ongoing study of anatomy and mindfulness practices.",
    highlights: [
      "Certified RYT 500 with expertise in Hatha and Yin yoga.",
      "Specializes in alignment-based practices and breath work.",
      "Experienced in teaching meditation and pranayama workshops.",
      "Focuses on creating inclusive and accessible yoga experiences.",
    ],
    socials: {
      facebook: "https://facebook.com/emilywoods",
      instagram: "https://instagram.com/emilywoods",
      linkedin: "https://linkedin.com/in/emilywoods",
      youtube: "https://youtube.com/@emilywoods",
    },
  },
  {
    id: "danna-smith",
    slug: "danna-smith",
    name: "Danna Smith",
    role: "Yoga Instructor",
    profileImage: "/images/instructor-3.png",
    coverImage: "/images/coverImage.png",
    intro:
      "Danna Smith is a dynamic instructor who combines traditional yoga wisdom with modern movement science. Her energetic classes inspire students to push their boundaries while honoring their bodies.",
    about:
      "Danna's passion for yoga stems from her background in dance and athletics. She discovered yoga as a way to prevent injuries and improve flexibility, but soon fell in love with its holistic benefits. Her classes are known for their creative sequencing and uplifting energy.",
    experience:
      "Danna holds a 200-hour RYT certification and has completed additional training in Power Yoga, Yoga Sculpt, and Mobility. She has been teaching for 5 years and regularly leads community classes and outdoor yoga sessions. Her approach blends strength, flexibility, and mindfulness.",
    highlights: [
      "Certified RYT 200 with specialization in Power Yoga and Yoga Sculpt.",
      "Background in dance and athletics informs her dynamic teaching style.",
      "Focuses on creative sequencing and functional movement patterns.",
      "Leads community classes and outdoor yoga events.",
    ],
    socials: {
      facebook: "https://facebook.com/dannasmith",
      instagram: "https://instagram.com/dannasmith",
      linkedin: "https://linkedin.com/in/dannasmith",
      youtube: "https://youtube.com/@dannasmith",
    },
  },
  {
    id: "rose-miller",
    slug: "rose-miller",
    name: "Rose Miller",
    role: "Yoga Instructor",
    profileImage: "/images/instructor-4.png",
    coverImage: "/images/coverImage.png",
    intro:
      "Rose Miller is a compassionate teacher who emphasizes the healing and restorative aspects of yoga. Her classes provide a sanctuary for students to reconnect with themselves and find inner peace.",
    about:
      "Rose came to yoga during a challenging time in her life and found it to be a powerful tool for healing and self-discovery. She is passionate about sharing the transformative power of yoga with others, particularly those dealing with stress, trauma, or chronic pain.",
    experience:
      "Rose is a certified E-RYT 200 and has completed advanced training in Restorative Yoga, Yoga Nidra, and Trauma-Sensitive Yoga. She has been teaching for 7 years and works with diverse populations, including seniors, veterans, and individuals in recovery programs.",
    highlights: [
      "Certified E-RYT 200 with advanced training in Restorative and Trauma-Sensitive Yoga.",
      "Specializes in Yoga Nidra and meditation practices.",
      "Works with diverse populations including seniors and veterans.",
      "Focuses on healing, restoration, and stress management.",
    ],
    socials: {
      facebook: "https://facebook.com/rosemiller",
      instagram: "https://instagram.com/rosemiller",
      linkedin: "https://linkedin.com/in/rosemiller",
      youtube: "https://youtube.com/@rosemiller",
    },
  },
  {
    id: "emma-jones",
    slug: "emma-jones",
    name: "Emma Jones",
    role: "Yoga Instructor",
    profileImage: "/images/instructor-5.png",
    coverImage: "/images/coverImage.png",
    intro:
      "Emma Jones brings a balanced approach to yoga, blending strength-building flows with calming restorative practices. Her classes are designed to help students find equilibrium in body and mind.",
    about:
      "Emma's yoga journey began in college as a way to balance her busy academic life. She quickly realized the profound impact yoga had on her overall well-being and decided to pursue teaching. Her classes reflect her belief that yoga should be both challenging and nurturing.",
    experience:
      "Emma is a certified RYT 200 with additional training in Vinyasa Flow and Yin Yoga. She has been teaching for 4 years and is known for her clear instruction and supportive teaching style. She regularly attends workshops and trainings to deepen her knowledge and skills.",
    highlights: [
      "Certified RYT 200 with training in Vinyasa Flow and Yin Yoga.",
      "Balances strength-building flows with restorative practices.",
      "Known for clear instruction and supportive teaching approach.",
      "Committed to ongoing education and professional development.",
    ],
    socials: {
      facebook: "https://facebook.com/emmajones",
      instagram: "https://instagram.com/emmajones",
      linkedin: "https://linkedin.com/in/emmajones",
      youtube: "https://youtube.com/@emmajones",
    },
  },
  {
    id: "ella-davis",
    slug: "ella-davis",
    name: "Ella Davis",
    role: "Yoga Instructor",
    profileImage: "/images/instructor-6.png",
    coverImage: "/images/coverImage.png",
    intro:
      "Ella Davis is an enthusiastic instructor who loves to make yoga fun and accessible. Her playful yet mindful classes help students build confidence and discover the joy of movement.",
    about:
      "Ella's approach to yoga is rooted in the belief that practice should be enjoyable and sustainable. She encourages students to let go of perfectionism and embrace the process of learning and growth. Her warm personality and sense of humor create a welcoming atmosphere in every class.",
    experience:
      "Ella completed her 200-hour Yoga Teacher Training in 2019 and has since taught a variety of class styles, from beginner-friendly flows to more advanced practices. She has a special interest in yoga for mental health and regularly incorporates mindfulness and meditation into her teaching.",
    highlights: [
      "Certified RYT 200 with a focus on accessible and inclusive yoga.",
      "Specializes in yoga for mental health and stress relief.",
      "Creates a fun, welcoming atmosphere with playful sequencing.",
      "Incorporates mindfulness and meditation into all classes.",
    ],
    socials: {
      facebook: "https://facebook.com/elladavis",
      instagram: "https://instagram.com/elladavis",
      linkedin: "https://linkedin.com/in/elladavis",
      youtube: "https://youtube.com/@elladavis",
    },
  },
];

// Helper function to get instructor by slug
export const getInstructorBySlug = (
  slug: string
): InstructorDetails | undefined => {
  return instructorsDetails.find((instructor) => instructor.slug === slug);
};
