import React, { useEffect, useState } from 'react';

// Update these filenames to match your actual logo image names
const logos = [
  '/images/Artboard_34_copy-removebg-preview.png', // First logo (e.g., blue)
  '/images/Artboard_34-removebg-preview.png', // Second logo (e.g., red)
];

const SWITCH_INTERVAL = 2000; // ms (2 seconds)

const LogoSwitcher: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, SWITCH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={logos[current]}
      alt="Website Logo"
      style={{ width: 80, height: 80, transition: 'opacity 0.5s' }}
    />
  );
};

export default LogoSwitcher;
