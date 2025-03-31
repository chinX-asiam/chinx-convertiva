
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ChinX IPTV?",
    answer: "ChinX IPTV is a premium Internet Protocol Television service that provides access to over 10,000 live TV channels, VOD content, and more through your internet connection. We offer high-quality streaming of international channels on multiple devices."
  },
  {
    question: "How does ChinX IPTV work?",
    answer: "ChinX IPTV streams television content over your internet connection instead of through traditional satellite or cable. You simply need a compatible device (Smart TV, smartphone, tablet, etc.) and a stable internet connection to enjoy our service."
  },
  {
    question: "What devices can I use with ChinX IPTV?",
    answer: "Our service is compatible with most modern devices including Smart TVs (Samsung, LG, Sony, etc.), smartphones and tablets (iOS and Android), streaming devices (Firestick, Roku, Apple TV, Android TV boxes), computers, and gaming consoles."
  },
  {
    question: "How fast does my internet need to be?",
    answer: "For standard definition channels, we recommend at least a 5 Mbps connection. For HD content, a 10 Mbps connection is recommended, and for 4K content, we suggest at least 25 Mbps. The more stable your connection, the better your viewing experience will be."
  },
  {
    question: "How many devices can I use simultaneously?",
    answer: "The number of simultaneous connections depends on your subscription plan. Our Basic plan supports 1 device, Premium supports 3 devices, and Ultimate supports 5 devices. Additional connections can be purchased if needed."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 24-hour free trial so you can test our service before committing to a subscription. Contact our customer support team to request your free trial access."
  },
  {
    question: "Is ChinX IPTV legal?",
    answer: "ChinX IPTV operates as a content distribution service with appropriate licensing agreements. We comply with digital content regulations in the territories we serve. Always check your local laws regarding IPTV services."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards, PayPal, cryptocurrency (Bitcoin, Ethereum), and bank transfers. All payments are processed securely."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Frequently <span className="text-gradient">Asked</span> Questions
          </h2>
          <p className="section-subtitle">
            Got questions? We've got answers to help you get started
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card p-8">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <button className="btn-secondary">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
