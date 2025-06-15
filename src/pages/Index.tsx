
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Users, FileText, MessageSquare, ArrowDown, Check, Menu, X, Star, Building2, TrendingUp, Shield, Smartphone, BarChart3, CreditCard, Clock, Zap, Heart, Award, Mail, Phone, Cloud, Brain, Workflow, Globe, Sparkles, Bot, Activity } from "lucide-react";
import AISearchWindow from "@/components/AISearchWindow";
import HeyniaLogo from "@/components/HeyniaLogo";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { useState } from "react";
import { Link } from "react-router-dom";

console.log("Index page component loading...");

const Index = () => {
  console.log("Index component rendering...");
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useDocumentHead({
    title: "Cloud-Based Dental Practice Management Software | HIPAA-Compliant | Heynia",
    description: "Heynia is a HIPAA-compliant, cloud-based dental software with patient scheduling, billing, teledentistry, and AI-powered insights—built for small clinics and multi-location practices."
  });

  console.log("About to render JSX...");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background optimized-scroll">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50 safe-area-top">
        <div className="container-responsive py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <HeyniaLogo className="h-6 sm:h-8" variant="colorful" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Features</button>
            <button onClick={() => scrollToSection('impact')} className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Impact</button>
            <button onClick={() => scrollToSection('story')} className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Our Story</button>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Pricing</Link>
            <Link to="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Testimonials</Link>
            <Button variant="outline" size="sm" className="btn-mobile-friendly">Sign In</Button>
            <Button className="btn-glow-primary btn-mobile-friendly" size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              className="btn-mobile-friendly p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur-sm">
            <div className="container-responsive py-4 space-y-4">
              <button onClick={() => scrollToSection('features')} className="block py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left">Features</button>
              <button onClick={() => scrollToSection('impact')} className="block py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left">Impact</button>
              <button onClick={() => scrollToSection('story')} className="block py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left">Our Story</button>
              <Link to="/pricing" className="block py-2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link to="/testimonials" className="block py-2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="btn-mobile-friendly">Sign In</Button>
                <Button className="btn-glow-primary btn-mobile-friendly">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-responsive text-center max-w-5xl">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            For modern dental clinics
          </div>
          <h1 className="text-responsive-3xl font-bold mb-4 sm:mb-6 leading-tight">
            Organize your dental clinic, payments and team in{" "}
            <span className="text-gradient">one place</span>
          </h1>
          <p className="text-responsive-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            All your tools. One Easy Place
          </p>
          
          {/* AI Search Window */}
          <div className="mb-6 sm:mb-8">
            <AISearchWindow />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="btn-glow-primary btn-mobile-friendly">
              Sign Up Now
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-red-100 to-red-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Missed appointments & cancellations</h3>
            </Card>
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Complex billing and insurance delays</h3>
            </Card>
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Workflow className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Disconnected tools that don't talk to each other</h3>
            </Card>
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-red-100 to-red-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Hours wasted on manual admin</h3>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="btn-glow-secondary btn-mobile-friendly">
              See How Heynia Works
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: The Solution */}
      <section id="features" className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container-responsive max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-4">
              All-in-one, and built for dentists like you.
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
              Heynia simplifies your entire practice—no steep learning curves, no tech headaches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Automated Scheduling</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Fill your calendar, reduce no-shows.</p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Smart Billing</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Collect payments faster, with less follow-up.</p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Real-Time Analytics</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Understand what's working (and what's not).</p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Cloud-Based Access</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Access your practice data anywhere, anytime—no servers required.</p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Mobile-First Design</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Manage your practice on the go.</p>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">HIPAA-Ready, OSHA-Aware</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Built for total peace of mind.</p>
            </Card>
          </div>

          <Card className="p-6 sm:p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center mb-8">
            <blockquote className="text-lg sm:text-xl font-medium italic">
              "It's like having a full-time office manager in your pocket."
            </blockquote>
          </Card>

          <div className="text-center">
            <Button size="lg" className="btn-glow-primary btn-mobile-friendly">
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
            Every Heynia subscription helps fund education, support, and advocacy to end gender-based violence.
          </p>
          <p className="text-responsive-lg text-muted-foreground mb-12 leading-relaxed">
            When you choose Heynia, you're not just upgrading your business, you're standing for something bigger.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-12">
            <div className="flex items-center space-x-3">
              <span className="text-xl sm:text-2xl">🧩</span>
              <span className="text-base sm:text-lg font-medium">10% of profits fund gender justice initiatives</span>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              <span className="text-base sm:text-lg font-medium">Powered by purpose. Built with heart.</span>
            </div>
          </div>

          <Button size="lg" className="btn-glow-accent btn-mobile-friendly">
            Join the Movement
          </Button>
        </div>
      </section>

      {/* Section 4: Our Story */}
      <section id="story" className="section-padding bg-gradient-to-br from-muted/20 to-background">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-8">
              Our Story
            </h2>
            
            <div className="text-left max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Why we exist</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Heynia, we believe that technology should be a force for good—empowering businesses and helping shape a more just world.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our purpose (Nia, in Swahili) is to build tools that not only support dental professionals but also contribute to ending gender-based violence (GBV), a global crisis that affects 1 in 3 women in their lifetime.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">How we live our purpose</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We design intelligent, user-friendly software that helps dental practices grow with less stress and more efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  But just as importantly, we commit 10% of our annual revenue to organizations working on the frontlines to prevent GBV and support survivors.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This mission is deeply personal and embedded in the way we operate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">What we offer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Heynia is a modern, AI-powered platform built for dental practices that want to simplify their workflows, improve patient engagement, and grow sustainably.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  When you choose Heynia, you're not just getting powerful software—you're standing with a company that leads with purpose and gives back.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium">HIPAA-Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Affordable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Designed for dentists</span>
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
            <Button size="lg" className="btn-glow-primary btn-mobile-friendly">
              Get Early Access
            </Button>
            <Button size="lg" className="btn-glow-secondary btn-mobile-friendly">
              Watch the Demo
            </Button>
            <Button size="lg" className="btn-glow-accent btn-mobile-friendly">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Community & Advocacy */}
      <section className="section-padding bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container-responsive max-w-4xl text-center">
          <h2 className="text-responsive-2xl font-bold mb-8">
            We're not just building software. We're building a community.
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Get the Dentistry with Purpose newsletter</h3>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Share your journey and get featured</h3>
            </Card>
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Refer a friend → Both of you get 1 free month</h3>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-glow-secondary btn-mobile-friendly">
              Subscribe to Newsletter
            </Button>
            <Button size="lg" className="btn-glow-accent btn-mobile-friendly">
              Invite a Colleague
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-responsive-lg text-muted-foreground">
              Everything you need to know about Heynia dental practice management software
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What makes Heynia the best cloud-based dental practice management software?
              </AccordionTrigger>
              <AccordionContent>
                Heynia is a modern, cloud-based dental practice management software that combines all essential practice tools in one platform. Unlike traditional dental software, Heynia offers real-time access from anywhere, automatic updates, and seamless integration across all devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Is Heynia HIPAA-compliant dental software for dentists?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Heynia is fully HIPAA-compliant dental software designed specifically for dentists. We implement industry-leading security measures, encrypted data transmission, and comprehensive audit trails to ensure patient data protection and regulatory compliance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Does Heynia include dental practice management software with billing features?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Heynia includes comprehensive dental practice management software with billing capabilities, featuring automated invoicing, payment processing, insurance claim management, and detailed financial reporting to streamline your revenue cycle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                How does Heynia's integrated revenue cycle management work?
              </AccordionTrigger>
              <AccordionContent>
                Our dental software with integrated revenue cycle management automates billing workflows, tracks claims in real-time, manages patient payments, and provides detailed analytics to optimize your practice's financial performance from appointment to payment collection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What patient scheduling features does Heynia dental office software offer?
              </AccordionTrigger>
              <AccordionContent>
                Heynia's dental office software with patient scheduling includes online booking, automated appointment reminders, calendar synchronization, waitlist management, and intelligent scheduling optimization to reduce no-shows and maximize your appointment book.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Does Heynia support teledentistry features?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Heynia includes dental software with teledentistry features, enabling secure video consultations, remote patient monitoring, digital treatment planning, and virtual follow-ups to expand your practice's reach and improve patient care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                Is Heynia suitable for multi-location dental clinics?
              </AccordionTrigger>
              <AccordionContent>
                Heynia is the best dental practice software for multi-location clinics, offering centralized management, cross-location scheduling, unified reporting, and role-based access controls to efficiently manage multiple practice locations from one dashboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                How do automated appointment reminders work in Heynia?
              </AccordionTrigger>
              <AccordionContent>
                Our dental software with automated appointment reminders sends customizable SMS, email, and voice reminders to patients, reducing no-shows by up to 40% and allowing patients to confirm, reschedule, or cancel appointments directly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">
                What insurance claim management features are included?
              </AccordionTrigger>
              <AccordionContent>
                Heynia's dental software with insurance claim management includes electronic claim submission, real-time claim tracking, automated follow-ups, denial management, and integration with major insurance networks to maximize reimbursements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">
                How customizable is Heynia's dental practice management system?
              </AccordionTrigger>
              <AccordionContent>
                Heynia offers a highly customizable dental practice management system with configurable workflows, custom forms, personalized dashboards, flexible reporting, and adaptable user interfaces to match your unique practice needs and preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="text-left">
                How does Heynia improve patient communication?
              </AccordionTrigger>
              <AccordionContent>
                Our dental software for improving patient communication includes automated messaging, patient portals, treatment plan sharing, educational content delivery, and two-way communication tools to enhance patient engagement and satisfaction.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="text-left">
                Can I access Heynia on mobile devices?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Heynia provides dental software with mobile access for dentists, featuring responsive design and dedicated mobile apps that allow you to manage your practice, view schedules, access patient records, and communicate with your team from anywhere.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 sm:py-16 px-4 safe-area-bottom">
        <div className="container-responsive max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <Link to="/">
                  <HeyniaLogo className="h-6 sm:h-8" variant="light" />
                </Link>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Cloud-based dental practice management software with HIPAA compliance, AI-powered insights, and integrated billing for modern dental clinics.
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
            
            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <button onClick={() => scrollToSection('features')} className="block hover:text-white transition-colors text-left">Features</button>
                <Link to="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
                <button className="block hover:text-white transition-colors text-left">Demo</button>
                <button className="block hover:text-white transition-colors text-left">API</button>
                <button className="block hover:text-white transition-colors text-left">Integrations</button>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <button className="block hover:text-white transition-colors text-left">Small Clinics</button>
                <button className="block hover:text-white transition-colors text-left">Multi-Location Practices</button>
                <button className="block hover:text-white transition-colors text-left">Teledentistry</button>
                <button className="block hover:text-white transition-colors text-left">Patient Portal</button>
                <button className="block hover:text-white transition-colors text-left">Mobile Access</button>
              </div>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="font-semibold mb-4">Support & Legal</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <button onClick={() => scrollToSection('impact')} className="block hover:text-white transition-colors text-left">About</button>
                <button className="block hover:text-white transition-colors text-left">Blog</button>
                <button className="block hover:text-white transition-colors text-left">Help Center</button>
                <button className="block hover:text-white transition-colors text-left">Contact</button>
                <Link to="/terms" className="block hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/privacy" className="block hover:text-white transition-colors">Privacy Policy</Link>
                <button className="block hover:text-white transition-colors text-left">HIPAA Compliance</button>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                made in nairobi with ❤️
              </p>
              <div className="flex space-x-6 text-sm text-slate-400">
                <span>🔒 HIPAA-Ready</span>
                <span>☁️ Cloud-Based</span>
                <span>📱 Mobile-First</span>
                <span>🤖 AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

console.log("Index component defined, about to export...");

export default Index;
