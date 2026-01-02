import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { classes } from '@/data/classes';

interface MoreClassesSectionProps {
    relatedClassSlugs: string[];
}

const MoreClassesSection = ({ relatedClassSlugs }: MoreClassesSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const relatedClasses = classes.filter((c) => relatedClassSlugs.includes(c.slug));

    return (
        <section ref={ref} className="pb-20 md:py-28 bg-[#fdfaf9]">
            <div className="container mx-auto px-6 lg:px-36">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 md:mb-16 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-heading text-3xl md:text-5xl font-normal"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        More classes
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex justify-center md:justify-start"
                    >
                        <Link to="/classes" className="btn-secondary">
                            View all classes
                        </Link>
                    </motion.div>
                </div>

                {/* Classes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {relatedClasses.map((classItem, index) => (
                        <motion.div
                            key={classItem.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`
                flex flex-col items-center md:items-start text-center md:text-left py-12 md:py-16
                ${index % 2 === 0 ? 'md:border-r md:border-divider md:pr-12 lg:pr-20' : 'md:pl-12 lg:pl-20'}
                ${index < relatedClasses.length - 1 ? 'border-b border-divider md:border-b-0' : ''}
                ${index === relatedClasses.length - 2 && relatedClasses.length % 2 === 0 ? 'md:border-b-0' : ''}
              `}
                        >
                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                                className="mb-6"
                            >
                                <img src={classItem.icon} alt={classItem.title} className="w-12 h-12" />
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                                className="font-heading text-2xl md:text-3xl font-normal mb-4"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                {classItem.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                                className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-8 max-w-md mx-auto md:mx-0"
                            >
                                {classItem.shortDescription}
                            </motion.p>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                            >
                                <Link
                                    to={`/classes/${classItem.slug}`}
                                    className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-foreground/20 text-foreground font-body text-sm tracking-wide transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
                                >
                                    Read more
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MoreClassesSection;
