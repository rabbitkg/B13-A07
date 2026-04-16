'use client';

import { useContext } from "react";
import { cardButtonsContext } from "../../context/cardContext";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const StatsPage = () => {
  const { timelineData } = useContext(cardButtonsContext);

  // ✅ Count data
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

  // ✅ Convert to chart data
  const data = [
    { name: "Call", value: counts.call, fill: "#244D3F" },
    { name: "Text", value: counts.text, fill: "#7C3AED" },
    { name: "Video", value: counts.video, fill: "#22C55E" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-5xl font-bold text-[#1F2937] mb-6">
          Friendship Analytics
        </h2>

        {/* Chart Card */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-xl text-gray-600 mb-4">
            By Interaction Type
          </p>

          {timelineData.length === 0 ? (
            <p className="text-gray-500">No data available</p>
          ) : (
            <div className="flex justify-center items-center">
              <PieChart width={300} height={300}>
                
                <Pie
                  data={data}
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  cornerRadius={10}
                />

                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default StatsPage;