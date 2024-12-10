"use client";

import { ArrowRight, UtensilsCrossed, Store, Bike, Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-primary to-[#2a2a2a] text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Food delivery in minutes</h1>
            <p className="text-xl mb-8">Get your favorite meals delivered from the best restaurants in your area</p>
            <Link 
              href="/stores"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold inline-flex items-center hover:bg-gray-100 transition-colors"
            >
              Order Now <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        <div 
          className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80')",
            maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))"
          }}
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Chowex?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <UtensilsCrossed className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">Choose from thousands of restaurants and cuisines</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Bike className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered in minutes</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Store className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Best Restaurants</h3>
              <p className="text-gray-600">Partner with top-rated local restaurants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Join Chowex</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Restaurant Owners</h3>
              <p className="mb-6">Grow your business and reach new customers by partnering with us</p>
              <a 
                href="https://play.google.com/store" 
                target="_blank" 
                className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                <Download className="mr-2" /> Get Started
              </a>
            </div>
            <div className="bg-[#2a2a2a] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Delivery Partners</h3>
              <p className="mb-6">Join our network of delivery partners and earn money on your own schedule</p>
              <a 
                href="https://apps.apple.com/store" 
                target="_blank" 
                className="inline-flex items-center bg-white text-[#2a2a2a] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                <Download className="mr-2" /> Join Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}