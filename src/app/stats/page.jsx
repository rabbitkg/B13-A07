'use client';

import { useContext } from "react";
import { cardButtonsContext } from "../../context/cardContext";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const StatsPage = () => {
    const { timelineData } = useContext(cardButtonsContext);

    const counts = {
        call: 0,
        text: 0,
        video: 0,
    };

    timelineData.forEach((item) => {
        if (counts[item.type] !== undefined) {
            counts[item.type]++;
        }
    });

    const data = [
        { name: "Call", value: counts.call, fill: "#244D3F" },
        { name: "Text", value: counts.text, fill: "#7C3AED" },
        { name: "Video", value: counts.video, fill: "#22C55E" },
    ];

    return (
        <div className="bg-gray-100 px-6 py-10">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] tracking-tight mb-6 md:mb-8">
                    Friendship Analytics
                </h2>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <p className="text-xl text-[#244D3F] mb-4 font-semibold">
                        By Interaction Type
                    </p>

                    {timelineData.length === 0 ? (
                        <p className="text-gray-500 text-center">No data available</p>
                    ) : (
                        <div className="flex justify-center items-center">
                            <PieChart width={500} height={500}>

                                <Pie
                                    data={data}
                                    innerRadius={130}
                                    outerRadius={180}
                                    paddingAngle={5}
                                    dataKey="value"
                                    cornerRadius={10}
                                />

                                <Tooltip />
                                <Legend verticalAlign="bottom"
                                    align="center"
                                    wrapperStyle={{
                                        paddingTop: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        width: "100%",
                                    }} />
                            </PieChart>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default StatsPage;