import React from 'react';
import LogoSwitcher from '@/components/LogoSwitcher';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
  <nav className="sticky top-0 w-full border-b border-white/10 z-50 shadow-lg" style={{ backgroundColor: '#4a3a23' }}>
      <div className="container mx-auto px-2 py-2 flex flex-col md:flex-row md:items-center md:justify-between items-start justify-start gap-2 md:gap-0 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-2 w-full">
          <LogoSwitcher />
          <span className="text-xl md:text-2xl font-bold text-left md:text-left whitespace-nowrap mt-1 md:mt-0">
            <span style={{ color: 'white' }}>Negat</span>
            <span className="text-primary">Solutions</span>
          </span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="hover:text-primary transition-smooth text-white font-extrabold text-xl lg:text-2xl px-3 py-2 drop-shadow">Home</Link>
          <Link to="/solutions" className="hover:text-primary transition-smooth text-white font-extrabold text-xl lg:text-2xl px-3 py-2 drop-shadow">Solutions</Link>
          <Link to="/about" className="hover:text-primary transition-smooth text-white font-extrabold text-xl lg:text-2xl px-3 py-2 drop-shadow">About</Link>
          <Link to="/contact" className="hover:text-primary transition-smooth text-white font-extrabold text-xl lg:text-2xl px-3 py-2 drop-shadow">Contact</Link>
          <Link to="/admin" className="hover:text-primary transition-smooth text-white font-extrabold text-xl lg:text-2xl px-3 py-2 drop-shadow">Admin</Link>
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
            <svg width="25" height="2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 3h10M10 3h10M14 3h10" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#4a3a23] border-t border-white/10 px-2 py-2 flex flex-col space-y-2">
          <Link to="/" className="text-white font-bold text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/solutions" className="text-white font-bold text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link to="/about" className="text-white font-bold text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-white font-bold text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/admin" className="text-white font-bold text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow" onClick={() => setMenuOpen(false)}>Admin</Link>
          <Button className="w-full mt-2 animate-pulse-glow text-2xl px-4 py-3 font-bold drop-shadow bg-[#ffa726] text-[#4a3a23] hover:bg-[#282421] hover:text-white" onClick={() => { setMenuOpen(false); navigate('/contact'); }}>
            Get a Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
