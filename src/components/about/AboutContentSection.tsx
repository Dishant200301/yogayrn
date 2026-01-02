import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const aboutContent1 = "/images/about-us-1.jpg";
const aboutContent2 = "/images/about-us-2.jpg";

const AboutContentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-0 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-36">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-start">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src={aboutContent1}
              alt=""
              className="w-full max-w-[450px] h-[300px] md:h-[380px] object-cover hidden sm:block"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col text-center lg:text-left"
          >
            {/* Text */}
            <div className="mb-10 md:mb-14">
              <h2 className="font-heading text-3xl md:text-[38px] leading-tight md:leading-[44px] tracking-tight text-foreground mb-6">
                About us
              </h2>

              <p className="font-body text-base md:text-[16px] leading-relaxed md:leading-[26px] text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Our mission is to share authentic yoga practices, creating a
                supportive community where all feel welcome. We offer diverse
                classes to help you find balance, reduce stress, and cultivate a
                mindful, healthy lifestyle.
              </p>
            </div>

            {/* Bottom Image + Caption */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8">
                <img
                  src={aboutContent2}
                  alt=""
                  className="w-full h-[200px] md:h-[240px] object-cover"
                />
              </div>

              <div className="md:col-span-4">
                <p className="font-body text-base md:text-[16px] leading-relaxed md:leading-[24px] text-muted-foreground">
                  Experience mindful movement and inner peace as we guide you on
                  your unique path to well-being.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutContentSection;
