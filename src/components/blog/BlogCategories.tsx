import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Category {
    title: string;
    description: string;
    icon: string;
    slug: string;
}

const categories: Category[] = [
    {
        title: "Yoga",
        description: "Explore poses, techniques, and the philosophy behind yoga.",
        icon: "/icons/blog-icon-1.svg",
        slug: "yoga",
    },
    {
        title: "Lifestyle",
        description: "Discover how to integrate wellness into your daily routine.",
        icon: "/icons/blog-icon-2.svg",
        slug: "lifestyle",
    },
    {
        title: "Resources",
        description: "Find tools, guides, and playlists to support your practice.",
        icon: "/icons/blog-icon-3.svg",
        slug: "resources",
    },
];

const BlogCategories = () => {
    return (
        <section className="py-20 md:py-24 bg-[#fdfaf9] border-t border-[#E5E0DB]">
            <div className="container mx-auto px-6 lg:px-36">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-center">
                    {/* Section Title - Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1 text-center lg:text-left"
                    >
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-[38px] font-normal text-foreground leading-[43px]">
                            Categories
                        </h2>
                    </motion.div>

                    {/* Categories Grid - Remaining 3 Columns */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <Link
                                    to={`/blog/category/${category.slug}`}
                                    className="group block text-center cursor-pointer"
                                >
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img
                                                src={category.icon}
                                                alt={category.title}
                                                className="w-14 h-14 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-heading text-xl md:text-2xl font-normal text-foreground mb-4 group-hover:text-muted-foreground transition-colors">
                                        {category.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-body text-[15px] text-muted-foreground max-w-[240px] mx-auto leading-relaxed">
                                        {category.description}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogCategories;

