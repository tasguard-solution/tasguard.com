import { Link, useLocation } from "react-router";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";

const servicesDropdownItems = [
  { name: "All Services", path: "/services" },
  { name: "Attendix", href: "https://attendix.tasguard.com" },
  { name: "Animator Trigger Controller", path: "/services" },
];

export function Header() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-surface/80 backdrop-blur-xl text-primary font-label-md text-[length:var(--text-label-md)] fixed top-0 w-full z-50 border-b border-outline/10">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        <Link to="/" className="font-headline-lg text-[length:var(--text-headline-lg)] font-bold text-on-surface tracking-tight flex items-center gap-2">
          <img src="/logo-big.svg" alt="Tasguard Logo" className="w-10 h-10 object-contain" />
          Tasguard
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className={`text-on-surface-variant hover:text-on-surface transition-colors hover:bg-outline/5 px-3 py-2 rounded-md ${isActive("/") ? "text-on-surface bg-outline/5" : ""}`}
          >
            Home
          </Link>
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 text-on-surface-variant hover:text-on-surface transition-colors hover:bg-outline/5 px-3 py-2 rounded-md cursor-pointer ${isActive("/services") ? "text-on-surface bg-outline/5" : ""}`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 z-50">
                <div className="bg-surface-container border border-outline/20 rounded-xl shadow-lg py-2 flex flex-col gap-1">
                  {servicesDropdownItems.map((item) =>
                    item.href ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-sm"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path!}
                        onClick={() => setServicesOpen(false)}
                        className="px-4 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-sm"
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
            className={`text-on-surface-variant hover:text-on-surface transition-colors hover:bg-outline/5 px-3 py-2 rounded-md ${isActive("/team") ? "text-on-surface bg-outline/5" : ""}`}
          >
            Team
          </Link>
        </div>
        
        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-on-surface-variant hover:text-on-surface transition-colors rounded-full hover:bg-outline/10 cursor-pointer"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-DEFAULT hover:bg-primary hover:text-on-primary transition-colors duration-300 cursor-pointer">
            Get Started
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="text-on-surface p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-outline/10 p-4 z-40 flex flex-col gap-2 shadow-lg">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high ${isActive("/") ? "bg-surface-container-high text-on-surface" : ""}`}
          >
            Home
          </Link>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high cursor-pointer ${isActive("/services") ? "bg-surface-container-high text-on-surface" : ""}`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-1 mt-1">
                {servicesDropdownItems.map((item) =>
                  item.href ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2 text-on-surface-variant text-sm hover:text-on-surface"
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
                      className="px-4 py-2 text-on-surface-variant text-sm hover:text-on-surface"
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
            className={`px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high ${isActive("/team") ? "bg-surface-container-high text-on-surface" : ""}`}
          >
            Team
          </Link>
          <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-DEFAULT hover:bg-primary hover:text-on-primary transition-colors duration-300 mt-4 mx-4 cursor-pointer">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
