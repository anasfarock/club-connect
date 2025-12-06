import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondaryButton } from '../buttons/SecondaryButton';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  backgroundImage,
}) => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${backgroundImage}")`,
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight @[480px]:text-5xl">
              {title}
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">
              {subtitle}
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <PrimaryButton size="lg">{primaryButtonText}</PrimaryButton>
            <SecondaryButton size="lg">{secondaryButtonText}</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};