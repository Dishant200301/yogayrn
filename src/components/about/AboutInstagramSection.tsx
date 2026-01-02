import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
const insta1 = '/images/about-instagram-1.png';
const insta2 = '/images/about-instagram-2.png';
const insta3 = '/images/about-instagram-3.png';
const insta4 = '/images/about-instagram-4.png';
const insta5 = '/images/about-instagram-5.png';

const instagramUrl = "https://www.instagram.com/yogayrn/";

const AboutInstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-36">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 mb-10 md:mb-12 text-center sm:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl lg:text-[38px] font-normal text-foreground leading-tight tracking-tight"
          >
            Follow us on Instagram
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-fit"
          >
            Follow us
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Feature Image - Large Left */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-5 lg:row-span-2"
          >
            <div className="overflow-hidden rounded-sm h-full">
              <img
                src={insta1}
                alt="Yoga pose on Instagram"
                className="w-full h-[400px] lg:h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.a>

          {/* 2x2 Grid on Right */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={insta2}
                  alt="Yoga backbend pose"
                  className="w-full h-[180px] md:h-[220px] lg:h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={insta3}
                  alt="Meditation pose"
                  className="w-full h-[180px] md:h-[220px] lg:h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={insta4}
                  alt="Yoga headstand"
                  className="w-full h-[180px] md:h-[220px] lg:h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={insta5}
                  alt="Partner yoga"
                  className="w-full h-[180px] md:h-[220px] lg:h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstagramSection;
