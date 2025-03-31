
import React from 'react';
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    period: "month",
    popular: false,
    features: [
      "5,000+ Live TV Channels",
      "HD Quality Streaming",
      "Video On Demand (VOD)",
      "Compatible with 1 Device",
      "Limited Sports Coverage",
      "7-Day Catch-Up",
      "24/7 Customer Support"
    ],
    cta: "Choose Basic"
  },
  {
    name: "Premium",
    price: "$14.99",
    period: "month",
    popular: true,
    features: [
      "10,000+ Live TV Channels",
      "HD & 4K Quality Streaming",
      "Extensive VOD Library",
      "Compatible with 3 Devices",
      "Complete Sports Packages",
      "14-Day Catch-Up",
      "24/7 Priority Support",
      "EPG Integration",
      "Adult Channels Access"
    ],
    cta: "Choose Premium"
  },
  {
    name: "Ultimate",
    price: "$19.99",
    period: "month",
    popular: false,
    features: [
      "15,000+ Live TV Channels",
      "Premium HD & 4K Quality",
      "Full VOD Library Access",
      "Compatible with 5 Devices",
      "All Sports + PPV Events",
      "30-Day Catch-Up",
      "24/7 VIP Support",
      "EPG Integration",
      "Adult Channels Access",
      "Exclusive Content"
    ],
    cta: "Choose Ultimate"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-gradient-to-t from-chinx-dark-purple to-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="section-subtitle">
            Choose the plan that's right for you and start streaming today
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card relative overflow-hidden transition-transform duration-300 hover:scale-105 ${
                plan.popular ? 'border-chinx-purple' : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-chinx-purple text-white px-8 py-1 transform rotate-45 translate-x-5 translate-y-3">
                    Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-chinx-purple shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">Need a custom plan for business or resellers?</p>
          <Button variant="outline" className="btn-secondary">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
