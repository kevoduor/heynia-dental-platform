import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, FileText, MessageSquare, ArrowDown, Check, Menu, X } from "lucide-react";
import AISearchWindow from "@/components/AISearchWindow";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useDocumentHead({
    title: "Cloud-Based Dental Practice Management Software | HIPAA-Compliant | Heynia",
    description: "Heynia is a HIPAA-compliant, cloud-based dental software with patient scheduling, billing, teledentistry, and AI-powered insights—built for small clinics and multi-location practices."
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 safe-area-top">
        <div className="container-responsive py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/14b77d53-83bf-488d-8ca7-a80bee137662.png" 
              alt="heynia logo" 
              className="h-6 sm:h-8 w-auto brightness-0 invert"
            />
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
            Streamline your dental practice with intelligent scheduling, automated billing, and powerful analytics—all while supporting a meaningful cause.
          </p>
          
          {/* AI Search Window */}
          <div className="mb-4 max-w-2xl mx-auto">
            <AISearchWindow />
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-12 sm:mb-16">No login required</p>
          
          <div className="mt-12 sm:mt-16 relative">
            <div className="bg-white rounded-xl shadow-2xl card-padding max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="card-padding text-center">
                    <Calendar className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-semibold mb-2 text-sm sm:text-base">Smart Scheduling</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">AI-powered appointment management</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="card-padding text-center">
                    <FileText className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-semibold mb-2 text-sm sm:text-base">Automated Billing</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Streamlined payment processing</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm sm:col-span-2 lg:col-span-1">
                  <CardContent className="card-padding text-center">
                    <Users className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-semibold mb-2 text-sm sm:text-base">Team Management</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Collaborate seamlessly</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding" id="problem">
        <div className="container-responsive max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4 sm:mb-6">You didn't become a dentist to manage chaos.</h2>
            <p className="text-responsive-lg text-muted-foreground max-w-4xl mx-auto mb-4 sm:mb-6 leading-relaxed">
              Every day, you're overwhelmed by reschedules, billing headaches, and disconnected tools. 
              The result? Lost time, lost revenue, and growing burnout.
            </p>
            <p className="text-responsive-lg font-semibold text-primary max-w-4xl mx-auto">
              Heynia changes that—bringing everything you need to run your practice into one simple, intelligent platform.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="card-padding">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Missed appointments & cancellations</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Lost revenue from no-shows and last-minute changes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="card-padding">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Complex billing and insurance delays</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Hours spent chasing payments and handling claims</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="card-padding">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Disconnected tools that don't talk</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Juggling multiple systems that don't integrate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="card-padding">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Hours wasted on manual admin</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Time that could be spent with patients</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white btn-mobile-friendly">
              See How Heynia Works
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-teal-50" id="features">
        <div className="container-responsive max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4">All-in-one, and built for dentists like you.</h2>
            <p className="text-responsive-lg text-muted-foreground">
              Heynia simplifies your entire practice—no steep learning curves, no tech headaches.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="card-padding">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">🗓 Automated Scheduling</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Fill your calendar, reduce no-shows.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="card-padding">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">💸 Smart Billing</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Collect payments faster, with less follow-up.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="card-padding">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">📊 Real-Time Analytics</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Understand what's working (and what's not).</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="card-padding">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">📱 Mobile-First Design</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Manage your practice on the go.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="card-padding">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">🔐 HIPAA-Ready</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Built for total peace of mind.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="card-padding">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">⚡ OSHA-Aware</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Compliance made simple.</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-white border-0 shadow-lg max-w-3xl mx-auto mb-6 sm:mb-8">
            <CardContent className="card-padding text-center">
              <blockquote className="text-lg sm:text-xl italic text-muted-foreground mb-4">
                "It's like having a full-time office manager in your pocket."
              </blockquote>
              <cite className="text-sm font-medium">— Dr. Sarah Chen, DDS</cite>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 px-6 sm:px-8 btn-mobile-friendly">
              Join the Early Access List
            </Button>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section-padding" id="impact">
        <div className="container-responsive max-w-5xl text-center">
          <h2 className="text-responsive-2xl font-bold mb-6 sm:mb-8">A practice management app with a purpose.</h2>
          <p className="text-responsive-lg text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto">
            Every Heynia subscription helps fund education, support, and advocacy to end gender-based violence. 
            Our founder lost his sister to GBV. That pain fuels our purpose.
          </p>
          <p className="text-responsive-lg font-semibold mb-8 sm:mb-12 text-primary">
            When you grow with Heynia, you're not just upgrading your business—you're standing for something bigger.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="card-padding text-center">
                <div className="text-3xl sm:text-4xl mb-4">🧩</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">10% of profits fund gender justice initiatives</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Every subscription makes a real difference</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-teal-50">
              <CardContent className="card-padding text-center">
                <div className="text-3xl sm:text-4xl mb-4">🩵</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Powered by purpose. Built with heart.</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Technology that creates positive change</p>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="gradient-secondary text-white border-0 hover:opacity-90 btn-mobile-friendly">
            Join the Movement
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50" id="faq">
        <div className="container-responsive max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-responsive-lg text-muted-foreground">
              Everything you need to know about our cloud-based dental practice management software
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Is Heynia HIPAA-compliant dental software for dentists?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Yes, Heynia is fully HIPAA-compliant dental software designed specifically for dentists. We ensure all patient data is encrypted and secure, meeting all healthcare compliance requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Does your dental practice management software include billing features?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Absolutely! Our dental practice management software with billing includes automated billing, insurance claim management, and integrated revenue cycle management to streamline your practice's financial operations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Can I access the dental software with mobile access for dentists?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Yes, our cloud dental software with real-time analytics offers full mobile access for dentists. Manage your practice, view patient records, and handle appointments from anywhere with our mobile-optimized platform.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Is this suitable as dental practice software for small clinics?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Definitely! Heynia is designed as affordable dental practice management software USA-based small clinics can rely on. Our customizable dental practice management system scales with your practice's growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Does your dental software include patient scheduling and automated reminders?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Yes, our dental office software with patient scheduling includes automated appointment reminders via SMS, email, and WhatsApp to reduce no-shows and improve patient communication.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Can this work as the best dental practice software for multi-location clinics?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Absolutely! Our dental practice management system with AI-powered insights is perfect for multi-location clinics, offering centralized management, treatment plan management, and integrated electronic health records across all locations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Does your dental software include teledentistry features and patient portal?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Yes, our dental software with teledentistry features includes a comprehensive patient portal with online payments, marketing automation tools, and secure communication channels for improved patient engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50" id="story">
        <div className="container-responsive max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-6 sm:mb-8">Our Story</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="card-padding">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">🎯</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Why we exist</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  At Heynia, we believe that technology should be a force for good—empowering businesses and helping shape a more just world.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Our purpose (Nia, in Swahili) is to build tools that not only support dental professionals but also contribute to ending gender-based violence (GBV), a global crisis that affects 1 in 3 women in their lifetime.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl">
              <CardContent className="card-padding">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">💝</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">How we live our purpose</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  We design intelligent, user-friendly software that helps dental practices grow with less stress and more efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  But just as importantly, we commit 10% of our annual revenue to organizations working on the frontlines to prevent GBV and support survivors. This mission is deeply personal and embedded in the way we operate.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl">
              <CardContent className="card-padding">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">🚀</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">What we offer</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  Heynia is a modern, AI-powered platform built for dental practices that want to simplify their workflows, improve patient engagement, and grow sustainably.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  When you choose Heynia, you're not just getting powerful software—you're standing with a company that leads with purpose and gives back.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 px-6 sm:px-8 btn-mobile-friendly">
              Join Our Movement
            </Button>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50" id="about">
        <div className="container-responsive max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-2xl font-bold mb-6 sm:mb-8">Heynia is built by people who care deeply—about your practice and our world.</h2>
          </div>
          
          <Card className="border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="card-padding lg:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-lg sm:text-2xl font-bold text-white">KO</span>
                </div>
                <blockquote className="text-lg sm:text-xl italic text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  "I built Heynia to help dentists like you escape the burnout cycle—and to honor my sister, 
                  a victim of gender-based violence. This platform is my way of changing both."
                </blockquote>
                <cite className="text-base sm:text-lg font-semibold">— Kevin Oduor, Founder</cite>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 shrink-0" />
                  <span>HIPAA-Ready</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 shrink-0" />
                  <span>Startup Africa Fund Finalist</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 shrink-0" />
                  <span>Built by dentists, for dentists</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-blue-100">
        <div className="container-responsive max-w-5xl text-center">
          <h2 className="text-responsive-2xl font-bold mb-4 sm:mb-6">Clarity. Growth. Purpose. All in one app.</h2>
          <p className="text-responsive-lg text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto">
            Dentists across the globe are tired of juggling tools that don't fit together. 
            Heynia is here to change that—and turn your practice into a platform for impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 px-6 sm:px-8 btn-mobile-friendly w-full sm:w-auto">
              Get Early Access
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white btn-mobile-friendly w-full sm:w-auto">
              Watch the Demo
            </Button>
            <Button size="lg" variant="outline" className="btn-mobile-friendly w-full sm:w-auto">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding">
        <div className="container-responsive max-w-5xl text-center">
          <h2 className="text-responsive-2xl font-bold mb-6 sm:mb-8">We're not just building software. We're building a community.</h2>
          <p className="text-responsive-lg text-muted-foreground mb-8 sm:mb-12">Join us:</p>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="card-padding text-center">
                <div className="text-3xl sm:text-4xl mb-4">📬</div>
                <h3 className="font-semibold mb-3 text-sm sm:text-base">Get the Dentistry with Purpose newsletter</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Weekly insights and updates</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="card-padding text-center">
                <div className="text-3xl sm:text-4xl mb-4">✨</div>
                <h3 className="font-semibold mb-3 text-sm sm:text-base">Share your journey and get featured</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Inspire other dental professionals</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="card-padding text-center">
                <div className="text-3xl sm:text-4xl mb-4">🤝</div>
                <h3 className="font-semibold mb-3 text-sm sm:text-base">Refer a friend → Both get 1 free month</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Grow together, save together</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly w-full sm:w-auto">
              Subscribe to Newsletter
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white btn-mobile-friendly w-full sm:w-auto">
              Invite a Colleague
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16 px-4 safe-area-bottom">
        <div className="container-responsive max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center mb-4 sm:mb-6">
                <img 
                  src="/lovable-uploads/14b77d53-83bf-488d-8ca7-a80bee137662.png" 
                  alt="heynia logo" 
                  className="h-6 sm:h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                Cloud-based dental practice management software with HIPAA-compliant security and integrated revenue cycle management.
              </p>
              <div className="text-xs sm:text-sm text-slate-400 space-y-1">
                <p>hello@heynia.com</p>
                <p>+254 755 792 377</p>
                <p className="mt-2">Hacienda, Oloitoktok Road<br />Kilimani, Nairobi</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Dental Software Features</h4>
              <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Patient Scheduling Software</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Automated Appointment Reminders</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Insurance Claim Management</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Treatment Plan Management</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Practice Management</h4>
              <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Electronic Health Records</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Patient Portal & Online Payments</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Marketing Automation Tools</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">AI-Powered Insights</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Solutions</h4>
              <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Small Clinic Software</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Multi-Location Clinics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Teledentistry Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Access for Dentists</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-6 sm:pt-8">
            <div className="text-center text-slate-400 mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm leading-relaxed">
                Affordable dental practice management software for USA clinics | 
                Customizable dental practice management system | 
                Best dental software with real-time analytics
              </p>
            </div>
            <div className="text-center text-slate-400">
              <p className="text-xs sm:text-sm">made in nairobi with ❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
