import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BlogCategories, BlogGrid, NewsletterSection, LatestArticles, BlogHeader } from "@/components/blog";

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Articles & News - Yogayrn</title>
                <meta
                    name="description"
                    content="A hub for yoga insights, wellness tips, and news from our community. Explore articles to deepen your practice and journey."
                />
            </Helmet>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="min-h-screen bg-background"
            >
                {/* Articles & News Section */}
                <section className="py-0 md:pt-24 md:pb-0">
                    <BlogHeader />
                    <BlogGrid />
                </section>

                {/* Categories Section */}
                <section className="py-0 md:py-4 bg-background">
                    <BlogCategories />
                </section>
                <NewsletterSection />

                {/* Latest Articles Section */}
                <section className="py-12 md:py-24 bg-background">
                    <LatestArticles />
                </section>


            </motion.div>
        </>
    );
};

export default Blog;
