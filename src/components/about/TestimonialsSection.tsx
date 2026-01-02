import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const testimonialAvatar = '/images/instructor-1.png';

const testimonials = {
  large: {
    title: "Amazing yoga studio! Friendly teachers and relaxing atmosphere",
    body: "I've been coming here for six months, and the change has been incredible. The teachers are so supportive, making every class a joy. The calm, welcoming environment makes it the perfect escape to focus on my practice and find my inner peace.",
    author: "Sophie Moore",
    location: "New York, NY",
    avatar: testimonialAvatar
  },
  small: [
    {
      quote: "The studio facilities are exceptional, the environment is quiet and welcoming",
      author: "Lilly Allen",
      location: "New York, NY"
    },
    {
      quote: "From day one, I felt their genuine commitment to helping me achieve my goals",
      author: "Karen Carter",
      location: "Los Angeles, CA"
    }
  ]
};

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-20 md:pb-28 md:pt-0 bg-background">
      <div className="container mx-auto px-6 lg:px-36">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl lg:text-[42px] font-normal text-foreground text-center leading-tight tracking-tight mb-12 md:mb-16"
        >
          Join our yoga community
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary/40 p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading text-xl md:text-2xl lg:text-[26px] font-normal text-foreground leading-snug mb-6">
                "{testimonials.large.title}"
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
                {testimonials.large.body}
              </p>
            </div>
            {/* Author Row */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials.large.avatar}
                alt={testimonials.large.author}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-body text-base font-medium text-foreground">
                  {testimonials.large.author}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {testimonials.large.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small Testimonials Stack */}
          <div className="flex flex-col gap-6">
            {testimonials.small.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-secondary/40 p-8 md:p-10 flex-1 flex flex-col justify-between"
              >
                <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-normal text-foreground leading-snug mb-6">
                  "{testimonial.quote}"
                </h3>
                {/* Author Inline */}
                <div className="flex items-center gap-3">
                  <p className="font-body text-base font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <div className="w-px h-4 bg-border" />
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
