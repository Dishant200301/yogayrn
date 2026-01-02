import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const yogaClasses = [
  {
    slug: 'hatha-yoga',
    icon: '/icons/classes-1.svg',
    title: 'Hatha yoga',
    description: 'A classic approach to yoga, focusing on basic postures.',
  },
  {
    slug: 'vinyasa-yoga',
    icon: '/icons/classes-2.svg',
    title: 'Vinyasa yoga',
    description: 'A dynamic, flowing class that links breath with movement.',
  },
  {
    slug: 'iyengar-yoga',
    icon: '/icons/classes-3.svg',
    title: 'Iyengar yoga',
    description: 'Alignment-based practice using props for support.',
  },
  {
    slug: 'private-yoga',
    icon: '/icons/classes-4.svg',
    title: 'Private yoga class',
    description: 'A personalized yoga session designed just for your goals.',
  },
];

const PopularClassesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-36">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            Popular yoga classes
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/contact" className="btn-secondary">
              Contact us
            </Link>
          </motion.div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-0">
          {yogaClasses.map((yogaClass, index) => (
            <motion.div
              key={yogaClass.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group 
                ${index < yogaClasses.length - 1 ? 'lg:border-r lg:border-divider lg:pr-8' : ''} 
                ${index > 0 ? 'lg:pl-8' : ''} 
                ${index % 2 === 0 ? 'md:border-r md:border-divider md:pr-8' : 'md:pl-8'} 
                ${index % 2 !== 0 ? 'md:border-r-0' : ''}
                border-none md:border-solid`}
            >
              <Link to={`/classes/${yogaClass.slug}`} className="flex flex-col gap-6 h-full">
                <div className="flex-shrink-0 transition-transform duration-300 ">
                  <img src={yogaClass.icon} alt={yogaClass.title} className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-normal mb-3 transition-colors duration-300 group-hover:text-primary" style={{ letterSpacing: '-0.48px' }}>
                    {yogaClass.title}
                  </h3>
                  <p className="section-paragraph">{yogaClass.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClassesSection;
