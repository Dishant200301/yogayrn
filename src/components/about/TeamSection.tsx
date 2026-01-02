import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';
const team1 = '/images/instructor-1.png';
const team2 = '/images/instructor-2.png';
const team3 = '/images/instructor-3.png';

const teamMembers = [
  {
    name: "Sophie Moore",
    role: "YOGA INSTRUCTOR",
    image: team1
  },
  {
    name: "Emily Woods",
    role: "YOGA INSTRUCTOR",
    image: team2
  },
  {
    name: "Danna Smith",
    role: "YOGA INSTRUCTOR",
    image: team3
  }
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-0 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-36">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12 md:mb-16">
          {/* Title Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[38px] font-normal text-foreground leading-tight tracking-tight mb-4">
              Our wonderful team
            </h2>
            <p className="font-body text-base md:text-[16px] text-muted-foreground leading-relaxed">
              Meet our dedicated and passionate instructors. Each member of our team brings unique expertise and a deep commitment to your personal well-being.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="
    grid grid-cols-2 gap-2
    sm:flex sm:flex-row sm:justify-center
    lg:justify-start
  "
>
  <Link to="/contact" className="btn-primary flex justify-center text-[13px] md:text-lg items-center">
    Get a free class
    <ArrowRight className="w-4 h-4 hidden sm:block" />
  </Link>

  <Link to="/contact" className="btn-secondary flex justify-center items-center">
    Contact us
  </Link>
</motion.div>

        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Image Wrapper */}
              <div className="relative group mb-4">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Plus Overlay */}
                <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-secondary">
                  <Plus className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Text Block */}
              <h3 className="font-heading text-xl md:text-2xl font-normal text-foreground mb-1">
                {member.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
