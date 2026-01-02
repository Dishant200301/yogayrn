import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const aboutHero1 = '/images/about-hero-image-1.jpg';
const aboutHero2 = '/images/about-hero-image-2.jpg';

const AboutHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-24 pb-16 md:pt-40 md:pb-28 bg-background">
      <div className="container mx-auto px-6 lg:px-36">
        {/* Top Content - Text Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 mb-12 lg:mb-6 items-start text-center lg:text-left">
          {/* Large Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h1 className="font-heading text-4xl md:text-7xl lg:text-[56px] font-normal text-[#1a1a1a] leading-tight md:leading-[1.0] tracking-tight">
              We believe yoga is for everybody
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 lg:pt-0"
          >
            <p className="font-body text-base md:text-[16px] text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
              Our studio welcomes all ages and experience levels, guiding you every step of your personal journey.
            </p>
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden"
            >
              <img
                src={aboutHero1}
                alt="Group yoga class"
                className="w-full aspect-[1.4/1] object-cover"
              />
            </motion.div>
            {/* Bottom Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 md:mt-12 lg:mt-16 lg:pl-[15%] text-center lg:text-left"
            >
              <p className="font-inter text-base md:text-[18px] leading-relaxed md:leading-[24px] text-[#4a4a4a] max-w-[440px] mx-auto lg:mx-0">
                At Yogayrn, we offer a space to connect body and mind. Our classes build strength, boost flexibility, and promote inner peace—revealing the healing power of consistent practice.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Tall Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden h-full">
              <img
                src={aboutHero2}
                alt="Yoga instructors"
                className="w-full h-full object-cover min-h-[500px] lg:min-h-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
