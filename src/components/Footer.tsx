import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import spreadrLogo from "@/assets/spreadr-logo.png";

const SHOPIFY_INSTALL_URL = "https://apps.shopify.com/amazon-to-shopify";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img src={spreadrLogo} alt="Spreadr" className="h-8 w-8 rounded-lg" />
              <span className="text-xl font-bold font-display">Spreadr</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              The #1 Amazon Product Importer for Shopify. Import, sync, and sell Amazon products effortlessly. 
              Trusted by thousands of merchants worldwide since 2016.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary/80 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-background/50">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Features", path: "/features" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "Blog", path: "/blog" },
                { label: "FAQs", path: "/faqs" },
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-background/50">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "https://spreadr.freshdesk.com/support/solutions/articles/24000031153-privacy-and-data-protection-agreement" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Customer Data Policy", href: "#" },
                { label: "Disclaimers", href: "#" },
                { label: "Cookie Policy", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-background/50">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@spreadr.co" className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 shrink-0" /> support@spreadr.co
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 shrink-0" /> +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="https://spreadr.freshdesk.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4 shrink-0" /> Live Chat Support
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-background/70">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> 380 Happy Home, Shankar Matham Rd, Mumbai, MH, 400019, IN
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Spreadr by Thalia. All rights reserved.
          </p>
          <a
            href={SHOPIFY_INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-background/70 hover:text-shopify transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.058-.121-.074l-.914 21.104zm-1.024-17.379c0-.137-.939-.191-2.151-.191-3.508 0-7.329 1.462-7.329 5.27 0 1.604.542 2.749 1.93 3.691 1.228.834 1.458 1.069 1.458 1.753 0 .683-.439 1.424-1.305 1.424-1.284 0-2.385-.844-2.385-.844l-.844 2.522s1.387.946 3.559.946c2.172 0 3.852-1.351 3.852-3.502 0-1.753-.939-2.709-2.023-3.471-1.013-.712-1.372-1.069-1.372-1.753 0-.547.398-1.139 1.284-1.139 1.454 0 2.093.534 2.093.534l.822-2.484s-.717-.547-2.289-.547c-.17 0-.337.01-.5.027.025-.017.049-.036.075-.053 1.379-.91 3.267-1.423 4.472-1.423.144 0 .281.006.407.019l.246-1.279z"/>
            </svg>
            Available on Shopify App Store
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
