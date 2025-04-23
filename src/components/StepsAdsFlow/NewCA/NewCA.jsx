import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, BarChart, PieChart } from "@mui/x-charts";
import { FaArrowTrendUp, FaChartPie, FaRegLightbulb } from "react-icons/fa6";
import { IoCheckmarkCircleSharp, IoTimeOutline } from "react-icons/io5";
import { motion as MOTION } from "framer-motion";
import { LuMousePointerClick } from "react-icons/lu";
import "../../../index.css";
import "./newca.css"; // CSS base para layout
import CardPerformance from "../../CardPerformance/CardPerformance";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { IoIosInformationCircle } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";

const performanceTimelineData = [
    { month: "Jan", value: 60 },
    { month: "Feb", value: 72 },
    { month: "Mar", value: 75 },
    { month: "Apr", value: 80 },
    { month: "May", value: 85 },
    { month: "Jun", value: 87 },
];

const creativeElementsData = [
    { id: 0, value: 30, label: "Visual Appeal", color: "var(--yellow)" },
    { id: 2, value: 20, label: "Call-to-Action", color: "var(--meanyellow)" },
    { id: 1, value: 25, label: "Messaging", color: "#b3a754" },
    { id: 3, value: 25, label: "Engagement", color: "#dacc66" },
];

const creativeElements = [
    { label: "Visual Appeal", value: 28 },
    { label: "Messaging", value: 45 },
    { label: "Call-to-Action", value: 45 },
    { label: "Engagement", value: 58 },
];

export default function CreativeAnalysis({ loadGraph }) {

    console.log(loadGraph);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const targetValue = 87;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentVal = Math.floor(progress * targetValue);
            setTimeout(() => {
                setDisplayValue(currentVal);
            }, 1500);
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    return (
        <>
            <h1 className="creative-analysis-title">Creative Analysis</h1>
            <MOTION.div
                className="creative-analysis-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >

                <MOTION.div className="cards-performance-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >

                    <CardPerformance
                        icon={<IoTimeOutline />}
                        title={12.4}
                        extension={"s"}
                        color="green"
                        description="Average View Time"
                        animation={loadGraph}
                        delay={0.2}
                        timeout={800}
                    />

                    <CardPerformance
                        icon={<LuMousePointerClick />}
                        title={4.8}
                        extension={"%"}
                        color="green"
                        description="Click-Through Rate"
                        animation={loadGraph}
                        delay={0.2}
                        timeout={800}
                    />


                    <CardPerformance
                        icon={<FaChartPie />}
                        title={2.3}
                        extension={"%"}
                        color="green"
                        description="Conversion Rate"
                        animation={loadGraph}
                        delay={0.2}
                        timeout={800}
                    />
                </MOTION.div>

                <div className="creative-analysis-grid">

                    <MOTION.div className="progress-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.6 }}
                    >
                        <div>
                            <div className="label-card-progress" style={{ marginBottom: '10px' }}>
                                <label>Performance Score</label>
                                <h3>{displayValue}</h3>
                            </div>
                            <progress className="progress-bar" value={displayValue} max={100}>
                                {displayValue}%
                            </progress>
                            <p>
                                Your creative is performing better than
                                {` ${displayValue}% `}of ads in your industry
                            </p>
                        </div>
                    </MOTION.div>

                    <MOTION.div className="progress-group "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.6 }}
                    >

                        <div className="label-card-progress"
                            style={{ marginBottom: '10px' }}
                        >
                            <label>Industry Benchmark</label>
                        </div>
                        <div>

                            <ProgressBar
                                label="Your Score"
                                value={87}
                                max={100}
                                animation={loadGraph}
                                timeout={1500}
                            />
                        </div>
                        <div>
                            <ProgressBar
                                label="Industry Average"
                                value={60}
                                max={100}
                                animation={loadGraph}
                                timeout={1500}
                            />
                        </div>
                    </MOTION.div>

                    <MOTION.div className="progress-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4, duration: 0.6 }}
                    >

                        <div className="label-card-progress"
                            style={{ marginBottom: '10px' }}
                        >
                            <label>Creative Elements Analysis</label>
                        </div>
                        {creativeElements.map((item, index) => (
                            <div key={index}>
                                <ProgressBar
                                    label={item.label}
                                    value={item.value}
                                    max={100}
                                    complement="%"
                                    animation={loadGraph}
                                    timeout={4000}
                                />
                            </div>
                        ))}
                    </MOTION.div>

                    <MOTION.div className="progress-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4, duration: 1 }}
                    >
                        <Card
                            elevation={0}
                            className="card"
                            sx={{
                                width: "100%",
                                height: "max-content",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                backgroundColor: "transparent !important",
                                alignItems: "center",

                                border: 'none !important',
                                borderRadius: "0 !important",
                            }}
                        >
                            <div className="label-card-progress">
                                <label
                                    style={{
                                        color: 'Black',
                                    }}
                                >Creative Elements Graphic</label>
                            </div>
                            <CardContent
                                sx={{ padding: '0 !important' }}
                            >
                                <PieChart
                                    series={[
                                        {
                                            data: creativeElementsData,
                                            innerRadius: 50,
                                            outerRadius: 100,
                                            paddingAngle: 5,
                                            cornerRadius: 6,
                                        },
                                    ]}
                                    height={230}
                                />
                            </CardContent>
                        </Card>
                    </MOTION.div>
                </div>

                <MOTION.div className="progress-group exit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 5.5, duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Card
                        elevation={0}
                        className="card card2"
                        sx={{
                            width: "100%",
                            height: "max-content",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            /* padding: 1.5rem; */
                            /* margin-bottom: 2rem; */
                            border: 'none !important',
                            padding: '1.5rem !important',
                        }}
                    >
                        <CardContent
                            sx={{ padding: '0 !important' }}
                        >
                            <label className="label-card-progress">
                                Performance Over Time
                            </label>

                            <LineChart
                                height={300}
                                width={760}
                                xAxis={[{ data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], scaleType: "point" }]}
                                series={[
                                    {
                                        area: true,
                                        data: [60, 72, 75, 80, 85, 87],
                                        color: "#f655557a",
                                    },
                                ]}

                                margin={{ left: -20, right: 20, top: 20, bottom: 20 }}
                                grid={{ vertical: true, horizontal: true }}
                                axisVisibility={{ x: false, y: false }}
                            />

                            {/* Legenda estilizada */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    flexWrap: "wrap",
                                    gap: "12px",
                                    width: "100%",
                                    marginTop: "20px",
                                }}
                            >
                                {performanceTimelineData.map(({ month, value }, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            background: "var(--verylightred)",
                                            padding: "10px 14px",
                                            borderRadius: "10px",
                                            textAlign: "center",
                                            minWidth: "80px",
                                            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "block",
                                                fontSize: "13px",
                                                color: "var(--darkred)",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {month}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: 600,
                                                color: "var(--red)",
                                            }}
                                        >
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </MOTION.div>

                <MOTION.div className="analysis-summary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 6, duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3>Analysis Summary</h3>
                    <ul className="gray-background">
                        <MOTION.li
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 6.2, duration: .6 }}
                            viewport={{ once: true }}
                        >
                            <IoCheckmarkCircleSharp className="icon-success" />
                            <span>Strong visual hierarchy and composition that captures attention effectively</span>
                        </MOTION.li>
                        <MOTION.li
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 6.4, duration: .6 }}
                            viewport={{ once: true }}
                        >
                            <IoCheckmarkCircleSharp className="icon-success" />
                            <span>Brand elements are well integrated and consistently presented</span>
                        </MOTION.li>
                        <MOTION.li
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 6.8, duration: .6 }}
                            viewport={{ once: true }}
                        >
                            <IoIosInformationCircle className="icon-info" />
                            <span>Consider strengthening the call-to-action for better conversion potential</span>
                        </MOTION.li>
                    </ul>
                </MOTION.div>
            </MOTION.div >
        </>
    );
}
