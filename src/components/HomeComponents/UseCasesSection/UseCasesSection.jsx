import './usecasessection.css';
import AnimatedNumber from './AnimatedNumber';
import { motion as MOTION } from 'framer-motion';

// UseCasesSection.jsx
import { FaUserAlt, FaChartLine, FaBullhorn, FaShoppingCart } from 'react-icons/fa';


export default function UseCasesSection() {
    return (
        <section
            className="use-cases-section"
        >
            <MOTION.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
            >
                How Boost can help you
            </MOTION.h1>

            <MOTION.p
                className="use-cases-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
            >
                Turn your video with artificial intelligence and increase the performance of your campaigns.
            </MOTION.p>

            <div className="use-cases-grid">
                <MOTION.div className="use-case-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <FaUserAlt className="use-case-icon" />
                    <h4>Content creators</h4>
                    <p>Valides ideas, scripts and creative before publishing - with insights based on real data.</p>
                </MOTION.div>

                <MOTION.div className="use-case-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}>
                    <FaChartLine className="use-case-icon" />
                    <h4>Marketing professionals</h4>
                    <p>Performance tests and forecasts that avoid waste of money and optimize campaigns.</p>
                </MOTION.div>

                <MOTION.div className="use-case-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}>
                    <FaBullhorn className="use-case-icon" />
                    <h4>Advertising Agencies</h4>
                    <p>Create and optimize dozens of creatives with AI, gaining speed and scale for multiple customers.</p>
                </MOTION.div>

                <MOTION.div className="use-case-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    viewport={{ once: true }}>
                    <FaShoppingCart className="use-case-icon" />
                    <h4>E-commerce and brands</h4>
                    <p>Understand what converts and focus your video in what really brings result.</p>
                </MOTION.div>
            </div>

            <MOTION.div
                className="use-cases-stats"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div>
                    <h3><AnimatedNumber end={35} />%</h3>
                    <p>Greater engagement in optimized videos</p>
                </div>
                <div>
                    <h3><AnimatedNumber end={2} />x</h3>
                    <p>Faster to create high performance campaigns</p>
                </div>
                <div>
                    <h3><AnimatedNumber end={50} />%</h3>
                    <p>Time Reduction in Creative Production</p>
                </div>
            </MOTION.div>
        </section>
    );
}
