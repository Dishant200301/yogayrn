import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterSection = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Newsletter subscription:", email);
        setEmail("");
    };

    return (
        <section className="bg-[#0F0B08] text-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-36 py-20 md:pt-2 md:pb-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center text-center lg:text-left">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Heading */}
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-[38px] font-normal mb-6 leading-[1.1] tracking-tight">
                            Subscribe to our
                            <br />
                            newsletter!
                        </h2>

                        {/* Description */}
                        <p className="font-body text-[#B8B3AE] text-base md:text-[16px] mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Get the latest articles, class updates, and exclusive offers delivered straight to your inbox every month.
                        </p>

                        {/* Subscribe Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-md mx-auto lg:mx-0"
                        >
                            <div className="relative flex flex-col sm:flex-row items-center border border-white/20 sm:border-white rounded-2xl sm:rounded-full p-1 bg-transparent transition-all duration-300 focus-within:border-white/40">
                                <label htmlFor="newsletter-email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    className="w-full sm:flex-1 px-6 py-4 sm:py-3 bg-transparent text-white placeholder:text-white/40 focus:outline-none text-sm md:text-base font-body text-center sm:text-left"
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-4 sm:py-3 bg-white text-[#0F0B08] font-heading text-sm md:text-base rounded-xl sm:rounded-full hover:bg-[#F5F5F5] transition-all duration-300 cursor-pointer whitespace-nowrap mt-2 sm:mt-0"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: -20 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-sm overflow-hidden shadow-2xl translate-y-0 md:translate-y-20">
                            <img
                                src="/images/newsletter.png"
                                alt="Yoga practitioners with mats"
                                className="w-full h-full object-cover"
                            />
                            {/* Subtle Overlay to match the premium feel */}
                            <div className="absolute inset-0 bg-black/5" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;

