import { motion } from "framer-motion";
import { Zap, RefreshCw, Globe, BarChart3, Chrome, Tag, ShoppingBag, FileText, Settings, Shield, Smartphone, ArrowRight, Link2, Truck, DollarSign, CheckCircle2 } from "lucide-react";
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
    { icon: Zap, title: "1-Click Product Import", desc: "Import any Amazon product with a single click. Full product details including title, description, images, price, and variations.", highlights: ["Single product import via URL", "Bulk import via CSV", "Chrome Extension import"] },
    { icon: RefreshCw, title: "Auto-Sync & Super-Sync", desc: "Keep products always up-to-date with Amazon. Auto-sync updates prices and availability. Super-sync provides real-time updates.", highlights: ["Scheduled auto-sync", "Real-time super-sync", "Custom sync rules for price/stock"] },
    { icon: Tag, title: "Markup Pricing", desc: "Set custom pricing rules for dropshipping margins. Configure markup multipliers, fixed additions, and assign cents.", highlights: ["Multiplier & fixed markup", "Assign cents to price", "Apply to existing products"] },
    { icon: Globe, title: "Geo-Localization", desc: "Auto-detect visitor location and redirect them to their country-specific Amazon storefront for better affiliate conversions.", highlights: ["Auto-detect visitor location", "All major Amazon regions", "Seamless redirects"] },
    { icon: BarChart3, title: "Click Tracking & Analytics", desc: "Track affiliate clicks with Google Analytics and Facebook Pixel integration. Monitor performance and optimize conversions.", highlights: ["Google Analytics integration", "Facebook Pixel tracking", "View click data in dashboard"] },
    { icon: Chrome, title: "Chrome Extension", desc: "Browse Amazon and import products directly from any page. Install the free Spreadr Chrome Extension and add products in seconds.", highlights: ["Free browser extension", "1-click add to Shopify", "Works on any Amazon page"] },
    { icon: Link2, title: "Amazon Affiliate Model", desc: "Earn Amazon Associates commissions with 'View on Amazon' buttons. Keep 100% of commissions — we never take a cut.", highlights: ["Keep 100% commissions", "Amazon button on product page", "Zero inventory risk"] },
    { icon: Truck, title: "Dropshipping Model", desc: "Set your own prices with custom markup. Customers buy on your store, you fulfill from Amazon at a lower price.", highlights: ["Custom markup pricing", "Add to Cart button", "Full pricing control"] },
    { icon: FileText, title: "Auto-Tagging & Defaults", desc: "Automatically fill product type, vendor, and tags from Amazon data. Set default templates for consistency.", highlights: ["Auto-fill from Amazon", "Advanced auto-tagging", "Custom button text"] },
    { icon: Settings, title: "Bulk Actions", desc: "Manage thousands of products efficiently with bulk actions. Delete, export, or update multiple products at once.", highlights: ["Bulk delete & export", "Mass product updates", "CSV export"] },
    { icon: Shield, title: "All Amazon Regions", desc: "Support for all Amazon marketplaces worldwide including US, UK, DE, FR, JP, CA, IN, and many more.", highlights: ["15+ Amazon regions", "Multi-currency support", "Global reach"] },
    { icon: DollarSign, title: "Currency Conversion", desc: "Automatically convert Amazon product prices to your store currency with real-time exchange rates.", highlights: ["Auto currency conversion", "Real-time rates", "Multiple currencies"] },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-24 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(199_89%_48%/0.06),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
              <Zap className="w-4 h-4" /> Feature-Rich Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Powerful Tools for{" "}
              <span className="text-gradient">Affiliate</span> &{" "}
              <span className="text-gradient">Dropshipping</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Everything you need to import, sync, and sell Amazon products on your Shopify store. Built for affiliate marketers and dropshippers.
            </p>
            <a href={SHOPIFY_INSTALL_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-shopify hover:bg-shopify/90 text-shopify-foreground font-semibold gap-2 text-base px-8">
                Start 7-Day Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase - Alternating */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-24">
          {/* Import */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl overflow-hidden card-elevated border border-border">
                <img src={featureImport} alt="Product Import Interface" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                <Zap className="w-3 h-3" /> Import
              </div>
              <h2 className="text-3xl font-bold font-display">Import Products <span className="text-gradient">Your Way</span></h2>
              <p className="text-muted-foreground">Choose from multiple import methods — paste a single Amazon URL, upload a CSV with hundreds of ASINs, or use our Chrome Extension to import while browsing Amazon.</p>
              <ul className="space-y-3">
                {["1-click URL import from any Amazon page", "Bulk CSV upload with ASIN lists", "Chrome Extension for instant import", "Credits system — 1 USD = 50 credits"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-shopify shrink-0" />{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sync */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                <RefreshCw className="w-3 h-3" /> Sync
              </div>
              <h2 className="text-3xl font-bold font-display">Real-Time <span className="text-gradient">Sync</span></h2>
              <p className="text-muted-foreground">Never worry about outdated product information. Auto-sync keeps prices and availability updated automatically — critical for both affiliate and dropshipping models.</p>
              <ul className="space-y-3">
                {["Scheduled auto-sync up to 50,000 products", "Super-sync for real-time cart updates", "Custom rules for price & stock changes", "Primary Amazon region selection"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-shopify shrink-0" />{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden card-elevated border border-border">
                <img src={featureSync} alt="Auto Sync Dashboard" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>

          {/* Affiliate & Dropship */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl overflow-hidden card-elevated border border-border">
                <img src={featureAffiliate} alt="Affiliate & Dropshipping Model" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shopify/10 text-shopify text-xs font-medium">
                <DollarSign className="w-3 h-3" /> Monetize
              </div>
              <h2 className="text-3xl font-bold font-display">Affiliate & <span className="text-gradient">Dropship</span></h2>
              <p className="text-muted-foreground">Choose your business model. Earn Amazon affiliate commissions with zero inventory, or dropship with full control over pricing and fulfillment. You keep 100% of commissions.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                  <Link2 className="w-5 h-5 text-shopify mb-2" />
                  <h4 className="font-display font-semibold text-sm mb-1">Affiliate</h4>
                  <p className="text-xs text-muted-foreground">Earn commissions, zero inventory</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                  <Truck className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-display font-semibold text-sm mb-1">Dropship</h4>
                  <p className="text-xs text-muted-foreground">Custom pricing, full margins</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">All Features</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A comprehensive toolkit for Amazon affiliate marketing and dropshipping on Shopify</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-5 card-elevated border border-border group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{feature.desc}</p>
                <ul className="space-y-1">
                  {feature.highlights.map((h, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-shopify shrink-0" />{h}
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
          <h2 className="text-3xl font-bold font-display text-primary-foreground mb-4">Ready to Start Earning?</h2>
          <p className="text-primary-foreground/80 mb-6">Try Spreadr free for 7 days. Build your affiliate or dropshipping store today.</p>
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
