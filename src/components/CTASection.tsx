import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ctaImage1 = "/images/cta-image-1.jpg";
const ctaImage2 = "/images/cta-image-2.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="relative md:pt-24 bg-background overflow-visible">
      <div className="container mx-auto px-2 lg:px-36 relative">

        {/* Dark Background Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute inset-x-0 top-[150px] lg:left-[100px] lg:right-[100px] bg-[#0b0706] h-[500px] lg:h-[420px] hidden md:block"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-32 bg-[#0b0706] lg:bg-transparent p-8 md:p-16 lg:p-0 rounded-sm">

          {/* Images */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[720px] order-2 lg:order-1">
            {/* Top Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-0 left-0 w-[62%] h-[68%] z-20"
            >
              <img
                src={ctaImage1}
                alt="Yoga practice"
                className="w-full h-full object-cover shadow-2xl"
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute bottom-0 left-[38%] lg:left-[64%] w-[62%] h-[68%] z-10"
            >
              <img
                src={ctaImage2}
                alt="Yoga class"
                className="w-full h-full object-cover shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="order-1 lg:order-2 text-center lg:text-left lg:pl-10"
          >
            <h2
              className="font-heading text-3xl md:text-[38px] leading-tight md:leading-[46px] text-white mb-6"
              style={{ letterSpacing: "-0.01em" }}
            >
              Ready to feel better?
              <br />
              Get a free class today!
            </h2>

            <p className="font-inter text-base leading-relaxed text-white/70 max-w-md mx-auto lg:mx-0 mb-10">
              Take the first step on your wellness journey with a complimentary
              class. Experience our supportive community and find the perfect
              practice for your body and mind.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/70 text-white px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <span className="font-inter text-sm font-medium">
                Register now
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
