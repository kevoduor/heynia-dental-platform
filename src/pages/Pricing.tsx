
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap, Crown, Menu, X, TrendingUp } from "lucide-react";
import HeyniaLogo from "@/components/HeyniaLogo";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { useState } from "react";

const Pricing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useDocumentHead({
    title: "Affordable Dental Practice Management Software USA | Pricing | Heynia",
    description: "Choose from flexible plans starting at $99/month. Heynia offers affordable dental software with insurance claim management, AI insights, and real-time analytics."
  });

  const plans = [
    {
      name: "Basic",
      icon: <Star className="w-4 h-4 sm:w-6 sm:h-6" />,
      monthlyPrice: 149,
      annualPrice: 1490,
      description: "For small practices getting started",
      features: [
        "Core Management Features",
        "Basic Support (Business Hours)",
        "Limited Integrations",
        "Cloud Hosting/Storage",
        "Web App & Dashboard",
        "Email Support",
        "Basic Analytics"
      ],
      buttonText: "Start Basic Plan",
      buttonVariant: "outline" as const,
      popular: false,
      savings: "Save 17%"
    },
    {
      name: "Professional",
      icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6" />,
      monthlyPrice: 249,
      annualPrice: 2490,
      description: "Most popular for growing practices",
      features: [
        "Everything in Basic",
        "Advanced Analytics & AI Insights",
        "Priority Support (24/7)",
        "Enhanced Integrations",
        "SMS & WhatsApp Support",
        "Mobile App (Android & iOS)",
        "Patient Self-Booking",
        "Automated Follow-ups",
        "Performance Insights",
        "Marketing Automation"
      ],
      buttonText: "Start Professional Plan",
      buttonVariant: "default" as const,
      popular: true,
      savings: "Save 17% + 2 months FREE"
    },
    {
      name: "Premium",
      icon: <Crown className="w-4 h-4 sm:w-6 sm:h-6" />,
      monthlyPrice: 449,
      annualPrice: 4490,
      description: "For established multi-location practices",
      features: [
        "Everything in Professional",
        "Custom Integrations & API Access",
        "Dedicated Account Manager",
        "White-label Options",
        "Advanced Team Training",
        "Custom Branded Mobile App",
        "Multi-location Management",
        "Advanced Reporting Suite",
        "Priority Feature Requests",
        "Compliance Consulting"
      ],
      buttonText: "Start Premium Plan",
      buttonVariant: "default" as const,
      popular: false,
      savings: "Save 17%"
    }
  ];

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
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Features</a>
            <a href="/pricing" className="text-foreground font-medium text-sm xl:text-base">Pricing</a>
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
              <a href="#" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="/pricing" className="block py-2 text-foreground font-medium">Pricing</a>
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
            <TrendingUp className="w-4 h-4 mr-2" />
            Practices see 35% revenue growth on average
          </div>
          <h1 className="text-responsive-3xl font-bold mb-4 sm:mb-6 leading-tight">
            Choose your practice's{" "}
            <span className="text-gradient">growth plan</span>
          </h1>
          <p className="text-responsive-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
            Start with a 30-day free trial. No credit card required. See results in weeks, not months.
          </p>
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm text-muted-foreground">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 sm:w-14 sm:h-7 bg-gray-200 rounded-full shadow-inner"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow transition-transform duration-300"></div>
            </div>
            <span className="text-xs sm:text-sm font-medium">Annual (Save 17%)</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Best Value</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards with Decoy Effect */}
      <section className="section-padding">
        <div className="container-responsive max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <Card key={plan.name} className={`relative border-2 hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-2xl lg:scale-110 lg:-mt-8 lg:mb-8' 
                  : 'border-border hover:border-primary/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-lg">
                      🔥 Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6 sm:pb-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'gradient-primary text-white shadow-lg' : 'bg-primary/10 text-primary'
                  }`}>
                    {plan.icon}
                  </div>
                  <CardTitle className={`text-xl sm:text-2xl font-bold ${plan.popular ? 'text-primary' : ''}`}>
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base">{plan.description}</p>
                  
                  <div className="mt-6 sm:mt-8">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className={`text-4xl sm:text-5xl font-bold ${plan.popular ? 'text-primary' : ''}`}>
                        ${plan.annualPrice}
                      </span>
                      <span className="text-muted-foreground text-sm sm:text-base">/year</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                      or ${plan.monthlyPrice}/month billed monthly
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-green-600 mt-1">
                      {plan.savings}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button 
                    className={`w-full mb-6 sm:mb-8 btn-mobile-friendly ${
                      plan.popular 
                        ? 'gradient-primary text-white border-0 hover:opacity-90 text-lg py-3' 
                        : ''
                    }`}
                    variant={plan.buttonVariant}
                    size={plan.popular ? "lg" : "default"}
                  >
                    {plan.buttonText}
                  </Button>

                  <ul className="space-y-3 sm:space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Social Proof */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-muted-foreground mb-4">Trusted by 500+ dental practices worldwide</p>
            <div className="flex justify-center items-center space-x-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-foreground font-semibold ml-2">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-2xl font-bold mb-4">Pricing questions? We've got answers</h2>
            <p className="text-responsive-lg text-muted-foreground">Clear, honest answers to help you choose</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-base sm:text-lg font-semibold mb-3">Can I switch plans anytime?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Yes! Upgrade or downgrade with one click. Changes take effect immediately, and we'll prorate your billing fairly.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-base sm:text-lg font-semibold mb-3">Any hidden fees or setup costs?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Zero. What you see is what you pay. No setup fees, no surprise charges. Professional and Premium plans include free onboarding.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-base sm:text-lg font-semibold mb-3">What about data security?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Bank-level security on all plans. HIPAA-compliant, encrypted storage, regular backups, and 99.9% uptime guarantee.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="card-padding">
                <h3 className="text-base sm:text-lg font-semibold mb-3">Is the 30-day trial really free?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Completely free. No credit card required. Full access to all features. If you love it (you will), choose your plan. If not, walk away—no questions asked.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-blue-100">
        <div className="container-responsive max-w-5xl text-center">
          <h2 className="text-responsive-2xl font-bold mb-4 sm:mb-6">Ready to transform your dental practice?</h2>
          <p className="text-responsive-lg text-muted-foreground mb-6 sm:mb-8">
            Join hundreds of dental professionals who chose growth over chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 px-6 sm:px-8 btn-mobile-friendly w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white btn-mobile-friendly w-full sm:w-auto">
              Schedule Demo
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-4">
            30-day free trial • No credit card required • HIPAA-compliant setup included
          </p>
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
              <p className="text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Empowering dental practices with purpose-driven technology.
              </p>
              <div className="text-xs sm:text-sm text-slate-400">
                <p>hello@heynia.com</p>
                <p>+254 755 792 377</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
                <li><a href="/#story" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal & Support</h4>
              <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-6 sm:pt-8 text-center text-slate-400">
            <p className="text-xs sm:text-sm">made in nairobi with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
