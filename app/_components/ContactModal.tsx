'use client';

import { useState } from 'react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='background-color-primary'>
      {/* Le bouton pour ouvrir la fenêtre */}
      <button 
        onClick={toggleModal} 
        
      >
        Contact me
      </button>

      {/* La fenêtre modale */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50  ">
          <div className="bg-primary p-6 rounded-lg shadow-lg w-96 relative">
            {/* Le bouton pour fermer la fenêtre */}
            <button 
              onClick={toggleModal} 
              className="absolute top-2 right-2 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-lg text-muted-foreground">Contact Me</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-1 p-2 w-full border border-gray-300 text-black rounded-md"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 p-2 w-full border border-gray-300 text-black rounded-md"
                  placeholder="youremail@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea 
                  id="message" 
                  className="mt-1 p-2 w-full border border-gray-300 text-black rounded-md"
                  placeholder="Write your message here..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-2 bg-chart-4 text-white rounded-lg hover:bg-chart-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
