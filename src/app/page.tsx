'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturesSection } from '@/components/features/FeaturesSection';
import { UsersIcon, CalendarIcon, TicketIcon } from '@/components/icons/FeatureIcons';

const FEATURES = [
  {
    id: 'club-management',
    icon: <UsersIcon />,
    title: 'Club Management',
    description: 'Manage club memberships, communications, and resources efficiently.',
  },
  {
    id: 'event-organization',
    icon: <CalendarIcon />,
    title: 'Event Organization',
    description: 'Plan and promote events with ease, from scheduling to logistics.',
  },
  {
    id: 'qr-ticketing',
    icon: <TicketIcon />,
    title: 'QR Ticketing',
    description: 'Generate and manage QR tickets for secure and hassle-free event access.',
  },
];

export default function Home() {
  return (
    <MainLayout>
      <HeroSection
        title="Connect, Engage, and Thrive with CampusConnect"
        subtitle="CampusConnect is the all-in-one platform for university club management, event organization, and seamless QR ticketing. Empower your student community and enhance campus life."
        primaryButtonText="Join as Student"
        secondaryButtonText="Explore Features"
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAiY02Btu-k09vwgNhZxT7SnDU9XKWRSP_pHeY0QPW4XJtWc-3IEoehlz4MZVc4mlPVfTIhwhrCUNkl7uCafq5UGZwKVBmgfJL7oeafk8rpu6fER1OZioq4Uj6RwY1M2SLdL2RizAWGPzlN402DNrm7OqBUQZhrV6KDmNfND7sTqvrvrppoLGn2eB-ugx71L4if4ALuv_e_EOsM0omANQciwEzmrMKNJk3hFvDnvyA8cOwLXHLFJCyc2KHNvxJaICX-0ssuJTV9My0"
      />
      
      <FeaturesSection
        heading="Key Features"
        subheading="CampusConnect offers a comprehensive suite of tools to streamline club operations, event planning, and ticketing."
        features={FEATURES}
      />
    </MainLayout>
  );
}