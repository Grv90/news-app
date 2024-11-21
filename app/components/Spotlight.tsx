import React from "react";
import { MessageCircleQuestion } from "lucide-react";

const Spotlight = () => {
  const newsItems = [
    {
      source: "nzherald.co.nz",
      title: "Snack giant Arnott's acquires three New Zealand brands",
      author: "By Tom Raynel",
      timeAgo: "11 hours ago",
      hasImage: true,
    },
    {
      source: "New Zealand Herald",
      title:
        "Watch: 'I will do better' - National MP's 'wake-up call' after she's snapped texting...",
      timeAgo: "5 hours ago",
      hasImage: true,
    },
    {
      source: "New Zealand Herald",
      title:
        "Auckland pair face nearly 30 charges after string of violent retail thefts",
      timeAgo: "6 hours ago",
      hasGallery: true,
    },
  ];

  return (
    <aside className="bg-white rounded-[20px] p-4 sm:p-6 shadow-lg max-w-full lg:max-w-sm h-auto lg:h-screen mt-4 lg:mt-0">
      {/* Section Header */}
      <div className="flex justify-between border-b border-gray-300 pb-4 items-center mb-6">
        <h2 className="text-[#5534da] text-lg sm:text-xl">Picks for you</h2>
        <MessageCircleQuestion className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* News Items */}
      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 border-b border-gray-300 pb-4 mb-4"
          >
            {/* Text Content */}
            <div className="flex-1">
              {item.source !== "nzherald.co.nz" && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif font-bold">H</span>
                  <span className="text-xs sm:text-sm text-gray-700">
                    New Zealand Herald
                  </span>
                </div>
              )}
              {item.source === "nzherald.co.nz" && (
                <div className="font-serif text-xs sm:text-sm mb-1">
                  nzherald.co.nz
                </div>
              )}
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base leading-snug">
                {item.title}
              </h3>
              <div className="text-xs sm:text-sm text-gray-500">
                {item.author && <span>{item.author} • </span>}
                {item.timeAgo}
              </div>
            </div>

            {/* Image */}
            {item.hasImage && (
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Spotlight;
