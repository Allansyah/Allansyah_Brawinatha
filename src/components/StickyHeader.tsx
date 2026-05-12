import { motion } from 'motion/react';
import { Search, Mic, Camera, Menu, X } from 'lucide-react';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';

interface StickySearchHeaderProps {
  onSearch: (query: string) => void;
  activeSection: string;
}

const TABS = [
  { id: 'home', label: 'Semua' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export default function StickySearchHeader({ onSearch, activeSection }: StickySearchHeaderProps) {
  const currentTab = activeSection || 'home';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 w-full bg-white border-b border-[#dfe1e5] z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md pt-4' : 'pt-4 md:pt-8'
      }`}>
        <div className="max-w-[1280px] mx-auto">
          {/* Header Top Section - Responsive */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-20 mb-4 w-full px-4 md:px-6 lg:px-4">
            {/* Logo Section - Centered on mobile */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="font-google cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onSearch('home')}>
                <div className="text-[18px] sm:text-[20px] md:text-[22px] font-bold tracking-tighter leading-none -ml-2 sm:-ml-3 md:-ml-7 -mb-2 sm:-mb-3 my-1">
                  <span className="text-[#4285f4]">A</span>
                  <span className="text-[#ea4335]">L</span>
                  <span className="text-[#fbbc05]">L</span>
                  <span className="text-[#4285f4]">A</span>
                  <span className="text-[#34a853]">N</span>
                  <span className="text-[#ea4335]">S</span>
                  <span className="text-[#4285f4]">Y</span>
                  <span className="text-[#34a853]">A</span>
                  <span className="text-[#ea4335]">H</span>
                </div>
                <div className="text-[18px] sm:text-[20px] md:text-[22px] font-bold tracking-tighter leading-none -mt-2 sm:-mt-3">
                  <span className="text-[#4285f4]">B</span>
                  <span className="text-[#ea4335]">R</span>
                  <span className="text-[#fbbc05]">A</span>
                  <span className="text-[#4285f4]">W</span>
                  <span className="text-[#34a853]">I</span>
                  <span className="text-[#ea4335]">N</span>
                  <span className="text-[#4285f4]">A</span>
                  <span className="text-[#34a853]">T</span>
                  <span className="text-[#ea4335]">H</span>
                  <span className="text-[#4285f4]">A</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Search Bar - Hidden on mobile when menu open, responsive width */}
            <div className={`${
              mobileMenuOpen ? 'hidden' : 'block'
            } w-full md:block flex-1 transition-all duration-300`}>
              <SearchBar 
                onSearch={onSearch} 
                className="!mx-0 !max-w-full md:!max-w-[692px]" 
                initialValue=""
              />
            </div>
          </div>

          {/* Desktop Tabs - Hidden on mobile */}
          <div className="hidden md:block max-w-[1280px] mx-auto">
            <div className="flex gap-4 lg:gap-8 pl-4 md:pl-6 lg:pl-[180px] overflow-x-auto no-scrollbar px-4 lg:px-4">
              {TABS.map((tab) => (
                <motion.div 
                  key={tab.id}
                  onClick={() => {
                    onSearch(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  whileHover={{ y: -2 }}
                  className={`pb-3 px-1 text-[13px] lg:text-[14px] cursor-pointer whitespace-nowrap border-b-4 transition-all duration-200
                    ${currentTab === tab.id ? 'text-[#1a73e8] border-[#1a73e8]' : 'text-[#70757a] border-transparent hover:text-[#202124]'}
                  `}
                >
                  {tab.label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={false}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-[72px] sm:top-[76px] md:hidden left-0 right-0 bg-white border-b border-[#dfe1e5] z-40 overflow-hidden shadow-lg"
      >
        <div className="py-4 px-4">
          {/* Search bar in mobile menu */}
          <div className="mb-4">
            <SearchBar 
              onSearch={(query) => {
                onSearch(query);
                setMobileMenuOpen(false);
              }} 
              className="!mx-0 !max-w-full" 
              initialValue=""
            />
          </div>
          
          {/* Mobile Tabs */}
          <div className="flex flex-col gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  onSearch(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg transition-all duration-200 text-[15px] font-medium
                  ${currentTab === tab.id 
                    ? 'bg-[#1a73e8]/10 text-[#1a73e8]' 
                    : 'text-[#70757a] hover:bg-gray-50 hover:text-[#202124]'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[100px] sm:h-[104px] md:h-[120px] lg:h-[128px]" />
    </>
  );
}