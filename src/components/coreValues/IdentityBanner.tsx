import * as motion from "motion/react-client";
import { Logo } from '../navbar/Logo';

const IdentityBanner = () => {
    return (
        <section className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-white py-16 px-8 md:px-16 flex items-center justify-center md:justify-start">
                <motion.h2
                    initial={{
                        opacity: 0,
                        x: -20,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-3xl md:text-5xl font-bold text-stone-900 leading-tight"
                >
                    Community-driven. <br />
                    <span className="text-amber-600">Enterprise-ready.</span>
                </motion.h2>
            </div>
            <div className="w-full md:w-1/2 bg-amber-500 py-16 px-8 md:px-16 flex flex-col justify-center items-start text-white">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mb-6"
                >
                    <span className="text-2xl md:text-3xl font-bold opacity-90">
                        We are
                    </span>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.15,
                    }}
                >
                    <Logo variant="light" size="lg" className="shadow-lg" />
                </motion.div>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.3,
                    }}
                    className="text-lg md:text-xl font-medium opacity-90 mt-6"
                >
                    Building the future of open software with bare-metal performance and
                    ethical impact.
                </motion.p>
            </div>
        </section>
    );
};

export default IdentityBanner;