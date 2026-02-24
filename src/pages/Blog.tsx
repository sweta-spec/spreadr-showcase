import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const blogPosts = [
  {
    title: "How to Start an Amazon Affiliate Store on Shopify in 2026",
    excerpt: "A complete step-by-step guide to building a profitable Amazon affiliate store using Shopify and Spreadr. Learn how to import products, set up affiliate links, and start earning commissions.",
    category: "Getting Started",
    date: "Feb 20, 2026",
    readTime: "8 min read",
  },
  {
    title: "Amazon Dropshipping vs Affiliate Marketing: Which is Right for You?",
    excerpt: "Compare the two most popular business models for selling Amazon products on Shopify. Understand the pros, cons, and revenue potential of each approach.",
    category: "Business Strategy",
    date: "Feb 15, 2026",
    readTime: "6 min read",
  },
  {
    title: "10 Tips to Optimize Your Amazon Product Listings on Shopify",
    excerpt: "Boost your SEO and conversions with these proven strategies for optimizing imported Amazon product pages on your Shopify store.",
    category: "SEO & Optimization",
    date: "Feb 10, 2026",
    readTime: "5 min read",
  },
  {
    title: "Understanding Auto-Sync: Keep Your Store Always Updated",
    excerpt: "Learn how Spreadr's auto-sync and super-sync features work to keep your product prices and availability in perfect sync with Amazon.",
    category: "Features",
    date: "Feb 5, 2026",
    readTime: "4 min read",
  },
  {
    title: "How to Use Geo-Localization to Boost International Sales",
    excerpt: "Geo-localization redirects visitors to their local Amazon store. Learn how this feature can increase your affiliate conversions and customer satisfaction.",
    category: "Growth",
    date: "Jan 28, 2026",
    readTime: "5 min read",
  },
  {
    title: "Markup Pricing Strategies for Amazon Dropshipping Success",
    excerpt: "Master Spreadr's markup pricing feature to set competitive prices while maintaining healthy margins on your dropshipped products.",
    category: "Dropshipping",
    date: "Jan 20, 2026",
    readTime: "7 min read",
  },
];

const Blog = () => {
  return (
    <div>
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Spreadr <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tips, guides, and insights on Amazon product importing, affiliate marketing, and growing your Shopify store.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl overflow-hidden card-elevated border border-border mb-12"
          >
            <div className="grid md:grid-cols-2">
              <div className="hero-gradient p-8 md:p-12 flex items-center">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-card/20 text-primary-foreground text-xs font-medium mb-4">Featured</span>
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-primary-foreground mb-3">
                    The Complete Guide to Amazon Product Importing for Shopify
                  </h2>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Everything you need to know about importing Amazon products to your Shopify store — from setup to scaling to thousands of products.
                  </p>
                  <div className="flex items-center gap-4 text-primary-foreground/60 text-xs">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Feb 22, 2026</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 12 min read</span>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-muted-foreground mb-6">
                  Whether you're starting your first affiliate store or scaling an existing dropshipping business, this comprehensive guide covers every aspect of using Spreadr to import and manage Amazon products on Shopify. From choosing the right plan to advanced sync strategies.
                </p>
                <Button variant="outline" className="w-fit gap-2">Read Article <ArrowRight className="w-4 h-4" /></Button>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl overflow-hidden card-elevated border border-border group cursor-pointer"
              >
                <div className="h-2 hero-gradient" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
