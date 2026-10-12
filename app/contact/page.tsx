import type { Metadata } from 'next';
import ContactClient from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact TotoAfya',
  description: 'Contact the TotoAfya team to discuss the platform, a demonstration or your care setting.',
};

export default function ContactPage() {
  return <ContactClient />;
}
