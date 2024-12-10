"use client";

import { useEffect, useRef } from 'react';
import { Bike, Download } from 'lucide-react';
import gsap from 'gsap';

export default function DeliveryRegistration() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.delivery-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 delivery-content">
            <Bike className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Deliver with Chowex</h1>
            <p className="text-xl text-gray-600">Be your own boss and earn money on your schedule</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 delivery-content">
            <h2 className="text-2xl font-semibold mb-6">Download Our Delivery App</h2>
            <p className="text-gray-600 mb-8">
              Start earning by downloading our delivery app. Accept orders, make deliveries, 
              and track your earnings all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://play.google.com/store" 
                target="_blank"
                className="flex-1 bg-primary text-white px-6 py-4 rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Download className="mr-2" /> Get it on Google Play
              </a>
              <a 
                href="https://apps.apple.com/store" 
                target="_blank"
                className="flex-1 bg-[#2a2a2a] text-white px-6 py-4 rounded-lg flex items-center justify-center hover:bg-[#2a2a2a]/90 transition-colors"
              >
                <Download className="mr-2" /> Download on App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}