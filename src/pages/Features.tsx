import { motion } from "framer-motion";
import { Zap, RefreshCw, Globe, BarChart3, Chrome, Tag, ShoppingBag, FileText, Settings, Shield, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import featureSync from "@/assets/feature-sync.jpg";
import featureImport from "@/assets/feature-import.jpg";
import featureAffiliate from "@/assets/feature-affiliate.jpg";

const SHOPIFY_INSTALL_URL = "https://apps.shopify.com/amazon-to-shopify";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "1-Click Product Import",
      desc: "Import any Amazon product to your Shopify store with a single click. Full product details including title, description, images, price, and variations are automatically pulled.",
      highlights: ["Single product import via URL", "Bulk import via CSV", "Chrome Extension import"],
    },
    {
      icon: RefreshCw,
      title: "Auto-Sync & Super-Sync",
      desc: "Keep your products always up-to-date with Amazon. Auto-sync updates prices and availability on a schedule. Super-sync provides real-time updates when customers add to cart.",
      highlights: ["Scheduled auto-sync", "Real-time super-sync", "Custom sync rules for price/stock"],
    },
    {
      icon: Tag,
      title: "Markup Pricing",
      desc: "Set custom pricing rules to add margin on imported products. Configure markup multipliers, fixed additions, and assign cents for professional pricing.",
      highlights: ["Multiplier & fixed markup", "Assign cents to price", "Apply to existing products"],
    },
    {
      icon: Globe,
      title: "Geo-Localization",
      desc: "Automatically detect visitor location and redirect them to their country-specific Amazon storefront. UK visitors go to amazon.co.uk, US to amazon.com.",
      highlights: ["Auto-detect visitor location", "All major Amazon regions", "Seamless redirects"],
    },
    {
      icon: BarChart3,
      title: "Click Tracking & Analytics",
      desc: "Track clicks on Amazon links with Google Analytics and Facebook Pixel integration. Monitor performance and optimize your store.",
      highlights: ["Google Analytics integration", "Facebook Pixel tracking", "View click data in dashboard"],
    },
    {
      icon: Chrome,
      title: "Chrome Extension",
      desc: "Browse Amazon and import products directly from any product page. Install the free Spreadr Chrome Extension and add products in seconds.",
      highlights: ["Free browser extension", "1-click add to Shopify", "Works on any Amazon page"],
    },
    {
      icon: ShoppingBag,
      title: "Amazon Affiliate & Dropship",
      desc: "Choose your business model: earn Amazon affiliate commissions with 'View on Amazon' buttons, or dropship with custom pricing and fulfillment.",
      highlights: ["Keep 100% commissions", "Amazon button or Add to Cart", "Dropship option available"],
    },
    {
      icon: FileText,
      title: "Auto-Tagging & Defaults",
      desc: "Automatically fill product type, vendor, and tags from Amazon data. Set default templates, inventory policies, and button text for consistency.",
      highlights: ["Auto-fill from Amazon", "Advanced auto-tagging", "Custom button text"],
    },
    {
      icon: Settings,
      title: "Bulk Actions",
      desc: "Manage thousands of products efficiently with bulk actions. Delete all, export all, or update multiple products at once.",
      highlights: ["Bulk delete & export", "Mass product updates", "CSV export"],
    },
    {
      icon: Shield,
      title: "All Amazon Regions",
      desc: "Support for all Amazon marketplaces worldwide including US, UK, DE, FR, JP, CA, IN, and many more.",
      highlights: ["15+ Amazon regions", "Multi-currency support", "Global reach"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Support",
      desc: "Manage your imported products on the go with Shopify mobile app compatibility.",
      highlights: ["Shopify mobile compatible", "Manage on the go", "Full functionality"],
    },
    {
      icon: RefreshCw,
      title: "Currency Conversion",
      desc: "Automatically convert Amazon product prices to your store currency with real-time exchange rates.",
      highlights: ["Auto currency conversion", "Real-time rates", "Multiple currencies"],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Powerful <span className="text-gradient">Features</span> for Your Store
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              Everything you need to import, sync, and sell Amazon products on your Shopify store.
            </p>
            <a href={SHOPIFY_INSTALL_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-shopify hover:bg-shopify/90 text-shopify-foreground font-semibold gap-2">
                Start 7-Day Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={featureImport} alt="Product Import" className="rounded-2xl card-elevated border border-border" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              <h2 className="text-3xl font-bold font-display">Import Products <span className="text-gradient">Your Way</span></h2>
              <p className="text-muted-foreground">Choose from multiple import methods — paste a single Amazon URL, upload a CSV with hundreds of ASINs, or use our Chrome Extension to import while browsing Amazon.</p>
              <ul className="space-y-2">
                {["1-click URL import", "Bulk CSV upload with ASIN lists", "Chrome Extension for instant import", "Credits system — 1 USD = 50 credits"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4 order-2 md:order-1">
              <h2 className="text-3xl font-bold font-display">Real-Time <span className="text-gradient">Sync</span></h2>
              <p className="text-muted-foreground">Never worry about outdated product information. Auto-sync keeps prices and availability updated automatically. Configure rules for price changes, out-of-stock, and discontinued items.</p>
              <ul className="space-y-2">
                {["Scheduled auto-sync up to 50,000 products", "Super-sync for real-time cart updates", "Custom rules for price & stock changes", "Primary Amazon region selection"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
              <img src={featureSync} alt="Auto Sync" className="rounded-2xl card-elevated border border-border" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={featureAffiliate} alt="Affiliate & Dropship" className="rounded-2xl card-elevated border border-border" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              <h2 className="text-3xl font-bold font-display">Affiliate & <span className="text-gradient">Dropship</span></h2>
              <p className="text-muted-foreground">Choose your business model. Earn Amazon affiliate commissions with zero inventory, or dropship with full control over pricing and fulfillment. You keep 100% of commissions — we don't take a cut.</p>
              <ul className="space-y-2">
                {["Amazon Associates affiliate links", "Dropship with custom markup", "Geo-localize visitors globally", "Track performance with analytics"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-center mb-12">All Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-5 card-elevated border border-border"
              >
                <feature.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{feature.desc}</p>
                <ul className="space-y-1">
                  {feature.highlights.map((h, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-shopify" />{h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 mb-6">Try Spreadr free for 7 days. No credit card required.</p>
          <a href={SHOPIFY_INSTALL_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold gap-2">
              Install on Shopify <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Features;
