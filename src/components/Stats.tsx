import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '10k+', label: 'Global Alumni' },
    { value: '150+', label: 'Expert Faculty' },
    { value: '50+', label: 'Advanced Labs' },
    { value: '100+', label: 'Top Recruiters' },
];

const Stats: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="bg-white relative border-b border-neutral-100 overflow-hidden">
            
            {/* Very subtle background pattern/gradient to give it a rich feel */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

            <div className="relative py-24 lg:py-32">
                <div className="section-container">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-16 lg:gap-0">
                        {stats.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className={`group flex flex-col items-center justify-center text-center relative ${
                                    i > 0 ? 'lg:border-l lg:border-neutral-100' : ''
                                }`}
                            >
                                {/* Micro-index label for architectural detail */}
                                <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-10 lg:-mt-12 text-[10px] font-bold text-neutral-300 tracking-[0.3em] font-serif transition-colors duration-500 group-hover:text-primary/40">
                                    0{i + 1}
                                </div>

                                <div
                                    className="font-serif leading-none font-black tracking-tighter drop-shadow-sm transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2 cursor-default"
                                    style={{ 
                                        fontVariantNumeric: 'tabular-nums',
                                        fontSize: 'clamp(50px, 6vw, 100px)'
                                    }}
                                >
                                    {/* Rich gradient text instead of flat color */}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-[#ff9e66]">
                                        {item.value}
                                    </span>
                                </div>
                                
                                <div className="text-neutral-dark text-[10px] lg:text-xs font-extrabold uppercase tracking-[0.3em] mt-8 md:mt-10 px-4 transition-colors duration-500 group-hover:text-primary">
                                    {item.label}
                                </div>

                                {/* Hover indicator line */}
                                <div className="w-0 h-[2px] bg-primary mt-6 transition-all duration-500 ease-out group-hover:w-12 rounded-full" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
