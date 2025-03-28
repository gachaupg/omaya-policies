import Layout from "@/components/layout/Layout";
import React, { useEffect, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const GOOGLE_MAPS_API_KEY = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg";
const MAP_COORDINATES = { lat: 2.0323, lng: 45.3131 };

const Contact = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsAPI = () =>
      new Promise((resolve, reject) => {
        if (window.google) {
          resolve(window.google);
          return;
        }

        const existingScript = document.getElementById("google-maps-script");
        if (!existingScript) {
          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
          script.id = "google-maps-script";
          script.async = true;
          script.onload = () => resolve(window.google);
          script.onerror = () =>
            reject(new Error("Failed to load Google Maps API"));
          document.body.appendChild(script);
        } else {
          existingScript.onload = () => resolve(window.google);
        }
      });

    const initializeMap = async () => {
      try {
        await loadGoogleMapsAPI();
        const map = new window.google.maps.Map(mapRef.current, {
          center: MAP_COORDINATES,
          zoom: 14,
        });
        new window.google.maps.Marker({
          position: MAP_COORDINATES,
          map,
          title: "Our Location",
        });
      } catch (error) {
        console.error("Map initialization failed:", error);
      }
    };

    initializeMap();
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-b  bg-[#1D1D23] ">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions or need assistance? Reach out to our team and we'll
              get back to you promptly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Phone</h3>
                      <p className="text-gray-300">
                        <a
                          href="tel:25212345668"
                          className="hover:text-primary transition-colors"
                        >
                          +252611273030
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Email</h3>
                      <p className="text-gray-300">
                        <a
                          href="mailto:info@moya.com"
                          className="hover:text-primary transition-colors"
                        >
                          info@moya.io
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Address</h3>
                      <p className="text-gray-300">
                        Aaran Plaza, Hodan District, Mogadishu, Somalia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Business Hours
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-white">Everyday</span>
                    <span className="text-gray-300">8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[500px] overflow-hidden  border-gray-700 shadow-lg rounded-lg">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=2.0323,45.3131`}
                className="w-full h-full"
                style={{ borderRadius: "16px" }} // Ensure rounded corners
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
