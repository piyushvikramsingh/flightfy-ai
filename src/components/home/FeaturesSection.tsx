import { 
  Shield, 
  Award, 
  Clock, 
  CreditCard,
  MapPin,
  Headphones,
  Smartphone,
  Globe
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Secure Booking",
      description: "Your payments are protected with bank-level encryption and security protocols."
    },
    {
      icon: Award,
      title: "Best Price Guarantee",
      description: "Find a lower price elsewhere? We'll match it and give you an extra discount."
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Our travel experts are available round the clock to assist you with any queries."
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description: "Pay with credit/debit cards, UPI, wallets, or choose our easy EMI options."
    },
    {
      icon: MapPin,
      title: "Global Coverage",
      description: "Book flights, hotels, and experiences in over 200+ countries worldwide."
    },
    {
      icon: Headphones,
      title: "Expert Travel Guidance",
      description: "Get personalized recommendations and insider tips from our travel experts."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Seamless booking experience across all devices with our intuitive mobile app."
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "View prices and pay in your preferred currency with real-time exchange rates."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose TravelEase?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to making your travel experience seamless, secure, and memorable. 
            Here's what sets us apart from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-smooth group"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-primary group-hover:animate-pulse-glow transition-smooth">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-elevated">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                50M+
              </div>
              <div className="text-sm text-muted-foreground">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-sm text-muted-foreground">Countries Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                1M+
              </div>
              <div className="text-sm text-muted-foreground">Hotels & Properties</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};