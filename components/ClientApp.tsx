// components/ClientApp.tsx
"use client"

import React, { useState } from 'react';
import { Leaf, Sprout } from 'lucide-react';
import { useLiveQuery }  from '@sanity/preview-kit';
import { aboutQuery, portfolioQuery, resumeQuery } from '@/sanity/queries'; // Changed this line
import AboutPage from '@/components/AboutPage';
import PortfolioPage from '@/components/PortfolioPage';
import ResumePage from '@/components/ResumePage';
import RootVegetable from '@/components/RootVegetable';

interface ClientAppProps {
  initialData: {
    about: any;
    portfolio: any[];
    resume: any;
  }
}

export default function ClientApp({ initialData }: ClientAppProps) {
  const [activePage, setActivePage] = useState('About');

  // Use live queries - these will update in real-time during preview
  const [aboutData] = useLiveQuery(initialData.about, aboutQuery);
  const [portfolioData] = useLiveQuery(initialData.portfolio, portfolioQuery);
  const [resumeData] = useLiveQuery(initialData.resume, resumeQuery);

  const data = {
    about: aboutData,
    portfolio: portfolioData,
    resume: resumeData,
  };

  const renderPage = () => {
    switch (activePage) {
      case 'About':
        return <AboutPage content={data.about} />;
      case 'Portfolio':
        return <PortfolioPage projects={data.portfolio} />;
      case 'Resume':
        return <ResumePage resume={data.resume} />;
      default:
        return <AboutPage content={data.about} />;
    }
  };

  const navItems = [
    { name: 'About', veggieColor: '#D97706' },
    { name: 'Portfolio', veggieColor: '#DC2626' },
    { name: 'Resume', veggieColor: '#7E22CE' },
  ];

  return (
    <div className="min-h-screen bg-[#F0EFEB] font-sans text-slate-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:wght@400;600&display=swap');
        .font-serif { font-family: 'Lora', serif; }
        .font-sans { font-family: 'Poppins', sans-serif; }
      `}</style>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -z-0 opacity-20">
         <Sprout className="text-[#A3B18A]" size={150} strokeWidth={1} style={{ transform: 'rotate(-30deg)' }}/>
      </div>
       <div className="absolute bottom-0 right-0 -z-0 opacity-20">
         <Leaf className="text-[#A3B18A]" size={200} strokeWidth={1} style={{ transform: 'rotate(45deg) scaleX(-1)' }}/>
      </div>

      <header className="relative z-10 p-8 flex justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center border-b-2 border-dashed border-[#847765]/50 pb-6">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <h1 
                  className="text-3xl font-serif font-bold text-slate-800 cursor-pointer"
                  onClick={() => setActivePage('About')}
                >
                  Shayna Leibowitz
                </h1>
                <p className="text-md text-[#847765]">Garden & Food Systems Educator</p>
            </div>
          <nav>
            <ul className="flex items-center space-x-6 md:space-x-10">
              {navItems.map(item => (
                <li key={item.name}>
                  <button
                    onClick={() => setActivePage(item.name)}
                    className={`relative group font-sans font-semibold text-lg py-2 transition-colors duration-300 overflow-visible
                      ${activePage === item.name ? 'text-[#3A5A40]' : 'text-[#847765] hover:text-[#3A5A40]'}
                    `}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#847765] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    <RootVegetable veggieColor={item.veggieColor} />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {renderPage()}
      </main>

      <footer className="text-center p-8 mt-12 text-[#847765]/80">
        <p>&copy; {new Date().getFullYear()} Shayna Leibowitz. All rights reserved.</p>
      </footer>
    </div>
  );
}