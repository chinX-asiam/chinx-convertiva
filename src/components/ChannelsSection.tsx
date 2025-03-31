
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Main streaming platforms
const streamingPlatforms = [
  {
    name: "Netflix",
    logo: "/netflix-logo.png",
  },
  {
    name: "Disney+",
    logo: "/disney-logo.png",
  },
  {
    name: "Stan",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Stan_video_on_demand_logo.svg/1200px-Stan_video_on_demand_logo.svg.png",
  },
  {
    name: "HBO Max",
    logo: "/hbomax-logo.png", 
  },
  {
    name: "Amazon Prime",
    logo: "/amazon-prime-logo.png",
  },
  {
    name: "Hulu",
    logo: "/hulu-logo.png",
  },
  {
    name: "ESPN",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/1920px-ESPN_wordmark.svg.png",
  },
  {
    name: "Sky",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Sky_logo.svg/1200px-Sky_logo.svg.png",
  }
];

// Categories with their channels
const channelCategories = [
  {
    id: "sports",
    name: "Sports",
    channels: [
      {
        name: "ESPN",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/1920px-ESPN_wordmark.svg.png"
      },
      {
        name: "Fox Sports",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2015_Fox_Sports_logo.svg/1920px-2015_Fox_Sports_logo.svg.png"
      },
      {
        name: "beIN Sports",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bein_Sport_logo.png/1200px-Bein_Sport_logo.png"
      },
      {
        name: "BT Sport",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/BT_Sport_logo_2019.svg/1920px-BT_Sport_logo_2019.svg.png"
      },
      {
        name: "DAZN",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/DAZN_Logo_Master.svg/1920px-DAZN_Logo_Master.svg.png"
      },
      {
        name: "Eurosport",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Eurosport_logo_%282015%29.svg/1920px-Eurosport_logo_%282015%29.svg.png"
      }
    ]
  },
  {
    id: "entertainment",
    name: "Entertainment",
    channels: [
      {
        name: "HBO",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/1920px-HBO_logo.svg.png"
      },
      {
        name: "AMC",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/AMC_logo_2016.svg/1920px-AMC_logo_2016.svg.png"
      },
      {
        name: "FX",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/FX_International_logo.svg/1920px-FX_International_logo.svg.png"
      },
      {
        name: "TNT",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/TNT_Logo_2016.svg/1920px-TNT_Logo_2016.svg.png"
      },
      {
        name: "Showtime",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Showtime.svg/1920px-Showtime.svg.png"
      },
      {
        name: "USA Network",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/1920px-USA_Network_logo_%282016%29.svg.png"
      }
    ]
  },
  {
    id: "movies",
    name: "Movies",
    channels: [
      {
        name: "Paramount+",
        logo: "/paramount-logo.png"
      },
      {
        name: "Apple TV+",
        logo: "/appletv-logo.png"
      },
      {
        name: "Starz",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Starz_2022.svg/1920px-Starz_2022.svg.png"
      },
      {
        name: "Mubi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mubi_logo.svg/1920px-Mubi_logo.svg.png"
      },
      {
        name: "Criterion",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Criterion_Channel.svg/1920px-Criterion_Channel.svg.png"
      },
      {
        name: "Peacock",
        logo: "/peacock-logo.png"
      }
    ]
  },
  {
    id: "news",
    name: "News",
    channels: [
      {
        name: "CNN",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1920px-CNN.svg.png"
      },
      {
        name: "BBC",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/1920px-BBC_Logo_2021.svg.png"
      },
      {
        name: "Al Jazeera",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/1920px-Aljazeera_eng.svg.png"
      },
      {
        name: "Fox News",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/1920px-Fox_News_Channel_logo.svg.png"
      },
      {
        name: "Sky News",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sky-news-logo.png/1920px-Sky-news-logo.png"
      },
      {
        name: "MSNBC",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MSNBC_2021.svg/1920px-MSNBC_2021.svg.png"
      }
    ]
  },
  {
    id: "kids",
    name: "Kids",
    channels: [
      {
        name: "Nickelodeon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nickelodeon_2009_logo.svg/1920px-Nickelodeon_2009_logo.svg.png"
      },
      {
        name: "Cartoon Network",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/1920px-Cartoon_Network_2010_logo.svg.png"
      },
      {
        name: "Disney Junior",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Disney_Junior.svg/1920px-Disney_Junior.svg.png"
      },
      {
        name: "PBS Kids",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/PBS_Kids_Logo.svg/1920px-PBS_Kids_Logo.svg.png"
      },
      {
        name: "Baby TV",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/BabyTV.svg/1200px-BabyTV.svg.png"
      },
      {
        name: "CBeebies",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/CBeebies.svg/1920px-CBeebies.svg.png"
      }
    ]
  }
];

const ChannelsSection = () => {
  const [activeCategory, setActiveCategory] = useState("sports");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  // Find the currently active category object
  const currentCategory = channelCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="channels" className="bg-black py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Top streaming services showcase */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white text-center">
            Access All Your Favorite Channels & Platforms in One Subscription
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-12">
            {streamingPlatforms.map((platform, index) => (
              <div 
                key={index} 
                className="bg-[#111827] rounded-lg p-4 flex items-center justify-center aspect-[4/2] transition-transform hover:scale-105"
              >
                <img 
                  src={platform.logo} 
                  alt={`${platform.name} logo`} 
                  className="max-w-full max-h-10 object-contain" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Channel categories section */}
        <div className="mt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Explore Our Channel Categories
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            +23,000 channels organized by category for easy browsing
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {channelCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={cn(
                  "px-6 py-4 rounded-lg text-md font-medium",
                  activeCategory === category.id 
                    ? "bg-[#3b82f6] text-white" 
                    : "bg-transparent text-gray-400 hover:text-white"
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Display channels for the active category */}
          {currentCategory && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {currentCategory.channels.map((channel, index) => (
                <div 
                  key={index} 
                  className="bg-[#111827] rounded-lg p-6 flex items-center justify-center aspect-[4/3] transition-transform hover:scale-105"
                >
                  <img 
                    src={channel.logo} 
                    alt={`${channel.name} logo`} 
                    className="max-w-full max-h-12 object-contain" 
                  />
                </div>
              ))}
            </div>
          )}

          {/* View all button */}
          <div className="mt-12 text-center">
            <Button 
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl text-base"
            >
              View All {currentCategory?.name} Channels
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
