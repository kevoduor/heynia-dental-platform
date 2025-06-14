
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, ArrowLeft, Shield, Lock, Eye } from "lucide-react";
import HeyniaLogo from "@/components/HeyniaLogo";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { useState } from "react";

const Privacy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useDocumentHead({
    title: "Privacy Policy | Heynia Dental Practice Management Software",
    description: "Privacy Policy for Heynia dental practice management software. Learn how we protect your data and maintain HIPAA compliance."
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

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-responsive max-w-4xl text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h1 className="text-responsive-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-2">Your trust is our priority</p>
          <p className="text-xs text-muted-foreground">Last updated: June 14, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-responsive max-w-4xl">
          <div className="grid gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  HIPAA Compliance
                </h2>
                <p className="text-muted-foreground">Heynia is fully HIPAA-compliant. We implement administrative, physical, and technical safeguards to protect patient health information (PHI) as required by federal law.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Lock className="w-5 h-5 text-blue-600 mr-2" />
                  Data Encryption
                </h2>
                <p className="text-muted-foreground mb-3">All data is encrypted both in transit and at rest using industry-standard encryption protocols:</p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                  <li>AES-256 encryption for data at rest</li>
                  <li>TLS 1.3 for data in transit</li>
                  <li>End-to-end encryption for sensitive communications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Practice Information</h3>
                    <p>Business details, staff information, and practice settings to provide our services.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Patient Data</h3>
                    <p>Health information necessary for practice management, stored with the highest security standards.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Usage Analytics</h3>
                    <p>Anonymized data to improve our software performance and user experience.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Access</h3>
                    <p>Request access to your personal data</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Correction</h3>
                    <p>Update or correct your information</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Deletion</h3>
                    <p>Request deletion of your data</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Portability</h3>
                    <p>Export your data in standard formats</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">For any privacy-related questions or to exercise your rights:</p>
                <div className="text-muted-foreground space-y-1">
                  <p>Email: privacy@heynia.com</p>
                  <p>Phone: +254 755 792 377</p>
                  <p>Address: Hacienda, Oloitoktok Road, Kilimani, Nairobi</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
