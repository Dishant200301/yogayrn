import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ClassInfoCard from './ClassInfoCard';

interface ClassContentSectionProps {
    about: string;
    moreDetails?: string;
    bullets: string[];
    details: {
        level: string;
        duration: string;
        intensity: string;
        schedule: string;
    };
    cardDescription?: string;
}

const ClassContentSection = ({ about, moreDetails, bullets, details, cardDescription }: ClassContentSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-12 md:py-20 bg-[#fdfaf9]">
            <div className="container mx-auto px-6 lg:px-36">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12">
                    {/* Left: Main Content */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                        {/* About the class */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h2 className="font-heading text-3xl md:text-4xl font-normal mb-6" style={{ letterSpacing: '-0.02em' }}>
                                About the class
                            </h2>
                            <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto lg:mx-0">
                                {about}
                            </p>
                        </motion.div>

                        {/* More details */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="font-heading text-3xl md:text-4xl font-normal mb-6" style={{ letterSpacing: '-0.02em' }}>
                                More details
                            </h2>
                            <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-8 max-w-3xl mx-auto lg:mx-0">
                                {moreDetails || "This class includes the following elements:"}
                            </p>
                            <ul className="space-y-2 md:space-y-4 inline-block text-left">
                                {bullets.map((bullet, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-foreground mt-2.5" />
                                        <span className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
                                            {bullet}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right: Class Info Card (Sticky) */}
                    <div className="lg:col-span-1">
                        <ClassInfoCard details={details} description={cardDescription} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassContentSection;
