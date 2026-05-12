import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { Search, X, MessageCircle, Clock, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
  initialValue?: string;
}

const SUGGESTIONS = [
  'Allansyah Brawinatha About',
  'Software Engineer Experience',
  'Fullstack Portfolio Projects',
  'Technical Skills React Laravel',
  'Contact and Collaboration',
  'Internship availability'
];

export default function SearchBar({ onSearch, className = "", initialValue = "" }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('recent_searches');
    if (saved) setRecentSearches(JSON.parse(saved));

    const handleGlobalKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        inputRef.current?.blur();
        setIsFocused(false);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const addToRecent = (term: string) => {
    if (!term.trim()) return;
    const updated = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recent_searches', JSON.stringify(updated));
  };

  const filteredSuggestions = SUGGESTIONS.filter(s => 
    s.toLowerCase().includes(query.toLowerCase()) && query.length > 0
  );

  const handleWhatsApp = () => {
    if (!query.trim()) return;
    const phoneNumber = "6229518511511";
    const encodedMessage = encodeURIComponent(query);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    addToRecent(`WhatsApp: ${query}`);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (query.toLowerCase().startsWith('wa:') || query.toLowerCase().startsWith('pesan:')) {
        handleWhatsApp();
      } else {
        onSearch(query);
        addToRecent(query);
      }
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  const handleSuggestionClick = (s: string) => {
    setQuery(s);
    onSearch(s);
    addToRecent(s);
    setIsFocused(false);
  };

  return (
    <div className={`relative w-full max-w-[584px] mx-auto ${className}`} ref={containerRef}>
      <div 
        className={`flex items-center w-full px-4 py-3 rounded-full border transition-all duration-200 
          ${isFocused ? 'shadow-lg border-transparent bg-white ring-4 ring-blue-500/5' : 'border-[#dfe1e5] hover:shadow-md'}
        `}
      >
        <Search className="w-5 h-5 text-[#9aa0a6] mr-3" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder="Cari portfolio atau kirim pesan WA..."
          className="flex-1 bg-transparent border-none outline-none text-[#202124] text-[16px] md:text-lg"
        />
        <div className="flex items-center gap-2 ml-2">
          {!isFocused && !query && (
            <div className="hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded border border-gray-200 bg-gray-50 text-[10px] text-gray-400">
              <Command className="w-3 h-3" />
              <span>/</span>
            </div>
          )}
          {query && (
            <button onClick={() => setQuery('')} className="p-1 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5 text-[#70757a]" />
            </button>
          )}
          <span className="w-[1px] h-6 bg-[#dfe1e5] mx-1" />
          <button 
            onClick={handleWhatsApp}
            className="p-2 bg-[#4285f4] text-white hover:bg-[#3367d6] rounded-full shadow-sm transition-all flex items-center justify-center group"
            title="Kirim ke WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#4285f4]" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isFocused && (filteredSuggestions.length > 0 || recentSearches.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[calc(100%-1px)] left-0 w-full bg-white rounded-b-[24px] border border-t-0 border-[#dfe1e5] shadow-xl z-50 py-3 overflow-hidden"
          >
            {query.length === 0 && recentSearches.length > 0 && (
              <div className="px-4 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Pencarian Terkini
              </div>
            )}
            
            {(query.length === 0 ? recentSearches : filteredSuggestions).map((s, idx) => (
              <div
                key={idx}
                onClick={() => handleSuggestionClick(s)}
                className="flex items-center px-4 py-2.5 hover:bg-gray-100 cursor-default transition-colors group"
              >
                {query.length === 0 ? (
                  <Clock className="w-4 h-4 text-[#9aa0a6] mr-4 group-hover:text-blue-500" />
                ) : (
                  <Search className="w-4 h-4 text-[#9aa0a6] mr-4 group-hover:text-blue-500" />
                )}
                <span className="text-[#202124] text-[15px]">{s}</span>
              </div>
            ))}

            {query.length > 0 && filteredSuggestions.length === 0 && (
              <div className="px-4 py-3 text-sm text-gray-500 italic">
                Tekan Enter untuk mencari "{query}"
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
