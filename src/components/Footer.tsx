
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">ChinX IPTV</h3>
            <p className="mb-4">Premium IPTV streaming service bringing you the best entertainment from around the world.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-chinx-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-chinx-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="hover:text-chinx-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-chinx-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m9 11 6 3-6 3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-chinx-purple transition-colors">Features</a></li>
              <li><a href="#channels" className="hover:text-chinx-purple transition-colors">Channels</a></li>
              <li><a href="#pricing" className="hover:text-chinx-purple transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-chinx-purple transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Setup Guides</a></li>
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-chinx-purple transition-colors">DMCA</a></li>
              <li><a href="#" className="hover:text-chinx-purple transition-colors">Copyright</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} ChinX IPTV. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <img src="https://via.placeholder.com/280x30.png?text=Payment+Methods" alt="Payment methods" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
