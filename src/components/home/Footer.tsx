import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plane, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Stay Updated with Best Deals</h3>
            <p className="text-primary-foreground/80">
              Subscribe to our newsletter and get exclusive travel deals and offers
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary" className="font-semibold">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white/20 rounded-lg p-2">
                <Plane className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">TravelEase</h1>
                <p className="text-xs text-primary-foreground/80">Book. Travel. Explore.</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Your trusted travel partner for booking flights, hotels, and unforgettable experiences 
              across the globe. Making travel easy and affordable for everyone.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Press</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Travel Guides</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Flight Booking</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Hotel Booking</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Bus Booking</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Train Booking</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Cab Booking</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Holiday Packages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">support@travelease.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  123 Travel Street, Mumbai, India 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} TravelEase. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-primary-foreground/80">
              <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-white transition-smooth">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-smooth">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};