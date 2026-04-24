import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import "./Header.css";

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
    <header className="topbar sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="topbar-logo flex items-center">
        <img src="/logo-big.svg" alt="Tasguard Logo" className="w-12 h-12 mr-2 object-contain" />
        <text className="tasguard">Tasguard</text><span>Solutions</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link
          to="/"
          className={`topbar-link ${isActive("/") ? "active" : ""}`}
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
            className={`flex items-center gap-1 topbar-link ${isActive("/services") ? "active" : ""}`}
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            Services
            <ChevronDown
              className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {servicesOpen && (
            <div className="topbar-dropdown">
              <div className="dropdown-menu">
                {servicesDropdownItems.map((item) =>
                  item.href ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path!}
                      onClick={() => setServicesOpen(false)}
                      className="dropdown-item"
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
          className={`topbar-link ${isActive("/team") ? "active" : ""}`}
        >
          Team
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-black cursor-pointer bg-transparent border-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <Menu className="w-8 h-8" />
        )}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--bg)] border-b-2 border-black p-4 z-40 flex flex-col gap-4 shadow-lg">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`topbar-link ${isActive("/") ? "active" : ""}`}
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full topbar-link bg-transparent border-none cursor-pointer p-0 ${isActive("/services") ? "active" : ""}`}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 border-l-2 border-black ml-2 mt-2 flex flex-col gap-2">
                {servicesDropdownItems.map((item) =>
                  item.href ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="topbar-link text-xs opacity-75 inline-block"
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
                      className="topbar-link text-xs opacity-75 inline-block"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          <Link
            to="/team"
            onClick={() => setMobileMenuOpen(false)}
            className={`topbar-link ${isActive("/team") ? "active" : ""}`}
          >
            Team
          </Link>
        </div>
      )}
    </header>
  );
}
