'use client';
import { useEffect, useState } from "react";
import { LuPhoneCall, LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import Image from "next/image";

// Icon & label per interaction type
const typeConfig = {
  Call: {
    icon: <LuPhoneCall className="w-7 h-7 text-gray-600" />,
    label: "Call",
  },
  Text: {
    icon: <MdOutlineTextsms className="w-7 h-7 text-gray-600" />,
    label: "Text",
  },
  Video: {
    icon: (picture) =>
      picture ? (
        <Image src={picture} alt="friend" width={40} height={40} className="rounded-md object-cover" />
      ) : (
        <LuVideo className="w-7 h-7 text-gray-600" />
      ),
    label: "Video",
  },
};

// Format date like "Wed Apr 15 2026"
const formatDate = (isoString) => {
  const d = new Date(isoString);
  return d.toDateString(); // e.g. "Wed Apr 16 2026"
};

const FILTER_OPTIONS = ["Filter timeline", "Text", "Call", "Video"];

const TimelinePage = () => {
  const [entries, setEntries] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("timeline") || "[]");
    }
    return [];
  });
  const [filter, setFilter] = useState("Filter timeline");

  const filtered =
    filter === "Filter timeline"
      ? entries
      : entries.filter((e) => e.type === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-[#1F2937] mb-6">Timeline</h1>

      {/* Filter dropdown */}
      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#244D3F] w-52"
        >
          {FILTER_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Timeline list */}
      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-20">No interactions logged yet.</p>
      ) : (
        <div className="space-y-3">
          {filtered.map((entry) => {
            const config = typeConfig[entry.type];
            const icon =
              entry.type === "Video"
                ? config.icon(entry.friendPicture)
                : config.icon;

            return (
              <div
                key={entry.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4 flex items-center gap-5"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  {icon}
                </div>

                {/* Text */}
                <div>
                  <p className="text-[#1F2937] font-medium">
                    <span className="font-bold">{entry.type}</span>{" "}
                    <span className="text-gray-500">with {entry.friendName}</span>
                  </p>
                  <p className="text-sm text-gray-400">{formatDate(entry.date)}</p>
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