import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
const scheduleImage = '/images/home-book-class.jpg';

const scheduleData = [
  {
    name: 'Hatha yoga',
    slug: 'hatha-yoga',
    times: [
      { time: '09:00 AM - 10:00 AM', days: 'Monday & Wednesday' },
      { time: '09:00 AM - 10:00 AM', days: 'Tuesday & Thursday' },
      { time: '09:00 AM - 10:00 AM', days: 'Monday & Friday' },
    ],
  },
  {
    name: 'Vinyasa yoga',
    slug: 'vinyasa-yoga',
    times: [
      { time: '11:00 AM - 12:00 AM', days: 'Monday & Wednesday' },
      { time: '16:00 PM - 17:00 PM', days: 'Tuesday & Thursday' },
      { time: '20:00 PM - 21:00 PM', days: 'Monday & Friday' },
    ],
  },
  {
    name: 'Iyengar yoga',
    slug: 'iyengar-yoga',
    times: [
      { time: '08:00 AM - 09:00 AM', days: 'Monday & Wednesday' },
      { time: '16:00 PM - 17:00 PM', days: 'Tuesday & Thursday' },
      { time: '20:00 PM - 21:00 PM', days: 'Monday & Friday' },
    ],
  },
];

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-10 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-36">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading text-center mb-12 md:mb-16"
        >
          Book a class
        </motion.h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Schedule Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <div className="min-w-[600px] lg:min-w-0">
              {/* Header Row */}
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-accent">
                <span className="nav-link text-xs">CLASS</span>
                <span className="nav-link text-xs">TIME</span>
                <span className="nav-link text-xs">DAYS</span>
              </div>

              {/* Classes */}
              {scheduleData.map((classItem, index) => (
                <motion.div
                  key={classItem.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="py-6 border-b border-divider"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Link to={`/classes/${classItem.slug}`}>
                        <h3 className="font-heading text-lg md:text-xl mb-2 hover:text-primary transition-colors" style={{ letterSpacing: '-0.4px' }}>
                          {classItem.name}
                        </h3>
                      </Link>
                      <Link
                        to={`/classes/${classItem.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-foreground hover:opacity-70 transition-opacity"
                      >
                        Register now
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                      {classItem.times.map((t, i) => (
                        <span key={i} className="section-paragraph text-sm">
                          {t.time}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      {classItem.times.map((t, i) => (
                        <span key={i} className="section-paragraph text-sm">
                          {t.days}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={scheduleImage}
              alt="Woman doing tree pose in yoga studio"
              className="w-full h-full object-cover rounded-sm max-h-[500px]"
            />
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
             className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center lg:justify-start mt-6">
      
          <Link to="/contact" className="btn-primary text-sm md:text-lg">
            Register now
            <ArrowRight className="w-4 h-4 hidden sm:block" />
          </Link>
          <Link to="/classes" className="btn-secondary text-xs md:text-lg">
            View all classes
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
