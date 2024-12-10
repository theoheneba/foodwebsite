"use client";

import { useEffect, useRef } from 'react';
import { Store as StoreIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Store } from '@/lib/api';
import StoreCard from './StoreCard';

gsap.registerPlugin(ScrollTrigger);

interface StoreListProps {
  stores: Store[];
  title: string;
  subtitle?: string;
}

export default function StoreList({ stores, title, subtitle }: StoreListProps) {
  const storesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.store-card', {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: storesRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      });
    }, storesRef);

    return () => ctx.revert();
  }, []);

  if (!stores.length) {
    return null;
  }

  return (
    <div className="container mx-auto px-4" ref={storesRef}>
      <div className="text-center mb-12">
        <StoreIcon className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}