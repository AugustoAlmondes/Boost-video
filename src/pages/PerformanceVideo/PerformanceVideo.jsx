import './style.css';
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PerformanceVideo() {
    return (
        <>
            <div className="video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-bg"
                    aria-label="Background demo video of AI ad performance tool">
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="video-overlay" />

                <motion.div
                    className="overlay-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h1>See Your Ad Performance Before Publishing</h1>
                    <p>
                        Our AI analyzes your creative and provides detailed insights on potential
                        performance across different platforms.
                    </p>
                    <ul>
                        <motion.li
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <p><FaCheck /> Engagement rate prediction</p>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p><FaCheck /> Click-through rate analysis creative</p>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <p><FaCheck /> Platform-specific optimization tips</p>
                        </motion.li>
                    </ul>
                </motion.div>

                <div className="video-fadeout" />
            </div>

            <section
                className="container-redy-optimize"
                // initial={{ opacity: 0, y: 50 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.7 }}
                // viewport={{ once: true, amount: 0.4 }}
            >
                <h2>Ready to Optimize Your Ad Performance?</h2>
                <p>
                    Join thousands of creators and businesses using klike to improve their advertising results
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Start Free Trial
                </motion.button>
            </section>
        </>
    );
}
