"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FaXTwitter } from 'react-icons/fa6';

const DropIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.317 4.36981C18.7915 3.72426 17.1857 3.2909 15.5293 3.06787C15.281 3.48781 15.011 3.96026 14.7205 4.47501C12.7443 4.24177 10.7681 4.24177 8.79189 4.47501C8.50143 3.96026 8.23142 3.48781 7.98314 3.06787C6.32672 3.2909 4.72088 3.72426 3.19543 4.36981C0.778393 8.8413 0.16564 13.1118 1.09918 17.202C2.98633 18.2323 4.84318 18.913 6.67845 19.2618C7.11409 18.7541 7.51909 18.2163 7.88371 17.6483C7.26573 17.4151 6.67845 17.1517 6.12185 16.8581C6.23351 16.7645 6.34517 16.6628 6.44654 16.5692C9.44881 17.5843 12.7443 17.7853 15.9582 17.078C16.421 17.6078 16.8566 18.1155 17.2718 18.6081C17.9205 18.4239 18.5589 18.2163 19.1769 17.9729C19.8256 17.7295 20.464 17.4459 21.0767 17.1366C21.8467 13.4121 21.3653 8.99516 20.317 4.36981ZM14.1362 14.7331C13.2575 14.7331 12.5222 13.9174 12.5222 12.9304C12.5222 11.9433 13.2472 11.1276 14.1362 11.1276C15.0252 11.1276 15.7605 11.9433 15.7502 12.9304C15.7502 13.9174 15.0252 14.7331 14.1362 14.7331ZM9.93551 14.7331C9.0568 14.7331 8.32153 13.9174 8.32153 12.9304C8.32153 11.9433 9.04652 11.1276 9.93551 11.1276C10.8245 11.1276 11.5598 11.9433 11.5495 12.9304C11.5495 13.9174 10.8245 14.7331 9.93551 14.7331Z" />
  </svg>
);


const GitBranchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="6" y1="3" x2="6" y2="15"></line>
    <circle cx="18" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <path d="M18 9a9 9 0 0 1-9 9"></path>
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen && isMobile ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Services' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'Who We Are' },
    { href: '#', label: 'What Client says' },
    // { href: '#', label: 'News' },
    // { href: '#', label: 'Plugins' },
  ];

  const socialLinks = [
    { href: '#', icon: FaLinkedinIn, label: 'Linkedin' },
    { href: '#', icon: FaXTwitter, label: 'X' },
    { href: '#', icon: FaInstagram, label: 'Instagram' },
  ]; 1

  const NavItems = () => (
    <>
      <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-white">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-white hover:text-cyan-400 transition-colors" onClick={isMobile ? toggleMenu : undefined}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4 mt-6 md:mt-0 md:ml-6">
        {socialLinks.map((social) => (
          <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-white hover:text-cyan-400 transition-colors">
            <social.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-6 md:mt-0 md:ml-6">
        <Button variant="outline" className="border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:text-cyan-400 rounded-full px-5 text-sm h-9">
          View Portfolio
        </Button>
        <Button className="bg-cyan-400 hover:bg-cyan-300 text-black rounded-full px-5 text-sm h-9">
          Get Started
        </Button>
      </div>
    </>
  );

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-lg'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                <DropIcon className="h-6 w-6 text-cyan-400" />
              </div>
              <span>techspirex</span>
            </Link>

            <div className="hidden md:flex items-center bg-gray-900/50 border border-gray-800 rounded-full p-2">
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-1">
                <NavItems />
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white">
                <Menu className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed top-0 left-0 w-full h-dvh bg-background/95 backdrop-blur-sm z-[60] transform transition-transform duration-300 ease-in-out md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white" onClick={toggleMenu}>
              <DropIcon className="h-6 w-6 text-cyan-400" />
              <span>techspirex</span>
            </Link>
            <button onClick={toggleMenu} aria-label="Close menu" className="text-white">
              {/* <CloseIcon className="h-8 w-8" /> */}
            </button>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center -mt-20 gap-6">
            <NavItems />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
