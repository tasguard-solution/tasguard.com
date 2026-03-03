import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const servicesDropdownItems = [
  { name: "All Services", path: "/services" },
  { name: "Attendix", href: "https://attendix.tasguard.com" },
  { name: "Animator Trigger Controller", path: "/services" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">TASGUARD</span>
            <span className="text-2xl font-light text-gray-700 ml-1">Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${isActive("/") ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 transition-colors ${isActive("/services")
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 overflow-hidden">
                    {servicesDropdownItems.map((item) =>
                      item.href ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.path!}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/team"
              className={`transition-colors ${isActive("/team")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 transition-colors ${isActive("/") ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full py-2 transition-colors ${isActive("/services")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 border-l-2 border-blue-200 ml-2">
                {servicesDropdownItems.map((item) =>
                  item.href ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path!}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            )}

            <Link
              to="/team"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 transition-colors ${isActive("/team")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Team
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
