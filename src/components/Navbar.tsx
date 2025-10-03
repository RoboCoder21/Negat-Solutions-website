import React from 'react';
import LogoSwitcher from '@/components/LogoSwitcher';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
  <nav className="sticky top-0 w-full border-b border-white/10 z-50 shadow-lg" style={{ backgroundColor: '#4a3a23' }}>
      <div className="container mx-auto px-2 py-2 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <LogoSwitcher />
          <span className="text-xl md:text-2xl font-bold text-left whitespace-nowrap">
            <span style={{ color: 'white' }}>Nigat</span>
            <span className="text-primary">Solutions</span>
          </span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="hover:text-primary transition-smooth text-white font-normal text-xl lg:text-2xl px-3 py-2 drop-shadow">Home</Link>
          <Link to="/solutions" className="hover:text-primary transition-smooth text-white font-normal text-xl lg:text-2xl px-3 py-2 drop-shadow">Solutions</Link>
          <Link to="/about" className="hover:text-primary transition-smooth text-white font-normal text-xl lg:text-2xl px-3 py-2 drop-shadow">About</Link>
          <Link to="/contact" className="hover:text-primary transition-smooth text-white font-normal text-xl lg:text-2xl px-3 py-2 drop-shadow">Contact</Link>
          <Link to="/admin" className="hover:text-primary transition-smooth text-white font-normal text-xl lg:text-2xl px-3 py-2 drop-shadow">Admin</Link>

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
            className="text-white focus:outline-none flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-7 h-1 rounded bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`block w-7 h-1 rounded bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block w-7 h-1 rounded bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#4a3a23] border-t border-white/10 px-2 py-2 flex flex-col space-y-2">
          <Link to="/" className="text-white font-normal text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/solutions" className="text-white font-normal text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link to="/about" className="text-white font-normal text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-white font-normal text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/admin" className="text-white font-normal text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow" onClick={() => setMenuOpen(false)}>Admin</Link>
          <a href="https://www.linkedin.com/company/nigat-solutions/" target="_blank" rel="noopener noreferrer" className="text-white font-normal text-2xl px-4 py-3 rounded hover:bg-[#ffa726] hover:text-[#4a3a23] transition-smooth drop-shadow">Follow us on LinkedIn</a>
          <Button className="w-full mt-2 animate-pulse-glow text-2xl px-4 py-3 font-bold drop-shadow bg-[#ffa726] text-[#4a3a23] hover:bg-[#282421] hover:text-white" onClick={() => { setMenuOpen(false); navigate('/contact'); }}>
            Get a Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
