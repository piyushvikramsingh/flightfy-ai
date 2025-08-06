import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { SearchTabs } from "@/components/search/SearchTabs";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TrendingDestinations } from "@/components/home/TrendingDestinations";
import { Footer } from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Search Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Where do you want to go?
            </h2>
            <p className="text-muted-foreground">
              Search flights, hotels, buses, trains, cabs, and holiday packages
            </p>
          </div>
          <SearchTabs />
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Trending Destinations */}
      <TrendingDestinations />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
