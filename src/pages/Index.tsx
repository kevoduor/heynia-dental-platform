import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Users, FileText, MessageSquare, ArrowDown, Check, Menu, X, Star, Building2, TrendingUp, Shield, Smartphone, BarChart3, CreditCard, Clock, Zap, Heart, Award, Mail, Phone, Cloud, Brain, Workflow, Globe, Sparkles, Bot, Activity } from "lucide-react";
import AISearchWindow from "@/components/AISearchWindow";
import HeyniaLogo from "@/components/HeyniaLogo";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useDocumentHead({
    title: "Cloud-Based Dental Practice Management Software | HIPAA-Compliant | Heynia",
    description: "Heynia is a HIPAA-compliant, cloud-based dental software with patient scheduling, billing, teledentistry, and AI-powered insights—built for small clinics and multi-location practices."
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <HeyniaLogo className="h-6 sm:h-8" variant="dark" />
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
              <button onClick={() => scrollToSection('features')} className="block py-2 text-muted-foreground hover:text-foreground transition-colors text-left w-full">Features</button>
              <button onClick={() => scrollToSection('impact')} className="block py-2 text-muted-foreground hover:text-foreground transition-colors text-left w-full">Impact</button>
              <button onClick={() => scrollToSection('story')} className="block py-2 text-muted-foreground hover:text-foreground transition-colors text-left w-full">Our Story</button>
              <Link to="/pricing" className="block py-2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link to="/testimonials" className="block py-2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="btn-mobile-friendly">Sign In</Button>
                <Button className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23a855f7%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            For modern dental clinics
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight max-w-5xl mx-auto">
            Organize your dental clinic,{" "}
            <span className="text-gradient">
              payments and team
            </span>{" "}
            in one place
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Get instant answers about your dental practice management - with text or images
          </p>
          
          <div className="mb-8 sm:mb-12 max-w-2xl mx-auto">
            <AISearchWindow />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 hover:opacity-90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg btn-mobile-friendly w-full sm:w-auto"
            >
              Start Free Trial
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 rotate-[-45deg]" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg btn-mobile-friendly w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="text-xs sm:text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              No credit card needed
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              14-day free trial
            </span>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-slate-50 to-blue-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-center text-muted-foreground text-sm font-medium mb-6 sm:mb-8">Trusted by dental practices worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <div className="flex items-center space-x-2 bg-white/70 px-3 sm:px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 px-3 sm:px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">500+ Practices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container-responsive text-center">
          <div className="mb-12 sm:mb-20">
            <h2 className="text-responsive-2xl font-bold mb-6 sm:mb-8 text-gradient">
              All-in-one, and built for dentists like you.
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Heynia simplifies your entire practice—no steep learning curves, no tech headaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {[
              {
                icon: Calendar,
                title: "Automated Scheduling",
                description: "Fill your calendar, reduce no-shows with intelligent booking.",
                gradient: "from-blue-500 to-cyan-500",
                bg: "from-blue-100 to-cyan-100"
              },
              {
                icon: CreditCard,
                title: "Smart Billing",
                description: "Collect payments faster, with less follow-up required.",
                gradient: "from-emerald-500 to-teal-500",
                bg: "from-emerald-100 to-teal-100"
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Understand what's working (and what's not) instantly.",
                gradient: "from-purple-500 to-violet-500",
                bg: "from-purple-100 to-violet-100"
              }
            ].map((feature, index) => (
              <Card key={index} className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${feature.bg} border border-white/50`}>
                <CardContent className="card-padding text-center">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button 
            size="lg" 
            className="gradient-primary text-white border-0 hover:opacity-90 px-6 sm:px-8 py-3 sm:py-4 btn-mobile-friendly"
          >
            Join the Early Access List
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 rotate-[-45deg]" />
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-6 sm:mb-8 text-gradient">
              Our Story
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            <Card className="text-center card-padding shadow-lg border border-purple-200/50 bg-gradient-to-br from-purple-100/50 to-pink-100/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800">Why we exist</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                At Heynia, we believe that technology should be a force for good—empowering businesses and helping shape a more just world. Our purpose (Nia, in Swahili) is to build tools that not only support dental professionals but also contribute to ending gender-based violence (GBV), a global crisis that affects 1 in 3 women in their lifetime.
              </p>
            </Card>

            <Card className="text-center card-padding shadow-lg border border-blue-200/50 bg-gradient-to-br from-blue-100/50 to-teal-100/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800">How we live our purpose</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We design intelligent, user-friendly software that helps dental practices grow with less stress and more efficiency. But just as importantly, we commit 10% of our annual revenue to organizations working on the frontlines to prevent GBV and support survivors. This mission is deeply personal and embedded in the way we operate.
              </p>
            </Card>

            <Card className="text-center card-padding shadow-lg border border-teal-200/50 bg-gradient-to-br from-teal-100/50 to-green-100/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800">What we offer</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Heynia is a modern, AI-powered platform built for dental practices that want to simplify their workflows, improve patient engagement, and grow sustainably. When you choose Heynia, you're not just getting powerful software—you're standing with a company that leads with purpose and gives back.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="section-padding bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="container-responsive text-center">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-6 sm:mb-8 text-gradient">
              Making a Real Impact
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Every subscription helps fund organizations fighting gender-based violence worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <Card className="text-center card-padding shadow-lg border border-green-200/50 bg-gradient-to-br from-green-100/50 to-teal-100/50">
              <div className="text-2xl sm:text-4xl font-bold text-green-600 mb-2">10%</div>
              <p className="text-xs sm:text-sm text-slate-600">of revenue donated to GBV prevention</p>
            </Card>
            <Card className="text-center card-padding shadow-lg border border-teal-200/50 bg-gradient-to-br from-teal-100/50 to-blue-100/50">
              <div className="text-2xl sm:text-4xl font-bold text-teal-600 mb-2">500+</div>
              <p className="text-xs sm:text-sm text-slate-600">dental practices using Heynia</p>
            </Card>
            <Card className="text-center card-padding shadow-lg border border-blue-200/50 bg-gradient-to-br from-blue-100/50 to-purple-100/50">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-2">35%</div>
              <p className="text-xs sm:text-sm text-slate-600">average reduction in no-shows</p>
            </Card>
            <Card className="text-center card-padding shadow-lg border border-purple-200/50 bg-gradient-to-br from-purple-100/50 to-pink-100/50">
              <div className="text-2xl sm:text-4xl font-bold text-purple-600 mb-2">3hrs</div>
              <p className="text-xs sm:text-sm text-slate-600">daily time savings per practice</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4 sm:mb-6 text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about Heynia dental practice management software
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-xl px-4 sm:px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-base sm:text-lg font-semibold">
                What makes Heynia the best cloud-based dental practice management software?
              </AccordionTrigger>
              <AccordionContent className="pb-4 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                Heynia is a modern, cloud-based dental practice management software that combines all essential practice tools in one platform. Unlike traditional dental software, Heynia offers real-time access from anywhere, automatic updates, AI-powered insights, and seamless integration across all devices with mobile access for dentists.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-200 rounded-xl px-4 sm:px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-base sm:text-lg font-semibold">
                Is Heynia HIPAA-compliant dental software for dentists?
              </AccordionTrigger>
              <AccordionContent className="pb-4 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                Yes, Heynia is fully HIPAA-compliant dental software designed specifically for dentists. We implement industry-leading security measures, encrypted data transmission, comprehensive audit trails, and integrated electronic health records to ensure patient data protection and regulatory compliance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-xl px-4 sm:px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-base sm:text-lg font-semibold">
                Does Heynia include dental practice management software with billing?
              </AccordionTrigger>
              <AccordionContent className="pb-4 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                Absolutely! Heynia includes comprehensive dental software with integrated revenue cycle management, insurance claim management, patient portal with online payments, and automated billing features. Our system streamlines the entire revenue cycle from appointment to payment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-200 rounded-xl px-4 sm:px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-base sm:text-lg font-semibold">
                Is Heynia suitable as dental software for multi-location clinics?
              </AccordionTrigger>
              <AccordionContent className="pb-4 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                Yes, Heynia is the best dental practice software for multi-location clinics. Our customizable dental practice management system offers centralized management, real-time analytics across all locations, and cloud dental software with seamless synchronization between multiple practices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-200 rounded-xl px-4 sm:px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-base sm:text-lg font-semibold">
                What scheduling and communication features does Heynia offer?
              </AccordionTrigger>
              <AccordionContent className="pb-4 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                Heynia includes comprehensive dental office software with patient scheduling, automated appointment reminders, dental software for improving patient communication, treatment plan management, and marketing automation tools. We also offer teledentistry features for remote consultations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-slate-200 rounded-xl px-4 sm:px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-base sm:text-lg font-semibold">
                Is Heynia affordable dental practice management software in the USA?
              </AccordionTrigger>
              <AccordionContent className="pb-4 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                Yes, Heynia is designed as affordable dental practice management software for practices of all sizes in the USA. We offer flexible pricing plans, making it perfect as dental practice software for small clinics while providing enterprise features for larger practices. Our dental practice management system with AI-powered insights delivers exceptional value.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4 sm:mb-6">
                <Link to="/">
                  <HeyniaLogo className="h-6 sm:h-8" variant="light" />
                </Link>
              </div>
              <p className="text-slate-400 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                Cloud-based dental practice management software with HIPAA compliance, AI-powered insights, and integrated billing for modern dental clinics.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>hello@heynia.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+254 755 792 377</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Product</h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                <button onClick={() => scrollToSection('features')} className="block hover:text-white transition-colors text-left">Features</button>
                <Link to="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
                <button className="block hover:text-white transition-colors text-left">Demo</button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Company</h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                <button onClick={() => scrollToSection('story')} className="block hover:text-white transition-colors text-left">Our Story</button>
                <button onClick={() => scrollToSection('impact')} className="block hover:text-white transition-colors text-left">Impact</button>
                <Link to="/testimonials" className="block hover:text-white transition-colors">Testimonials</Link>
                <Link to="/terms" className="block hover:text-white transition-colors">Terms</Link>
                <Link to="/privacy" className="block hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Support</h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                <button className="block hover:text-white transition-colors text-left">Help Center</button>
                <button className="block hover:text-white transition-colors text-left">Contact</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-6 sm:pt-8">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-slate-400 text-xs sm:text-sm text-center">
                made in nairobi with love
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
