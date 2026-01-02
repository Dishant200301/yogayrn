import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CLASSES', href: '/classes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0  z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-sm' : 'bg-background'
        }`}
      style={{ opacity: 0.99 }}
    >
      <nav className="container mx-auto px-6 lg:px-36">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/favicon.svg"
              alt="Yogayrn Logo"
              className="w-8 h-8 md:w-8 md:h-8"
            />
            <h1 className="text-2xl font-heading">Yogayrn</h1>

          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="nav-link flex items-center gap-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:flex btn-secondary"
          >
            Get in touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 z-[70]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8 text-foreground" />
            ) : (
              <Menu className="w-8 h-8 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[60] lg:hidden flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-divider">
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src="/images/yogayrn.png"
                  alt="Yogayrn Logo"
                  className="w-8 h-8 md:w-28 md:h-8"
                />
                <h1 className="text-2xl font-heading">Yogayrn</h1>
              </Link>
              {/* Close button is handled by the toggle button in the main nav which has z-[70] */}
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="font-serif text-4xl text-foreground hover:text-muted-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full max-w-xs mt-4"
              >
                <Link
                  to="/contact"
                  className="btn-secondary w-full justify-center py-4 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-12 text-center">
              <p className="font-body text-sm text-muted-foreground tracking-widest uppercase">
                Enhance Your Wellbeing
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
