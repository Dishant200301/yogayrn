import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ClassHeroSectionProps {
    title: string;
    intro: string;
    heroImage: string;
    icon: string;
}

const ClassHeroSection = ({ title, intro, heroImage, icon }: ClassHeroSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-36">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[550px]">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center py-12 md:py-16 lg:py-24 lg:pr-10 z-10 text-center lg:text-left items-center lg:items-start"
                    >
                        {/* Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6"
                        >
                            <img src={icon} alt={title} className="w-12 h-12" />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            {title}
                        </motion.h1>

                        {/* Intro */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="font-body text-base md:text-lg lg:text-[16px] leading-relaxed text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0"
                        >
                            {intro}
                        </motion.p>

                        {/* CTA Buttons */}
                       <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="
    grid grid-cols-2 gap-4
    sm:flex sm:flex-row sm:justify-center
    lg:justify-start
  "
>
  <Link to="/contact" className="btn-primary flex justify-center text-[12px] md:text-lg items-center">
    Get a free class
    <ArrowRight className="w-4 h-4 hidden sm:block" />
  </Link>

  <Link to="/contact" className="btn-secondary flex justify-center items-center">
    Contact us
  </Link>
</motion.div>

                    </motion.div>

                    {/* Right: Spacer for desktop grid */}
                    <div className="hidden lg:block"></div>
                </div>
            </div>

            {/* Absolute Image (Desktop) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block absolute top-0 right-0 w-1/2 h-full"
            >
                <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Mobile Image */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:hidden w-full h-[300px] md:h-[400px]"
            >
                <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    );
};

export default ClassHeroSection;

