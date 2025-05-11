import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    const current = footerRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="opacity-0 py-16 bg-gradient-to-t from-black via-dark to-black border-t border-white/10 transition-opacity"
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/assets/images/TypeBlitz.png"
                alt="TypeBlitz Logo"
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="text-xl font-semibold text-white">TypeBlitz</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Elevate your typing speed and accuracy with TypeBlitz — built for modern
              professionals.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/ellowdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon text-muted-foreground"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/ellowdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon text-muted-foreground"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com/ellowdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon text-muted-foreground"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/company/ellowdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon text-muted-foreground"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["about", "features", "screenshots", "download", "contact"].map((section) => (
                <li key={section}>
                  {isHomePage ? (
                    <a
                      href={`#${section}`}
                      className="text-sm text-muted-foreground hover:text-neon transition-colors capitalize"
                    >
                      {section}
                    </a>
                  ) : (
                    <Link
                      to={`/#${section}`}
                      className="text-sm text-muted-foreground hover:text-neon transition-colors capitalize"
                    >
                      {section}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/eula"
                  className="text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  EULA
                </Link>
              </li>
            </ul>
          </div>

          {/* Creator Info */}
          <div>
            <h3 className="font-medium text-white mb-4">Creator</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Developed by EllowDigital, creators of innovative productivity tools for the digital
              age.
            </p>
            <a
              href="https://ellowdigitals.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-neon/30 text-neon bg-neon/10 hover:bg-neon/20 transition"
            >
              Visit EllowDigital
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 TypeBlitz by Sarwan Yadav. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with <span className="text-neon">♥</span> by EllowDigital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
