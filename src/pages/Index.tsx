
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, FileText, MessageSquare, ArrowDown, Check } from "lucide-react";

const Index = () => {
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
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">Impact</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <Button variant="outline">Sign In</Button>
            <Button className="gradient-primary text-white border-0 hover:opacity-90">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            For modern dental clinics
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Organize your clinic, payments and team in{" "}
            <span className="text-gradient">one place</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your dental practice with intelligent scheduling, automated billing, and powerful analytics—all while supporting a meaningful cause.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 px-8 py-6 text-lg">
              Try Heynia for free
            </Button>
            <p className="text-sm text-muted-foreground">No credit card needed</p>
          </div>
          <div className="mt-16 relative">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Smart Scheduling</h3>
                    <p className="text-sm text-muted-foreground">AI-powered appointment management</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Automated Billing</h3>
                    <p className="text-sm text-muted-foreground">Streamlined payment processing</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Team Management</h3>
                    <p className="text-sm text-muted-foreground">Collaborate seamlessly</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4" id="problem">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">You didn't become a dentist to manage chaos.</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every day, you're overwhelmed by reschedules, billing headaches, and disconnected tools. 
              The result? Lost time, lost revenue, and growing burnout.
            </p>
            <p className="text-xl font-semibold mt-6 text-primary">
              Heynia changes that—bringing everything you need to run your practice into one simple, intelligent platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Missed appointments & cancellations</h3>
                    <p className="text-muted-foreground">Lost revenue from no-shows and last-minute changes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Complex billing and insurance delays</h3>
                    <p className="text-muted-foreground">Hours spent chasing payments and handling claims</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Disconnected tools that don't talk</h3>
                    <p className="text-muted-foreground">Juggling multiple systems that don't integrate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours wasted on manual admin</h3>
                    <p className="text-muted-foreground">Time that could be spent with patients</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              See How Heynia Works
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50" id="features">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All-in-one, and built for dentists like you.</h2>
            <p className="text-xl text-muted-foreground">
              Heynia simplifies your entire practice—no steep learning curves, no tech headaches.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">🗓 Automated Scheduling</h3>
                <p className="text-muted-foreground">Fill your calendar, reduce no-shows.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">💸 Smart Billing</h3>
                <p className="text-muted-foreground">Collect payments faster, with less follow-up.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">📊 Real-Time Analytics</h3>
                <p className="text-muted-foreground">Understand what's working (and what's not).</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">📱 Mobile-First Design</h3>
                <p className="text-muted-foreground">Manage your practice on the go.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">🔐 HIPAA-Ready</h3>
                <p className="text-muted-foreground">Built for total peace of mind.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <ArrowDown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">⚡ OSHA-Aware</h3>
                <p className="text-muted-foreground">Compliance made simple.</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-white border-0 shadow-lg max-w-2xl mx-auto mb-8">
            <CardContent className="p-8 text-center">
              <blockquote className="text-xl italic text-muted-foreground mb-4">
                "It's like having a full-time office manager in your pocket."
              </blockquote>
              <cite className="text-sm font-medium">— Dr. Sarah Chen, DDS</cite>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 px-8">
              Join the Early Access List
            </Button>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 px-4" id="impact">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">A practice management app with a purpose.</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Every Heynia subscription helps fund education, support, and advocacy to end gender-based violence. 
            Our founder lost his sister to GBV. That pain fuels our purpose.
          </p>
          <p className="text-xl font-semibold mb-12 text-primary">
            When you grow with Heynia, you're not just upgrading your business—you're standing for something bigger.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-semibold mb-3">10% of profits fund gender justice initiatives</h3>
                <p className="text-muted-foreground">Every subscription makes a real difference</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-teal-50">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🩵</div>
                <h3 className="text-xl font-semibold mb-3">Powered by purpose. Built with heart.</h3>
                <p className="text-muted-foreground">Technology that creates positive change</p>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="gradient-secondary text-white border-0 hover:opacity-90">
            Join the Movement
          </Button>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50" id="about">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-8">Heynia is built by people who care deeply—about your practice and our world.</h2>
          </div>
          
          <Card className="border-0 shadow-xl max-w-3xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">KO</span>
                </div>
                <blockquote className="text-xl italic text-muted-foreground mb-6 leading-relaxed">
                  "I built Heynia to help dentists like you escape the burnout cycle—and to honor my sister, 
                  a victim of gender-based violence. This platform is my way of changing both."
                </blockquote>
                <cite className="text-lg font-semibold">— Kevin Oduor, Founder</cite>
              </div>
              
              <div className="flex justify-center space-x-8 mt-8">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>HIPAA-Ready</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Startup Africa Fund Finalist</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Built by dentists, for dentists</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-blue-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Clarity. Growth. Purpose. All in one app.</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Dentists across the globe are tired of juggling tools that don't fit together. 
            Heynia is here to change that—and turn your practice into a platform for impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 px-8">
              Get Early Access
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Watch the Demo
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">We're not just building software. We're building a community.</h2>
          <p className="text-xl text-muted-foreground mb-12">Join us:</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">📬</div>
                <h3 className="font-semibold mb-3">Get the Dentistry with Purpose newsletter</h3>
                <p className="text-sm text-muted-foreground">Weekly insights and updates</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-semibold mb-3">Share your journey and get featured</h3>
                <p className="text-sm text-muted-foreground">Inspire other dental professionals</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-semibold mb-3">Refer a friend → Both get 1 free month</h3>
                <p className="text-sm text-muted-foreground">Grow together, save together</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90">
              Subscribe to Newsletter
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Invite a Colleague
            </Button>
          </div>
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
                <p className="mt-2">Hacienda, Oloitoktok Road<br />Kilimani, Nairobi</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
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

export default Index;
