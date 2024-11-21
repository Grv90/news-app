import React from "react";
import { ChevronRight, Newspaper } from "lucide-react";

const MainContent = () => {
  const newsItems = [
    {
      category: "Top stories",
      stories: [
        {
          source: {
            name: "The Guardian",
            icon: "G",
          },
          title:
            "Tens of thousands march on NZ parliament in protest against Māori treaty bill",
          time: "12 hours ago",
          author: "By Eva Corlett",
          isMainStory: true,
        },
        {
          source: {
            name: "Sky News",
            icon: "📺",
          },
          title:
            "42,000 march on New Zealand's parliament in support of Maori rights",
          time: "1 hour ago",
        },
        {
          source: {
            name: "The Associated Press",
            icon: "AP",
          },
          title:
            "New Zealand's founding treaty is at a flashpoint. Why are thousands protesting for Māori rights?",
          time: "2 hours ago",
          author: "By Charlotte Graham-McLay and Charlotte Graham",
          hasFullCoverage: true,
        },
      ],
    },
    {
      stories: [
        {
          source: {
            name: "New Zealand Herald",
            icon: "H",
          },
          title:
            "Pilot winched from water after 'ditching' aircraft in sea off Nelson coast",
          time: "1 hour ago",
          hasImage: true,
          relatedStories: [
            {
              source: {
                name: "Stuff",
                icon: "S",
              },
              title:
                "Light plane with singular occupant crash lands off Tasman coast",
              time: "23 hours ago",
              author: "By Ripu Bhatia",
            },
            {
              source: {
                name: "Newstalk ZB",
                icon: "N",
              },
              title:
                "Emergency services responding to unfolding aviation incident at Tasman Bay near Nelson",
              time: "2 hours ago",
            },
            {
              source: {
                name: "1News",
                icon: "1",
              },
              title: "Pilot rescued after light plane crashes off Tasman coast",
              time: "1 hour ago",
            },
          ],
          hasFullCoverage: true,
        },
      ],
    },
    {
      stories: [
        {
          source: {
            name: "RNZ",
            icon: "RNZ",
          },
          title:
            "Daily smoking rates flat-line, youth vaping keeps rising - NZ Health Survey",
          time: "6 hours ago",
          hasImage: true,
          hasFullCoverage: true,
        },
        {
          source: {
            name: "1News",
            icon: "1",
          },
          title:
            "Desert Rd stretch of SH1 to close for nearly two months in summer",
          time: "1 hour ago",
          hasImage: true,
          hasFullCoverage: true,
        },
      ],
    },
  ];

  return (
    <div className="max-w-full p-4 bg-white rounded-lg shadow-md sm:p-6 sm:max-w-3xl">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-blue-600 mb-4">
          <h2 className="text-[#5534da] text-lg sm:text-xl">Top stories</h2>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {/* News Sections */}
        {newsItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-6">
            {section.stories.map((story, storyIndex) => (
              <div
                key={storyIndex}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                {/* Main Story */}
                {"isMainStory" in story && story.isMainStory ? (
                  <div className="space-y-4">
                    <div className="w-full h-40 bg-gray-200 rounded-lg sm:h-64" />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold">{story.source.icon}</span>
                        <span className="text-sm text-gray-700">
                          {story.source.name}
                        </span>
                      </div>
                      <h3 className="text-base font-bold sm:text-xl mb-2">
                        {story.title}
                      </h3>
                      <div className="text-xs text-gray-500 sm:text-sm">
                        {story.time} {story.author && `• ${story.author}`}
                      </div>
                    </div>
                  </div>
                ) : "relatedStories" in story && story.relatedStories ? (
                  /* Related Stories Layout */
                  <div className="space-y-4">
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-serif font-bold">
                            {story.source.icon}
                          </span>
                          <span className="text-sm text-gray-700">
                            {story.source.name}
                          </span>
                        </div>
                        <h3 className="font-bold text-sm sm:text-base mb-2">
                          {story.title}
                        </h3>
                        <div className="text-xs text-gray-500 sm:text-sm">
                          {story.time}
                        </div>
                      </div>
                      {story.hasImage && (
                        <div className="w-full h-40 bg-gray-200 rounded-lg sm:w-72 sm:h-48 flex-shrink-0" />
                      )}
                    </div>
                    <div className="space-y-4 pl-4 border-l-2 border-gray-200">
                      {story.relatedStories.map((related, index) => (
                        <div key={index}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold">
                              {related.source.icon}
                            </span>
                            <span className="text-xs text-gray-700 sm:text-sm">
                              {related.source.name}
                            </span>
                          </div>
                          <h4 className="font-bold text-xs sm:text-sm mb-1">
                            {related.title}
                          </h4>
                          <div className="text-xs text-gray-500 sm:text-sm">
                            {related.time}{" "}
                            {related.author && `• ${related.author}`}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Default Story Layout */
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold">{story.source.icon}</span>
                        <span className="text-sm text-gray-700">
                          {story.source.name}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm sm:text-base mb-2">
                        {story.title}
                      </h3>
                      <div className="text-xs text-gray-500 sm:text-sm">
                        {story.time}{" "}
                        {"author" in story &&
                          story.author &&
                          `• ${story.author}`}
                      </div>
                    </div>
                    {"hasImage" in story && story.hasImage && (
                      <div className="w-full h-40 bg-gray-200 rounded-lg sm:w-16 sm:h-16 flex-shrink-0" />
                    )}
                  </div>
                )}
                {story.hasFullCoverage && (
                  <div className="mt-2 flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                    <Newspaper className="w-4 h-4" />
                    <span>Full coverage</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
