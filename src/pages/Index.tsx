import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, FileText, MessageSquare, ArrowDown, Check, Menu, X, Star, Building2, TrendingUp } from "lucide-react";
import AISearchWindow from "@/components/AISearchWindow";
import HeyniaLogo from "@/components/HeyniaLogo";
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
            From chaos to clarity in{" "}
            <span className="text-gradient">30 days</span>
          </h1>
          <p className="text-responsive-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop juggling disconnected tools. Transform your dental practice with one intelligent platform that grows your revenue and saves you 10+ hours per week.
          </p>
          
          {/* AI Search Window */}
          <div className="mb-4 max-w-2xl mx-auto">
            <AISearchWindow />
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-12 sm:mb-16">No login required • Try it now</p>
          
          {/* Social Proof Numbers */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">97%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Less no-shows</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Hours saved weekly</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">35%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Revenue increase</div>
            </div>
          </div>
          
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

      {/* Social Proof Section - MOVED UP */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50" id="social-proof">
        <div className="container-responsive max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4">Trusted by dental professionals worldwide</h2>
            <p className="text-responsive-lg text-muted-foreground">Join hundreds of practices that chose growth over chaos</p>
          </div>
          
          {/* Customer Logos */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 mb-12 sm:mb-16 opacity-60">
            <div className="flex items-center justify-center">
              <div className="w-16 h-8 bg-slate-300 rounded flex items-center justify-center">
                <Building2 className="w-6 h-6 text-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-8 bg-slate-300 rounded flex items-center justify-center">
                <Building2 className="w-6 h-6 text-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-8 bg-slate-300 rounded flex items-center justify-center">
                <Building2 className="w-6 h-6 text-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-8 bg-slate-300 rounded flex items-center justify-center">
                <Building2 className="w-6 h-6 text-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-8 bg-slate-300 rounded flex items-center justify-center">
                <Building2 className="w-6 h-6 text-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-8 bg-slate-300 rounded flex items-center justify-center">
                <Building2 className="w-6 h-6 text-slate-500" />
              </div>
            </div>
          </div>
          
          {/* Real Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-white">SC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Dr. Sarah Chen</p>
                    <p className="text-xs text-muted-foreground">Chen Family Dentistry</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm italic">
                  "Heynia saved my practice. We went from losing $20K/month to our best year ever. The AI features are incredible."
                </blockquote>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-white">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Dr. Michael Johnson</p>
                    <p className="text-xs text-muted-foreground">Smile Bright Clinic</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm italic">
                  "The automated reminders alone increased our show rate by 27%. My staff actually enjoys their work now."
                </blockquote>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-white">LR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Dr. Lisa Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Rodriguez Dental Group</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm italic">
                  "As a multi-location practice, Heynia gives us the oversight we need. Real-time analytics changed everything."
                </blockquote>
              </CardContent>
            </Card>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Practices served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Customer rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">30%</div>
              <div className="text-sm text-muted-foreground">Avg. revenue growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - NEW */}
      <section className="section-padding" id="results">
        <div className="container-responsive max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4 sm:mb-6">Proven results that speak for themselves</h2>
            <p className="text-responsive-lg text-muted-foreground max-w-4xl mx-auto">
              Real dental practices, real transformations, real impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="card-padding">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-4">97%</div>
                <div className="text-lg sm:text-xl font-semibold mb-2">Reduced No-Shows</div>
                <p className="text-muted-foreground text-sm">AI-powered reminders and scheduling optimization</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="card-padding">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-4">35%</div>
                <div className="text-lg sm:text-xl font-semibold mb-2">Revenue Increase</div>
                <p className="text-muted-foreground text-sm">Streamlined billing and payment processing</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="card-padding">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-4">10+</div>
                <div className="text-lg sm:text-xl font-semibold mb-2">Hours Saved Weekly</div>
                <p className="text-muted-foreground text-sm">Automated workflows and smart scheduling</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Transformation Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50" id="transformation">
        <div className="container-responsive max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4 sm:mb-6">The transformation is real</h2>
            <p className="text-responsive-lg text-muted-foreground max-w-4xl mx-auto">
              See how dental practices went from overwhelmed to organized in just 30 days
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Before */}
            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
              <CardContent className="card-padding">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">😰</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">Before Heynia</h3>
                  <p className="text-red-700 text-sm">The daily struggle</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-medium text-red-800">"I spent 3 hours every morning just catching up"</p>
                      <p className="text-red-700 text-sm">Managing appointments across 4 different systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-medium text-red-800">"Our no-show rate was 30%"</p>
                      <p className="text-red-700 text-sm">Lost revenue, stressed staff, angry patients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-medium text-red-800">"Insurance claims took forever"</p>
                      <p className="text-red-700 text-sm">Cash flow problems, manual paperwork hell</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="card-padding">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">After Heynia</h3>
                  <p className="text-green-700 text-sm">The breakthrough</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">"My mornings are peaceful now"</p>
                      <p className="text-green-700 text-sm">Everything synced, automated reminders work</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">"No-shows dropped to 3%"</p>
                      <p className="text-green-700 text-sm">$15K more revenue per month, happy team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">"Claims process automatically"</p>
                      <p className="text-green-700 text-sm">Steady cash flow, more time for patients</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 px-6 sm:px-8 btn-mobile-friendly">
              Start Your Transformation
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

      {/* Pricing Section - MOVED UP */}
      <section className="section-padding" id="pricing">
        <div className="container-responsive max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4 sm:mb-6">Simple, transparent pricing</h2>
            <p className="text-responsive-lg text-muted-foreground max-w-4xl mx-auto">
              Choose the plan that fits your practice. No hidden fees, no long-term contracts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-slate-200">
              <CardContent className="card-padding">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <div className="text-3xl font-bold mb-1">$99</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    Up to 500 patients
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    Basic scheduling
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    Email support
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Professional Plan - Most Popular */}
            <Card className="border-primary shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <CardContent className="card-padding">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <div className="text-3xl font-bold mb-1">$199</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    Up to 2,000 patients
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    AI-powered scheduling
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    Automated billing
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full gradient-primary text-white">Start Free Trial</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-slate-200">
              <CardContent className="card-padding">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold mb-1">$399</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    Unlimited patients
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    Multi-location support
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                    24/7 phone support
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50" id="impact">
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

      {/* Simplified FAQ Section */}
      <section className="section-padding" id="faq">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4 sm:mb-6">Quick answers to your questions</h2>
            <p className="text-responsive-lg text-muted-foreground">
              Everything you need to know to get started
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-lg font-semibold mb-3 sm:mb-4">Is Heynia really HIPAA-compliant?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Absolutely. We're fully HIPAA-compliant with encrypted data storage, secure communication channels, and comprehensive audit trails. Your patients' data is protected with bank-level security.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-lg font-semibold mb-3 sm:mb-4">How quickly can we get up and running?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Most practices are fully operational within 48 hours. Our onboarding team handles data migration, staff training, and system setup. You'll wonder why you waited so long to switch.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-lg font-semibold mb-3 sm:mb-4">What if we need to cancel?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  No long-term contracts. Cancel anytime with 30 days notice. We'll even help you export your data. But honestly, 98% of our customers stay because the results speak for themselves.
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

      {/* Contact/Booking Section - NEW */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-blue-100" id="contact">
        <div className="container-responsive max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-6 sm:mb-8">Ready to get started?</h2>
            <p className="text-responsive-lg text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-12">
              Join hundreds of dental practices that transformed their operations with Heynia. 
              Let's discuss how we can help your practice grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto mb-8 sm:mb-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="card-padding text-center">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Book a Demo</h3>
                <p className="text-muted-foreground mb-6">
                  See Heynia in action with a personalized demo tailored to your practice needs.
                </p>
                <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 w-full">
                  Schedule Demo
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl">
              <CardContent className="card-padding text-center">
                <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Have questions? Our team is here to help you find the perfect solution.
                </p>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-4">
              Or reach out directly:
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm">
              <a href="mailto:hello@heynia.com" className="text-primary hover:underline">hello@heynia.com</a>
              <a href="tel:+254755792377" className="text-primary hover:underline">+254 755 792 377</a>
            </div>
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
                <HeyniaLogo className="h-6 sm:h-8" variant="light" />
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
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal & Support</h4>
              <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
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
