import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What yoga styles are taught on retreat?",
    answer: "During the retreat, participants can explore a variety of yoga styles, including Hatha for foundational poses, Vinyasa for fluid movement, and Yin yoga for deep relaxation. Each session is designed to accommodate different levels of experience, ensuring that every participant benefits from a holistic yoga practice."
  },
  {
    question: "Can beginners join to the yoga retreat?",
    answer: "Absolutely! Our retreats are designed to welcome practitioners of all levels, including complete beginners. Our experienced instructors provide modifications and personalized guidance to ensure everyone can participate fully and safely."
  },
  {
    question: "How many people assist the yoga retreat?",
    answer: "Our retreats typically accommodate 15-25 participants to ensure an intimate and personalized experience. This allows our instructors to provide individual attention while fostering a sense of community among attendees."
  },
  {
    question: "What is the daily itinerary in the retreat?",
    answer: "A typical day includes morning meditation, two yoga sessions, healthy meals, free time for relaxation or optional activities, and evening workshops or group discussions focused on wellness and mindfulness practices."
  },
  {
    question: "Can we book extra yoga classes during the retreat?",
    answer: "Yes, private sessions and additional classes can be arranged during the retreat. Please contact us in advance to schedule personalized sessions with our instructors based on your specific needs and interests."
  }
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-36">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl lg:text-[42px] font-normal text-foreground text-center leading-tight tracking-tight mb-10"
        >
          Frequently asked questions
        </motion.h2>

        {/* Top Divider */}
        <div className="border-t border-border mb-2" />

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-normal text-foreground pr-8">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-foreground" />
                </div>
              </button>

              {/* Answer (Collapsible) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
              >
                <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-border" />
            </div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <Link to="/contact" className="btn-secondary">
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
