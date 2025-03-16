
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="bg-primary text-white font-bold p-1.5 rounded text-sm">HN</span>
          <span className="text-xl font-display font-medium tracking-tight">HighEnd Nodes</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="ml-4 bg-primary text-white hover:bg-primary/90 transition-colors">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#features" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={toggleMenu}>Features</a>
          <a href="#pricing" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={toggleMenu}>Pricing</a>
          <a href="#testimonials" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={toggleMenu}>Testimonials</a>
          <a href="#contact" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={toggleMenu}>Contact</a>
          <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-colors">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
