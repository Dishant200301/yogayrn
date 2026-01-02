import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';
const retreatImage = '/images/yoga-retreat.jpg';

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative">
      {/* Soft background layer */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-secondary/20" />

      <div className="container mx-auto px-6 lg:px-36 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden"
        >
          {/* Background Image */}
          <img
            src={retreatImage}
            alt="Woman meditating at yoga retreat with mountain view"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between p-8 md:p-16 text-center md:text-left">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-sm mb-8 md:mb-0"
            >
              <h2 className="font-heading text-3xl md:text-5xl text-white mb-4" style={{ letterSpacing: '-0.76px' }}>
                My upcoming
                <br />
                yoga retreat
              </h2>
              <p className="font-body text-base md:text-lg text-white/80 leading-relaxed">
                Escape the everyday and immerse yourself in a journey of
                self-discovery and rejuvenation.
              </p>
            </motion.div>

            {/* Play Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="play-button flex w-12 h-12 md:w-16 md:h-16"
              aria-label="Play video"
            >
              <Play className="w-6 h-6 md:w-10 md:h-10 text-white fill-white ml-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
