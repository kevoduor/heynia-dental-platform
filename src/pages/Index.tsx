
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, FileText, MessageSquare, ArrowDown, Check, Menu, X, Star, Building2, TrendingUp, Shield, Smartphone, BarChart3, CreditCard, Clock, Zap, Heart, Award, Mail, Phone } from "lucide-react";
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
            All your tools. One Easy Place
          </p>
          
          {/* AI Search Window */}
          <div className="mb-4 max-w-2xl mx-auto">
            <AISearchWindow />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">
              Try Heynia for free
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">No credit card needed</p>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section id="problem" className="section-padding">
        <div className="container-responsive max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-6">
              You didn't become a dentist to manage chaos.
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Every day, you're overwhelmed by reschedules, billing headaches, and disconnected tools. The result? Lost time, lost revenue, and growing burnout.
            </p>
            <p className="text-responsive-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Heynia changes that—bringing everything you need to run your practice into one simple, intelligent platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Missed appointments & cancellations</h3>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CreditCard className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Complex billing and insurance delays</h3>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Disconnected tools that don't talk to each other</h3>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Hours wasted on manual admin</h3>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="btn-mobile-friendly">
              See How Heynia Works
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: The Solution */}
      <section id="features" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-responsive max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-4">
              All-in-one, and built for dentists like you.
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
              Heynia simplifies your entire practice—no steep learning curves, no tech headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automated Scheduling</h3>
              <p className="text-muted-foreground">Fill your calendar, reduce no-shows.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CreditCard className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Billing</h3>
              <p className="text-muted-foreground">Collect payments faster, with less follow-up.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BarChart3 className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-Time Analytics</h3>
              <p className="text-muted-foreground">Understand what's working (and what's not).</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Smartphone className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
              <p className="text-muted-foreground">Manage your practice on the go.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">HIPAA-Ready, OSHA-Aware</h3>
              <p className="text-muted-foreground">Built for total peace of mind.</p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center mb-8">
            <blockquote className="text-xl font-medium italic">
              "It's like having a full-time office manager in your pocket."
            </blockquote>
          </Card>

          <div className="text-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">
              Join the Early Access List
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Our Purpose */}
      <section id="impact" className="section-padding">
        <div className="container-responsive max-w-4xl text-center">
          <h2 className="text-responsive-2xl font-bold mb-6">
            A practice management app with a purpose.
          </h2>
          <p className="text-responsive-lg text-muted-foreground mb-8 leading-relaxed">
            Every Heynia subscription helps fund education, support, and advocacy to end gender-based violence. Our founder lost his sister to GBV. That pain fuels our purpose.
          </p>
          <p className="text-responsive-lg text-muted-foreground mb-12 leading-relaxed">
            When you grow with Heynia, you're not just upgrading your business—you're standing for something bigger.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🧩</span>
              <span className="text-lg font-medium">10% of profits fund gender justice initiatives</span>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-medium">Powered by purpose. Built with heart.</span>
            </div>
          </div>

          <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">
            Join the Movement
          </Button>
        </div>
      </section>

      {/* Section 4: Founder Message & Trust */}
      <section id="story" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-8">
              Heynia is built by people who care deeply—about your practice and our world.
            </h2>
            
            <Card className="p-8 mb-8">
              <blockquote className="text-xl text-muted-foreground italic mb-4 leading-relaxed">
                "I built Heynia to help dentists like you escape the burnout cycle—and to honor my sister, a victim of gender-based violence. This platform is my way of changing both."
              </blockquote>
              <cite className="text-lg font-semibold">— Kevin Oduor, Founder</cite>
            </Card>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium">HIPAA-Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Startup Africa Fund Finalist</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Designed by dentists, for dentists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA */}
      <section className="section-padding">
        <div className="container-responsive max-w-4xl text-center">
          <h2 className="text-responsive-2xl font-bold mb-6">
            Clarity. Growth. Purpose. All in one app.
          </h2>
          <p className="text-responsive-lg text-muted-foreground mb-12 leading-relaxed">
            Dentists across the globe are tired of juggling tools that don't fit together. Heynia is here to change that—and turn your practice into a platform for impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">
              Get Early Access
            </Button>
            <Button size="lg" variant="outline" className="btn-mobile-friendly">
              Watch the Demo
            </Button>
            <Button size="lg" variant="outline" className="btn-mobile-friendly">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Community & Advocacy */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-responsive max-w-4xl text-center">
          <h2 className="text-responsive-2xl font-bold mb-8">
            We're not just building software. We're building a community.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Get the Dentistry with Purpose newsletter</h3>
            </Card>
            <Card className="p-6">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Share your journey and get featured</h3>
            </Card>
            <Card className="p-6">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Refer a friend → Both of you get 1 free month</h3>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">
              Subscribe to Newsletter
            </Button>
            <Button size="lg" variant="outline" className="btn-mobile-friendly">
              Invite a Colleague
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16 px-4 safe-area-bottom">
        <div className="container-responsive max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <HeyniaLogo className="h-6 sm:h-8" variant="light" />
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Cloud-based dental practice management software
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
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#" className="block hover:text-white transition-colors">About</a>
                <a href="#features" className="block hover:text-white transition-colors">Features</a>
                <a href="#impact" className="block hover:text-white transition-colors">Impact</a>
                <a href="#" className="block hover:text-white transition-colors">Blog</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="/terms" className="block hover:text-white transition-colors">Legal</a>
                <a href="/privacy" className="block hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Heynia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

console.log("Index component defined, about to export...");

export default Index;
