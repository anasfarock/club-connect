import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col hover:shadow-md hover:border-[#1380ec] transition-all">
      <div className="text-[#111418] w-6 h-6">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[#111418] text-base font-bold leading-tight">
          {title}
        </h2>
        <p className="text-[#617589] text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};