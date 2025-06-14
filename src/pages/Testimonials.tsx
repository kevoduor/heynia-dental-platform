
import { Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import HeyniaLogo from "@/components/HeyniaLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Testimonials = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useDocumentHead({
    title: "Client Testimonials | Heynia Dental Practice Management Software",
    description: "See what dental professionals across the USA are saying about Heynia's cloud-based practice management software."
  });

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      practice: "Pacific Dental Care",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Heynia has completely transformed how we run our practice. The automated scheduling alone has reduced our no-shows by 40%. Our patients love the seamless booking experience, and we love how everything integrates perfectly.",
      specialty: "General Dentistry"
    },
    {
      name: "Dr. Michael Rodriguez",
      practice: "Lone Star Dental Group",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As someone who manages multiple locations, Heynia's centralized dashboard is a game-changer. I can oversee all my practices from anywhere, and the real-time analytics help me make better business decisions every day.",
      specialty: "Multi-Location Practice"
    },
    {
      name: "Dr. Jennifer Thompson",
      practice: "Sunshine Pediatric Dentistry",
      location: "Miami, FL",
      image: "",
      rating: 5,
      text: "The HIPAA compliance and security features give us complete peace of mind. Parents appreciate the automated reminders and easy rescheduling options. Heynia understands what dental practices actually need.",
      specialty: "Pediatric Dentistry"
    },
    {
      name: "Dr. Robert Kim",
      practice: "Northwest Oral Surgery",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The billing integration has streamlined our entire revenue cycle. We're collecting payments faster, and the automated insurance claims processing saves us hours every week. Plus, knowing our subscription supports a great cause makes it even better.",
      specialty: "Oral Surgery"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50 safe-area-top">
        <div className="container-responsive py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <HeyniaLogo className="h-6 sm:h-8" variant="colorful" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Home</a>
            <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Features</a>
            <a href="/#impact" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Impact</a>
            <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base">Pricing</a>
            <a href="/testimonials" className="text-foreground font-medium text-sm xl:text-base">Testimonials</a>
            <ThemeToggle />
            <Button variant="outline" size="sm" className="btn-mobile-friendly">Sign In</Button>
            <Button className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly" size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
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
              <a href="/" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/#features" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="/#impact" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Impact</a>
              <a href="/pricing" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="/testimonials" className="block py-2 text-foreground font-medium">Testimonials</a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="btn-mobile-friendly">Sign In</Button>
                <Button className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-responsive text-center max-w-4xl">
          <h1 className="text-responsive-3xl font-bold mb-4 sm:mb-6 leading-tight">
            What dentists are saying about{" "}
            <span className="text-gradient">Heynia</span>
          </h1>
          <p className="text-responsive-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of dental professionals across the USA who trust Heynia to streamline their practices and grow their businesses.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-responsive max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card">
                <CardContent className="p-0">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Doctor Info */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16 border-2 border-primary/20">
                      <AvatarImage 
                        src={testimonial.image} 
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-primary font-medium">{testimonial.practice}</p>
                      <div className="flex items-center text-muted-foreground text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {testimonial.location}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{testimonial.specialty}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 sm:p-12">
            <h2 className="text-responsive-2xl font-bold mb-4">
              Ready to join them?
            </h2>
            <p className="text-responsive-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              See why dental professionals across the country are choosing Heynia to transform their practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 btn-mobile-friendly">
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline" className="btn-mobile-friendly">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 px-4 safe-area-bottom">
        <div className="container-responsive max-w-4xl text-center">
          <div className="flex items-center justify-center mb-4">
            <HeyniaLogo className="h-6 sm:h-8" variant="colorful" />
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Cloud-based dental practice management software with HIPAA compliance and purpose.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <a href="/#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="/pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
          </div>
          <p className="text-muted-foreground text-xs mt-6">
            made in nairobi with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;
