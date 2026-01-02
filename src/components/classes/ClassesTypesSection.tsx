import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const yogaClassTypes = [
    {
        icon: (
            <img src="/icons/classes-1.svg" alt="Hatha yoga" />
        ),
        title: 'Hatha yoga',
        description: 'A classic approach to yoga, focusing on basic postures and breathing techniques. Perfect for beginners and those seeking a gentle, mindful practice that builds strength and flexibility at a comfortable pace.',
        slug: 'hatha-yoga',
    },
    {
        icon: (
            <img src="/icons/classes-2.svg" alt="Vinyasa yoga" />
        ),
        title: 'Vinyasa yoga',
        description: 'A dynamic, flowing class that links breath with movement in creative sequences. Build strength, flexibility, and cardiovascular endurance while calming your mind through focused, rhythmic movement.',
        slug: 'vinyasa-yoga',
    },
    {
        icon: (
            <img src="/icons/classes-3.svg" alt="Iyengar yoga" />
        ),
        title: 'Iyengar yoga',
        description: 'Alignment-based practice using props for support and precision. Focus on the details of each posture with the help of blocks, straps, and blankets to achieve proper alignment and deepen your understanding.',
        slug: 'iyengar-yoga',
    },
    {
        icon: (
            <img src="/icons/classes-4.svg" alt="Private yoga" />
        ),
        title: 'Private yoga',
        description: 'Alignment-based practice using props for support and precision. Focus on the details of each posture with the help of blocks, straps, and blankets to achieve proper alignment and deepen your understanding.',
        slug: 'private-yoga',
    },

];

const ClassesTypesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-0 md:py-28 bg-background">
            <div className="container mx-auto px-6 lg:px-36">
                {/* Grid with Dividers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {yogaClassTypes.map((classType, index) => (
                        <motion.div
                            key={classType.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`
                flex flex-col items-center md:items-start text-center md:text-left py-12 md:py-16
                ${index % 2 === 0 ? 'md:border-r md:border-divider md:pr-12 lg:pr-20' : 'md:pl-12 lg:pl-20'}
                ${index < yogaClassTypes.length - 1 ? 'border-b border-divider md:border-b-0' : ''}
                ${index === yogaClassTypes.length - 2 ? 'md:border-b-0' : ''}
              `}
                        >
                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                                className="mb-6"
                            >
                                {classType.icon}
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                                className="font-heading text-3xl md:text-4xl font-normal mb-4"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                {classType.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                                className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-8 max-w-md"
                            >
                                {classType.description}
                            </motion.p>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                            >
                                <Link
                                    to={`/classes/${classType.slug}`}
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

export default ClassesTypesSection;
