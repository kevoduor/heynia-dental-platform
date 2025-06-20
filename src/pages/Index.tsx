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
      <nav className="border-b border-white/30 bg-white/95 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <Link to="/" className="transition-transform hover:scale-105">
                <HeyniaLogo className="h-8 sm:h-10 lg:h-12" variant="colorful" />
              </Link>
            </div>
            
            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <button onClick={() => scrollToSection('features')} className="text-slate-700 hover:text-pink-600 transition-colors font-medium relative group">
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button onClick={() => scrollToSection('impact')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium relative group">
                  Impact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button onClick={() => scrollToSection('story')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium relative group">
                  Our Story
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <Link to="/pricing" className="text-slate-700 hover:text-teal-600 transition-colors font-medium relative group">
                  Pricing
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/testimonials" className="text-slate-700 hover:text-green-600 transition-colors font-medium relative group">
                  Testimonials
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            {/* Desktop CTA Buttons - Right */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:border-purple-300 hover:bg-purple-50">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                className="p-2 rounded-lg hover:bg-purple-100 transition-colors"
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
              <div className="px-4 py-6 space-y-3">
                <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-slate-700 hover:text-pink-600 transition-colors font-medium">Features</button>
                <button onClick={() => scrollToSection('impact')} className="block w-full text-left py-2 text-slate-700 hover:text-purple-600 transition-colors font-medium">Impact</button>
                <button onClick={() => scrollToSection('story')} className="block w-full text-left py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">Our Story</button>
                <Link to="/pricing" className="block py-2 text-slate-700 hover:text-teal-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                <Link to="/testimonials" className="block py-2 text-slate-700 hover:text-green-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
                <div className="flex flex-col space-y-3 pt-4">
                  <Button variant="outline" className="border-purple-200 text-purple-600 hover:border-purple-300 hover:bg-purple-50">Sign In</Button>
                  <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white">Get Started</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23a855f7%22%20fill-opacity%3D%220.15%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-200/80 to-purple-200/80 border border-pink-300/50 text-purple-700 text-sm font-medium mb-8 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-pink-500" />
            ✨ For modern dental clinics
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
            Organize your dental clinic,{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
              payments and team
            </span>{" "}
            in one place
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get instant answers about your dental practice management - with text or images
          </p>
          
          <div className="mb-12 max-w-2xl mx-auto">
            <AISearchWindow />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 px-8 py-4 text-lg border-2 border-white/30"
            >
              🚀 Start Free Trial
              <ArrowDown className="w-5 h-5 ml-2 rotate-[-45deg]" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-purple-300 text-purple-600 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg bg-white/90 backdrop-blur-sm"
            >
              🎬 Watch Demo
            </Button>
          </div>
          
          <div className="text-sm text-slate-600 flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              💳 No credit card needed
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              🔒 HIPAA-compliant
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              ⏰ 14-day free trial
            </span>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 border-y border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-center text-purple-600 text-sm font-medium mb-8">🌟 Trusted by dental practices worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2 bg-white/70 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-slate-700">⭐ 4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-slate-700">🛡️ HIPAA Ready</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-slate-700">👥 500+ Practices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              All-in-one, and built for dentists like you.
            </h2>
            <p className="text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              ✨ Heynia simplifies your entire practice—no steep learning curves, no tech headaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mb-6 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-2xl mx-auto`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 hover:from-pink-600 hover:via-purple-600 hover:to-violet-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 px-8 py-4 border-2 border-white/30"
          >
            🚀 Join the Early Access List
            <ArrowDown className="w-5 h-5 ml-2 rotate-[-45deg]" />
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              🌟 Our Story
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="text-center p-8 shadow-xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-100/50 to-pink-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Why we exist</h3>
              <p className="text-slate-600 leading-relaxed">
                At Heynia, we believe that technology should be a force for good—empowering businesses and helping shape a more just world. Our purpose (Nia, in Swahili) is to build tools that not only support dental professionals but also contribute to ending gender-based violence (GBV), a global crisis that affects 1 in 3 women in their lifetime.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-xl border-2 border-blue-200/50 bg-gradient-to-br from-blue-100/50 to-teal-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">How we live our purpose</h3>
              <p className="text-slate-600 leading-relaxed">
                We design intelligent, user-friendly software that helps dental practices grow with less stress and more efficiency. But just as importantly, we commit 10% of our annual revenue to organizations working on the frontlines to prevent GBV and support survivors. This mission is deeply personal and embedded in the way we operate.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-xl border-2 border-teal-200/50 bg-gradient-to-br from-teal-100/50 to-green-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">What we offer</h3>
              <p className="text-slate-600 leading-relaxed">
                Heynia is a modern, AI-powered platform built for dental practices that want to simplify their workflows, improve patient engagement, and grow sustainably. When you choose Heynia, you're not just getting powerful software—you're standing with a company that leads with purpose and gives back.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 lg:py-32 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              💚 Making a Real Impact
            </h2>
            <p className="text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Every subscription helps fund organizations fighting gender-based violence worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-lg border-2 border-green-200/50 bg-gradient-to-br from-green-100/50 to-teal-100/50">
              <div className="text-4xl font-bold text-green-600 mb-2">10%</div>
              <p className="text-sm text-slate-600">of revenue donated to GBV prevention</p>
            </Card>
            <Card className="text-center p-6 shadow-lg border-2 border-teal-200/50 bg-gradient-to-br from-teal-100/50 to-blue-100/50">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <p className="text-sm text-slate-600">dental practices using Heynia</p>
            </Card>
            <Card className="text-center p-6 shadow-lg border-2 border-blue-200/50 bg-gradient-to-br from-blue-100/50 to-purple-100/50">
              <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
              <p className="text-sm text-slate-600">average reduction in no-shows</p>
            </Card>
            <Card className="text-center p-6 shadow-lg border-2 border-purple-200/50 bg-gradient-to-br from-purple-100/50 to-pink-100/50">
              <div className="text-4xl font-bold text-purple-600 mb-2">3hrs</div>
              <p className="text-sm text-slate-600">daily time savings per practice</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about Heynia dental practice management software
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-xl px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                What makes Heynia the best cloud-based dental practice management software?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600 leading-relaxed">
                Heynia is a modern, cloud-based dental practice management software that combines all essential practice tools in one platform. Unlike traditional dental software, Heynia offers real-time access from anywhere, automatic updates, AI-powered insights, and seamless integration across all devices with mobile access for dentists.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-200 rounded-xl px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                Is Heynia HIPAA-compliant dental software for dentists?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600 leading-relaxed">
                Yes, Heynia is fully HIPAA-compliant dental software designed specifically for dentists. We implement industry-leading security measures, encrypted data transmission, comprehensive audit trails, and integrated electronic health records to ensure patient data protection and regulatory compliance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-xl px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                Does Heynia include dental practice management software with billing?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600 leading-relaxed">
                Absolutely! Heynia includes comprehensive dental software with integrated revenue cycle management, insurance claim management, patient portal with online payments, and automated billing features. Our system streamlines the entire revenue cycle from appointment to payment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-200 rounded-xl px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                Is Heynia suitable as dental software for multi-location clinics?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600 leading-relaxed">
                Yes, Heynia is the best dental practice software for multi-location clinics. Our customizable dental practice management system offers centralized management, real-time analytics across all locations, and cloud dental software with seamless synchronization between multiple practices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-200 rounded-xl px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                What scheduling and communication features does Heynia offer?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600 leading-relaxed">
                Heynia includes comprehensive dental office software with patient scheduling, automated appointment reminders, dental software for improving patient communication, treatment plan management, and marketing automation tools. We also offer teledentistry features for remote consultations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-slate-200 rounded-xl px-6 bg-slate-50/50 shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                Is Heynia affordable dental practice management software in the USA?
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-600 leading-relaxed">
                Yes, Heynia is designed as affordable dental practice management software for practices of all sizes in the USA. We offer flexible pricing plans, making it perfect as dental practice software for small clinics while providing enterprise features for larger practices. Our dental practice management system with AI-powered insights delivers exceptional value.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 border-t py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <Link to="/">
                  <HeyniaLogo className="h-8" variant="light" />
                </Link>
              </div>
              <p className="text-purple-200 text-sm mb-4 leading-relaxed">
                Cloud-based dental practice management software with HIPAA compliance, AI-powered insights, and integrated billing for modern dental clinics.
              </p>
              <div className="space-y-2 text-sm text-purple-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>📧 hello@heynia.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>📞 +254 755 792 377</span>
                </div>
                <p>🏢 Hacienda, Oloitoktok Road, Kilimani, Nairobi</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <button onClick={() => scrollToSection('features')} className="block hover:text-white transition-colors text-left">Features</button>
                <Link to="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
                <button className="block hover:text-white transition-colors text-left">Demo</button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <button onClick={() => scrollToSection('story')} className="block hover:text-white transition-colors text-left">Our Story</button>
                <button onClick={() => scrollToSection('impact')} className="block hover:text-white transition-colors text-left">Impact</button>
                <Link to="/testimonials" className="block hover:text-white transition-colors">Testimonials</Link>
                <Link to="/terms" className="block hover:text-white transition-colors">Terms</Link>
                <Link to="/privacy" className="block hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <button className="block hover:text-white transition-colors text-left">Help Center</button>
                <button className="block hover:text-white transition-colors text-left">Contact</button>
                <button className="block hover:text-white transition-colors text-left">HIPAA Compliance</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-700 pt-8">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-purple-300 text-sm text-center">
                💜 made in nairobi with ❤️
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
