
import React from 'react';
import { Tv, Play, Wifi, Clock, Calendar, Globe, Star, Shield } from "lucide-react";

const features = [
  {
    icon: <Tv className="h-8 w-8 text-chinx-purple" />,
    title: "10,000+ Live Channels",
    description: "Access over 10,000 live TV channels from around the world in HD and 4K quality."
  },
  {
    icon: <Play className="h-8 w-8 text-chinx-purple" />,
    title: "VOD Library",
    description: "Extensive video-on-demand library with the latest movies and TV series."
  },
  {
    icon: <Wifi className="h-8 w-8 text-chinx-purple" />,
    title: "No Buffering",
    description: "Enjoy smooth streaming with our high-performance servers and bandwidth."
  },
  {
    icon: <Clock className="h-8 w-8 text-chinx-purple" />,
    title: "24/7 Availability",
    description: "Our service is available around the clock with no downtime or interruptions."
  },
  {
    icon: <Calendar className="h-8 w-8 text-chinx-purple" />,
    title: "EPG Integration",
    description: "Electronic Program Guide integration for schedule planning and recording."
  },
  {
    icon: <Globe className="h-8 w-8 text-chinx-purple" />,
    title: "Multi-Language Support",
    description: "Content in multiple languages to cater to diverse audiences worldwide."
  },
  {
    icon: <Star className="h-8 w-8 text-chinx-purple" />,
    title: "Premium Sports",
    description: "Never miss a game with our comprehensive sports package including PPV events."
  },
  {
    icon: <Shield className="h-8 w-8 text-chinx-purple" />,
    title: "Secure Connection",
    description: "Encrypted streams and secure platform to protect your privacy and data."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-chinx-dark-purple to-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">Premium Features</span> You'll Love
          </h2>
          <p className="section-subtitle">
            ChinX IPTV offers an unmatched streaming experience with cutting-edge features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-14 w-14 bg-chinx-purple/20 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
