
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Award, Users, Menu, X, Star, Mail, Phone } from "lucide-react";
import HeyniaLogo from "@/components/HeyniaLogo";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { useState } from "react";

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useDocumentHead({
    title: "About Heynia – AI Dental Software with a Purpose | Practice Management Reinvented",
    description: "Heynia is an AI-powered dental practice management platform built to streamline operations, boost patient engagement, and honor a deeper mission — ending gender-based violence. Learn more about our story and impact."
  });

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
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Home</a>
            <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Features</a>
            <a href="/about" className="text-foreground font-medium text-sm xl:text-base">About</a>
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
              <a href="/#features" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="/about" className="block py-2 text-foreground font-medium">About</a>
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
          <h1 className="text-responsive-3xl font-bold mb-6 leading-tight">
            About Heynia: <span className="text-gradient">Technology with Purpose</span>
          </h1>
          <p className="text-responsive-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We're not just building dental software—we're building a movement. Every line of code, every feature, every partnership is designed to make dental practices more efficient and the world more just.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-6">Why We Exist</h2>
            <p className="text-responsive-lg text-muted-foreground leading-relaxed">
              At Heynia, we believe that technology should be a force for good—empowering businesses and helping shape a more just world.
            </p>
          </div>

          <Card className="p-8 mb-12">
            <blockquote className="text-xl text-muted-foreground italic mb-6 leading-relaxed text-center">
              "Our purpose (Nia, in Swahili) is to build tools that not only support dental professionals but also contribute to ending gender-based violence (GBV), a global crisis that affects 1 in 3 women in their lifetime."
            </blockquote>
            <cite className="text-lg font-semibold text-center block">— Kevin Oduor, Founder & CEO</cite>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Purpose</h3>
              <p className="text-muted-foreground">10% of our annual revenue goes to organizations working to prevent gender-based violence and support survivors.</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Technology</h3>
              <p className="text-muted-foreground">HIPAA-compliant, AI-powered dental practice management software designed for modern clinics.</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Community</h3>
              <p className="text-muted-foreground">Built by dentists, for dentists, with input from hundreds of dental professionals worldwide.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Live Our Purpose */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-responsive max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-6">How We Live Our Purpose</h2>
            <p className="text-responsive-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We design intelligent, user-friendly software that helps dental practices grow with less stress and more efficiency. But just as importantly, we commit 10% of our annual revenue to organizations working on the frontlines to prevent GBV and support survivors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">For Dental Practices</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Streamlined workflows that save hours every week</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>AI-powered insights to grow your practice</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>HIPAA-compliant security you can trust</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>24/7 support from people who care</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">For the World</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Funding education programs about gender equality</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Supporting survivors of gender-based violence</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Advocating for policy changes that protect women</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Building a community of purpose-driven professionals</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-6">What We Offer</h2>
            <p className="text-responsive-lg text-muted-foreground leading-relaxed mb-8">
              Heynia is a modern, AI-powered platform built for dental practices that want to simplify their workflows, improve patient engagement, and grow sustainably.
            </p>
            <p className="text-responsive-lg text-muted-foreground leading-relaxed">
              When you choose Heynia, you're not just getting powerful software—you're standing with a company that leads with purpose and gives back.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Award-Winning Innovation</h3>
              <p className="text-muted-foreground">Recognized as a Startup Africa Fund Finalist for our innovative approach to practice management.</p>
            </Card>
            <Card className="p-6">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer-Centric Design</h3>
              <p className="text-muted-foreground">Built with input from hundreds of dental professionals to ensure every feature serves a real need.</p>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16 px-4 safe-area-bottom">
        <div className="container-responsive max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <HeyniaLogo className="h-6 sm:h-8" variant="light" />
              </div>
              <p className="text-slate-400 text-sm mb-4">
                AI-powered dental practice management platform built to streamline operations and honor our mission to end gender-based violence.
              </p>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@heynia.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+254 755 792 377</span>
                </div>
                <p>Hacienda, Oloitoktok Road, Kilimani, Nairobi</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="/#features" className="block hover:text-white transition-colors">Features</a>
                <a href="/pricing" className="block hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block hover:text-white transition-colors">Demo</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="/about" className="block hover:text-white transition-colors">About</a>
                <a href="#" className="block hover:text-white transition-colors">Impact</a>
                <a href="#" className="block hover:text-white transition-colors">Blog</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support & Legal</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#" className="block hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block hover:text-white transition-colors">Contact</a>
                <a href="/privacy" className="block hover:text-white transition-colors">Privacy</a>
                <a href="/terms" className="block hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                © 2024 Heynia. All rights reserved. | Technology with Purpose
              </p>
              <div className="flex space-x-6 text-sm text-slate-400">
                <span>🔒 HIPAA-Ready</span>
                <span>☁️ Cloud-Based</span>
                <span>💜 Purpose-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
