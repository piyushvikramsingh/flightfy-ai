import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserActions } from "./UserActions";
import { 
  Plane, 
  Building2, 
  Bus, 
  Train, 
  Car, 
  Package
} from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="gradient-hero rounded-lg p-2">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TravelEase
              </h1>
              <p className="text-xs text-muted-foreground">Book. Travel. Explore.</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Plane className="h-4 w-4" />
                Flights
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Building2 className="h-4 w-4" />
                Hotels
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Bus className="h-4 w-4" />
                Buses
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Train className="h-4 w-4" />
                Trains
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Car className="h-4 w-4" />
                Cabs
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Package className="h-4 w-4" />
                Packages
                <Badge variant="secondary" className="ml-1 text-xs">Hot</Badge>
              </Button>
            </div>
          </nav>

          {/* User Actions */}
          <UserActions />
        </div>
      </div>
    </header>
  );
};