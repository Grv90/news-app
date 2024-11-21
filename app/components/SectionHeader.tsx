import React from "react";

interface SectionHeaderProps {
  heading: string;
  subtitle: string;
}

const SectionHeader = ({ heading, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold text-[#5534da]">{heading}</h1>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
