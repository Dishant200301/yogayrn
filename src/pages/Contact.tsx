import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { studios } from "@/data/studios";
import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Mail,
    Phone,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
} from "lucide-react";
import FAQSection from "@/components/FAQSection";
import InstagramSection from "@/components/InstagramSection";

const Contact = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % studios.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + studios.length) % studios.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Yogayrn</title>
                <meta
                    name="description"
                    content="Get in touch with Yogayrn. We're here to answer your questions and welcome you into our community."
                />
            </Helmet>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="min-h-screen bg-background"
            >
                {/* HERO */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-4 lg:px-36 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="font-heading text-3xl md:text-6xl lg:text-7xl font-light text-[#2C2420] leading-tight mb-6"
                        >
                            A space to connect and
                            <br />
                            grow together contact us!
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="font-body text-base md:text-lg text-[#6B6560] max-w-3xl mx-auto leading-relaxed"
                        >
                            We're here to answer your questions, listen to your feedback, and welcome
                            you into our community. Reach out to us and let's start a conversation.
                        </motion.p>
                    </div>
                </section>

                {/* CONTACT BOX */}
                <section className="pb-28 bg-background">
                    <div className="container mx-auto px-4 lg:px-36">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="border border-[#2C2420]/30 bg-background"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                {/* FORM */}
                                <div className="p-4 md:p-14 lg:p-20 border-b lg:border-b-0 lg:border-r border-[#2C2420]/30">
                                    <form className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                            <div className="space-y-2">
                                                <label className="block text-base font-heading text-[#2C2420]">Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Full name"
                                                    className="w-full h-[52px] px-6 border border-[#0f0b08] rounded-full bg-transparent focus:outline-none placeholder:text-[#6B6560]/50 font-body"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block text-base font-heading text-[#2C2420]">Email</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="w-full h-[52px] px-6 border border-[#0f0b08] rounded-full bg-transparent focus:outline-none placeholder:text-[#6B6560]/50 font-body"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block text-base font-heading text-[#2C2420]">Phone</label>
                                                <input
                                                    type="tel"
                                                    placeholder="(123) 357 - 3176"
                                                    className="w-full h-[52px] px-6 border border-[#0f0b08] rounded-full bg-transparent focus:outline-none placeholder:text-[#6B6560]/50 font-body"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block text-base font-heading text-[#2C2420]">Service</label>
                                                <input
                                                    type="text"
                                                    placeholder="ex. Hatha yoga"
                                                    className="w-full h-[52px] px-6 border border-[#0f0b08] rounded-full bg-transparent focus:outline-none placeholder:text-[#6B6560]/50 font-body"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-base font-heading text-[#2C2420]">Message</label>
                                            <textarea
                                                rows={5}
                                                placeholder="Leave us a message"
                                                className="w-full px-6 py-4 border border-[#0f0b08] rounded-[32px] bg-transparent resize-none focus:outline-none placeholder:text-[#6B6560]/50 font-body"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full h-[52px] font-heading border border-[#0f0b08] rounded-full text-[#2C2420] text-sm font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-[#2C2420] hover:text-white transition-all duration-300"
                                        >
                                            Send message
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </form>
                                </div>

                                {/* DETAILS */}
                                <div className="p-10 md:p-14 lg:px-10 lg:py-0 flex flex-col justify-left lg:mt-28">
                                    <h3 className="font-heading text-3xl font-light text-[#2C2420] mb-2">
                                        More details:
                                    </h3>

                                    <p className="font-base text-[#6B6560] font-[400] text-[16px] mb-4 leading-[24px]">
                                        Have questions or need more information? We're here to help. Find our
                                        contact details below and connect with us.
                                    </p>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-4 text-[#2C2420]">
                                            <Mail className="w-5 h-5 stroke-[1.5px]" />
                                            <a href="mailto:contact@yogayrn.com" className="hover:underline font-heading font-[400] text-[20px]">contact@yogayrn.com</a>
                                        </div>
                                        <div className="flex items-center gap-4 text-[#2C2420]">
                                            <Phone className="w-5 h-5 stroke-[1.5px]" />
                                            <a href="tel:+1584391467" className="hover:underline font-heading font-[400] text-[20px]">(584) 391 - 467</a>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        {[
                                            { icon: Facebook, label: "Facebook" },
                                            { icon: Instagram, label: "Instagram" },
                                            { icon: Linkedin, label: "LinkedIn" },
                                            { icon: Youtube, label: "YouTube" },
                                        ].map((social) => (
                                            <a
                                                key={social.label}
                                                href="#"
                                                className="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#2C2420] transition-colors"
                                                aria-label={social.label}
                                            >
                                                <social.icon className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Visit Our Yoga Studios - Slider Section */}
                {/* Visit Our Yoga Studios - Slider Section */}
                <section className="py-2 md:py-24 bg-background">
                    <div className="container mx-auto px-6 lg:px-36">
                        {/* Section Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="font-heading text-4xl md:text-5xl font-light text-[#2C2420]"
                            >
                                Visit our yoga studios
                            </motion.h2>

                            {/* Arrow Controls */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handlePrev}
                                    aria-label="Previous studio"
                                    className="w-11 h-11 border border-[#2C2420]/20 rounded-full flex items-center justify-center hover:border-[#2C2420] transition-colors group"
                                >
                                    <ChevronLeft className="w-5 h-5 stroke-[1px] text-[#2C2420]/60 group-hover:text-[#2C2420]" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    aria-label="Next studio"
                                    className="w-11 h-11 border border-[#2C2420]/20 rounded-full flex items-center justify-center hover:border-[#2C2420] transition-colors group"
                                >
                                    <ChevronRight className="w-5 h-5 stroke-[1px] text-[#2C2420]/60 group-hover:text-[#2C2420]" />
                                </button>
                            </div>
                        </div>

                        {/* Slider */}
                        <div className="relative">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center"
                            >
                                {/* Left - Studio Image */}
                                <div className="relative h-[400px] md:h-[500px] lg:h-[580px] overflow-hidden">
                                    <img
                                        src={studios[currentSlide].image}
                                        alt={`${studios[currentSlide].city} studio`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Right - Studio Info Card */}
                                <div className="bg-white p-10 md:p-14 lg:p-10 h-fit mt-0 lg:mt-[215px] lg:-ml-12 relative z-10 shadow-sm">
                                    <h3 className="font-heading text-3xl md:text-4xl font-light text-[#2C2420] mb-6">
                                        {studios[currentSlide].city},{" "}
                                        {studios[currentSlide].state}
                                    </h3>
                                    <p className="font-body text-[#6B6560] text-lg mb-10 leading-relaxed">
                                        {studios[currentSlide].description}
                                    </p>

                                    <div className="space-y-5">
                                        {/* Address */}
                                        <div className="flex items-start gap-4">
                                            <span className="text-[#2C2420]/30 mt-3 w-8 h-[1px] bg-[#2C2420]/30"></span>
                                            <p className="text-[#2C2420] font-body text-lg leading-relaxed">
                                                {studios[currentSlide].address}
                                            </p>
                                        </div>

                                        {/* Phone */}
                                        <div className="flex items-center gap-4">
                                            <span className="text-[#2C2420]/30 w-8 h-[1px] bg-[#2C2420]/30"></span>
                                            <a
                                                href={`tel:${studios[currentSlide].phone.replace(/\s/g, "")}`}
                                                className="text-[#2C2420] hover:underline font-body text-lg"
                                            >
                                                {studios[currentSlide].phone}
                                            </a>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-center gap-4">
                                            <span className="text-[#2C2420]/30 w-8 h-[1px] bg-[#2C2420]/30"></span>
                                            <a
                                                href={`mailto:${studios[currentSlide].email}`}
                                                className="text-[#2C2420] hover:underline font-body text-lg"
                                            >
                                                {studios[currentSlide].email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQSection />

                {/* Instagram Section */}
                <InstagramSection />
            </motion.div>
        </>
    );
};

export default Contact;
