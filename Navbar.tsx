import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// --- Types ---
interface IconProps {
  size?: number;
  className?: string;
}

interface NavItemProps {
  icon: React.ComponentType<IconProps>;
  label: string;
  onClick?: () => void;
  className?: string;
}

interface AuthButtonProps {
  icon: React.ComponentType<IconProps>;
  label: string;
  className?: string;
}

// --- Icon Components ---
const Home: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const Briefcase: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const UserPlus: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <line x1="20" y1="8" x2="20" y2="14"></line>
    <line x1="23" y1="11" x2="17" y2="11"></line>
  </svg>
);

const Sun: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5"></circle>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
  </svg>
);

const Moon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const LogIn: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
    <polyline points="10 17 15 12 10 7"></polyline>
    <line x1="15" y1="12" x2="3" y2="12"></line>
  </svg>
);

const User: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const Palette: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="13.5" cy="6.5" r=".5"></circle>
    <circle cx="17.5" cy="10.5" r=".5"></circle>
    <circle cx="8.5" cy="7.5" r=".5"></circle>
    <circle cx="6.5" cy="12.5" r=".5"></circle>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
  </svg>
);

// New: Left Angle Bracket for custom logo
const LeftAngleBracket: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

// New: Right Angle Bracket for custom logo
const RightAngleBracket: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);


// --- Custom Logo Icon Component ---
const CustomLogoIcon: React.FC<{ label: string; size?: number; className?: string }> = ({ label, size = 24, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth);
    }
  }, [label]);

  return (
    <motion.div
      className={`flex items-center rounded-full cursor-pointer font-bold text-lg ${className}`} // Removed p-2 here
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
      layout // Ensure layout animations for smooth gap changes
      animate={{ gap: isHovered ? 4 : 0 }} // Animate gap between items
    >
      <LeftAngleBracket size={size} />
      <motion.span
        className="whitespace-nowrap overflow-hidden flex-shrink-0 flex-grow-0 min-w-0"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isHovered ? textWidth : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        style={{ willChange: 'width, opacity' }}
      >
        <span ref={textRef} className="absolute invisible">
          {label}
        </span>
        {label}
      </motion.span>
      <RightAngleBracket size={size} />
    </motion.div>
  );
};

// --- Custom Hook for Hover Effects ---
const useHover = (label: string) => {
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth);
    }
  }, [label]);

  return { isHovered, setIsHovered, textRef, textWidth };
};

// --- Common Motion Props (kept as is) ---
const hoverMotion = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 }
};

// --- NavItem Component ---
const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, onClick, className = '' }) => {
  const { isHovered, setIsHovered, textRef, textWidth } = useHover(label);

  return (
    <motion.div
      className={`flex items-center p-2 rounded-full cursor-pointer group text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
      layout="position"
      aria-label={label}
      role="navigation"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick && onClick();
        }
      }}
    >
      {Icon && (
        <motion.div
          className="text-xl"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        >
          <Icon size={20} />
        </motion.div>
      )}
      
      <motion.span
        className="ml-2 whitespace-nowrap overflow-hidden"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isHovered ? textWidth : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        style={{ willChange: 'width, opacity' }}
      >
        <span ref={textRef} className="absolute invisible">
          {label}
        </span>
        {label}
      </motion.span>
    </motion.div>
  );
};

// --- AuthButton Component ---
const AuthButton: React.FC<AuthButtonProps> = ({ icon: Icon, label, className = '' }) => {
  const { isHovered, setIsHovered, textRef, textWidth } = useHover(label);

  return (
    <motion.button
      className={`flex items-center px-3 py-2 text-sm font-medium rounded-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
    >
      {Icon && <Icon size={16} className="text-white" />}
      <motion.span
        className="ml-2 whitespace-nowrap overflow-hidden"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isHovered ? textWidth : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        style={{ willChange: 'width, opacity' }}
      >
        <span ref={textRef} className="absolute invisible">
          {label}
        </span>
        {label}
      </motion.span>
    </motion.button>
  );
};

// --- Navbar Component ---
const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Theme toggle handler
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Navigation items
  const navItems = [
    { id: 1, icon: Home, label: 'Home', onClick: () => console.log('Home clicked') },
    { id: 2, icon: Briefcase, label: 'Work', onClick: () => console.log('Work clicked') },
    { id: 3, icon: User, label: 'About', onClick: () => console.log('About clicked') },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-full shadow-lg p-2 flex items-center justify-between space-x-4 md:space-x-6 lg:space-x-8 border border-gray-200 dark:border-gray-700 transition-colors duration-500 w-auto px-6" aria-label="Main navigation">
      {/* Logo */}
      <CustomLogoIcon label="Straven" size={24} className="text-indigo-700 dark:text-indigo-100" />
      
      {/* Navigation Items */}
      <motion.div layout className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
        {navItems.map(item => (
          <NavItem key={item.id} icon={item.icon} label={item.label} onClick={item.onClick} />
        ))}
      </motion.div>
      
      {/* Theme Toggle & Auth */}
      <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
        
        <AuthButton icon={LogIn} label="Login" />
        <AuthButton icon={UserPlus} label="Sign Up" className="hidden md:flex" />
      </div>
    </nav>
  );
};

export default Navbar;

