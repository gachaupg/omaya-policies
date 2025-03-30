import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for smoother animation entrance
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-10 pb-30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div
          className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left text-center max-w-6xl mx-auto gap-8 lg:gap-12">
          {/* Text content column */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <div
              className={`transition-all duration-1000 transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-primary/20 text-primary rounded-full">
                Registered with the Ministry of Commerce & Central Bank of
                Somalia
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight transition-all duration-1000 delay-300 transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Somalia's Premier
              </span>{" "}
              Digital Asset Exchange
            </h1>

            <p
              className={` md:text-xl text-muted-foreground  transition-all duration-1000 delay-500 transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              OMAYA Express Exchange provides secure, efficient and
              user-friendly exchange services for cryptocurrencies and NFTs,
              backed by years of expertise in the digital asset market.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 mb-8 lg:mb-16 transition-all duration-1000 delay-700 transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                className="bg-gradient-to-r from-primary rounded to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 text-white px-6 py-2"
                size="lg"
                asChild
                variant="default"
              >
                <Link to="/trade">
                  Start Trading <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Image column */}
          <div
            style={{
              height: "70vh",
            }}
            className="lg:w-1/2  w-full"
          >
            <div
              className={`relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl transition-all duration-1000 delay-1000 transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div style={{
                   
                  }} className="bg-gradient-to-tr overflow-hidden flex items-center justify-center relative w-full">
                <img
                  style={{
                    width: "100%",
                    maxHeight: "100%",
                    borderRadius: "0.5rem",
                    objectFit: "contain",
                  }}
                  src="https://res.cloudinary.com/pitz/image/upload/v1743189157/image_tdm2k3.jpg"
                  alt="FLX Trading"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMSAxMWgtMjR2LTFoMjR2MXptMCAyaC0yNHYtMWgyNHYxem0wIDJoLTI0di0xaDI0djF6Ii8+PC9zdmc+";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down button (centered below both columns) */}
        <div className="mt-16 animate-bounce flex justify-center">
          <a
            href="#features"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 shadow-md text-primary hover:bg-primary/30 transition-colors"
            aria-label="Scroll to features"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
