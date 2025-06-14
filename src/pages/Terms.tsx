
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, ArrowLeft } from "lucide-react";
import HeyniaLogo from "@/components/HeyniaLogo";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { useState } from "react";

const Terms = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useDocumentHead({
    title: "Terms of Service | Heynia Dental Practice Management Software",
    description: "Terms of Service for Heynia dental practice management software. Learn about our user agreements and policies."
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 safe-area-top">
        <div className="container-responsive py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </a>
            <HeyniaLogo className="h-6 sm:h-8" variant="dark" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Home</a>
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
              <a href="/" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/pricing" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="btn-mobile-friendly">Sign In</Button>
                <Button className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <section className="section-padding">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-responsive-3xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: June 14, 2025</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="card-padding space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">By accessing and using Heynia dental practice management software, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-3">Permission is granted to temporarily use Heynia software for personal, non-commercial transitory viewing only. This includes:</p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                  <li>Managing your dental practice operations</li>
                  <li>Storing patient data in compliance with HIPAA</li>
                  <li>Processing payments and insurance claims</li>
                  <li>Accessing analytics and reporting features</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">3. Data Protection & HIPAA Compliance</h2>
                <p className="text-muted-foreground">Heynia is committed to protecting your patients' health information and maintaining HIPAA compliance. All data is encrypted and stored securely.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground">Subscription fees are billed monthly or annually as selected. All fees are non-refundable except as required by law.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground">Heynia shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the software.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">6. Contact Information</h2>
                <p className="text-muted-foreground">If you have any questions about these Terms of Service, please contact us at hello@heynia.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Terms;
