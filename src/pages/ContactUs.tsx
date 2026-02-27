import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, FileText, Star, ExternalLink, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactHero from "@/assets/contact-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUs = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                We're here to help. Reach out through any of the channels below, or fill out the contact form and we'll get back to you promptly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={contactHero} alt="Support Team" className="rounded-2xl card-elevated border border-border max-w-xs mx-auto lg:max-w-sm w-full h-auto object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-center mb-10">Support Center</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="https://spreadr.freshdesk.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 card-elevated border border-border text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground mb-3">Browse our comprehensive guides, tutorials, and FAQs.</p>
              <span className="text-sm text-primary font-medium inline-flex items-center gap-1">Browse Articles <ExternalLink className="w-3 h-3" /></span>
            </motion.a>

            <motion.a
              href="https://spreadr.freshdesk.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl p-6 card-elevated border border-border text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-shopify/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-shopify/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-shopify" />
              </div>
              <h3 className="font-display font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-3">Connect with our support team in real-time for immediate assistance.</p>
              <span className="text-sm text-shopify font-medium inline-flex items-center gap-1">Start Live Chat <ExternalLink className="w-3 h-3" /></span>
            </motion.a>

            <motion.a
              href="https://apps.shopify.com/amazon-to-shopify#adp-reviews"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl p-6 card-elevated border border-border text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                <Star className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="font-display font-semibold mb-2">Leave a Review</h3>
              <p className="text-sm text-muted-foreground mb-3">Share your experience and help other merchants discover Spreadr.</p>
              <span className="text-sm text-amber-500 font-medium inline-flex items-center gap-1">Write a Review <ExternalLink className="w-3 h-3" /></span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 card-elevated border border-border"
            >
              <h3 className="text-xl font-bold font-display mb-6">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Store URL</label>
                  <Input placeholder="yourstore.myshopify.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Subject</label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <Textarea placeholder="Describe your question or issue..." rows={4} />
                </div>
                <Button className="w-full gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold font-display mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "support@spreadr.co", href: "mailto:support@spreadr.co" },
                    { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                    { icon: MessageCircle, label: "Live Chat", value: "Available on our support portal", href: "https://spreadr.freshdesk.com/" },
                    { icon: Clock, label: "Support Hours", value: "Mon-Fri, 9am-6pm IST", href: null },
                    { icon: MapPin, label: "Address", value: "380 Happy Home, Shankar Matham Rd, Mumbai, MH, 400019, IN", href: null },
                  ].map(({ icon: Icon, label, value, href }, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{label}</p>
                        {href ? (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h4 className="font-display font-semibold mb-3">Important Information</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• We use Amazon API to pull product data. Sometimes data can be erroneous or incomplete. Please verify before publishing.</li>
                  <li>• Amazon API does not provide price information for <strong>"Kindle Edition"</strong> products.</li>
                  <li>• Please import products from <strong>one Amazon region only</strong>. The app syncs from one primary region at a time.</li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h4 className="font-display font-semibold mb-3">Quick Links</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Privacy Policy", href: "https://spreadr.freshdesk.com/support/solutions/articles/24000031153-privacy-and-data-protection-agreement" },
                    { label: "Customer Data Policy", href: "#" },
                    { label: "Disclaimers", href: "#" },
                  ].map((link, i) => (
                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-secondary text-sm text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
