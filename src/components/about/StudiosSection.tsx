import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { studios } from '../../data/studios';

const StudiosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleLocation = (index: number) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={studios[openIndex].image}
                  src={studios[openIndex].image}
                  alt={`${studios[openIndex].city} studio interior`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[38px] font-normal text-foreground leading-tight tracking-tight mb-4">
              Visit our yoga studios
            </h2>
            <p className="font-body text-base md:text-[16px] text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Find your sanctuary in one of our beautiful studios. Each location is thoughtfully designed to be a peaceful haven for your yoga practice.
            </p>

            {/* Locations Accordion */}
            <div className="space-y-0">
              {studios.map((studio, index) => (
                <div key={studio.id} className="border-t border-border last:border-b">
                  {/* Location Header */}
                  <button
                    onClick={() => toggleLocation(index)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <h3 className="font-heading text-2xl md:text-3xl font-normal text-foreground">
                      {studio.city}, {studio.state}
                    </h3>
                    <div className={`flex-shrink-0 w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-transparent' : 'bg-transparent'}`}>
                      {openIndex === index ? (
                        <ChevronDown className="w-6 h-6 text-foreground" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-foreground" />
                      )}
                    </div>
                  </button>

                  {/* Location Details (Expandable) */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4">
                          <p className="font-body text-base md:text-[17px] text-muted-foreground leading-relaxed mb-4 max-w-lg">
                            {studio.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            <div className="flex items-start gap-3">
                              <span className="text-foreground mt-1 text-lg leading-none">•</span>
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studio.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body text-[15px] md:text-[16px] text-muted-foreground hover:text-foreground transition-colors leading-relaxed"
                              >
                                {studio.address}
                              </a>
                            </div>
                            <div className="space-y-0">
                              <div className="flex items-start gap-3">
                                <span className="text-foreground mt-1 text-lg leading-none">•</span>
                                <a
                                  href={`tel:${studio.phone.replace(/\D/g, '')}`}
                                  className="font-body text-[15px] md:text-[16px] text-muted-foreground hover:text-foreground transition-colors leading-relaxed"
                                >
                                  {studio.phone}
                                </a>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="text-foreground mt-1 text-lg leading-none">•</span>
                                <a
                                  href={`mailto:${studio.email}`}
                                  className="font-body text-[15px] md:text-[16px] text-muted-foreground hover:text-foreground transition-colors leading-relaxed"
                                >
                                  {studio.email}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudiosSection;

