import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-text-primary">
        <Header />
        
        {/* Main Content Area */}
        <main className="pt-28 pb-10 px-6 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            {/* this  listing cards will go here */}
            {Array.from({ length: 10}).map((_, i) => (
              <div key={i} className="flex flex-col gap-2 group cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                  <div className="w-full h-full bg-gray-200" />
                  <div className="absolute top-3 right-3">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'rgba(0,0,0,0.5)', height: '24px', width: '24px', stroke: '#fff', strokeWidth: '2', overflow: 'visible' }}>
                      <path d="m16 28c7-4.733 14-10 14-17 0-4.418-3.582-8-8-8-2.43 0-4.63 1.085-6.103 2.813-.15.174-.326.357-.497.551-.171-.194-.347-.377-.497-.551-1.474-1.728-3.674-2.813-6.103-2.813-4.418 0-8 3.582-8 8 0 7 7 12.267 14 17z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 mt-1">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-[15px]">Lagos, Nigeria</span>
                    <div className="flex items-center gap-1">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentcolor' }}>
                        <path d="M15.094 1.579l-4.124 8.357-9.223 1.34c-.178.026-.337.119-.444.262-.107.143-.153.32-.128.496.025.176.126.331.278.432l6.674 6.505-1.575 9.186c-.03.177.017.358.129.497.112.139.278.225.459.239.182.013.361-.048.499-.168L16 24.38l8.24 4.332c.159.083.346.1.518.046.172-.054.316-.176.398-.338.082-.162.096-.349.039-.521l-1.575-9.186 6.674-6.505c.152-.101.253-.256.278-.432.025-.176-.021-.353-.128-.496-.107-.143-.266-.236-.444-.262l-9.223-1.34-4.124-8.357c-.161-.326-.827-.326-.988 0z"></path>
                      </svg>
                      <span className="text-sm font-normal">4.92</span>
                    </div>
                  </div>
                  <span className="text-text-secondary text-sm">Made by Abraham</span>
                  <span className="text-text-secondary text-sm">Oct 23 - 28</span>
                  <div className="mt-1">
                    <span className="font-semibold text-[15px]">$250</span>
                    <span className="font-normal text-[15px]"> night</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
