import { FeatureCard } from './FeatureCard';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  heading: string;
  subheading: string;
  features: Feature[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  heading,
  subheading,
  features,
}) => {
  return (
    <div className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-4">
        <h1 className="section-heading @[480px]:text-4xl">
          {heading}
        </h1>
        <p className="section-subheading max-w-[720px]">
          {subheading}
        </p>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};