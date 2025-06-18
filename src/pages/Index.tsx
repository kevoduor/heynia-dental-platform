
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

console.log("Index page component loading...");

const Index = () => {
  console.log("Index component rendering...");
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 optimized-scroll">
      {/* Navigation */}
      <nav className="border-b border-white/30 bg-white/95 backdrop-blur-xl sticky top-0 z-50 safe-area-top shadow-lg">
        <div className="container-responsive py-2 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="transition-transform hover:scale-105">
              <HeyniaLogo className="h-8 sm:h-12 md:h-16" variant="colorful" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-pink-600 transition-all duration-300 text-sm font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-slate-600 hover:text-purple-600 transition-all duration-300 text-sm font-medium relative group">
              Impact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('story')} className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium relative group">
              Our Story
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link to="/pricing" className="text-slate-600 hover:text-teal-600 transition-all duration-300 text-sm font-medium relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/testimonials" className="text-slate-600 hover:text-green-600 transition-all duration-300 text-sm font-medium relative group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:border-purple-300 hover:bg-purple-50 hover:shadow-lg transition-all duration-300">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              className="btn-mobile-friendly p-2 rounded-lg hover:bg-purple-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-purple-600" /> : <Menu className="w-6 h-6 text-purple-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-purple-200 bg-white/98 backdrop-blur-sm">
            <div className="container-responsive py-4 sm:py-6 space-y-4 sm:space-y-6">
              <button onClick={() => scrollToSection('features')} className="block py-2 sm:py-3 text-slate-600 hover:text-pink-600 transition-colors w-full text-left font-medium text-sm sm:text-base">Features</button>
              <button onClick={() => scrollToSection('impact')} className="block py-2 sm:py-3 text-slate-600 hover:text-purple-600 transition-colors w-full text-left font-medium text-sm sm:text-base">Impact</button>
              <button onClick={() => scrollToSection('story')} className="block py-2 sm:py-3 text-slate-600 hover:text-blue-600 transition-colors w-full text-left font-medium text-sm sm:text-base">Our Story</button>
              <Link to="/pricing" className="block py-2 sm:py-3 text-slate-600 hover:text-teal-600 transition-colors font-medium text-sm sm:text-base" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link to="/testimonials" className="block py-2 sm:py-3 text-slate-600 hover:text-green-600 transition-colors font-medium text-sm sm:text-base" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
              <div className="flex flex-col space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                <Button variant="outline" className="border-purple-200 text-purple-600 hover:border-purple-300 hover:bg-purple-50 btn-mobile-friendly">Sign In</Button>
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white btn-mobile-friendly">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23a855f7%22%20fill-opacity%3D%220.15%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-300 to-teal-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative container-responsive section-padding text-center max-w-6xl">
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-pink-200/80 to-purple-200/80 border border-pink-300/50 text-purple-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-pink-500" />
            ✨ For modern dental clinics
          </div>
          
          <h1 className="text-responsive-2xl sm:text-responsive-3xl font-bold mb-6 sm:mb-8 leading-tight">
            Organize your dental clinic,{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent animate-pulse">
              payments and team
            </span>{" "}
            in one place
          </h1>
          
          <p className="text-responsive-base sm:text-responsive-lg text-slate-700 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            🎨 All your tools. One Easy Place. Experience the future of dental practice management with beautiful, colorful design.
          </p>
          
          <div className="mb-8 sm:mb-12 max-w-2xl mx-auto">
            <AISearchWindow />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <Button size={isMobile ? "default" : "lg"} className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg border-2 border-white/30 btn-mobile-friendly">
              🚀 Start Free Trial
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 rotate-[-45deg]" />
            </Button>
            <Button variant="outline" size={isMobile ? "default" : "lg"} className="border-2 border-purple-300 text-purple-600 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:shadow-xl transition-all duration-300 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-white/90 backdrop-blur-sm btn-mobile-friendly">
              🎬 Watch Demo
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-600 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1 sm:gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
              💳 No credit card needed
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
              🔒 HIPAA-compliant
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
              ⏰ 14-day free trial
            </span>
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 sm:py-16 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 border-y border-purple-200">
        <div className="container-responsive">
          <p className="text-center text-purple-600 text-xs sm:text-sm font-medium mb-6 sm:mb-8">🌟 Trusted by dental practices worldwide</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 opacity-80">
            <div className="flex items-center space-x-2 bg-white/70 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg backdrop-blur-sm">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">⭐ 4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg backdrop-blur-sm">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">🛡️ HIPAA Ready</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg backdrop-blur-sm">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">👥 500+ Practices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container-responsive max-w-7xl">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-responsive-xl sm:text-responsive-2xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              🌈 All-in-one, and built for dentists like you.
            </h2>
            <p className="text-responsive-base sm:text-responsive-lg text-slate-700 max-w-4xl mx-auto font-light leading-relaxed">
              ✨ Heynia simplifies your entire practice—no steep learning curves, no tech headaches.
            </p>
          </div>

          <div className="grid-responsive-3 gap-responsive mb-16 sm:mb-20">
            {[
              {
                icon: Calendar,
                title: "📅 Automated Scheduling",
                description: "Fill your calendar, reduce no-shows with intelligent booking.",
                gradient: "from-blue-500 to-cyan-500",
                bg: "from-blue-100 to-cyan-100"
              },
              {
                icon: CreditCard,
                title: "💰 Smart Billing",
                description: "Collect payments faster, with less follow-up required.",
                gradient: "from-emerald-500 to-teal-500",
                bg: "from-emerald-100 to-teal-100"
              },
              {
                icon: BarChart3,
                title: "📊 Real-Time Analytics",
                description: "Understand what's working (and what's not) instantly.",
                gradient: "from-purple-500 to-violet-500",
                bg: "from-purple-100 to-violet-100"
              }
            ].map((feature, index) => (
              <Card key={index} className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br ${feature.bg} border-2 border-white/50`}>
                <CardContent className="card-padding">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-2xl`}>
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size={isMobile ? "default" : "lg"} className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 hover:from-pink-600 hover:via-purple-600 hover:to-violet-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 btn-mobile-friendly">
              🚀 Join the Early Access List
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 rotate-[-45deg]" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-xl sm:text-responsive-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-responsive-base sm:text-responsive-lg text-muted-foreground">
              Everything you need to know about Heynia dental practice management software
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                What makes Heynia the best cloud-based dental practice management software?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Heynia is a modern, cloud-based dental practice management software that combines all essential practice tools in one platform. Unlike traditional dental software, Heynia offers real-time access from anywhere, automatic updates, and seamless integration across all devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                Is Heynia HIPAA-compliant dental software for dentists?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Yes, Heynia is fully HIPAA-compliant dental software designed specifically for dentists. We implement industry-leading security measures, encrypted data transmission, and comprehensive audit trails to ensure patient data protection and regulatory compliance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 border-t py-8 sm:py-12 lg:py-16 px-4 safe-area-bottom">
        <div className="container-responsive max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-3 sm:mb-4">
                <Link to="/">
                  <HeyniaLogo className="h-5 sm:h-6 lg:h-8" variant="light" />
                </Link>
              </div>
              <p className="text-purple-200 text-xs sm:text-sm mb-3 sm:mb-4">
                🌈 Cloud-based dental practice management software with HIPAA compliance, AI-powered insights, and integrated billing for modern dental clinics.
              </p>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-purple-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>📧 hello@heynia.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>📞 +254 755 792 377</span>
                </div>
                <p>🏢 Hacienda, Oloitoktok Road, Kilimani, Nairobi</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-white">Product</h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                <button onClick={() => scrollToSection('features')} className="block hover:text-white transition-colors text-left">Features</button>
                <Link to="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-white">Company</h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                <Link to="/testimonials" className="block hover:text-white transition-colors">Testimonials</Link>
                <Link to="/terms" className="block hover:text-white transition-colors">Terms</Link>
                <Link to="/privacy" className="block hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-white">Support</h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                <button className="block hover:text-white transition-colors text-left">Help Center</button>
                <button className="block hover:text-white transition-colors text-left">Contact</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-700 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-purple-300 text-xs sm:text-sm">
                💜 made in nairobi with ❤️
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-xs sm:text-sm text-purple-300">
                <span>🔒 HIPAA-Ready</span>
                <span>☁️ Cloud-Based</span>
                <span>📱 Mobile-First</span>
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
