import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { instructors } from "@/data/instructors";

const Instructors = () => {
    return (
        <>
            <Helmet>
                <title>Our Instructors - Yogayrn</title>
                <meta
                    name="description"
                    content="Meet our team of passionate and certified yoga instructors who are here to guide you on your wellness journey."
                />
            </Helmet>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="min-h-screen bg-background"
            >
                {/* Header Section */}
                <section className="py-16 md:py-20 lg:pt-24 lg:pb-0">
                    <div className="container mx-auto lg:px-36 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#2C2420] mb-0 leading-tight"
                        >
                            Our instructors
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-[#6B6560] max-w-3xl mx-auto leading-relaxed"
                        >
                            Our team of passionate and certified yoga instructors is here to
                            guide you on your wellness journey with their unique expertise and
                            care.
                        </motion.p>
                    </div>
                </section>

                {/* Instructors Grid */}
                <section className="py-12 md:py-16 pb-20 md:pb-28">
                    <div className="container mx-auto lg:px-36">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                            {instructors.map((instructor, index) => (
                                <motion.div
                                    key={instructor.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <Link to={`/instructors/${instructor.id}`}>
                                        {/* Image Wrapper */}
                                        <div className="relative mb-5 overflow-hidden rounded-2xl">
                                            <div className="aspect-[3/4] relative">
                                                <img
                                                    src={instructor.image}
                                                    alt={`${instructor.name} - ${instructor.role}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Plus Button Overlay */}
                                            <button
                                                aria-label={`View ${instructor.name} details`}
                                                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md"
                                            >
                                                <Plus className="w-6 h-6 text-[#2C2420]" />
                                            </button>
                                        </div>

                                        {/* Card Content */}
                                        <div>
                                            <h3 className="font-serif text-2xl md:text-3xl font-light text-[#2C2420] mb-2 group-hover:text-[#6B6560] transition-colors">
                                                {instructor.name}
                                            </h3>
                                            <p className="text-sm tracking-wider uppercase text-[#6B6560]">
                                                {instructor.role}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default Instructors;
