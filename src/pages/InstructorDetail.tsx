import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { getInstructorBySlug } from "@/data/instructorsdetails";
import { blogDetails } from "@/data/blogdetails";

const InstructorDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const instructor = slug ? getInstructorBySlug(slug) : undefined;

    if (!instructor) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-serif text-4xl text-[#2C2420] mb-4">
                        Instructor Not Found
                    </h1>
                    <Link
                        to="/instructors"
                        className="text-[#2C2420] hover:underline inline-flex items-center gap-2"
                    >
                        Back to Instructors
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    }

    // Filter blogs by this instructor (assuming author name matches)
    const instructorBlogs = blogDetails.filter(
        (blog) => blog.author.name.toLowerCase() === instructor.name.toLowerCase()
    );

    return (
        <>
            <Helmet>
                <title>{instructor.name} - Yoga Instructor - Yogayrn</title>
                <meta name="description" content={instructor.intro} />
            </Helmet>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="min-h-screen bg-[#fdfaf9]"
            >
                <div className="flex flex-col">
                    {/* Name & Intro Section */}
                    <section className="order-1 lg:order-2 pt-24 lg:pt-0 pb-16 lg:pb-12">
                        <div className="container mx-auto px-6 lg:px-36">
                            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 text-center lg:text-left">
                                {/* Left Content */}
                                <div className="max-w-2xl">
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="font-body text-[13px] tracking-[0.15em] uppercase text-muted-foreground mb-4"
                                    >
                                        {instructor.role}
                                    </motion.p>
                                    <motion.h1
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="font-serif text-4xl md:text-5xl lg:text-[64px] font-light text-foreground mb-8 leading-tight"
                                    >
                                        {instructor.name}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        className="font-body text-base md:text-[17px] text-muted-foreground leading-relaxed"
                                    >
                                        {instructor.intro}
                                    </motion.p>
                                </div>

                                {/* Right Content - Socials */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="lg:text-right"
                                >
                                    <h3 className="font-serif text-2xl text-foreground mb-6">
                                        Follow me:
                                    </h3>
                                    <div className="flex items-center gap-3 justify-center lg:justify-end">
                                        {instructor.socials.facebook && (
                                            <a href={instructor.socials.facebook} className="w-10 h-10 bg-black flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                                                <Facebook className="w-5 h-5" />
                                            </a>
                                        )}
                                        {instructor.socials.instagram && (
                                            <a href={instructor.socials.instagram} className="w-10 h-10 bg-black flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                                                <Instagram className="w-5 h-5" />
                                            </a>
                                        )}
                                        {instructor.socials.linkedin && (
                                            <a href={instructor.socials.linkedin} className="w-10 h-10 bg-black flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {instructor.socials.youtube && (
                                            <a href={instructor.socials.youtube} className="w-10 h-10 bg-black flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                                                <Youtube className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Hero Section - Two Column Images */}
                    <section className="order-2 lg:order-1 pt-0 lg:pt-32 pb-12">
                        <div className="container mx-auto px-6 lg:px-36">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="aspect-[4/3] overflow-hidden rounded-sm"
                                >
                                    <img
                                        src={instructor.profileImage}
                                        alt={instructor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="aspect-[4/3] overflow-hidden rounded-sm"
                                >
                                    <img
                                        src={instructor.coverImage}
                                        alt={`${instructor.name} in class`}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* About Section */}
                <section className="py-16 lg:py-0">
                    <div className="container mx-auto px-6 lg:px-36">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0"
                        >
                            <h2 className="font-serif text-3xl lg:text-[42px] font-light text-foreground mb-8">
                                About {instructor.name}
                            </h2>
                            <p className="font-body text-base md:text-[17px] text-muted-foreground leading-relaxed">
                                {instructor.about}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="py-16 lg:py-10">
                    <div className="container mx-auto px-6 lg:px-36">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0"
                        >
                            <h2 className="font-serif text-3xl lg:text-[42px] font-light text-foreground mb-8">
                                My experience
                            </h2>
                            <p className="font-body text-base md:text-[17px] text-muted-foreground leading-relaxed mb-10">
                                {instructor.experience}
                            </p>
                            <ul className="space-y-2 inline-block text-left">
                                {instructor.highlights.map((highlight, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="flex items-start gap-4 text-muted-foreground"
                                    >
                                        <span className="text-foreground mt-1.5">•</span>
                                        <span className="font-body text-base md:text-[17px]">{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Articles Section */}
                {instructorBlogs.length > 0 && (
                    <section className="py-20 lg:py-32 bg-white">
                        <div className="container mx-auto px-6 lg:px-36">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 text-center md:text-left">
                                <h2 className="font-serif text-3xl md:text-4xl lg:text-[38px] font-light text-[#2C2420]">
                                    Articles by {instructor.name}
                                </h2>
                                <Link
                                    to="/blog"
                                    className="inline-flex items-center justify-center px-10 py-3.5 rounded-full border border-[#E5E0DB] text-[#2C2420] font-body text-sm transition-all duration-300 hover:bg-[#FDFBF9] w-fit mx-auto md:mx-0"
                                >
                                    Browse all posts
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                                {instructorBlogs.slice(0, 3).map((blog, index) => (
                                    <motion.article
                                        key={blog.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <Link to={`/blog/${blog.slug}`} className="group block">
                                            <div className="aspect-[1.25/1] overflow-hidden mb-8 rounded-sm">
                                                <img
                                                    src={blog.heroImage}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <h3 className="font-serif text-[24px] lg:text-[28px] font-medium leading-tight text-[#2C2420] mb-8 group-hover:text-[#6B6560] transition-colors min-h-[60px]">
                                                {blog.title}
                                            </h3>

                                            {/* Divider */}
                                            <div className="w-full h-[1px] bg-[#E5E0DB] mb-6" />

                                            <div className="flex items-center gap-3 text-[15px] text-[#2C2420]">
                                                <span className="font-medium">{blog.category}</span>
                                                <span className="text-[#CDC9C6]"> — </span>
                                                <time dateTime={blog.date} className="text-[#6B6560]">{blog.date}</time>
                                            </div>
                                        </Link>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </motion.div>

        </>
    );
};

export default InstructorDetail;
