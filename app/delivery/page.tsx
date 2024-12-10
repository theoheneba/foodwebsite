import { Metadata } from 'next';
import DeliveryRegistration from '@/components/delivery/DeliveryRegistration';

export const metadata: Metadata = {
  title: 'Become a Delivery Partner | Chowex Food Delivery',
  description: 'Join Chowex as a delivery partner and earn money on your schedule',
  openGraph: {
    title: 'Become a Delivery Partner | Chowex Food Delivery',
    description: 'Join Chowex as a delivery partner and earn money on your schedule',
    type: 'website',
  },
};

export default function DeliveryPage() {
  return <DeliveryRegistration />;
}