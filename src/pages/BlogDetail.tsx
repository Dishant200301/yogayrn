import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useParams, Navigate, Link } from "react-router-dom";
import { blogDetails } from "@/data/blogdetails";
import { blogPosts } from "@/data/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();

    // Find the blog detail by slug
    const blogDetail = blogDetails.find((b) => b.slug === slug);

    // If blog detail not found, redirect to blog page
    if (!blogDetail) {
        return <Navigate to="/blog" replace />;
    }

    // Get related posts (exclude current post)
    const relatedPosts = blogPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 3);

    return (
        <>
            <Helmet>
                <title>{blogDetail.title} - Yogayrn Blog</title>
                <meta name="description" content={blogDetail.excerpt} />
            </Helmet>
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="min-h-screen bg-[#fdfaf9]"
            >
                {/* Hero Section - Two Column Layout */}
                <section className="relative overflow-hidden mt-12">
                    <div className="flex flex-col lg:flex-row min-h-[500px] pt-10 lg:min-h-[600px]">
                        {/* Left Column - Hero Image (Full Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-auto relative"
                        >
                            <img
                                src={blogDetail.heroImage}
                                alt={blogDetail.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Right Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 flex items-center py-10 lg:py-20"
                        >
                            <div className="px-6 md:px-12 lg:px-20 max-w-[640px] text-center lg:text-left mx-auto lg:mx-0">
                                {/* Category & Date */}
                                <div className="flex items-center justify-center lg:justify-start gap-4 text-muted-foreground text-sm md:text-base mb-6 md:mb-8">
                                    <span className="font-heading text-base md:text-[18px] font-medium">{blogDetail.category}</span>
                                    <span className="text-[#D4CFC9]"> — </span>
                                    <time dateTime={blogDetail.date} className="font-heading text-base md:text-[18px]">{blogDetail.date}</time>
                                </div>

                                {/* Title */}
                                <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl font-light text-[#2C2420] mb-6 leading-tight">
                                    {blogDetail.title}
                                </h1>

                                {/* Excerpt (Intro Paragraph) */}
                                <p className="font-body text-base md:text-[17px] text-muted-foreground leading-relaxed mb-10 md:mb-12">
                                    {blogDetail.excerpt.length < 200 ?
                                        "Ready to build strength, increase flexibility, and tone your entire body? This article guides you through seven essential yoga poses designed specifically for fitness. We'll break down each posture, from foundational poses to more challenging ones, explaining how they contribute to a strong and healthy physique."
                                        : blogDetail.excerpt}
                                </p>

                                {/* Author Block */}
                                <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-5">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
                                        <img
                                            src={blogDetail.author.avatar}
                                            alt={blogDetail.author.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-0.5 md:space-y-1 text-left">
                                        <p className="font-heading text-lg md:text-xl text-foreground">
                                            {blogDetail.author.name}
                                        </p>
                                        <p className="font-body text-[10px] md:text-[11px] text-muted-foreground uppercase tracking-[0.15em]">
                                            {blogDetail.author.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Content Body */}
                <section className="py-0 md:pt-16 md:pb-0">
                    <div className="max-w-[990px] mx-auto px-6 md:px-0">
                        {blogDetail.sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="mb-10"
                            >
                                {/* Section Heading */}
                                {section.heading && (
                                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2420] mb-6 leading-tight">
                                        {section.heading}
                                    </h2>
                                )}

                                {/* Paragraphs */}
                                {section.paragraphs &&
                                    section.paragraphs.map((paragraph, pIndex) => (
                                        <p
                                            key={pIndex}
                                            className="text-[#2C2420] text-base md:text-lg leading-relaxed mb-6"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}

                                {/* Bullet List */}
                                {section.bullets && (
                                    <ul className="space-y-3 mb-6 ml-6">
                                        {section.bullets.map((bullet, bIndex) => (
                                            <li
                                                key={bIndex}
                                                className="text-[#2C2420] text-base md:text-lg leading-relaxed list-disc"
                                            >
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Inline Image */}
                                {section.image && (
                                    <figure className="my-10">
                                        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden">
                                            <img
                                                src={section.image}
                                                alt="Blog content"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </figure>
                                )}

                                {/* Pull Quote */}
                                {section.quote && (
                                    <blockquote className="my-12 py-8 px-6 md:px-10 border-l-4 border-[#2C2420] bg-white/50">
                                        <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-[#2C2420] leading-relaxed italic text-center">
                                            "{section.quote}"
                                        </p>
                                    </blockquote>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Latest Articles Section */}
                <section className="py-16 md:py-20 bg-[#fdfaf9]">
                    <div className="container mx-auto px-6 lg:px-36">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#2C2420] text-center md:text-left"
                            >
                                Latest articles
                            </motion.h2>
                            <Link
                                to="/blog"
                                className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-[#2C2420] rounded-full text-[#2C2420] hover:bg-[#2C2420] hover:text-white transition-colors duration-300"
                            >
                                Browse all posts
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                            {relatedPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                >
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="group block cursor-pointer"
                                    >
                                        {/* Image */}
                                        <div className="relative w-full h-[240px] md:h-[280px] mb-6 overflow-hidden rounded-lg">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-serif text-xl md:text-2xl font-light text-[#2C2420] mb-3 leading-tight line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {/* Meta */}
                                        <div className="flex items-center gap-3 text-[#6B6560] text-sm">
                                            <span className="font-medium">{post.category}</span>
                                            <span className="text-[#D4CFC9]">—</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Browse All Button */}
                        <div className="mt-10 flex justify-center md:hidden">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-[#2C2420] rounded-full text-[#2C2420] hover:bg-[#2C2420] hover:text-white transition-colors duration-300"
                            >
                                Browse all posts
                            </Link>
                        </div>
                    </div>
                </section>
            </motion.article>
        </>
    );
};

export default BlogDetail;
