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
        {/* Animated Background */}
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
          
          {/* AI Search Window */}
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

      {/* Problem Section */}
      <section id="problem" className="section-padding bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container-responsive max-w-7xl">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-responsive-xl sm:text-responsive-2xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              😰 You didn't become a dentist to manage chaos.
            </h2>
            <p className="text-responsive-base sm:text-responsive-lg text-slate-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 font-light">
              Every day, you're overwhelmed by reschedules, billing headaches, and disconnected tools. The result? Lost time, lost revenue, and growing burnout.
            </p>
            <p className="text-responsive-base sm:text-responsive-lg text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
              🌈 Heynia changes that—bringing everything you need to run your practice into one simple, intelligent platform.
            </p>
          </div>

          <div className="grid-responsive-4 gap-responsive mb-12 sm:mb-16">
            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-red-100 via-pink-100 to-rose-100">
              <CardContent className="card-padding text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-red-200 to-pink-300 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                  <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
                </div>
                <h3 className="font-bold mb-3 text-base sm:text-lg text-slate-800">📅 Missed appointments & cancellations</h3>
                <p className="text-slate-600 text-sm leading-relaxed">💸 Lost revenue from no-shows and last-minute changes</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:-rotate-1 bg-gradient-to-br from-orange-100 via-yellow-100 to-amber-100">
              <CardContent className="card-padding text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-orange-200 to-yellow-300 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                  <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
                </div>
                <h3 className="font-bold mb-3 text-base sm:text-lg text-slate-800">💳 Complex billing & insurance delays</h3>
                <p className="text-slate-600 text-sm leading-relaxed">⏰ Hours spent on paperwork instead of patient care</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-yellow-100 via-green-100 to-emerald-100">
              <CardContent className="card-padding text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-yellow-200 to-green-300 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                  <Workflow className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-3 text-base sm:text-lg text-slate-800">🔗 Disconnected tools that don't talk</h3>
                <p className="text-slate-600 text-sm leading-relaxed">📊 Data scattered across multiple platforms</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:-rotate-1 bg-gradient-to-br from-green-100 via-blue-100 to-cyan-100">
              <CardContent className="card-padding text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                </div>
                <h3 className="font-bold mb-3 text-base sm:text-lg text-slate-800">⏱️ Hours wasted on manual admin</h3>
                <p className="text-slate-600 text-sm leading-relaxed">👩‍⚕️ Time that could be spent with patients</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size={isMobile ? "default" : "lg"} className="bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 hover:from-emerald-500 hover:via-teal-600 hover:to-blue-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 btn-mobile-friendly">
              ✨ See How Heynia Works
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Colorful Background Elements */}
        <div className="absolute top-0 left-0 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative container-responsive max-w-7xl">
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
                bg: "from-blue-100 to-cyan-100",
                emoji: "🗓️"
              },
              {
                icon: CreditCard,
                title: "💰 Smart Billing",
                description: "Collect payments faster, with less follow-up required.",
                gradient: "from-emerald-500 to-teal-500",
                bg: "from-emerald-100 to-teal-100",
                emoji: "💳"
              },
              {
                icon: BarChart3,
                title: "📊 Real-Time Analytics",
                description: "Understand what's working (and what's not) instantly.",
                gradient: "from-purple-500 to-violet-500",
                bg: "from-purple-100 to-violet-100",
                emoji: "📈"
              },
              {
                icon: Cloud,
                title: "☁️ Cloud-Based Access",
                description: "Access your practice data anywhere, anytime—no servers required.",
                gradient: "from-cyan-500 to-blue-500",
                bg: "from-cyan-100 to-blue-100",
                emoji: "🌤️"
              },
              {
                icon: Smartphone,
                title: "📱 Mobile-First Design",
                description: "Manage your practice on the go with our intuitive mobile app.",
                gradient: "from-orange-500 to-red-500",
                bg: "from-orange-100 to-red-100",
                emoji: "📲"
              },
              {
                icon: Shield,
                title: "🛡️ HIPAA-Ready, OSHA-Aware",
                description: "Built for total peace of mind with enterprise-grade security.",
                gradient: "from-indigo-500 to-purple-500",
                bg: "from-indigo-100 to-purple-100",
                emoji: "🔒"
              }
            ].map((feature, index) => (
              <Card key={index} className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br ${feature.bg} border-2 border-white/50`}>
                <CardContent className="card-padding">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-2xl`}>
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{feature.emoji} {feature.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden border-0 shadow-2xl mb-12 sm:mb-16 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 border-4 border-white/30">
            <CardContent className="p-8 sm:p-12 text-center text-white relative z-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.2\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
              <blockquote className="text-lg sm:text-2xl font-light italic mb-4 relative z-10">
                "💫 It's like having a full-time office manager in your pocket."
              </blockquote>
              <p className="text-violet-200 font-medium relative z-10">👩‍⚕️ Dr. Sarah Chen, DDS</p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size={isMobile ? "default" : "lg"} className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 hover:from-pink-600 hover:via-purple-600 hover:to-violet-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 btn-mobile-friendly">
              🚀 Join the Early Access List
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 rotate-[-45deg]" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section id="impact" className="section-padding">
        <div className="container-responsive max-w-4xl text-center">
          <h2 className="text-responsive-xl sm:text-responsive-2xl font-bold mb-6">
            A practice management app with a purpose.
          </h2>
          <p className="text-responsive-base sm:text-responsive-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Every Heynia subscription helps fund education, support, and advocacy to end gender-based violence.
          </p>
          <p className="text-responsive-base sm:text-responsive-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
            When you choose Heynia, you're not just upgrading your business, you're standing for something bigger.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center mb-8 sm:mb-12">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-lg sm:text-xl lg:text-2xl">🧩</span>
              <span className="text-sm sm:text-base lg:text-lg font-medium">10% of profits fund gender justice initiatives</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-500" />
              <span className="text-sm sm:text-base lg:text-lg font-medium">Powered by purpose. Built with heart.</span>
            </div>
          </div>

          <Button size={isMobile ? "default" : "lg"} className="btn-glow-accent btn-mobile-friendly">
            Join the Movement
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-padding bg-gradient-to-br from-muted/20 to-background">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-xl sm:text-responsive-2xl font-bold mb-6 sm:mb-8">
              Our Story
            </h2>
            
            <div className="text-left max-w-3xl mx-auto space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">Why we exist</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  At Heynia, we believe that technology should be a force for good—empowering businesses and helping shape a more just world.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
                  Our purpose (Nia, in Swahili) is to build tools that not only support dental professionals but also contribute to ending gender-based violence (GBV), a global crisis that affects 1 in 3 women in their lifetime.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">How we live our purpose</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  We design intelligent, user-friendly software that helps dental practices grow with less stress and more efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
                  But just as importantly, we commit 10% of our annual revenue to organizations working on the frontlines to prevent GBV and support survivors.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
                  This mission is deeply personal and embedded in the way we operate.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">What we offer</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Heynia is a modern, AI-powered platform built for dental practices that want to simplify their workflows, improve patient engagement, and grow sustainably.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
                  When you choose Heynia, you're not just getting powerful software—you're standing with a company that leads with purpose and gives back.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <span className="font-medium text-sm sm:text-base">HIPAA-Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="font-medium text-sm sm:text-base">Affordable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                <span className="font-medium text-sm sm:text-base">Designed for dentists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding">
        <div className="container-responsive max-w-4xl text-center">
          <h2 className="text-responsive-xl sm:text-responsive-2xl font-bold mb-6">
            Clarity. Growth. Purpose. All in one app.
          </h2>
          <p className="text-responsive-base sm:text-responsive-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
            Dentists across the globe are tired of juggling tools that don't fit together. Heynia is here to change that—and turn your practice into a platform for impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button size={isMobile ? "default" : "lg"} className="btn-glow-primary btn-mobile-friendly">
              Get Early Access
            </Button>
            <Button size={isMobile ? "default" : "lg"} className="btn-glow-secondary btn-mobile-friendly">
              Watch the Demo
            </Button>
            <Button size={isMobile ? "default" : "lg"} className="btn-glow-accent btn-mobile-friendly">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Community & Advocacy Section */}
      <section className="section-padding bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container-responsive max-w-4xl text-center">
          <h2 className="text-responsive-xl sm:text-responsive-2xl font-bold mb-6 sm:mb-8">
            We're not just building software. We're building a community.
          </h2>
          
          <div className="grid-responsive-3 gap-responsive-sm mb-8 sm:mb-12">
            <Card className="card-padding hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3">Get the Dentistry with Purpose newsletter</h3>
            </Card>
            <Card className="card-padding hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3">Share your journey and get featured</h3>
            </Card>
            <Card className="card-padding hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group gpu-accelerated">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3">Refer a friend → Both of you get 1 free month</h3>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button size={isMobile ? "default" : "lg"} className="btn-glow-secondary btn-mobile-friendly">
              Subscribe to Newsletter
            </Button>
            <Button size={isMobile ? "default" : "lg"} className="btn-glow-accent btn-mobile-friendly">
              Invite a Colleague
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

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                Does Heynia include dental practice management software with billing features?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Absolutely! Heynia includes comprehensive dental practice management software with billing capabilities, featuring automated invoicing, payment processing, insurance claim management, and detailed financial reporting to streamline your revenue cycle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                How does Heynia's integrated revenue cycle management work?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Our dental software with integrated revenue cycle management automates billing workflows, tracks claims in real-time, manages patient payments, and provides detailed analytics to optimize your practice's financial performance from appointment to payment collection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                What patient scheduling features does Heynia dental office software offer?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Heynia's dental office software with patient scheduling includes online booking, automated appointment reminders, calendar synchronization, waitlist management, and intelligent scheduling optimization to reduce no-shows and maximize your appointment book.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                Does Heynia support teledentistry features?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Yes, Heynia includes dental software with teledentistry features, enabling secure video consultations, remote patient monitoring, digital treatment planning, and virtual follow-ups to expand your practice's reach and improve patient care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                Is Heynia suitable for multi-location dental clinics?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Heynia is the best dental practice software for multi-location clinics, offering centralized management, cross-location scheduling, unified reporting, and role-based access controls to efficiently manage multiple practice locations from one dashboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                How do automated appointment reminders work in Heynia?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Our dental software with automated appointment reminders sends customizable SMS, email, and voice reminders to patients, reducing no-shows by up to 40% and allowing patients to confirm, reschedule, or cancel appointments directly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                What insurance claim management features are included?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Heynia's dental software with insurance claim management includes electronic claim submission, real-time claim tracking, automated follow-ups, denial management, and integration with major insurance networks to maximize reimbursements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                How customizable is Heynia's dental practice management system?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Heynia offers a highly customizable dental practice management system with configurable workflows, custom forms, personalized dashboards, flexible reporting, and adaptable user interfaces to match your unique practice needs and preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                How does Heynia improve patient communication?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Our dental software for improving patient communication includes automated messaging, patient portals, treatment plan sharing, educational content delivery, and two-way communication tools to enhance patient engagement and satisfaction.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                Can I access Heynia on mobile devices?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Yes, Heynia provides dental software with mobile access for dentists, featuring responsive design and dedicated mobile apps that allow you to manage your practice, view schedules, access patient records, and communicate with your team from anywhere.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 border-t py-8 sm:py-12 lg:py-16 px-4 safe-area-bottom">
        <div className="container-responsive max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Company Info */}
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
            
            {/* Product */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                <button onClick={() => scrollToSection('features')} className="block hover:text-white transition-colors text-left">Features</button>
                <Link to="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
                <button className="block hover:text-white transition-colors text-left">Demo</button>
                <button className="block hover:text-white transition-colors text-left">API</button>
                <button className="block hover:text-white transition-colors text-left">Integrations</button>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Solutions</h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                <button className="block hover:text-white transition-colors text-left">Small Clinics</button>
                <button className="block hover:text-white transition-colors text-left">Multi-Location Practices</button>
                <button className="block hover:text-white transition-colors text-left">Teledentistry</button>
                <button className="block hover:text-white transition-colors text-left">Patient Portal</button>
                <button className="block hover:text-white transition-colors text-left">Mobile Access</button>
              </div>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support & Legal</h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-400">
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
          <div className="border-t border-purple-700 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-purple-300 text-xs sm:text-sm">
                💜 made in nairobi with ❤️
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-xs sm:text-sm text-purple-300">
                <span>🔒 HIPAA-Ready</span>
                <span>☁️ Cloud-Based</span>
                <span className="mobile-tablet-only">📱 Mobile-First</span>
                <span className="desktop-only">📱 Mobile-First</span>
                <span className="desktop-only">🤖 AI-Powered</span>
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
