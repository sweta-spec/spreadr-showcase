import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SHOPIFY_INSTALL_URL = "https://apps.shopify.com/amazon-to-shopify";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      { q: "How do I install Spreadr on my Shopify store?", a: "Simply visit our Shopify App Store listing and click 'Install'. The app will be added to your Shopify admin dashboard. No coding or technical setup is required." },
      { q: "Is there a free trial?", a: "Yes! All plans come with a 7-day free trial. You can test all features before committing to a subscription." },
      { q: "What are the pricing plans?", a: "We offer four plans: Basic ($5/mo), Pro ($10/mo), Gold ($20/mo), and Higher ($35+/mo). Each plan offers unlimited product imports with varying auto-sync limits and features." },
      { q: "Do I need an Amazon Associates account?", a: "For affiliate marketing, yes — you'll need an Amazon Associates account to earn commissions. For dropshipping, an Amazon Associates account is optional." },
    ],
  },
  {
    title: "Product Import",
    faqs: [
      { q: "How do I import a product from Amazon?", a: "You can import products three ways: 1) Paste an Amazon product URL directly, 2) Upload a CSV file with ASINs for bulk import, or 3) Use our free Chrome Extension to import while browsing Amazon." },
      { q: "Is there a limit on how many products I can import?", a: "All plans include unlimited product imports. The limits apply only to auto-sync — Basic has no auto-sync, Pro syncs up to 1,000, Gold up to 3,000, and Higher plans up to 50,000+ products." },
      { q: "What data is imported from Amazon?", a: "We import the product title, description, images, price, availability, brand/vendor, and product type. You can customize which attributes to include." },
      { q: "Can I import products in bulk?", a: "Yes! You can upload a CSV file with a list of Amazon ASINs to import hundreds of products at once. The Chrome Extension also enables quick sequential imports." },
    ],
  },
  {
    title: "Auto-Sync & Pricing",
    faqs: [
      { q: "What is Auto-sync?", a: "Auto-sync automatically updates your imported products' prices and availability to match Amazon. It runs on a schedule to keep your store always current." },
      { q: "What is Super-sync?", a: "Super-sync provides real-time updates. When a customer adds a product to their cart, Spreadr checks Amazon for the latest price and availability instantly." },
      { q: "How does Markup Pricing work?", a: "You can set custom pricing rules with multipliers and fixed additions. For example, set Amazon Price × 1.25 + $2.00 to add a 25% margin plus $2. You can also assign specific cents to prices." },
      { q: "What happens when a product goes out of stock on Amazon?", a: "You configure the behavior: mark it as OUT OF STOCK on your Shopify store, remove it entirely, or keep it listed. Similar rules exist for discontinued products." },
    ],
  },
  {
    title: "Affiliate & Dropshipping",
    faqs: [
      { q: "How do I earn affiliate commissions?", a: "Import products and set the button to 'View on Amazon'. When customers click through and make a purchase on Amazon, you earn the affiliate commission. We don't take any cut of your commissions." },
      { q: "Can I dropship Amazon products?", a: "Yes! With the dropship option, you can set your own prices with markup, keep the 'Add to Cart' button, and fulfill orders through Amazon." },
      { q: "What is Geo-localization?", a: "Geo-localize detects your visitor's location and redirects them to the appropriate Amazon storefront (e.g., UK visitors to amazon.co.uk, US visitors to amazon.com), increasing conversion rates." },
      { q: "Which Amazon regions are supported?", a: "We support all major Amazon marketplaces including US, UK, Germany, France, Italy, Spain, Japan, Canada, India, Australia, and more." },
    ],
  },
  {
    title: "Technical & Support",
    faqs: [
      { q: "Does Spreadr work with all Shopify themes?", a: "Yes, Spreadr is compatible with all Shopify themes including free themes, premium themes, and custom themes." },
      { q: "How do I get support?", a: "You can reach us via email at support@spreadr.co, through live chat on our support portal, or by browsing our knowledge base at spreadr.freshdesk.com." },
      { q: "Can I track clicks with Google Analytics?", a: "Yes! Spreadr integrates with Google Analytics and Facebook Pixel. Enable click tracking in your settings to track all clicks on Amazon links." },
      { q: "Is my data secure?", a: "Yes, we take data privacy seriously. We comply with GDPR and Shopify's data protection requirements. Read our full privacy policy for details." },
    ],
  },
];

const FAQs = () => {
  return (
    <div>
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Everything you need to know about Spreadr. Can't find your answer? Contact our support team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="mb-10"
            >
              <h2 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-primary" />
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.faqs.map((faq, j) => (
                  <AccordionItem
                    key={j}
                    value={`${i}-${j}`}
                    className="bg-card rounded-lg border border-border px-4"
                  >
                    <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display text-primary-foreground mb-4">Still Have Questions?</h2>
          <p className="text-primary-foreground/80 mb-6">Our support team is ready to help you get started.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={SHOPIFY_INSTALL_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold gap-2">
                Install on Shopify <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://spreadr.freshdesk.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
                Contact Support
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
