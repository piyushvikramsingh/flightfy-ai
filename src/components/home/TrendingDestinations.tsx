import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Plane } from "lucide-react";

export const TrendingDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      price: "₹45,999",
      originalPrice: "₹55,999",
      discount: "18% OFF",
      rating: 4.8,
      reviews: 1248,
      type: "International",
      badge: "Trending"
    },
    {
      id: 2,
      name: "Goa, India",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      price: "₹12,999",
      originalPrice: "₹16,999",
      discount: "24% OFF",
      rating: 4.6,
      reviews: 892,
      type: "Domestic",
      badge: "Best Deal"
    },
    {
      id: 3,
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&h=300&fit=crop",
      price: "₹89,999",
      originalPrice: "₹1,20,999",
      discount: "26% OFF",
      rating: 4.9,
      reviews: 654,
      type: "International",
      badge: "Luxury"
    },
    {
      id: 4,
      name: "Kerala, India",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
      price: "₹18,999",
      originalPrice: "₹24,999",
      discount: "24% OFF",
      rating: 4.7,
      reviews: 567,
      type: "Domestic",
      badge: "Popular"
    },
    {
      id: 5,
      name: "Thailand",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      price: "₹35,999",
      originalPrice: "₹45,999",
      discount: "22% OFF",
      rating: 4.5,
      reviews: 983,
      type: "International",
      badge: "Adventure"
    },
    {
      id: 6,
      name: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9c9b252?w=400&h=300&fit=crop",
      price: "₹15,999",
      originalPrice: "₹19,999",
      discount: "20% OFF",
      rating: 4.4,
      reviews: 445,
      type: "Domestic",
      badge: "Mountain"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trending Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular travel destinations with exclusive deals and packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth group"
            >
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={destination.badge === "Trending" ? "secondary" : "accent"}
                    className="font-medium"
                  >
                    {destination.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive" className="font-semibold">
                    {destination.discount}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-white/90 text-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {destination.type}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{destination.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                    <span className="text-xs text-muted-foreground">({destination.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">{destination.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{destination.originalPrice}</span>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <Plane className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};