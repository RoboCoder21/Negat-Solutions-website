import { } from 'react';
import LogoSwitcher from '@/components/LogoSwitcher';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 w-full border-b border-white/10 z-50" style={{ backgroundColor: '#3b3127' }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <LogoSwitcher />
          <span className="text-2xl font-bold">
            <span style={{ color: 'white' }}>Negat</span>
            <span className="text-primary">Solutions</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-primary transition-smooth text-white">Home</Link>
          <Link to="/solutions" className="hover:text-primary transition-smooth text-white">Solutions</Link>
          <Link to="/about" className="hover:text-primary transition-smooth text-white">About Us</Link>
          <Link to="/contact" className="hover:text-primary transition-smooth text-white">Contact</Link>
          <Link to="/admin" className="hover:text-primary transition-smooth text-sm text-white">Admin</Link>
        </div>
        <Button className="animate-pulse-glow" onClick={() => navigate('/contact')}>
          Get a Consultation
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
