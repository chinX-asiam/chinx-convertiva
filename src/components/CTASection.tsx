
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-chinx-dark-purple to-black py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card p-10 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-chinx-purple/30 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-chinx-blue/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Streaming Today with ChinX IPTV
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers and transform your entertainment experience with our premium IPTV service.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-primary">Get Started Now</Button>
              <Button variant="outline" className="btn-secondary">View Channels</Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>No long-term contracts. Cancel anytime. 100% satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
