export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FeaturesSectionProps {
  heading: string;
  subheading: string;
  features: Feature[];
}