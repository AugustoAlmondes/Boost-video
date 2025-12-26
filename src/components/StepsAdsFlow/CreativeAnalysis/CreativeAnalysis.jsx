import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, BarChart, PieChart } from "@mui/x-charts";
import { FaArrowTrendUp, FaChartPie, FaRegLightbulb } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { motion as MOTION } from "framer-motion";
import { LuMousePointerClick } from "react-icons/lu";
import "../../../index.css";
import "./creativeanalysis.css"; // CSS base para layout
import CardPerformance from "../../CardPerformance/CardPerformance";


const creativeElementsData = [
    { id: 0, value: 30, label: "Visual Appeal", color: "var(--yellow)" },
    { id: 2, value: 20, label: "Call-to-Action", color: "var(--meanyellow)" },
    { id: 1, value: 25, label: "Messaging", color: "var(--lightyellow)" },
    { id: 3, value: 25, label: "Engagement", color: "var(--darkyellow)" },
];

export default function CreativeAnalysis() {
    return (
        <MOTION.div
            className="creative-analysis-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="creative-analysis-title">Creative Analysis</h1>


            <div className="creative-analysis-grid">

                <div className="cards-performance-stats">

                    <CardPerformance
                        icon={<IoTimeOutline />}
                        title="12.4s"
                        color="yellow"
                        description="Average View Time"
                    />

                    <CardPerformance
                        icon={<LuMousePointerClick />}
                        title="4.8%"
                        color="blue"
                        description="Click-Through Rate"
                    />


                    <CardPerformance
                        icon={<FaChartPie />}
                        title="2.3%"
                        color="green"
                        description="Conversion Rate"
                    />
                </div>

                {/* Performance Score */}
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
                        // background: "linear-gradient(to right, var(--lightblue), var(--blue))",
                    }}
                >
                    <CardContent>
                        <Typography className="section-title">
                            <FaArrowTrendUp className="icon white" />
                            <h3>Performance Score</h3>
                        </Typography>
                        <LineChart
                            height={200}
                            width={560}
                            xAxis={[{ data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], scaleType: "point" }]}
                            series={[
                                {
                                    data: [60, 72, 75, 80, 85, 87],
                                    color: "var(--blue)",
                                },
                            ]}
                            margin={{ left: -20, right: 20, top: 20, bottom: 20 }}
                            grid={{ vertical: false }}
                            axisVisibility={{ x: false, y: false }}
                        />
                        <p className="section-subtitle-description">
                            Your creative is performing better than 87% of video in your industry.
                        </p>
                    </CardContent>
                </Card>

                <Card
                    elevation={0}
                    className="card card3"
                    sx={{
                        width: "100%",
                        height: "max-content",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        // background: "linear-gradient(to right, var(--lightblue), var(--blue))",
                    }}
                >
                    <CardContent>
                        <Typography className="section-title">
                            <FaRegLightbulb className="icon green" /> Audience Insights: Engagement vs. Age Group
                        </Typography>
                        <BarChart
                            height={250}
                            xAxis={[{ data: ["18-24", "25-34", "35-44", "45-54", "55+"], scaleType: "band" }]}
                            series={[{ data: [80, 70, 65, 55, 45], color: "#10b981", label: "Engagement" }]}
                        />
                    </CardContent>
                </Card>

                {/* Creative Elements Pie */}
                <Card
                    elevation={0}
                    className="card card4"
                    sx={{
                        width: "100%",
                        height: "max-content",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        // background: "linear-gradient(to right, var(--lightblue), var(--blue))",
                    }}
                >
                    <CardContent>
                        <Typography className="section-title">
                            <FaRegLightbulb className="icon yellow" /> Creative Elements Analysis
                        </Typography>
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


                <div className="progress-group card5">

                    <div>
                        <h3>Visual Appeal</h3>
                        <progress className="progress-bar" value={40} max={100}>{40}%</progress>
                    </div>

                    <div>

                        <h3>Engagement</h3>
                        <progress className="progress-bar" value={50} max={100}>{50}%</progress>
                    </div>

                    <div>
                        <h3>Quality</h3>
                        <progress className="progress-bar" value={30} max={100}>{30}%</progress>
                    </div>
                </div>
            </div>

            {/* Summary */}
        </MOTION.div >
    );
}
