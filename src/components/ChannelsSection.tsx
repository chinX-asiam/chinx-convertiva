import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const channelCategories = [
  {
    id: "streaming",
    name: "Streaming",
    logos: [
      "/netflix-logo.png",
      "/hulu-logo.png",
      "/disney-logo.png",
      "/hbomax-logo.png",
      "/amazon-prime-logo.png",
      "/peacock-logo.png",
      "/paramount-logo.png",
      "/appletv-logo.png",
    ]
  },
  {
    id: "entertainment",
    name: "Entertainment",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/512px-HBO_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/AMC_logo_2016.svg/512px-AMC_logo_2016.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Showtime.svg/512px-Showtime.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/FX_International_logo.svg/512px-FX_International_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/TNT_Logo_2016.svg/512px-TNT_Logo_2016.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/512px-USA_Network_logo_%282016%29.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/ABC_logo_2021.svg/512px-ABC_logo_2021.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/CBS_2020_logo.svg/512px-CBS_2020_logo.svg.png",
    ]
  },
  {
    id: "sports",
    name: "Sports",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/512px-ESPN_wordmark.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2015_Fox_Sports_logo.svg/512px-2015_Fox_Sports_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/NBA_TV.svg/512px-NBA_TV.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/National_Football_League_logo.svg/512px-National_Football_League_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/512px-UFC_Logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/512px-Major_League_Baseball_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/NBC_Sports_2023.svg/512px-NBC_Sports_2023.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    ]
  },
  {
    id: "news",
    name: "News",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/512px-CNN.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/512px-BBC_Logo_2021.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/512px-Fox_News_Channel_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MSNBC_2021.svg/512px-MSNBC_2021.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/512px-CNBC_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/512px-Aljazeera_eng.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sky-news-logo.png/512px-Sky-news-logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Euronews_2016_logo.svg/512px-Euronews_2016_logo.svg.png",
    ]
  },
  {
    id: "international",
    name: "International",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Zee_TV_Logo_%282017%29.svg/512px-Zee_TV_Logo_%282017%29.svg.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Star_Plus_2016.svg/512px-Star_Plus_2016.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/TV5_Logo_2021.svg/512px-TV5_Logo_2021.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Rai_1_-_Logo_2016.svg/512px-Rai_1_-_Logo_2016.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_de_Univision.svg/512px-Logo_de_Univision.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Logo_TVE-Internacional.svg/512px-Logo_TVE-Internacional.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/RTL_-_Logo_2021.svg/512px-RTL_-_Logo_2021.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Telemundo_logo_2018.svg/512px-Telemundo_logo_2018.svg.png",
    ]
  }
];

// These are actual logos from popular streaming services
const streamingLogos = {
  "Netflix": "/netflix-logo.png",
  "Hulu": "/hulu-logo.png",
  "Disney+": "/disney-logo.png",
  "HBO Max": "/hbomax-logo.png",
  "Amazon Prime": "/amazon-prime-logo.png",
  "Peacock": "/peacock-logo.png",
  "Paramount+": "/paramount-logo.png",
  "Apple TV+": "/appletv-logo.png"
};

const ChannelsSection = () => {
  return (
    <section id="channels" className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Access <span className="text-gradient">Thousands</span> of Channels
          </h2>
          <p className="section-subtitle">
            Stream content from all your favorite platforms in one place
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-white">Popular Streaming Services</h3>
          <div className="glass-card p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {Object.entries(streamingLogos).map(([name, logo], idx) => (
              <div 
                key={idx} 
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex flex-col items-center justify-center h-24"
              >
                <div className="bg-white/10 p-2 rounded-lg w-full h-full flex items-center justify-center">
                  <img src={logo} alt={`${name} logo`} className="max-h-full max-w-full object-contain" />
                </div>
                <span className="mt-2 text-sm text-gray-300">{name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <Tabs defaultValue="streaming" className="w-full">
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
                    <img src={logo} alt={`${category.name} channel logo`} className="max-h-full max-w-full object-contain" />
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
