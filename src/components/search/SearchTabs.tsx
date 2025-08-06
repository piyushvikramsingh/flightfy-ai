import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Building2, 
  Bus, 
  Train, 
  Car, 
  Package,
  MapPin,
  Calendar,
  Users,
  ArrowRightLeft
} from "lucide-react";

export const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState("flights");

  const tabs = [
    { id: "flights", label: "Flights", icon: Plane, badge: null },
    { id: "hotels", label: "Hotels", icon: Building2, badge: null },
    { id: "buses", label: "Buses", icon: Bus, badge: "New" },
    { id: "trains", label: "Trains", icon: Train, badge: null },
    { id: "cabs", label: "Cabs", icon: Car, badge: null },
    { id: "packages", label: "Packages", icon: Package, badge: "Hot" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-card shadow-card p-1 rounded-xl">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-smooth"
            >
              <div className="flex items-center gap-1">
                <tab.icon className="h-4 w-4" />
                {tab.badge && (
                  <Badge variant={tab.badge === "Hot" ? "secondary" : "accent"} className="text-xs px-1">
                    {tab.badge}
                  </Badge>
                )}
              </div>
              <span className="text-xs font-medium">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-6">
          <TabsContent value="flights" className="space-y-0">
            <FlightSearch />
          </TabsContent>
          <TabsContent value="hotels" className="space-y-0">
            <HotelSearch />
          </TabsContent>
          <TabsContent value="buses" className="space-y-0">
            <BusSearch />
          </TabsContent>
          <TabsContent value="trains" className="space-y-0">
            <TrainSearch />
          </TabsContent>
          <TabsContent value="cabs" className="space-y-0">
            <CabSearch />
          </TabsContent>
          <TabsContent value="packages" className="space-y-0">
            <PackageSearch />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

const FlightSearch = () => (
  <div className="gradient-card rounded-xl p-6 shadow-elevated">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="md:col-span-2">
        <Label htmlFor="from" className="text-sm font-medium">From</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="from" placeholder="Delhi (DEL)" className="pl-10" />
        </div>
      </div>
      <div className="flex justify-center items-end pb-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowRightLeft className="h-4 w-4" />
        </Button>
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="to" className="text-sm font-medium">To</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="to" placeholder="Mumbai (BOM)" className="pl-10" />
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      <div>
        <Label htmlFor="departure" className="text-sm font-medium">Departure</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="departure" placeholder="Select Date" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="return" className="text-sm font-medium">Return</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="return" placeholder="Select Date" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="passengers" className="text-sm font-medium">Passengers</Label>
        <div className="relative">
          <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="passengers" placeholder="1 Adult" className="pl-10" />
        </div>
      </div>
      <div className="flex items-end">
        <Button className="w-full" size="lg">
          Search Flights
        </Button>
      </div>
    </div>
  </div>
);

const HotelSearch = () => (
  <div className="gradient-card rounded-xl p-6 shadow-elevated">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-2">
        <Label htmlFor="destination" className="text-sm font-medium">Destination</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="destination" placeholder="Where do you want to stay?" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="checkin" className="text-sm font-medium">Check-in</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="checkin" placeholder="Select Date" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="checkout" className="text-sm font-medium">Check-out</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="checkout" placeholder="Select Date" className="pl-10" />
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div>
        <Label htmlFor="guests" className="text-sm font-medium">Guests & Rooms</Label>
        <div className="relative">
          <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="guests" placeholder="2 Adults, 1 Room" className="pl-10" />
        </div>
      </div>
      <div></div>
      <div className="flex items-end">
        <Button className="w-full" size="lg">
          Search Hotels
        </Button>
      </div>
    </div>
  </div>
);

const BusSearch = () => (
  <div className="gradient-card rounded-xl p-6 shadow-elevated">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <Label htmlFor="bus-from" className="text-sm font-medium">From</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="bus-from" placeholder="Departure City" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="bus-to" className="text-sm font-medium">To</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="bus-to" placeholder="Arrival City" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="bus-date" className="text-sm font-medium">Travel Date</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="bus-date" placeholder="Select Date" className="pl-10" />
        </div>
      </div>
      <div className="flex items-end">
        <Button className="w-full" size="lg" variant="secondary">
          Search Buses
        </Button>
      </div>
    </div>
  </div>
);

const TrainSearch = () => (
  <div className="gradient-card rounded-xl p-6 shadow-elevated">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <Label htmlFor="train-from" className="text-sm font-medium">From</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="train-from" placeholder="Departure Station" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="train-to" className="text-sm font-medium">To</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="train-to" placeholder="Arrival Station" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="train-date" className="text-sm font-medium">Travel Date</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="train-date" placeholder="Select Date" className="pl-10" />
        </div>
      </div>
      <div className="flex items-end">
        <Button className="w-full" size="lg" variant="accent">
          Search Trains
        </Button>
      </div>
    </div>
  </div>
);

const CabSearch = () => (
  <div className="gradient-card rounded-xl p-6 shadow-elevated">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <Label htmlFor="pickup" className="text-sm font-medium">Pickup Location</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="pickup" placeholder="Enter pickup point" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="drop" className="text-sm font-medium">Drop Location</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="drop" placeholder="Enter destination" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="pickup-time" className="text-sm font-medium">Pickup Time</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="pickup-time" placeholder="Now" className="pl-10" />
        </div>
      </div>
      <div className="flex items-end">
        <Button className="w-full" size="lg" variant="warning">
          Book Cab
        </Button>
      </div>
    </div>
  </div>
);

const PackageSearch = () => (
  <div className="gradient-card rounded-xl p-6 shadow-elevated">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <Label htmlFor="package-destination" className="text-sm font-medium">Destination</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="package-destination" placeholder="Where to?" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="package-departure" className="text-sm font-medium">Departure Date</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="package-departure" placeholder="Select Date" className="pl-10" />
        </div>
      </div>
      <div>
        <Label htmlFor="package-travelers" className="text-sm font-medium">Travelers</Label>
        <div className="relative">
          <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="package-travelers" placeholder="2 Adults" className="pl-10" />
        </div>
      </div>
      <div className="flex items-end">
        <Button className="w-full" size="lg" variant="hero">
          Find Packages
        </Button>
      </div>
    </div>
  </div>
);