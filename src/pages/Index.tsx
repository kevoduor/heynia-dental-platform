
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, FileText, MessageSquare, ArrowDown, Check, Menu, X, Star, Building2, TrendingUp } from "lucide-react";
import AISearchWindow from "@/components/AISearchWindow";
import HeyniaLogo from "@/components/HeyniaLogo";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { useState } from "react";

console.log("Index page component loading...");

const Index = () => {
  console.log("Index component rendering...");
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useDocumentHead({
    title: "Cloud-Based Dental Practice Management Software | HIPAA-Compliant | Heynia",
    description: "Heynia is a HIPAA-compliant, cloud-based dental software with patient scheduling, billing, teledentistry, and AI-powered insights—built for small clinics and multi-location practices."
  });

  console.log("About to render JSX...");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 safe-area-top">
        <div className="container-responsive py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <HeyniaLogo className="h-6 sm:h-8" variant="dark" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Features</a>
            <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Impact</a>
            <a href="#story" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Our Story</a>
            <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Pricing</a>
            <Button variant="outline" size="sm" className="btn-mobile-friendly">Sign In</Button>
            <Button className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly" size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden btn-mobile-friendly p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white/95 backdrop-blur-sm">
            <div className="container-responsive py-4 space-y-4">
              <a href="#features" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#impact" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Impact</a>
              <a href="#story" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Our Story</a>
              <a href="/pricing" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="btn-mobile-friendly">Sign In</Button>
                <Button className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-responsive text-center max-w-5xl">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            For modern dental clinics
          </div>
          <h1 className="text-responsive-3xl font-bold mb-4 sm:mb-6 leading-tight">
            Organize your clinic, payments and team in{" "}
            <span className="text-gradient">one place</span>
          </h1>
          <p className="text-responsive-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop juggling disconnected tools. Transform your dental practice with one intelligent platform that grows your revenue and saves you 10+ hours per week.
          </p>
          
          {/* AI Search Window */}
          <div className="mb-4 max-w-2xl mx-auto">
            <AISearchWindow />
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-12 sm:mb-16">No login required • Try it now</p>
        </div>
      </section>

      {/* Simple Test Section */}
      <section className="section-padding">
        <div className="container-responsive max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Test Section</h2>
          <p className="text-muted-foreground">If you can see this, the page is loading correctly.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16 px-4 safe-area-bottom">
        <div className="container-responsive max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <HeyniaLogo className="h-6 sm:h-8" variant="light" />
            </div>
            <p className="text-slate-400 text-sm">
              Cloud-based dental practice management software
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

console.log("Index component defined, about to export...");

export default Index;
