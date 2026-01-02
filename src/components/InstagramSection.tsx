import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
const instaImage1 = '/images/instagram-1.jpg';
const instaImage2 = '/images/instagram-2.jpg';
const instaCenter = '/images/yogastic-video.mp4';
const instaImage3 = '/images/instagram-4.jpg';

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const instagramUrl = 'https://www.instagram.com/yogayrn/';

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Left Column */}
          <div className="grid grid-cols-2 md:flex md:flex-col gap-4 md:gap-6">
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-sm group"
            >
              <img
                src={instaImage1}
                alt="Yoga pose"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

            </motion.a>
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-sm group"
            >
              <img
                src={instaImage2}
                alt="Meditation session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

            </motion.a>
          </div>

          {/* Center Column - Large Image */}
          <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square md:row-span-2 md:aspect-auto overflow-hidden rounded-sm group"
          >
            <video
              src={instaCenter}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

          </motion.a>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:gap-6">
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative hidden md:block aspect-[4/3] overflow-hidden rounded-sm group"
            >
              <img
                src={instaImage3}
                alt="Yoga meditation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

            </motion.a>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1 flex flex-col justify-center text-center md:text-left items-center md:items-start"
            >
              <h2 className="section-heading text-2xl md:text-3xl mb-4">
                Follow us
                <br />
                on Instagram
              </h2>
              <p className="section-paragraph mb-6 text-sm md:text-base max-w-sm">
                Join us on Instagram for wellness inspiration and exclusive
                updates. Follow @yogayrn to elevate your journey towards
                vibrant health.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex w-fit"
              >
                Follow us
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
