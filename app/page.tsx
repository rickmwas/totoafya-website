import type { Metadata } from 'next';
import HomeExperience from '@/components/home/HomeExperience';

export const metadata: Metadata = {
  title: 'TotoAfya — Every step of motherhood, connected',
  description:
    'A connected maternal, newborn and child healthcare platform supporting pregnancy, clinic visits, immunisation and early childhood care in Kenya.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return <HomeExperience />;
}
