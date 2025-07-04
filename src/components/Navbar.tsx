import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">N</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">NodeJS Ahmedabad</h1>
              <p className="text-xs text-emerald-600 -mt-1">Community Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-emerald-600 transition-colors">Events</button>
            <button onClick={() => scrollToSection('members')} className="text-gray-700 hover:text-emerald-600 transition-colors">Members</button>
            <button onClick={() => scrollToSection('resources')} className="text-gray-700 hover:text-emerald-600 transition-colors">Resources</button>
            <button onClick={() => scrollToSection('join')} className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">Join Us</button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-1 py-4 px-6 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left py-2">About</button>
            <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left py-2">Events</button>
            <button onClick={() => scrollToSection('members')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left py-2">Members</button>
            <button onClick={() => scrollToSection('resources')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left py-2">Resources</button>
            <button onClick={() => scrollToSection('join')} className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors w-full text-center">Join Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
