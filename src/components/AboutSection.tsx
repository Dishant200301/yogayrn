import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const aboutImage2 = '/images/about-yogastic-1.jpg';
const aboutImage1 = '/images/about-yogastic-2.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px]"
          >
            {/* Primary Image */}
            <div className="absolute top-0 right-0 md:right-12 w-[65%] md:w-[280px] h-[280px] md:h-[360px] overflow-hidden shadow-lg">
              <img
                src={aboutImage1}
                alt="Woman meditating in yoga studio"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Secondary Image */}
            <div className="absolute bottom-0 left-0 w-[65%] md:w-[280px] h-[220px] md:h-[280px] overflow-hidden shadow-lg">
              <img
                src={aboutImage2}
                alt="Group yoga class"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto lg:mx-0 text-center lg:text-left"
          >
            <h2 className="section-heading mb-6 text-3xl md:text-4xl">About Yogayrn</h2>
            <p className="section-paragraph mb-8 text-lg md:text-lg">
              Yogayrn is more than a studio; it's a community dedicated to
              wellness. We believe in the power of yoga to transform lives by
              fostering a connection between mind, body, and spirit in a
              welcoming and supportive space.
            </p>
            <Link to="/about" className="btn-primary font-heading">
              About us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
