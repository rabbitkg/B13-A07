'use client';

import { useContext } from "react";
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

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Timeline</h2>

      {timelineData.length === 0 ? (
        <p className="text-gray-500">No activity yet.</p>
      ) : (
        <div className="space-y-4">
          {timelineData.map((item) => {
            const Icon = iconMap[item.type];

            return (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4"
              >
                <Icon className="w-6 h-6 text-[#244D3F]" />

                <div>
                  <p className="font-semibold">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)} with {item.name}
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
  );
};

export default TimelinePage;