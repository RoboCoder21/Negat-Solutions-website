import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  type?: 'typewriter' | 'stagger' | 'slide' | 'gradient' | 'glitch' | 'glow';
  className?: string;
  delay?: number;
  speed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  type = 'typewriter', 
  className = '', 
  delay = 0,
  speed = 50 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    let timer: NodeJS.Timeout | undefined;
    if (type === 'typewriter') {
      timer = setTimeout(() => {
        setIsAnimating(true);
        setCurrentIndex(0);
        setDisplayText('');
        interval = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            if (prevIndex < text.length) {
              setDisplayText(text.slice(0, prevIndex + 1));
              return prevIndex + 1;
            } else {
              setTimeout(() => {
                setCurrentIndex(0);
                setDisplayText('');
              }, 1000); // Pause before restarting
              return 0;
            }
          });
        }, speed);
      }, delay);
      return () => {
        if (interval) clearInterval(interval);
        if (timer) clearTimeout(timer);
      };
    } else if (type === 'stagger') {
      setIsAnimating(false);
      timer = setTimeout(() => {
        setIsAnimating(true);
        // Restart the animation after all words are shown
        setTimeout(() => setIsAnimating(false), text.split(' ').length * 100 + 1000);
      }, delay);
      return () => {
        if (timer) clearTimeout(timer);
      };
    } else {
      setDisplayText(text);
      timer = setTimeout(() => setIsAnimating(true), delay);
      return () => clearTimeout(timer);
    }
  }, [text, type, delay, speed, isAnimating]);

  const getAnimationClass = () => {
    switch (type) {
      case 'typewriter':
        return 'typewriter';
      case 'stagger':
        return 'text-stagger';
      case 'slide':
        return 'text-slide-in';
      case 'gradient':
        return 'text-gradient';
      case 'glitch':
        return 'text-glitch';
      case 'glow':
        return 'text-glow';
      default:
        return '';
    }
  };

  const renderStaggeredText = () => {
    if (type === 'stagger') {
      return text.split(' ').map((word, index) => (
        <span 
          key={index} 
          className={cn('inline-block mr-2', isAnimating && 'animate-fade-in')}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {word}
        </span>
      ));
    }
    return displayText;
  };

  return (
    <div 
      className={cn(
        getAnimationClass(),
        isAnimating && type !== 'typewriter' && type !== 'stagger' && 'opacity-100',
        !isAnimating && type !== 'typewriter' && type !== 'stagger' && 'opacity-0',
        className
      )}
    >
      {renderStaggeredText()}
    </div>
  );
};

export default AnimatedText;