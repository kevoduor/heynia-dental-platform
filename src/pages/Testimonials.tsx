
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import HeyniaLogo from "@/components/HeyniaLogo";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { useState } from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useDocumentHead({
    title: "Customer Testimonials | Heynia Dental Practice Management Software",
    description: "Read what dental professionals say about Heynia's cloud-based practice management software. Real reviews from dentists who trust Heynia for their practice needs."
  });

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      practice: "Bright Smile Dental Clinic",
      location: "San Francisco, CA",
      rating: 5,
      text: "Heynia has completely transformed how we run our practice. The automated scheduling alone has saved us hours every week, and our no-show rate has dropped by 35%. The patient portal is intuitive and our patients love being able to book appointments online.",
      specialty: "General Dentistry",
      beforeAfter: "Before Heynia, we were spending 2-3 hours daily on administrative tasks. Now it's down to 30 minutes."
    },
    {
      name: "Dr. Michael Rodriguez",
      practice: "Family Dental Care",
      location: "Austin, TX",
      rating: 5,
      text: "As a multi-location practice owner, I needed software that could scale with us. Heynia's centralized dashboard lets me manage all three locations seamlessly. The billing integration has improved our revenue cycle by 40%.",
      specialty: "Family Dentistry",
      beforeAfter: "Our insurance claim processing time went from 2 weeks to 3 days."
    },
    {
      name: "Dr. Emily Watson",
      practice: "Pediatric Dental Specialists",
      location: "Miami, FL",
      rating: 5,
      text: "Working with children requires flexibility and quick communication with parents. Heynia's mobile app lets me update treatment notes instantly, and parents get automated updates about their child's appointments and care.",
      specialty: "Pediatric Dentistry",
      beforeAfter: "Parent satisfaction scores increased by 25% since implementing Heynia."
    },
    {
      name: "Dr. James Thompson",
      practice: "Advanced Oral Surgery",
      location: "Chicago, IL",
      rating: 5,
      text: "The HIPAA compliance features give me complete peace of mind. The teledentistry integration has allowed us to provide pre-surgical consultations remotely, improving patient access and reducing travel time.",
      specialty: "Oral Surgery",
      beforeAfter: "We've expanded our patient base by 30% through remote consultations."
    },
    {
      name: "Dr. Lisa Park",
      practice: "Cosmetic Dentistry Center",
      location: "Los Angeles, CA",
      rating: 5,
      text: "The analytics dashboard is incredible. I can see exactly which treatments are most profitable, track patient satisfaction, and optimize our schedule for maximum efficiency. It's like having a business consultant built into our software.",
      specialty: "Cosmetic Dentistry",
      beforeAfter: "Our practice profitability increased by 22% in the first 6 months."
    },
    {
      name: "Dr. Robert Kim",
      practice: "Community Health Dental",
      location: "Seattle, WA",
      rating: 5,
      text: "Heynia's mission of giving back resonates with our community-focused practice. Knowing that our subscription helps fund important social causes makes the decision even easier. The software is excellent, and we're making a difference.",
      specialty: "Community Dentistry",
      beforeAfter: "We've streamlined operations while staying true to our mission of accessible care."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-responsive py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <HeyniaLogo className="h-8" variant="colorful" />
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <Button className="btn-glow-primary">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-responsive max-w-4xl text-center">
          <h1 className="text-responsive-3xl font-bold mb-6">
            Trusted by dental professionals worldwide
          </h1>
          <p className="text-responsive-lg text-muted-foreground mb-8 leading-relaxed">
            See how Heynia is helping dental practices streamline operations, improve patient care, and grow their business.
          </p>
          <div className="flex justify-center items-center space-x-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 200+ dental practices</span>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding">
        <div className="container-responsive max-w-4xl">
          <Card className="p-8 shadow-lg border-2 border-primary/20">
            <div className="flex items-center justify-between mb-6">
              <Quote className="w-12 h-12 text-primary opacity-50" />
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="w-10 h-10 p-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  {currentTestimonial + 1} of {testimonials.length}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="w-10 h-10 p-0"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <blockquote className="text-xl leading-relaxed mb-6 text-foreground">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="bg-muted/50 p-4 rounded-lg mb-6">
              <p className="text-sm font-medium text-primary mb-1">Impact:</p>
              <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].beforeAfter}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="flex mb-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-primary font-medium">{testimonials[currentTestimonial].practice}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].location}</p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {testimonials[currentTestimonial].specialty}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-gradient-to-br from-muted/20 to-background">
        <div className="container-responsive max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-4">
              What dental professionals are saying
            </h2>
            <p className="text-responsive-lg text-muted-foreground">
              Real feedback from real practices using Heynia every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      {testimonial.specialty}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text.length > 150 ? testimonial.text.substring(0, 150) + '...' : testimonial.text}"
                  </blockquote>
                  
                  <div className="bg-muted/50 p-3 rounded-md mb-4">
                    <p className="text-xs font-medium text-primary mb-1">Key Impact:</p>
                    <p className="text-xs text-muted-foreground">{testimonial.beforeAfter}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-primary text-xs font-medium">{testimonial.practice}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-responsive max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold mb-4">
              Proven results across the industry
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">35%</div>
              <p className="text-sm text-muted-foreground">Average reduction in no-shows</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <p className="text-sm text-muted-foreground">Faster revenue cycle</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">3 hrs</div>
              <p className="text-sm text-muted-foreground">Daily time savings</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Customer satisfaction</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container-responsive max-w-4xl text-center">
          <h2 className="text-responsive-2xl font-bold mb-6">
            Join hundreds of satisfied dental practices
          </h2>
          <p className="text-responsive-lg text-muted-foreground mb-8 leading-relaxed">
            Start your journey to a more efficient, profitable, and purpose-driven practice today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-glow-primary btn-mobile-friendly">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="btn-mobile-friendly">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container-responsive max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <HeyniaLogo className="h-8" variant="light" />
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Cloud-based dental practice management software with HIPAA compliance and integrated billing.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-slate-400">
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;
