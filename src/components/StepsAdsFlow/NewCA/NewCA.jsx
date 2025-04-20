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
    { id: 1, value: 25, label: "Messaging", color: "var(--lightyellow)" },
    { id: 3, value: 25, label: "Engagement", color: "var(--darkyellow)" },
];

const creativeElements = [
    { label: "Visual Appeal", value: 28 },
    { label: "Messaging", value: 45 },
    { label: "Call-to-Action", value: 45 },
    { label: "Engagement", value: 58 },
];

export default function CreativeAnalysis() {
    return (
        <>
            <h1 className="creative-analysis-title">Creative Analysis</h1>
            <MOTION.div
                className="creative-analysis-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >

                <div className="cards-performance-group">

                    <CardPerformance
                        icon={<IoTimeOutline />}
                        title="12.4s"
                        color="green"
                        description="Average View Time"
                    />

                    <CardPerformance
                        icon={<LuMousePointerClick />}
                        title="4.8%"
                        color="green"
                        description="Click-Through Rate"
                    />


                    <CardPerformance
                        icon={<FaChartPie />}
                        title="2.3%"
                        color="green"
                        description="Conversion Rate"
                    />
                </div>

                <div className="creative-analysis-grid">

                    <div className="progress-group ">

                        <div>
                            <div className="label-card-progress"
                                style={{ marginBottom: '10px' }}
                            >
                                <label>Performance Score</label>
                                <h3>87</h3>
                            </div>
                            <progress className="progress-bar" value={87} max={100}>{87}%</progress>
                            <p>
                                Your creative is performing better than
                                87% of ads in your industry
                            </p>
                        </div>
                    </div>

                    <div className="progress-group ">

                        <div className="label-card-progress"
                            style={{ marginBottom: '10px' }}
                        >
                            <label>Industry Benchmark</label>
                        </div>
                        <div>

                            <ProgressBar label="Your Score" value={87} max={100} />
                        </div>
                        <div>
                            <ProgressBar label="Industry Average" value={60} max={100} />
                        </div>
                    </div>
                    <div className="progress-group" >

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
                                />
                            </div>
                        ))}
                    </div>

                    <div className="progress-group">
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
                                    height={250}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="progress-group exit">
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
                </div>

                <div className="analysis-summary">
                    <h3>Analysis Summary</h3>
                    <ul>
                        <li>
                            <IoCheckmarkCircleSharp className="icon-success" />
                            <span>Strong visual hierarchy and composition that captures attention effectively</span>
                        </li>
                        <li>
                            <IoCheckmarkCircleSharp className="icon-success" />
                            <span>Brand elements are well integrated and consistently presented</span>
                        </li>
                        <li>
                            <IoIosInformationCircle className="icon-info" />
                            <span>Consider strengthening the call-to-action for better conversion potential</span>
                        </li>
                    </ul>
                </div>
            </MOTION.div >
        </>
    );
}
