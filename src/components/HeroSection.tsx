
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Tv, Wifi, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-chinx-dark-purple bg-hero-pattern flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-chinx-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-chinx-blue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Premium TV Experience with </span>
              <span className="text-gradient">ChinX IPTV</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Unlock access to 10,000+ channels, movies, and shows in stunning HD and 4K quality. Stream anywhere, anytime, on any device.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary group">
                Get Started Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button variant="outline" className="btn-secondary flex items-center">
                <Play size={18} className="mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col items-center lg:items-start">
                <div className="h-12 w-12 bg-chinx-purple/20 rounded-lg flex items-center justify-center mb-3">
                  <Tv className="text-chinx-purple h-6 w-6" />
                </div>
                <span className="text-white font-medium">10,000+ Channels</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="h-12 w-12 bg-chinx-purple/20 rounded-lg flex items-center justify-center mb-3">
                  <Play className="text-chinx-purple h-6 w-6" />
                </div>
                <span className="text-white font-medium">HD & 4K Quality</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="h-12 w-12 bg-chinx-purple/20 rounded-lg flex items-center justify-center mb-3">
                  <Wifi className="text-chinx-purple h-6 w-6" />
                </div>
                <span className="text-white font-medium">No Buffering</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="h-12 w-12 bg-chinx-purple/20 rounded-lg flex items-center justify-center mb-3">
                  <Globe className="text-chinx-purple h-6 w-6" />
                </div>
                <span className="text-white font-medium">Global Content</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-chinx-purple to-chinx-blue blur-xl opacity-30 animate-pulse-glow"></div>
              <div className="relative glass-card overflow-hidden rounded-xl shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800" 
                  alt="Stream on any device" 
                  className="w-full h-auto rounded-t-xl"
                />
                <div className="p-6 bg-gradient-to-b from-gray-900/90 to-black">
                  <h3 className="text-xl font-bold text-white mb-2">Stream Anywhere</h3>
                  <p className="text-gray-300">Watch your favorite content on Smart TVs, smartphones, tablets, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
