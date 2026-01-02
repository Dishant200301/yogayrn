import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const productThermo = '/images/products-1.png';
const productBlocks = '/images/products-2.png';
const productBall = '/images/products-3.png';
const productKit = '/images/products-4.png';

const products = [
  {
    name: 'Thermo',
    price: '$99',
    image: productThermo,
  },
  {
    name: 'Yoga blocks pack',
    price: '$24',
    image: productBlocks,
  },
  {
    name: 'Basic yoga ball',
    price: '$16',
    image: productBall,
  },
  {
    name: 'Yoga beginners kit',
    price: '$99',
    image: productKit,
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 md:sticky md:top-32 md:self-start text-center md:text-left h-fit"
          >
            <h2 className="section-heading mb-6">Yoga products</h2>
            <p className="section-paragraph mb-8 max-w-sm mx-auto md:mx-0">
              Enhance your practice with our curated collection of high-quality
              yoga mats, apparel, and accessories, designed to support you on
              and off the mat.
            </p>
            <Link to="/shop" className="btn-secondary">
              View shop
            </Link>
          </motion.div>

          {/* Products Grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="product-card group cursor-pointer"
              >
                <div className="aspect-square bg-muted/50 rounded-sm overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg md:text-xl" style={{ letterSpacing: '-0.4px' }}>
                    {product.name}
                  </h3>
                  <span className="font-heading text-lg md:text-xl" style={{ letterSpacing: '-0.4px' }}>
                    {product.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
