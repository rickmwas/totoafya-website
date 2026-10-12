import type { Metadata } from 'next';
import InfoLanding from '@/components/marketing/InfoLanding';

export const metadata: Metadata = {
  title: 'For Mothers and Families',
  description: 'Follow pregnancy, clinic visits and your child’s care journey with TotoAfya.',
};

export default function MothersPage() {
  return (
    <InfoLanding
      eyebrow="For mothers and families"
      title="Your pregnancy. Your baby’s care. One connected journey."
      description="TotoAfya helps keep pregnancy information, clinic visits and your child’s health journey together, from antenatal care through early childhood."
      image="/mama_photo.jpg"
      imageAlt="A mother and child sharing a moment together"
      points={[
        'Keep pregnancy and antenatal care information close.',
        'See upcoming clinic visits and care milestones.',
        'Follow your child’s immunisation and growth over time.',
      ]}
      linkHref="/product"
      linkLabel="Explore TotoAfya"
    />
  );
}
