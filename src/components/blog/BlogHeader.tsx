import { motion } from "framer-motion";

const BlogHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-6 lg:px-36 mb-16 md:mb-20 text-center"
        >
            <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl font-light text-[#2C2420] mt-16  mb-6">
                Articles & news
            </h1>
            <p className="text-[16px] md:text-xl text-[#6B6560] max-w-3xl mx-auto leading-relaxed">
                A hub for yoga insights, wellness tips, and news from our community.
                <br />
                Explore articles to deepen your practice and journey.
            </p>
        </motion.div>
    );
};

export default BlogHeader;
