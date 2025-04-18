import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, BarChart, PieChart } from "@mui/x-charts";
import { FaArrowTrendUp, FaChartPie, FaRegLightbulb } from "react-icons/fa6";
import { motion as MOTION } from "framer-motion";
import "../../../index.css";
import "./creativeanalysis.css"; // CSS base para layout


const creativeElementsData = [
    { id: 0, value: 30, label: "Visual Appeal", color: "#3b82f6" },
    { id: 1, value: 25, label: "Messaging", color: "#facc15" },
    { id: 2, value: 20, label: "Call-to-Action", color: "#ef4444" },
    { id: 3, value: 25, label: "Engagement", color: "#10b981" },
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
                {/* Performance Score */}
                <Card className="card"
                    sx={{
                        height: "max-content",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}

                >
                    <CardContent>
                        <Typography className="section-title">
                            <FaArrowTrendUp className="icon blue" />
                            <h3>Performance Score</h3>
                        </Typography>
                        <BarChart
                            height={100}
                            width={460}
                            yAxis={[{
                                data: ["87%"],
                                scaleType: "band",
                                axisLine: false,
                                tickSize: 0,
                            }]}
                            xAxis={[{
                                tickLabelStyle: { display: "none" },
                                axisLine: false,
                                tickSize: 0
                            }]}
                            series={[{ data: [87], color: "var(--blue)"  }]}
                            layout="horizontal"
                        />
                        <p className="section-subtitle-description">
                            Your creative is performing better than 87% of ads in your industry.
                        </p>
                    </CardContent>
                </Card>

                <Card className="card">
                    <CardContent>
                        <Typography className="section-title">
                            <FaChartPie className="icon red" /> Industry Benchmark
                        </Typography>
                        <BarChart
                            height={250}
                            xAxis={[{ data: ["You", "Industry Avg"], scaleType: "band" }]}
                            series={[{ data: [85, 72], color: "var(--red)", label: "Score" }]}
                        />
                    </CardContent>
                </Card>

                {/* Audience Insights */}
                <Card className="card">
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
                <Card className="card">
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
            </div>

            {/* Summary */}
            <Card className="card gray-bg">
                <CardContent className="summary">
                    <Typography className="section-title">Analysis Summary</Typography>
                    <Typography>
                        Your recent creatives are outperforming industry benchmarks with strong engagement in
                        visual appeal and call-to-action elements. Consider optimizing messaging to further
                        enhance conversion rates. Keep iterating based on top-performing patterns.
                    </Typography>
                </CardContent>
            </Card>
        </MOTION.div>
    );
}
