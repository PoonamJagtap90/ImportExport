import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Process', path: '/process' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="src/Images/infinity-logo-png.png"
              className="h-10 w-auto"
              alt="Logo"
            />

            <div>
              <div className="text-lg md:text-[22px] font-semibold text-[#0b2d4d] leading-tight">
                Infinity Solutions
              </div>

              <div className="text-[10px] md:text-[11px] text-[#c1a23c] leading-tight text-center">
                Export & Import
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[15px] transition-colors hover:text-[#c1a23c] ${
                  location.pathname === item.path
                    ? 'text-[#0b2d4d] font-medium'
                    : 'text-[#64748b]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#0b2d4d]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0b2d4d]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-[15px] transition-colors hover:text-[#c1a23c] ${
                  location.pathname === item.path
                    ? 'text-[#0b2d4d] font-medium'
                    : 'text-[#64748b]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}