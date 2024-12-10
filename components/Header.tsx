"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Chowex
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/stores" className="text-gray-600 hover:text-primary">
              Restaurants
            </Link>
            <a 
              href="https://play.google.com/store" 
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >
              Become a Partner
            </a>
            <a 
              href="https://apps.apple.com/store" 
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >
              Drive with Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/stores" 
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Restaurants
              </Link>
              <a 
                href="https://play.google.com/store" 
                target="_blank"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Partner
              </a>
              <a 
                href="https://apps.apple.com/store" 
                target="_blank"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Drive with Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}