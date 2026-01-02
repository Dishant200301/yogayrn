import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ClassInfoCardProps {
    details: {
        level: string;
        duration: string;
        intensity: string;
        schedule: string;
    };
    description?: string;
}

const ClassInfoCard = ({ details, description }: ClassInfoCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#f8f6f5] rounded-lg p-6 md:p-8 sticky top-24"
        >
            <h3 className="font-heading text-2xl font-normal mb-6" style={{ letterSpacing: '-0.02em' }}>
                Class details
            </h3>

            {description && (
                <p className="font-body text-base text-muted-foreground mb-8 leading-relaxed">
                    {description}
                </p>
            )}

            <div className="space-y-6 mb-8">
                {/* Level */}
                <div>
                    <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Level
                    </p>
                    <p className="font-body text-base text-foreground font-medium">
                        {details.level}
                    </p>
                </div>

                {/* Duration */}
                <div>
                    <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Duration
                    </p>
                    <p className="font-body text-base text-foreground font-medium">
                        {details.duration}
                    </p>
                </div>

                {/* Intensity */}
                <div>
                    <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Intensity
                    </p>
                    <p className="font-body text-base text-foreground font-medium">
                        {details.intensity}
                    </p>
                </div>

                {/* Schedule */}
                <div>
                    <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Schedule
                    </p>
                    <p className="font-body text-base text-foreground font-medium">
                        {details.schedule}
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-transparent border border-foreground text-foreground font-heading text-base tracking-tight transition-all duration-300 hover:bg-foreground hover:text-background"
            >
                Book a class
                <ArrowRight className="w-4 h-4" />
            </Link>
        </motion.div>
    );
};

export default ClassInfoCard;
