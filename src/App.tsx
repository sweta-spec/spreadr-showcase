import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
