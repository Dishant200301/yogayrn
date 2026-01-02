import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-36">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Intro */}
            <h2 className="font-heading text-3xl md:text-[38px] leading-tight md:leading-[44px] tracking-tight text-foreground mb-6">
              The values that guide us
            </h2>

            <p className="font-body text-base md:text-[16px] leading-relaxed md:leading-[26px] text-muted-foreground max-w-md mx-auto lg:mx-0 mb-12 md:mb-14">
              Our core principles shape every class we teach and every interaction
              within our vibrant and welcoming yoga community.
            </p>

            {/* Value */}
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-3 text-center lg:text-left">
              <img
                src="/icons/guide-icon-2.svg"
                alt=""
                className="w-10 h-10 md:mt-1"
              />

              <div>
                <h3 className="font-heading text-[22px] leading-[28px] text-foreground mb-2">
                  Inclusive & empowering
                </h3>

                <p className="font-body text-base md:text-[16px] leading-relaxed md:leading-[26px] text-muted-foreground max-w-2xl">
                  We celebrate diversity and create a safe space where every
                  individual feels seen, respected, and empowered.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border mt-12 md:mt-14" />
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Value 1 */}
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-6 text-center lg:text-left">
              <img
                src="/icons/guide-icon-1.svg"
                alt=""
                className="w-10 h-10 md:mt-1"
              />

              <div>
                <h3 className="font-heading text-[22px] leading-[28px] text-foreground mb-2">
                  Lasting impact
                </h3>

                <p className="font-body text-base md:text-[16px] leading-relaxed md:leading-[26px] text-muted-foreground max-w-md">
                  Our practices go beyond the mat—building physical resilience
                  and a positive mindset.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-12 md:my-14" />

            {/* Value 2 */}
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-6 text-center lg:text-left">
              <img
                src="/icons/guide-icon-3.svg"
                alt=""
                className="w-10 h-10 md:mt-1"
              />

              <div>
                <h3 className="font-heading text-[22px] leading-[28px] text-foreground mb-2">
                  Ongoing improvement
                </h3>

                <p className="font-body text-base md:text-[16px] leading-relaxed md:leading-[26px] text-muted-foreground max-w-md">
                  We’re committed to growth—individually and as a community—to
                  always offer our best.
                </p>
              </div>
            </div>

            {/* Bottom Divider */}
            <div className="border-t border-border mt-12 md:mt-14" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
