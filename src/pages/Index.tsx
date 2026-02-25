import { motion } from "framer-motion";
import { ArrowRight, Zap, RefreshCw, Globe, BarChart3, Chrome, Tag, Star, Users, ShoppingBag, DollarSign, Truck, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import stepImport from "@/assets/step-import.jpg";
import stepSync from "@/assets/step-sync.jpg";
import stepEarn from "@/assets/step-earn.jpg";

const SHOPIFY_INSTALL_URL = "https://apps.shopify.com/amazon-to-shopify";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden section-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(199_89%_48%/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-shopify/10 text-shopify text-sm font-medium border border-shopify/20">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.058-.121-.074l-.914 21.104zm-1.024-17.379c0-.137-.939-.191-2.151-.191-3.508 0-7.329 1.462-7.329 5.27 0 1.604.542 2.749 1.93 3.691 1.228.834 1.458 1.069 1.458 1.753 0 .683-.439 1.424-1.305 1.424-1.284 0-2.385-.844-2.385-.844l-.844 2.522s1.387.946 3.559.946c2.172 0 3.852-1.351 3.852-3.502 0-1.753-.939-2.709-2.023-3.471-1.013-.712-1.372-1.069-1.372-1.753 0-.547.398-1.139 1.284-1.139 1.454 0 2.093.534 2.093.534l.822-2.484s-.717-.547-2.289-.547c-.17 0-.337.01-.5.027.025-.017.049-.036.075-.053 1.379-.91 3.267-1.423 4.472-1.423.144 0 .281.006.407.019l.246-1.279z"/></svg>
                Shopify App
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                Build Your Amazon{" "}
                <span className="text-gradient">Affiliate</span> &{" "}
                <span className="text-gradient">Dropshipping</span> Store
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-lg">
                Import Amazon products to Shopify in one click. Earn affiliate commissions or dropship with custom markup — no inventory, no coding. Trusted by 10,000+ merchants worldwide.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <a href={SHOPIFY_INSTALL_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-shopify hover:bg-shopify/90 text-shopify-foreground font-semibold gap-2 text-base px-8">
                    Install on Shopify <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to="/features">
                  <Button size="lg" variant="outline" className="font-semibold text-base px-8">
                    Explore Features
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="ml-1 font-semibold text-foreground">4.6</span>
                  <span>(254 reviews)</span>
                </div>
                <span>•</span>
                <span>7-day free trial</span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden card-elevated border border-border">
                <img src={heroImage} alt="Spreadr Amazon Importer Dashboard" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 card-elevated border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-shopify/10 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-shopify" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Keep 100% Commissions</p>
                    <p className="text-xs text-muted-foreground">We never take a cut</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-3 card-elevated border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <RefreshCw className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Real-time Sync</p>
                    <p className="text-xs text-muted-foreground">Always up to date</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Models Banner */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-primary-foreground">
            {[
              { icon: Link2, title: "Affiliate Marketing", desc: "Earn Amazon commissions with every click. No inventory needed." },
              { icon: Truck, title: "Dropshipping", desc: "Set custom markup pricing. Amazon handles fulfillment." },
              { icon: Globe, title: "Global Reach", desc: "Geo-localize visitors to their nearest Amazon region." },
            ].map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                  <model.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-semibold text-lg">{model.title}</h3>
                <p className="text-sm text-primary-foreground/70 max-w-xs">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Active Merchants" },
              { value: "1M+", label: "Products Imported" },
              { value: "4.6★", label: "App Rating" },
              { value: "8+ Years", label: "Since 2016" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold font-display text-primary">{stat.value}</p>
                <p className="text-sm mt-1 text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Everything You Need to <span className="text-gradient">Scale</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From one-click imports to real-time syncing, Spreadr gives you the tools to build a profitable Amazon affiliate or dropshipping store on Shopify.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "1-Click Import", desc: "Import any Amazon product to your Shopify store instantly. Full product details, images, and variations." },
              { icon: RefreshCw, title: "Auto-Sync", desc: "Keep prices and availability in sync with Amazon automatically. Super-sync option for real-time updates." },
              { icon: Globe, title: "Geo-Localize", desc: "Redirect visitors to their local Amazon store automatically. Support all major Amazon regions worldwide." },
              { icon: Tag, title: "Markup Pricing", desc: "Set custom pricing rules and markups for your imported products. Perfect for dropshipping margins." },
              { icon: Chrome, title: "Chrome Extension", desc: "Import products directly from Amazon with our free Chrome Extension. Browse and add in seconds." },
              { icon: BarChart3, title: "Analytics", desc: "Track affiliate clicks, conversions, and commissions with built-in analytics and Google Analytics integration." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 card-elevated border border-border group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/features">
              <Button variant="outline" size="lg" className="font-semibold gap-2">
                View All Features <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Get started in 3 simple steps — from import to earning</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { step: "01", img: stepImport, title: "Import Products", desc: "Use 1-click import, bulk CSV upload, or the Chrome Extension to add Amazon products to your Shopify store instantly." },
              { step: "02", img: stepSync, title: "Auto-Sync & Customize", desc: "Products auto-sync prices and availability with Amazon. Customize markup, tags, and descriptions for your brand." },
              { step: "03", img: stepEarn, title: "Earn & Grow", desc: "Earn affiliate commissions on every click or dropship with your own pricing. Geo-localize visitors and track revenue." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="rounded-2xl overflow-hidden card-elevated border border-border aspect-square">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold font-display text-sm shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate & Dropship Highlight */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 card-elevated border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-shopify/10 flex items-center justify-center mb-5">
                <Link2 className="w-7 h-7 text-shopify" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">Amazon Affiliate</h3>
              <p className="text-muted-foreground mb-4">
                Earn commissions through the Amazon Associates program. Visitors click "View on Amazon" and you earn on every qualifying purchase — zero inventory, zero risk.
              </p>
              <ul className="space-y-2 text-sm">
                {["Keep 100% of affiliate commissions", "No inventory or fulfillment needed", "Amazon handles shipping & returns", "Geo-localize to boost conversions"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-shopify" />{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 card-elevated border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">Dropshipping</h3>
              <p className="text-muted-foreground mb-4">
                Set your own prices with custom markup. Customers buy on your store, you order from Amazon at a lower price and pocket the difference.
              </p>
              <ul className="space-y-2 text-sm">
                {["Custom markup pricing & margins", "Add to Cart button on your store", "Bulk import thousands of products", "Auto-sync keeps prices accurate"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Plans starting from just $5/month. 7-day free trial on all plans.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Basic", price: "$5", features: ["Unlimited imports", "Amazon Button Link", "Markup Pricing", "All Amazon Regions"], color: "border-border" },
              { name: "Pro", price: "$10", features: ["Auto-sync 1,000 products", "Geo-localize", "Analytics", "Chrome Extension"], color: "border-primary", popular: true },
              { name: "Gold", price: "$20", features: ["Auto-sync 3,000 products", "Manual-sync", "Bulk actions", "All Pro features"], color: "border-border" },
              { name: "Higher", price: "$35+", features: ["Up to 50,000 products", "Super-sync option", "Custom plans available", "All Gold features"], color: "border-border" },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-xl p-6 border-2 ${plan.color} relative card-elevated`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-semibold text-lg">{plan.name}</h3>
                <p className="text-3xl font-bold font-display mt-2">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={SHOPIFY_INSTALL_URL} target="_blank" rel="noopener noreferrer" className="block mt-6">
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Start Free Trial
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Loved by Merchants</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">See what Shopify store owners say about Spreadr</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { text: "Love this app. Easy transfer of link to store. A great app for beginners starting their affiliate journey.", store: "Home and Clothes GO SHOP", country: "United States", rating: 5 },
              { text: "So far, so amazing. Customer service is instant and thorough. The affiliate setup was incredibly smooth.", store: "imprüv", country: "United States", rating: 5 },
              { text: "Highly recommend for its user-friendly interface and effective affiliate integration, allowing seamless commission earnings from Amazon.", store: "Shopify Community", country: "Worldwide", rating: 5 },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 card-elevated border border-border"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="text-sm font-semibold">{review.store}</p>
                  <p className="text-xs text-muted-foreground">{review.country}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4">
              Start Your Affiliate or Dropshipping Store Today
            </motion.h2>
            <motion.p variants={fadeUp} className="text-primary-foreground/80 mb-8">
              Join 10,000+ merchants already earning with Spreadr. Start your 7-day free trial — no credit card required.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href={SHOPIFY_INSTALL_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold gap-2 text-base px-8">
                  Install on Shopify <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
