import { motion } from "framer-motion";

const ClassesHero = () => {
    return (
        <section className="bg-white pt-20 lg:pt-16 pb-16 lg:pb-24 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-36">
                <div className="relative flex flex-col lg:block">
                    {/* White Cutout Box (Bottom Left) */}
                    <div className="lg:absolute lg:bottom-0 lg:left-0 lg:w-[45%] bg-white pb-12 lg:pb-0 lg:pt-10 lg:pr-10 text-center lg:text-left z-10 order-1 lg:order-none">
                        <div
                           
                        >
                            <h1 className="font-heading text-4xl md:text-6xl lg:text-[62px] font-normal text-foreground mb-6 md:mb-8 leading-tight md:leading-[70px] tracking-tight">
                                Classes
                            </h1>
                            <p className="font-body text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed md:leading-[24px]">
                                Find your perfect flow with our diverse range of yoga classes,
                                designed for all levels to nurture your body, mind, and spirit.
                            </p>
                        </div>
                    </div>

                    {/* Continuous Image Container */}
                    <div
                        
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden order-2 lg:order-none"
                    >
                        <img
                            src="/images/classes-image.png"
                            alt="Yoga classes"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassesHero;

