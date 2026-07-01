import React, { useState, useEffect } from 'react';

const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentScript, setCurrentScript] = useState("");

  const scripts = [
    "Hungry for something viral? 🍓🍫 Need help picking between the Kunafa or the French Toast? Chat with us!",
    "Planning an aesthetic date or a group hangout? ☕✨ We'll help you secure the best spot. Message us!",
    "Psst... the Lab is brewing something new! 🧪✨ Want to be the first to know the next trend? Drop us a message!"
  ];

  useEffect(() => {
    // Pick a random script on mount
    const randomScript = scripts[Math.floor(Math.random() * scripts.length)];
    setCurrentScript(randomScript);

    // Show tooltip after a short delay
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Tooltip/Chat Bubble */}
      {showTooltip && (
        <div className="mb-4 mr-2 max-w-[280px] bg-white p-4 rounded-2xl shadow-2xl border border-primary/10 relative animate-fade-in-up">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-gray-100 text-gray-400 hover:text-gray-600 rounded-full p-1 shadow-sm transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            {currentScript}
          </p>
          {/* Triangle Pointer */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-primary/10 rotate-45"></div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
          Chat with us
        </span>
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.474.875 3.01 1.336 4.654 1.336 5.176 0 9.385-4.209 9.388-9.386 0-2.509-1.004-4.867-2.827-6.641-1.822-1.773-4.246-2.75-6.56-2.75-5.178 0-9.387 4.209-9.39 9.386-.001 1.77.488 3.414 1.414 4.8l-.941 3.435 3.262-.88zM17.367 14.307c-.301-.15-1.779-.877-2.054-.976-.275-.099-.475-.15-.675.15-.199.301-.775.976-.95 1.176-.175.199-.35.225-.65.075-.301-.15-1.267-.467-2.414-1.491-.892-.797-1.494-1.78-1.669-2.079-.175-.301-.019-.463.132-.612.135-.133.301-.35.451-.526.15-.175.199-.299.3-.499.1-.199.05-.376-.025-.526-.075-.15-.675-1.626-.925-2.226-.243-.584-.489-.505-.675-.505-.175-.011-.375-.011-.575-.011-.199 0-.526.075-.801.376-.275.301-1.05 1.026-1.05 2.504 0 1.478 1.075 2.904 1.225 3.104.15.199 2.115 3.227 5.125 4.526 2.535 1.101 3.051.882 3.601.826.549-.056 1.779-.727 2.029-1.428.25-.699.25-1.299.175-1.428-.075-.13-.275-.205-.575-.355z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
