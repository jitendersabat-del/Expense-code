import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-white border-t border-primary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <span className="font-display text-2xl font-bold text-primary tracking-tight">
              Art of <span className="text-primary-dark">Indulgence</span>
            </span>
            <p className="text-gray-600 text-sm leading-relaxed">
              Experience the world's most famous food trends right here in Bangalore. We're dedicated to bringing you premium, Instagram-worthy treats that taste even better than they look.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><a href="/menu" className="text-gray-600 hover:text-primary transition-colors text-sm">Full Menu</a></li>
              <li><a href="/viral-food" className="text-gray-600 hover:text-primary transition-colors text-sm">Viral Food Lab</a></li>
              <li><a href="/loyalty" className="text-gray-600 hover:text-primary transition-colors text-sm">Loyalty Program</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-primary transition-colors text-sm">Our Story</a></li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Cafe Hours</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex justify-between"><span>Mon - Thu:</span> <span className="font-medium text-gray-900">11:00 AM - 11:00 PM</span></li>
              <li className="flex justify-between"><span>Fri - Sun:</span> <span className="font-medium text-gray-900">11:00 AM - 12:00 AM</span></li>
              <li className="pt-4 font-bold text-primary-dark uppercase text-xs tracking-tighter">Live Lab Updates on WhatsApp</li>
            </ul>
          </div>

          {/* Directions */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Find Us</h3>
            <p className="text-gray-600 text-sm mb-4">
              Main Road, Kengeri,<br />
              Bangalore, KA 560060
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-bold text-sm hover:underline"
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Art of Indulgence Cafe. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
