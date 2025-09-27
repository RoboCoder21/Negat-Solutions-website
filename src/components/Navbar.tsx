import React from 'react';
import LogoSwitcher from '@/components/LogoSwitcher';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="sticky top-0 w-full border-b border-white/10 z-50" style={{ backgroundColor: '#3b3127' }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col items-center space-y-1 md:flex-row md:items-center md:space-x-3 md:space-y-0">
          <LogoSwitcher />
          <span className="text-2xl font-bold md:ml-2 text-center md:text-left">
            <span style={{ color: 'white' }}>Negat</span>
            <span className="text-primary">Solutions</span>
          </span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-primary transition-smooth text-white">Home</Link>
          <Link to="/solutions" className="hover:text-primary transition-smooth text-white">Solutions</Link>
          <Link to="/about" className="hover:text-primary transition-smooth text-white">About Us</Link>
          <Link to="/contact" className="hover:text-primary transition-smooth text-white">Contact</Link>
          <Link to="/admin" className="hover:text-primary transition-smooth text-sm text-white">Admin</Link>
        </div>
        <div className="hidden md:block">
          <Button className="animate-pulse-glow" onClick={() => navigate('/contact')}>
            Get a Consultation
          </Button>
        </div>
        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 6h14M3 10h14M3 14h14" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#3b3127] border-t border-white/10 px-4 py-2 flex flex-col space-y-2">
          <Link to="/" className="text-white py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/solutions" className="text-white py-2" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link to="/about" className="text-white py-2" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="text-white py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/admin" className="text-white py-2 text-sm" onClick={() => setMenuOpen(false)}>Admin</Link>
          <Button className="w-full mt-2 animate-pulse-glow" onClick={() => { setMenuOpen(false); navigate('/contact'); }}>
            Get a Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
