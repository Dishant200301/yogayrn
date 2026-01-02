import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts, BlogPost } from "@/data/blog";

const LatestArticles = () => {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const categories = ["All", "Yoga", "Lifestyle", "Resources"];

    const filteredPosts =
        activeCategory === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === activeCategory);

    return (
        <div className="container mx-auto px-6 lg:px-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left Sidebar - Sticky */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-3"
                >
                    <div className="lg:sticky lg:top-24">
                        <h2 className="font-serif text-3xl md:text-3xl font-light text-[#2C2420] mb-8 text-center lg:text-left">
                            Latest articles
                        </h2>

                        {/* Category Filter - Horizontal on mobile, vertical on desktop */}
                        <div className="flex lg:flex-col gap-2 md:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 no-scrollbar justify-start md:justify-center lg:justify-start">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-left whitespace-nowrap lg:whitespace-normal transition-colors duration-300 ${activeCategory === category
                                        ? "text-[#2C2420] font-medium border-l-2 lg:border-l-2 border-[#2C2420] pl-4"
                                        : "text-[#6B6560] hover:text-[#2C2420] border-l-2 lg:border-l-2 border-transparent pl-4"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Blog List */}
                <div className="lg:col-span-9">
                    <div className="space-y-0">
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <BlogCard post={post} />
                                {index < filteredPosts.length - 1 && (
                                    <div className="w-full h-px bg-[#E5E0DB] my-8" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <Link
            to={`/blog/${post.slug}`}
            className="group block cursor-pointer py-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                {/* Image - Left */}
                <div className="md:col-span-5">
                    <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden rounded-lg">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Content - Right */}
                <div className="md:col-span-7 flex flex-col justify-center">
                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2420] mb-3 leading-tight line-clamp-2">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <p className="text-[#6B6560] text-base md:text-lg mb-4 line-clamp-2 leading-relaxed">
                            {post.excerpt}
                        </p>
                    )}

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-[#6B6560] text-sm md:text-base">
                        <span className="font-medium">{post.category}</span>
                        <span className="text-[#D4CFC9]">—</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LatestArticles;
