import { Metadata } from 'next';
import PartnerRegistration from '@/components/partner/PartnerRegistration';

export const metadata: Metadata = {
  title: 'Become a Partner | Chowex Food Delivery',
  description: 'Join Chowex as a restaurant partner and grow your business',
  openGraph: {
    title: 'Become a Partner | Chowex Food Delivery',
    description: 'Join Chowex as a restaurant partner and grow your business',
    type: 'website',
  },
};

export default function PartnerPage() {
  return <PartnerRegistration />;
}