import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import spreadrLogo from "@/assets/spreadr-logo.png";

const SHOPIFY_INSTALL_URL = "https://apps.shopify.com/amazon-to-shopify";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "FAQs", path: "/faqs" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={spreadrLogo} alt="Spreadr" className="h-8 w-8 rounded-lg" />
          <span className="text-xl font-bold font-display text-foreground">Spreadr</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href={SHOPIFY_INSTALL_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-shopify hover:bg-shopify/90 text-shopify-foreground font-semibold gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.058-.121-.074l-.914 21.104zm-1.024-17.379c0-.137-.939-.191-2.151-.191-3.508 0-7.329 1.462-7.329 5.27 0 1.604.542 2.749 1.93 3.691 1.228.834 1.458 1.069 1.458 1.753 0 .683-.439 1.424-1.305 1.424-1.284 0-2.385-.844-2.385-.844l-.844 2.522s1.387.946 3.559.946c2.172 0 3.852-1.351 3.852-3.502 0-1.753-.939-2.709-2.023-3.471-1.013-.712-1.372-1.069-1.372-1.753 0-.547.398-1.139 1.284-1.139 1.454 0 2.093.534 2.093.534l.822-2.484s-.717-.547-2.289-.547c-.17 0-.337.01-.5.027.025-.017.049-.036.075-.053 1.379-.91 3.267-1.423 4.472-1.423.144 0 .281.006.407.019l.246-1.279z"/>
              </svg>
              Install on Shopify
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-border/50 p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={SHOPIFY_INSTALL_URL} target="_blank" rel="noopener noreferrer" className="block pt-2">
            <Button className="w-full bg-shopify hover:bg-shopify/90 text-shopify-foreground font-semibold">
              Install on Shopify
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
