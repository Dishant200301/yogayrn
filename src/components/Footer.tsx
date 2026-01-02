import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const tickerItems = [
  { icon: '/icons/classes-1.svg', text: 'Hatha yoga class' },
  { icon: '/icons/classes-2.svg', text: 'Hatha yoga' },
  { icon: '/icons/classes-3.svg', text: 'Vinyasa yoga' },
  { icon: '/icons/classes-4.svg', text: 'Iyengar yoga' },
  { icon: '/icons/classes-1.svg', text: 'Private yoga class' },
];

const footerLinks = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Classes', href: '/classes' },
  ],
  secondary: [
    { label: 'Blog', href: '/blog' },
    { label: 'Instructors', href: '/instructors' },
    { label: 'Instructors single', href: '#', desktopOnly: true },
    { label: 'Contact', href: '/contact' },
  ],
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-[#0A0B08] text-white">
      {/* Ticker / Marquee */}
      <div className="overflow-hidden py-10 border-b border-white/10">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <img
                src={item.icon}
                alt=""
                className="w-10 h-10 brightness-0 invert"
              />
              <span className="font-serif text-2xl lg:text-[28px] font-light">
                {item.text}
              </span>
              <span className="w-2 h-2 rounded-full bg-white ml-6" />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-36">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="py-10 px-6 flex justify-center md:justify-start items-center border-b md:border-b-0 md:border-r border-white/10">
              <a href="mailto:contact@yogayrn.com" className="font-body text-base hover:opacity-70 transition-opacity">
                contact@yogayrn.com
              </a>
            </div>
            <div className="py-10 px-6 flex justify-center items-center border-b md:border-b-0 md:border-r border-white/10">
              <a href="tel:+14232195624" className="font-body text-base hover:opacity-70 transition-opacity">
                (423) 2195 - 6241
              </a>
            </div>
            <div className="py-10 px-6 flex justify-center md:justify-end items-center">
              <address className="font-body text-base not-italic text-center md:text-right max-w-[280px]">
                1116 Wilshire Blvd, Santa Monica, Los Angeles, CA 90401
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-36 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Block */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <Link to="/" className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <img
                src="/images/favicon.svg"
                alt="Yogayrn Logo"
                className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert"
              />
              <h1 className="text-2xl font-heading text-white">Yogayrn</h1>
            </Link>

            <div className="font-body text-[13px] leading-relaxed text-white/60 mb-8 max-w-[300px] mx-auto lg:mx-0">
              <p>Copyright © Yogayrn | Refund policy | Designed by BRIX Templates - Powered by Framer</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a href="#" className="hover:opacity-70 transition-opacity"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:opacity-70 transition-opacity"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:opacity-70 transition-opacity"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:opacity-70 transition-opacity"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center lg:text-left">
            {/* Column 1: Main Pages */}
            <div>
              <h3 className="font-body text-sm font-bold uppercase tracking-wider mb-8">Pages</h3>
              <ul className="space-y-4">
                {footerLinks.main.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="font-body text-[15px] text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Secondary Pages */}
            <div>
              <h3 className="font-body text-sm font-bold uppercase tracking-wider mb-8 lg:block hidden opacity-0">Secondary</h3>
              <ul className="space-y-4 lg:mt-0 mt-0">
                {footerLinks.secondary.map((link) => (
                  <li key={link.label} className={link.desktopOnly ? "lg:block hidden" : "block"}>
                    <Link to={link.href} className="font-body text-[15px] text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
