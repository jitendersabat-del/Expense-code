import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-secondary-white py-16 sm:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-secondary-mint/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Content Column */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h2 className="text-primary-dark font-bold tracking-wide uppercase text-sm mb-3 animate-fade-in">
              The Taste of Internet Fame
            </h2>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-display leading-tight">
              Bringing the World's <span className="text-primary">Viral Food Trends</span> to Bangalore
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl max-w-3xl">
              From London's Viral Strawberry Chocolate to Dubai's decadent Mini Donuts. Experience the flavors that took the world by storm, crafted fresh in the heart of Kengeri.
            </p>
            
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <button className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-primary hover:bg-primary-dark shadow-xl transition-all active:scale-95 md:text-lg">
                Order Online
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-primary text-base font-bold rounded-full text-primary bg-transparent hover:bg-secondary-mint transition-all active:scale-95 md:text-lg">
                Explore Menu
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 sm:justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-secondary-beige overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Join <span className="font-bold text-gray-900">500+</span> dessert lovers this week</p>
            </div>
          </div>

          {/* Showcase Grid Column */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/strawberry-chocolate.png" alt="Viral Strawberry Chocolate" className="w-full h-auto object-cover aspect-[4/5]" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/dubai-mini-donuts.png" alt="Dubai Mini Donuts" className="w-full h-auto object-cover aspect-square" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/japanese-french-toast.png" alt="Japanese French Toast" className="w-full h-auto object-cover aspect-square" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/kunafa.png" alt="Kunafa" className="w-full h-auto object-cover aspect-[4/5]" />
                </div>
              </div>
            </div>
            
            {/* Playful Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-secondary-cream p-4 rounded-2xl shadow-xl border border-primary/20 rotate-3 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-dark uppercase tracking-tighter">Viral Lab Alert</p>
                  <p className="text-sm font-extrabold text-gray-900">New: Kunafa Donuts!</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
