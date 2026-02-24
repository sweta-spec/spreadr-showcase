import { motion } from "framer-motion";
import { ArrowRight, Heart, Lightbulb, Shield, Users, Globe, Award, Mail, Phone, MapPin, MessageCircle, Calendar } from "lucide-react";
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-background mb-4">About Spreadr</h1>
            <p className="text-background/80 max-w-2xl mx-auto text-lg">
              Empowering Shopify merchants to build profitable businesses with Amazon products since 2016.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display mb-6">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Spreadr was launched in November 2016 by <strong>Thalia</strong>, with a simple mission: make it easy for anyone to sell Amazon products on Shopify. What started as a simple product importer has grown into a comprehensive platform trusted by over 10,000 merchants worldwide.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Based in Mumbai, India, our team is dedicated to building tools that help Shopify merchants expand their product offerings, earn affiliate commissions, and run successful dropshipping businesses — all powered by Amazon's massive product catalog.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "We continuously improve our app with features like Super-sync, Geo-localization, and Chrome Extension to stay ahead." },
              { icon: Heart, title: "Merchant Success", desc: "Your success is our success. We provide the tools and support to help you build a thriving e-commerce business." },
              { icon: Shield, title: "Reliability", desc: "8+ years of uptime and continuous service. We sync millions of products reliably every day." },
              { icon: Users, title: "Community", desc: "Over 10,000 merchants trust Spreadr. We listen to our community and build features that matter." },
              { icon: Globe, title: "Global Reach", desc: "Supporting all major Amazon regions worldwide, enabling merchants to sell to customers everywhere." },
              { icon: Award, title: "Excellence", desc: "4.6-star rating with 254+ reviews on Shopify App Store. Merchants consistently praise our quality and support." },
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
              { year: "2016", title: "Spreadr Launched", desc: "App launched on Shopify App Store with basic Amazon product import functionality." },
              { year: "2018", title: "Auto-Sync Introduced", desc: "Launched automatic price and availability sync to keep products always up to date." },
              { year: "2019", title: "Chrome Extension", desc: "Released the free Spreadr Chrome Extension for one-click imports while browsing Amazon." },
              { year: "2020", title: "10,000+ Merchants", desc: "Crossed 10,000 active merchants milestone. Introduced Geo-localization feature." },
              { year: "2022", title: "Super-Sync & Bulk Actions", desc: "Launched real-time Super-sync and powerful bulk actions for managing thousands of products." },
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

      {/* Contact Section in About */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
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
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {value}
                  </a>
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
              <div><span className="font-semibold">Works With:</span> <span className="text-muted-foreground">Shopify Admin, Amazon Associates, Amazon API</span></div>
              <div><span className="font-semibold">Categories:</span> <span className="text-muted-foreground">Dropshipping, Store Data Importer</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display text-primary-foreground mb-4">Join Our Growing Community</h2>
          <p className="text-primary-foreground/80 mb-6">Start your journey with Spreadr today.</p>
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
