import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsState] = useState(false);
  const cartItemCount = 0; // This would typically come from a cart context

  return (
    <nav className="sticky top-0 z-50 bg-secondary-white shadow-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-display text-2xl font-bold text-primary tracking-tight">
              Art of <span className="text-primary-dark">Indulgence</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">Home</a>
            <a href="/menu" className="text-gray-700 hover:text-primary transition-colors font-medium">Menu</a>
            <a href="/viral-food" className="text-gray-700 hover:text-primary transition-colors font-medium">Viral Food Lab</a>
            <a href="/loyalty" className="text-gray-700 hover:text-primary transition-colors font-medium">Loyalty</a>
            
            {/* Cart Icon */}
            <div className="relative cursor-pointer p-2 hover:bg-secondary-mint rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 11h14l1 12H4l1-12z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary-dark rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>
            
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold transition-all shadow-md active:scale-95">
              Order Online
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsState(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-secondary-mint focus:outline-none transition-all"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-secondary-white border-b border-primary/10 shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-secondary-mint">Home</a>
          <a href="/menu" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-secondary-mint">Menu</a>
          <a href="/viral-food" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-secondary-mint">Viral Food Lab</a>
          <a href="/loyalty" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-secondary-mint">Loyalty</a>
          <button className="w-full mt-2 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-md">
            Order Online
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
