
import React from 'react';
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    location: "United States",
    rating: 5,
    comment: "ChinX IPTV changed how I watch TV. The channel selection is incredible and the HD quality is spectacular. Customer service is always responsive when I need help.",
    image: "https://via.placeholder.com/80x80.png"
  },
  {
    name: "Sarah Williams",
    location: "United Kingdom",
    rating: 5,
    comment: "Being able to watch my favorite UK shows while traveling abroad has been a game-changer. The stream quality is excellent with virtually no buffering.",
    image: "https://via.placeholder.com/80x80.png"
  },
  {
    name: "Carlos Rodriguez",
    location: "Spain",
    rating: 4,
    comment: "I've tried many IPTV services, but ChinX stands out for reliability and channel variety. Sports coverage is excellent, especially for international football.",
    image: "https://via.placeholder.com/80x80.png"
  },
  {
    name: "Priya Sharma",
    location: "India",
    rating: 5,
    comment: "The international channel selection is impressive. I can watch all my favorite Indian channels in HD quality. The VOD library is constantly updated with new content.",
    image: "https://via.placeholder.com/80x80.png"
  }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, i) => (
    <Star 
      key={i} 
      className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
    />
  ));
};

const TestimonialsSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="section-subtitle">
            Join thousands of satisfied viewers enjoying ChinX IPTV worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-bold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-300">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="mb-6 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-2xl text-white font-semibold mb-2">4.9 out of 5 stars</p>
          <p className="text-gray-400">Based on 2,500+ reviews</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
