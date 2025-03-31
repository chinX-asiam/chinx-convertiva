
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const channelCategories = [
  {
    id: "entertainment",
    name: "Entertainment",
    logos: [
      "https://via.placeholder.com/90x50.png?text=HBO",
      "https://via.placeholder.com/90x50.png?text=Netflix",
      "https://via.placeholder.com/90x50.png?text=Disney+",
      "https://via.placeholder.com/90x50.png?text=AMC",
      "https://via.placeholder.com/90x50.png?text=Showtime",
      "https://via.placeholder.com/90x50.png?text=FX",
      "https://via.placeholder.com/90x50.png?text=TNT",
      "https://via.placeholder.com/90x50.png?text=USA",
    ]
  },
  {
    id: "sports",
    name: "Sports",
    logos: [
      "https://via.placeholder.com/90x50.png?text=ESPN",
      "https://via.placeholder.com/90x50.png?text=Fox+Sports",
      "https://via.placeholder.com/90x50.png?text=NBA+TV",
      "https://via.placeholder.com/90x50.png?text=NFL",
      "https://via.placeholder.com/90x50.png?text=UFC",
      "https://via.placeholder.com/90x50.png?text=MLB",
      "https://via.placeholder.com/90x50.png?text=NBC+Sports",
      "https://via.placeholder.com/90x50.png?text=Sky+Sports",
    ]
  },
  {
    id: "news",
    name: "News",
    logos: [
      "https://via.placeholder.com/90x50.png?text=CNN",
      "https://via.placeholder.com/90x50.png?text=BBC",
      "https://via.placeholder.com/90x50.png?text=FOX+News",
      "https://via.placeholder.com/90x50.png?text=MSNBC",
      "https://via.placeholder.com/90x50.png?text=CNBC",
      "https://via.placeholder.com/90x50.png?text=Al+Jazeera",
      "https://via.placeholder.com/90x50.png?text=Sky+News",
      "https://via.placeholder.com/90x50.png?text=Euronews",
    ]
  },
  {
    id: "international",
    name: "International",
    logos: [
      "https://via.placeholder.com/90x50.png?text=Zee+TV",
      "https://via.placeholder.com/90x50.png?text=Star+Plus",
      "https://via.placeholder.com/90x50.png?text=TV5",
      "https://via.placeholder.com/90x50.png?text=RAI",
      "https://via.placeholder.com/90x50.png?text=Univision",
      "https://via.placeholder.com/90x50.png?text=TVE",
      "https://via.placeholder.com/90x50.png?text=RTL",
      "https://via.placeholder.com/90x50.png?text=Telemundo",
    ]
  }
];

const ChannelsSection = () => {
  return (
    <section id="channels" className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Access <span className="text-gradient">Thousands</span> of Channels
          </h2>
          <p className="section-subtitle">
            Explore our vast collection of premium channels in various categories
          </p>
        </div>
        
        <Tabs defaultValue="entertainment" className="w-full">
          <TabsList className="w-full flex justify-center mb-10 bg-transparent">
            {channelCategories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-chinx-purple data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {channelCategories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="glass-card p-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 items-center">
                {category.logos.map((logo, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center h-20"
                  >
                    <img src={logo} alt="Channel logo" className="max-h-full" />
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-400">
                  And <span className="text-chinx-purple font-semibold">2,000+ more</span> channels in this category
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-8">
            With over 10,000 channels from around the world, ChinX IPTV gives you unprecedented access to global content
          </p>
          <button className="btn-primary">View All Channels</button>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
