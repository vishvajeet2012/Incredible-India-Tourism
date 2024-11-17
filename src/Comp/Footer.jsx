import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
        

        <div>
          <h2 className="text-2xl font-bold mb-4">Indian Tourism</h2>
          <p className="text-sm">
            Explore the beauty of the world with our handpicked destinations. Your journey begins here!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/destinations" className="hover:underline">Destinations</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: Indiantourismm@gov.com</li>
            <li>Phone: +91987654321</li>
            <li>Red fort , Delhi, India</li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-500">Facebook</a>
            <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
            <a href="https://instagram.com" className="hover:text-pink-500">Instagram</a>
            <a href="https://linkedin.com" className="hover:text-blue-600">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className='flex justify-center'>
      <div className="text-center mt-8 text-gray-400 text-sm">
            Designed with ❤️ by Vishu
      </div>
      <div className="text-center mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} India Tourism. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
