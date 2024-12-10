import { MapPin, Star, Clock, DollarSign } from 'lucide-react';
import type { Store } from '@/lib/api';
import Image from 'next/image';

interface StoreCardProps {
  store: Store;
}

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <div className="store-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48">
        <Image
          src={store.cover_photo}
          alt={store.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {store.logo && (
          <div className="absolute -bottom-6 left-6">
            <Image
              src={store.logo}
              alt={`${store.name} logo`}
              width={64}
              height={64}
              className="rounded-full border-4 border-white"
            />
          </div>
        )}
      </div>
      <div className="p-6 pt-8">
        <h2 className="text-xl font-semibold mb-2">{store.name}</h2>
        <p className="text-gray-600 mb-2">{store.cuisine_type}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{store.address}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">Delivery: {store.delivery_time}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <DollarSign className="h-4 w-4 mr-2" />
            <span className="text-sm">Min. Order: ${store.minimum_order}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-1" />
            <span className="font-semibold">{store.rating.average}</span>
            <span className="text-gray-500 text-sm ml-1">({store.rating.total_reviews} reviews)</span>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}