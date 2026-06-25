import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-primary font-body-sm text-[length:var(--text-body-sm)] w-full border-t border-outline/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1 space-y-4">
          <div className="font-headline-lg text-[length:var(--text-headline-lg)] font-bold text-on-surface">
            Tasguard
          </div>
          <p className="text-on-surface-variant mt-4">
            Precision software engineering for modern enterprises.
          </p>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-label-sm text-[length:var(--text-label-sm)] text-on-surface font-bold uppercase tracking-widest mb-4">
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/services" className="text-on-secondary-fixed-variant hover:text-on-surface transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-on-secondary-fixed-variant hover:text-on-surface transition-colors">
                Team
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-on-secondary-fixed-variant hover:text-on-surface transition-colors">
                About
              </Link>
            </li>
            <li>
              <a href="mailto:hello@tasguard.com" className="text-on-secondary-fixed-variant hover:text-on-surface transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-label-sm text-[length:var(--text-label-sm)] text-on-surface font-bold uppercase tracking-widest mb-4">
            Legal
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className="text-on-secondary-fixed-variant hover:text-on-surface transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-on-secondary-fixed-variant hover:text-on-surface transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-label-sm text-[length:var(--text-label-sm)] text-on-surface font-bold uppercase tracking-widest mb-4">
            Social
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-on-secondary-fixed-variant hover:text-on-surface transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-on-secondary-fixed-variant hover:text-on-surface transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="text-on-secondary-fixed-variant hover:text-on-surface transition-colors">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-outline/10 py-6 text-center text-on-surface-variant font-label-sm text-[length:var(--text-label-sm)]">
        &copy; {new Date().getFullYear()} Tasguard Software Solutions. All rights reserved.
      </div>
    </footer>
  );
}
