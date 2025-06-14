
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      icon: <Star className="w-6 h-6" />,
      monthlyPrice: 99,
      annualPrice: 990,
      description: "Perfect for small dental practices getting started",
      features: [
        "Core Management Features",
        "Basic Support (Business Hours)",
        "Limited Integrations",
        "Cloud Hosting/Storage",
        "Offline Support",
        "Web App & Dashboard",
        "Google Reviews Monitoring",
        "Email Support & Automation",
        "Monthly Marketing Newsletter"
      ],
      buttonText: "Start Basic Plan",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      icon: <Zap className="w-6 h-6" />,
      monthlyPrice: 249,
      annualPrice: 2490,
      description: "Ideal for growing practices that need advanced features",
      features: [
        "All Basic Plan Features",
        "Advanced Analytics & Reporting",
        "Priority Support",
        "Enhanced Integrations",
        "SMS & WhatsApp Support",
        "Mobile App (Android & iOS)",
        "Patient Self-Booking",
        "Automated Follow-ups",
        "Performance Insights"
      ],
      buttonText: "Start Professional Plan",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Premium",
      icon: <Crown className="w-6 h-6" />,
      monthlyPrice: 349,
      annualPrice: 3490,
      description: "For established practices seeking complete automation",
      features: [
        "All Professional Plan Features",
        "Customizable Features",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Full Team Training & Onboarding",
        "All Communication Channels",
        "Custom Branded Mobile App",
        "Automated Referral System",
        "AI Marketing Chatbot",
        "Local SEO Optimization"
      ],
      buttonText: "Start Premium Plan",
      buttonVariant: "default" as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-gradient">Heynia</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="/pricing" className="text-foreground font-medium">Pricing</a>
            <Button variant="outline">Sign In</Button>
            <Button className="gradient-primary text-white border-0 hover:opacity-90">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            Simple, transparent pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Choose the perfect plan for your{" "}
            <span className="text-gradient">dental practice</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with a 30-day free trial. No credit card required. Cancel anytime.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className="text-sm text-muted-foreground">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-14 h-7 bg-gray-200 rounded-full shadow-inner"></div>
              <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full shadow transition-transform duration-300"></div>
            </div>
            <span className="text-sm font-medium">Annual (Save 20%)</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Best Value</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={plan.name} className={`relative border-2 hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                    plan.popular ? 'gradient-primary text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold">${plan.annualPrice}</span>
                      <span className="text-muted-foreground">/year</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      or ${plan.monthlyPrice}/month billed monthly
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button 
                    className={`w-full mb-8 ${
                      plan.popular 
                        ? 'gradient-primary text-white border-0 hover:opacity-90' 
                        : ''
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our pricing</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-3">Can I switch plans anytime?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-3">Is there a setup fee?</h3>
                <p className="text-muted-foreground">No setup fees. We include free onboarding and training for all Professional and Premium plans.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-3">What about data security?</h3>
                <p className="text-muted-foreground">All plans include HIPAA-compliant security, encrypted data storage, and regular backups.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-3">Do you offer discounts?</h3>
                <p className="text-muted-foreground">Yes! Save 20% with annual billing, plus special rates for multi-location practices.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-blue-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your dental practice?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of dental professionals who trust Heynia to grow their practice with purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            30-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold">Heynia</span>
              </div>
              <p className="text-slate-400 mb-4">
                Empowering dental practices with purpose-driven technology.
              </p>
              <div className="text-sm text-slate-400">
                <p>hello@heynia.com</p>
                <p>+254 755 792 377</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/#story" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Heynia. Built with purpose. Powered by community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
