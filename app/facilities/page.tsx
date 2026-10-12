import type { Metadata } from 'next';
import InfoLanding from '@/components/marketing/InfoLanding';

export const metadata: Metadata = {
  title: 'For Healthcare Facilities',
  description: 'Explore TotoAfya maternal and child health records and care workflows for healthcare facilities in Kenya.',
};

export default function FacilitiesPage() {
  return (
    <InfoLanding
      eyebrow="For healthcare facilities"
      title="Better connected records. More room for care."
      description="TotoAfya brings maternal and child health workflows together to support care teams with patient records, antenatal visits, immunisation and growth monitoring."
      image="/facility_pc_realistic.jpg"
      imageAlt="A view of TotoAfya’s facility experience"
      points={[
        'Keep maternal and child records together.',
        'Support antenatal, immunisation and growth workflows.',
        'Designed to support care teams when connectivity is unreliable.',
      ]}
      linkHref="/contact"
      linkLabel="Request a demo"
    />
  );
}
