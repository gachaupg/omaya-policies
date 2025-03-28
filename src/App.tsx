
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Market from "./pages/Market";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import TermsandConditions from "./components/legal/terms_conditions";
import PrivacyPolicy from "./components/legal/privacy-policy";
import AMLTerms from "./components/legal/aml_terms";
import Coming from "./pages/Coming";
import WhatsAppFloat from "./pages/flat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/market" element={<Market />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/terms-and-condtions" element={<TermsandConditions />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/aml-policy" element={<AMLTerms />} />
          <Route path="/trade" element={<Coming />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloat />

      </BrowserRouter>
    </TooltipProvider>

  </QueryClientProvider>
);

export default App;
