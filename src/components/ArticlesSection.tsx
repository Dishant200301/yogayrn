import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const articleImage1 = '/images/blog-1.png';
const articleImage2 = '/images/blog-2.png';

const articles = [
  {
    image: articleImage1,
    title: '7 Yoga poses to keep your body fit',
    excerpt:
      'Explore 7 yoga poses that are perfect for improving strength, balance, and overall physical fitness.',
    category: 'Yoga',
    date: 'Nov 28, 2025',
  },
  {
    image: articleImage2,
    title: 'How to introduce yoga into the family routine',
    excerpt:
      'Discover fun, practical ways to make yoga a joyful bonding activity for the whole family.',
    category: 'Lifestyle',
    date: 'Nov 26, 2025',
  },
];

const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 md:sticky md:top-32 md:self-start text-center md:text-left h-fit"
          >
            <h2 className="section-heading mb-6 text-3xl md:text-4xl">Articles & news</h2>
            <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed max-w-sm mx-auto lg:mx-0">
              Explore our latest articles for tips on deepening your practice,
              insights into yoga philosophy, and updates on studio events. Find
              inspiration for your wellness journey right here.
            </p>
            <Link to="/blog" className="btn-secondary px-8 font-heading">
              View all articles
            </Link>
          </motion.div>

          {/* Articles List */}
          <div className="md:col-span-8 flex flex-col">
            {articles.map((article, index) => (
              <div key={article.title}>
                {index > 0 && <div className="w-full h-px bg-divider my-12" />}
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 group cursor-pointer"
                >
                  {/* Image */}
                  <div className="md:col-span-5 aspect-square overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <h3 className="font-heading text-2xl md:text-3xl mb-4 group-hover:opacity-70 transition-opacity leading-tight" style={{ letterSpacing: '-0.6px' }}>
                      {article.title}
                    </h3>
                    <p className="font-body text-base text-muted-foreground mb-8 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="border-t border-divider pt-6">
                      <div className="flex items-center gap-4">
                        <span className="font-heading text-lg text-foreground">{article.category}</span>
                        <span className="text-divider">—</span>
                        <span className="font-body text-base text-muted-foreground">{article.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
