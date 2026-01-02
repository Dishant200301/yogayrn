import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-[#fdfaf9] pt-24 pb-cls0 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Accent for Desktop */}
      <div className="absolute top-0 right-0 w-[55%] h-[650px] bg-[#f5f2f0] hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-36 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-[56px] text-[#2C2420] leading-tight md:leading-[70px] mb-6 md:mb-8">
              I'm Sophie Moore, a <br className="hidden lg:block" />
              Certified Yoga <br className="hidden lg:block" />
              Instructor
            </h1>
            <p className="font-body text-base md:text-[16px] text-[#6B6560] leading-relaxed md:leading-[20px] mb-8 md:mb-10 max-w-md mx-auto lg:mx-0">
              With a passion for helping others find strength and serenity, I guide students through practices that nourish both body and mind, tailored to every experience level.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
  <Link
    to="/contact"
    className="inline-flex items-center justify-center gap-2 px-2 md:px-6 py-2 rounded-full border border-[#2C2420] text-[#2C2420] font-heading text-xs md:text-lg hover:bg-[#2C2420] hover:text-white transition-all duration-300"
  >
    Get a free class
    <ArrowRight className="w-4 h-4" />
  </Link>

  <Link
    to="/contact"
    className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 rounded-full border border-[#2C2420]/20 text-[#2C2420] font-heading text-xs md:text-lg hover:border-[#2C2420] transition-all duration-300"
  >
    Contact us
  </Link>
</div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative aspect-[3/4] md:aspect-[4/5] lg:w-[400px] lg:h-[600px] overflow-hidden rounded-sm shadow-sm">
              <img
                src="/images/instructor-1.png"
                alt="Sophie Moore - Yoga Instructor"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
