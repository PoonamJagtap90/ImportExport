import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
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
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
           <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            {/*<div className="w-10 h-10 bg-[#0b2d4d] rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>*/}
           <div><img src="src\Images\infinity-logo-png.png" className="h-10 w-auto" 
           /> </div> 
            <div>
              <div className="text-[22px] font-semibold text-[#0b2d4d] leading-tight">
                Infinity Solutions
              </div>
              <div className="text-[11px] text-[#c1a23c] leading-tight text-center">
                Import & Export
              </div>
            </div>
          </Link>
          {/* Navigation */}
          <nav className="flex items-center gap-8">
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
        </div>
      </div>
    </header>
  );
}