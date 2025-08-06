import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Award, 
  Clock, 
  Users,
  Star,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful travel destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Trust Indicators */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Secure Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 mb-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            <Users className="h-4 w-4 mr-2" />
            Trusted by 50M+ Travelers
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Your Journey
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover amazing destinations, book flights, hotels, and experiences 
            with confidence. Your perfect trip is just a click away.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">10M+</div>
            <div className="text-sm opacity-90">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">200+</div>
            <div className="text-sm opacity-90">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">4.8</div>
            <div className="text-sm opacity-90 flex items-center justify-center gap-1">
              <Star className="h-3 w-3 fill-current" />
              Rating
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="hero" className="text-lg px-8 py-6 min-w-[200px] animate-pulse-glow">
            <Zap className="h-5 w-5 mr-2" />
            Start Planning
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 min-w-[200px] bg-white/10 border-white/30 text-white hover:bg-white/20">
            Explore Deals
          </Button>
        </div>

        {/* Special Offer */}
        <div className="mt-8">
          <Badge variant="warning" className="px-6 py-3 text-base font-semibold animate-bounce">
            🎉 Limited Time: Get 25% OFF on your first booking!
          </Badge>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 z-10 hidden lg:block">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 animate-float">
          <div className="text-white text-sm">
            <div className="font-semibold">Delhi → Paris</div>
            <div className="text-white/80">From ₹45,999</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 z-10 hidden lg:block">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
          <div className="text-white text-sm">
            <div className="font-semibold">Goa Beach Resort</div>
            <div className="text-white/80">₹3,499/night</div>
          </div>
        </div>
      </div>
    </section>
  );
};