import { motion } from "framer-motion";
import { ArrowRight, Heart, Lightbulb, Shield, Users, Globe, Award, Mail, Phone, MapPin, MessageCircle, Link2, Truck, Target, Rocket, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";

const SHOPIFY_INSTALL_URL = "https://apps.shopify.com/amazon-to-shopify";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUs = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-background mb-4">
              About Spreadr
            </h1>
            <p className="text-background/80 text-lg mb-6">
              Empowering Shopify merchants to build profitable affiliate and dropshipping businesses with Amazon products since 2016.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-background/10 backdrop-blur text-background text-sm border border-background/20">
                <Link2 className="w-4 h-4 inline mr-2" />Affiliate Marketing
              </div>
              <div className="px-4 py-2 rounded-full bg-background/10 backdrop-blur text-background text-sm border border-background/20">
                <Truck className="w-4 h-4 inline mr-2" />Dropshipping
              </div>
              <div className="px-4 py-2 rounded-full bg-background/10 backdrop-blur text-background text-sm border border-background/20">
                <Globe className="w-4 h-4 inline mr-2" />Global Reach
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                <Target className="w-3 h-3" /> Our Mission
              </div>
              <h2 className="text-3xl font-bold font-display mb-6">Making Amazon <span className="text-gradient">Affiliate & Dropshipping</span> Accessible to Everyone</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Spreadr was launched in November 2016 by <strong>Thalia</strong>, with a simple mission: make it easy for anyone to sell Amazon products on Shopify — whether through affiliate marketing or dropshipping.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Mumbai, India, our team is dedicated to building tools that help merchants expand their product offerings, earn affiliate commissions, and run successful dropshipping businesses — all powered by Amazon's massive product catalog.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "10,000+", label: "Active Merchants", icon: Users },
                { value: "1M+", label: "Products Imported", icon: Rocket },
                { value: "4.6★", label: "App Store Rating", icon: Award },
                { value: "8+ Yrs", label: "In Business", icon: Shield },
              ].map((stat, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 card-elevated border border-border text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold font-display text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Enable */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">What Spreadr <span className="text-gradient">Enables</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We help merchants monetize Amazon's catalog in two powerful ways</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 card-elevated border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-shopify/10 flex items-center justify-center mb-5">
                <Link2 className="w-7 h-7 text-shopify" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Amazon Affiliate Stores</h3>
              <p className="text-muted-foreground mb-4">Build a curated storefront of Amazon products. Visitors click "View on Amazon" and you earn commissions through the Amazon Associates program.</p>
              <ul className="space-y-2">
                {["Zero inventory or fulfillment", "Keep 100% of commissions", "Amazon handles shipping & returns", "Great for niche content sites"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-shopify shrink-0" />{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 card-elevated border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Dropshipping Stores</h3>
              <p className="text-muted-foreground mb-4">Import Amazon products with custom markup pricing. Customers buy on your store, you fulfill from Amazon and keep the margin.</p>
              <ul className="space-y-2">
                {["Set your own prices with markup", "Add to Cart on your store", "Auto-sync keeps prices accurate", "Scale to thousands of products"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" />{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Our Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "We continuously improve with features like Super-sync, Geo-localization, and Chrome Extension to keep you ahead." },
              { icon: Heart, title: "Merchant Success", desc: "Your success is our success. We provide the tools and support to help you build a thriving affiliate or dropshipping business." },
              { icon: Shield, title: "Reliability", desc: "8+ years of uptime and continuous service. We sync millions of products reliably every day." },
              { icon: Users, title: "Community", desc: "Over 10,000 merchants trust Spreadr. We listen to our community and build features that matter." },
              { icon: Globe, title: "Global Reach", desc: "Supporting all major Amazon regions worldwide, enabling merchants to sell to customers everywhere." },
              { icon: Award, title: "Excellence", desc: "4.6-star rating with 254+ reviews. Merchants consistently praise our quality and responsive support." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold font-display text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: "2016", title: "Spreadr Launched", desc: "App launched on Shopify App Store with basic Amazon product import for affiliate marketing." },
              { year: "2018", title: "Auto-Sync Introduced", desc: "Launched automatic price and availability sync — essential for dropshipping accuracy." },
              { year: "2019", title: "Chrome Extension", desc: "Released the free Spreadr Chrome Extension for one-click imports while browsing Amazon." },
              { year: "2020", title: "10,000+ Merchants", desc: "Crossed 10,000 active merchants milestone. Introduced Geo-localization for global affiliate reach." },
              { year: "2022", title: "Super-Sync & Bulk Actions", desc: "Launched real-time Super-sync and powerful bulk actions for managing thousands of dropship products." },
              { year: "2024", title: "250+ Five-Star Reviews", desc: "Reached 254 reviews with a 4.6-star average. Continuously improving based on merchant feedback." },
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-20 text-right">
                  <span className="text-lg font-bold font-display text-primary">{milestone.year}</span>
                </div>
                <div className="w-px bg-border relative">
                  <div className="absolute top-1 -left-1.5 w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="pb-4">
                  <h3 className="font-display font-semibold">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold font-display text-center mb-12">Get in Touch With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, title: "Email Us", value: "support@spreadr.co", href: "mailto:support@spreadr.co" },
              { icon: Phone, title: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
              { icon: MessageCircle, title: "Live Chat", value: "Start a conversation", href: "https://spreadr.freshdesk.com/" },
              { icon: MapPin, title: "Visit Us", value: "Mumbai, India", href: null },
            ].map(({ icon: Icon, title, value, href }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{title}</h3>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{value}</a>
                ) : (
                  <p className="text-sm text-muted-foreground">{value}</p>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="font-semibold gap-2">
                Go to Contact Page <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-10 card-elevated border border-border">
            <h3 className="text-xl font-bold font-display mb-6">Company Details</h3>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div><span className="font-semibold">Company Name:</span> <span className="text-muted-foreground">Thalia</span></div>
              <div><span className="font-semibold">App Name:</span> <span className="text-muted-foreground">Amazon Importer Spreadr App</span></div>
              <div><span className="font-semibold">Launched:</span> <span className="text-muted-foreground">November 23, 2016</span></div>
              <div><span className="font-semibold">Platform:</span> <span className="text-muted-foreground">Shopify App Store</span></div>
              <div><span className="font-semibold">Location:</span> <span className="text-muted-foreground">380 Happy Home, Shankar Matham Rd, Mumbai, MH, 400019, IN</span></div>
              <div><span className="font-semibold">Language:</span> <span className="text-muted-foreground">English</span></div>
              <div><span className="font-semibold">Use Cases:</span> <span className="text-muted-foreground">Amazon Affiliate, Dropshipping, Product Import</span></div>
              <div><span className="font-semibold">Categories:</span> <span className="text-muted-foreground">Dropshipping, Store Data Importer</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display text-primary-foreground mb-4">Start Your Affiliate or Dropshipping Journey</h2>
          <p className="text-primary-foreground/80 mb-6">Join 10,000+ merchants building profitable stores with Spreadr.</p>
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

export default AboutUs;
