import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";

const BlogGrid = () => {
    // Get first 2 posts for the grid
    const featuredPosts = blogPosts.slice(0, 2);

    return (
        <section className="py-0 md:pt-28 md:pb-0 bg-[#fdfaf9]">
            <div className="container mx-auto px-6 lg:px-36">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 relative">
                    {/* Vertical divider line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E5E0DB] -translate-x-1/2" />

                    {featuredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`${index === 0 ? "md:pr-12" : "md:pl-12"
                                } mb-12 md:mb-0`}
                        >
                            <Link
                                to={`/blog/${post.slug}`}
                                className="group block cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative w-full aspect-[1.5/1] mb-8 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="font-heading text-2xl md:text-3xl lg:text-[38px] font-normal text-foreground mb-6 leading-tight group-hover:text-muted-foreground transition-colors">
                                    {post.title}
                                </h3>

                                {/* Meta */}
                                <div className="flex items-center gap-3 text-muted-foreground text-sm md:text-base">
                                    <span className="font-body">{post.category}</span>
                                    <span className="text-[#D4CFC9]"> — </span>
                                    <span className="font-body">{post.date}</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;


