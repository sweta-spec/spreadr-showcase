import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ShoppingBag, Users, DollarSign, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseStudyHero from "@/assets/case-study-hero.jpg";

const SHOPIFY_INSTALL_URL = "https://apps.shopify.com/amazon-to-shopify";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const caseStudies = [
  {
    title: "Home & Clothes GO SHOP",
    subtitle: "From Zero to 500+ Products in 30 Days",
    industry: "Home & Fashion",
    country: "United States",
    description: "A beginner merchant who launched their first affiliate store using Spreadr. Within the first month, they imported over 500 products from Amazon and started earning affiliate commissions with zero inventory investment.",
    stats: [
      { label: "Products Imported", value: "500+" },
      { label: "Monthly Revenue", value: "$2.5K" },
      { label: "Time to Launch", value: "2 Days" },
    ],
    quote: "Love this app. Easy transfer of link to store. A great app for beginners.",
    rating: 5,
  },
  {
    title: "imprüv Store",
    subtitle: "Premium Product Curation with Outstanding Support",
    industry: "Lifestyle & Wellness",
    country: "United States",
    description: "imprüv built a curated lifestyle store importing premium Amazon products. They relied heavily on Spreadr's customer support and single-variant import feature to create a clean, focused shopping experience.",
    stats: [
      { label: "Curated Products", value: "200+" },
      { label: "Customer Satisfaction", value: "98%" },
      { label: "Support Response", value: "< 1hr" },
    ],
    quote: "Customer service is instant and thorough. I don't mind single variants as long as customer service remains great.",
    rating: 5,
  },
  {
    title: "TechGadgets Central",
    subtitle: "Scaling a Tech Dropshipping Empire",
    industry: "Electronics & Tech",
    country: "Canada",
    description: "Starting with the Pro plan, this merchant grew from 100 products to 3,000+ using the Gold plan's auto-sync. They leverage markup pricing to maintain 25% margins on all dropshipped electronics.",
    stats: [
      { label: "Active Products", value: "3,000+" },
      { label: "Monthly Orders", value: "800+" },
      { label: "Avg. Margin", value: "25%" },
    ],
    quote: "The auto-sync feature is a game-changer. Products are always up to date and we never oversell.",
    rating: 5,
  },
  {
    title: "FashionFind Global",
    subtitle: "Leveraging Geo-Localization for International Sales",
    industry: "Fashion & Apparel",
    country: "United Kingdom",
    description: "This UK-based merchant used Spreadr's geo-localization feature to redirect international visitors to their local Amazon storefronts, increasing affiliate conversions by 40% across 8 countries.",
    stats: [
      { label: "Countries Served", value: "8" },
      { label: "Conversion Increase", value: "40%" },
      { label: "Monthly Traffic", value: "50K+" },
    ],
    quote: "Geo-localization was the missing piece. Our international visitors finally see prices in their own currency.",
    rating: 5,
  },
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={caseStudyHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-background mb-4">
              Success Stories
            </h1>
            <p className="text-background/80 max-w-2xl mx-auto text-lg">
              Discover how Shopify merchants are using Spreadr to build profitable Amazon affiliate and dropshipping businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-16">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl overflow-hidden card-elevated border border-border"
            >
              <div className="grid lg:grid-cols-5">
                {/* Left - Info */}
                <div className="lg:col-span-3 p-8 md:p-10 space-y-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{cs.industry}</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">{cs.country}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-display mb-1">{cs.title}</h2>
                    <p className="text-primary font-medium">{cs.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground">{cs.description}</p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "{cs.quote}"
                  </blockquote>
                  <div className="flex gap-0.5">
                    {[...Array(cs.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                {/* Right - Stats */}
                <div className="lg:col-span-2 bg-secondary/50 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-6">Key Results</h3>
                  <div className="space-y-6">
                    {cs.stats.map((stat, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          {j === 0 ? <ShoppingBag className="w-5 h-5 text-primary" /> :
                           j === 1 ? <TrendingUp className="w-5 h-5 text-primary" /> :
                           <DollarSign className="w-5 h-5 text-primary" />}
                        </div>
                        <div>
                          <p className="text-2xl font-bold font-display">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display text-primary-foreground mb-4">Write Your Success Story</h2>
          <p className="text-primary-foreground/80 mb-6">Join thousands of merchants growing with Spreadr.</p>
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

export default CaseStudies;
