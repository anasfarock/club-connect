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
    <div className="flex flex-1 gap-3 rounded-lg border border-border-light bg-white p-4 flex-col">
      <div className="icon-base">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-neutral-900 text-base font-bold leading-tight">
          {title}
        </h2>
        <p className="text-text-secondary text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};