import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Animation variants for staggered children
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.4
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
};

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[100svh] w-full bg-neutral-dark overflow-hidden">
            
            {/* Background Image: Full Bleed underneath everything */}
            <motion.div 
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/srit1.jpg"
                    alt="SRIT campus"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Left Side: Smooth Gradient Panel (No Blur) */}
            <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-0 bottom-0 z-10 w-full lg:w-[60%] xl:w-[50%] bg-gradient-to-r from-black/90 via-black/60 to-transparent flex flex-col justify-center pt-32 lg:pt-0 px-8 sm:px-12 xl:px-20"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col max-w-xl"
                >
                    {/* Location Badge */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
                        <span className="w-12 h-1 bg-primary" />
                        <span className="text-white font-bold tracking-[0.25em] uppercase text-xs drop-shadow-sm">
                            Anantapur, AP
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl xl:text-[80px] font-black text-white leading-[1.05] tracking-tight mb-8 drop-shadow-md">
                        Srinivasa <br />
                        Ramanujan <br />
                        Institute.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p variants={itemVariants} className="text-white/95 text-lg md:text-xl font-medium leading-relaxed mb-12 drop-shadow-md">
                        A center of excellence in engineering education, nurturing industry-ready professionals since 2007.
                    </motion.p>

                    {/* Button */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                        <a
                            href="#about"
                            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-5 bg-primary text-white text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-primary-dark transition-all duration-500 rounded shadow-xl shadow-primary/30"
                        >
                            Explore Programs
                            <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                        </a>
                    </motion.div>
                    
                    {/* Bottom Accreditation block */}
                    <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-white/30 flex flex-wrap gap-x-8 gap-y-4">
                        {['AICTE Approved', 'JNTUA Affiliated'].map((item) => (
                            <span key={item} className="text-white text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 drop-shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                {item}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Hero;
