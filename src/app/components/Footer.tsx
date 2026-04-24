import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="footer-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src="/logo.png" alt="Tasguard Logo" className="w-10 h-10 object-contain" />
              <h3 className="footer-logo m-0">
                <span className="accent text-[#E6FC00]">Tasguard</span> Solutions
              </h3>
            </div>
            <p className="footer-text opacity-80 border-l-4 border-[var(--orange)] pl-3 mt-4">
              Delivering innovative software solutions to empower your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div>
              <a href="/" className="footer-link">
                Home
              </a>
              <a href="/services" className="footer-link">
                Services
              </a>
              <a href="/team" className="footer-link">
                Team
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-text">
              Email: 
              <br/>
              <a href="mailto:hello@tasguard.com" className="footer-link hover:text-[var(--orange)] mt-1">tasguard.com</a>
            </div>
          </div>
        </div>

        <div className="footer-strip">
          <p>&copy; {new Date().getFullYear()} Tasguard Solutions</p>
          <p>Built with intention</p>
        </div>
      </div>
    </footer>
  );
}
