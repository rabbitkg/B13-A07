'use client';

import { useContext, useState } from "react";
import { cardButtonsContext } from "../../context/cardContext";
import { LuPhoneCall, LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";

const iconMap = {
  call: LuPhoneCall,
  text: MdOutlineTextsms,
  video: LuVideo,
};

const TimelinePage = () => {
  const { timelineData } = useContext(cardButtonsContext);
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

  return (
    <div className="bg-gray-100 px-6 py-10">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Timeline</h2>

        <select
          className="border rounded-md px-4 py-2 mb-6 bg-white shadow-sm"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Filter timeline</option>
          <option value="text">Text</option>
          <option value="call">Call</option>
          <option value="video">Video</option>
        </select>

        {filteredData.length === 0 ? (
          <p className="text-gray-500 text-center">No Activity/Data Found.</p>
        ) : (
          <div className="space-y-3">
            {filteredData.map((item) => {
              if (!item.type) return null;

              const Icon = iconMap[item.type];

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition"
                >

                  <div className="bg-gray-100 p-3 rounded-full">
                    {Icon && (
                      <Icon className="w-5 h-5 text-[#244D3F]" />
                    )}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      {item.type.charAt(0).toUpperCase() +
                        item.type.slice(1)}{" "}
                      with {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {new Date(item.timestamp).toDateString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;