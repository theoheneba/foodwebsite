import { Metadata } from 'next';
import StoreList from '@/components/stores/StoreList';
import { getStores, getPopularStores } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Restaurants | Chowex Food Delivery',
  description: 'Find and order from the best restaurants in your area with Chowex',
  openGraph: {
    title: 'Restaurants | Chowex Food Delivery',
    description: 'Find and order from the best restaurants in your area with Chowex',
    type: 'website',
  },
};

export default async function StoresPage() {
  const [allStores, popularStores] = await Promise.all([
    getStores(),
    getPopularStores(),
  ]);

  return (
    <main className="py-12">
      {popularStores.length > 0 && (
        <section className="mb-16">
          <StoreList 
            title="Popular Restaurants"
            subtitle="Most loved places by our customers"
            stores={popularStores} 
          />
        </section>
      )}

      <section>
        <StoreList 
          title="All Restaurants"
          subtitle="Discover great places to eat"
          stores={allStores} 
        />
      </section>
    </main>
  );
}