import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/images/TypeBlitz.png"
              alt="TypeBlitz Logo"
              className="w-9 h-9 object-contain rounded-full"
            />
            <span className="text-xl font-bold text-white">TypeBlitz</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {isHomePage ? (
            <>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("screenshots")}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Screenshots
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Download
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Contact
              </button>
            </>
          ) : (
            <>
              <Link
                to="/#about"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                to="/#features"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                to="/#screenshots"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Screenshots
              </Link>
              <Link
                to="/#download"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Download
              </Link>
              <Link
                to="/#contact"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Contact
              </Link>
            </>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            className="items-center gap-2 border-neon text-neon hover:bg-neon hover:text-black"
            onClick={() => (isHomePage ? scrollToSection("download") : null)}
            as={isHomePage ? undefined : Link}
            to={isHomePage ? undefined : "/#download"}
          >
            <Download className="w-4 h-4" />
            <span>Download v1.4</span>
          </Button>

          <Button
            variant="ghost"
            className="text-white hover:text-neon"
            onClick={() => window.open("https://ellowdigital.netlify.app/", "_blank")}
          >
            EllowDigital
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="text-neon border-neon">
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-60 bg-black/90 backdrop-blur-lg border border-neon/30"
            >
              {isHomePage ? (
                <>
                  <DropdownMenuItem onClick={() => scrollToSection("about")}>
                    About
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection("features")}>
                    Features
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection("screenshots")}>
                    Screenshots
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection("download")}>
                    Download
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection("contact")}>
                    Contact
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/#about" onClick={() => setMobileMenuOpen(false)}>
                      About
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/#features" onClick={() => setMobileMenuOpen(false)}>
                      Features
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/#screenshots" onClick={() => setMobileMenuOpen(false)}>
                      Screenshots
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/#download" onClick={() => setMobileMenuOpen(false)}>
                      Download
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/#contact" onClick={() => setMobileMenuOpen(false)}>
                      Contact
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuItem onClick={() => window.open("https://ellowdigitals.com", "_blank")}>
                Visit EllowDigitals
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
