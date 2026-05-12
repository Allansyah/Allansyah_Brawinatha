import { Menu, Grid, FlaskConical, UserCircle } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-40 bg-transparent">
      <div className="flex items-center gap-4">
        {/* Empty left side or can add Gmail/Images links like Google */}
        {/* <span className="text-sm font-medium hover:underline cursor-pointer hidden md:block">Gmail</span>
        <span className="text-sm font-medium hover:underline cursor-pointer hidden md:block">Images</span> */}
      </div>

      <div className="flex items-center gap-4">
        {/* <button 
          onClick={toggleTheme}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          title="Toggle Theme"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button> */}
        <FlaskConical className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
        <Grid className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
        <div className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <div className="w-8 h-8 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
        </div>
      </div>
    </nav>
  );
}
