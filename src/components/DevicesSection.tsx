
import React from 'react';

const devices = [
  {
    name: "Smart TV",
    image: "https://via.placeholder.com/120x120.png?text=Smart+TV",
    brands: "Samsung, LG, Sony, TCL, and more"
  },
  {
    name: "Mobile Devices",
    image: "https://via.placeholder.com/120x120.png?text=Mobile",
    brands: "iOS and Android smartphones and tablets"
  },
  {
    name: "Streaming Devices",
    image: "https://via.placeholder.com/120x120.png?text=Streaming",
    brands: "Firestick, Roku, Apple TV, Chromecast"
  },
  {
    name: "Computers",
    image: "https://via.placeholder.com/120x120.png?text=Computer",
    brands: "Windows, Mac, Linux via web browsers"
  },
  {
    name: "Gaming Consoles",
    image: "https://via.placeholder.com/120x120.png?text=Gaming",
    brands: "Xbox, PlayStation"
  }
];

const DevicesSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">Multi-Device</span> Compatibility
          </h2>
          <p className="section-subtitle">
            Enjoy ChinX IPTV on all your favorite devices
          </p>
        </div>
        
        <div className="glass-card p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {devices.map((device, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-white/10 rounded-full p-6 mb-4">
                  <img src={device.image} alt={device.name} className="h-24 w-24" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{device.name}</h3>
                <p className="text-gray-400 text-sm">{device.brands}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-chinx-purple/20 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Easy Setup, Instant Streaming</h3>
            <p className="text-gray-300 mb-4">Our setup guides make it easy to get started on any device in minutes.</p>
            <button className="bg-chinx-purple hover:bg-chinx-purple/90 text-white font-medium py-2 px-6 rounded-lg transition-all">
              View Setup Guides
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
