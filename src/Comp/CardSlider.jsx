import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import agra from '../media/card/agra.webp';
import jaipur from '../media/card/jaipur.jpg';
import jodhpur from '../media/card/jodhpur.webp';
import udaipur from '../media/card/udapir.jpg';
import gujrat from '../media/card/gujrat.jpg';
import ujjain from '../media/card/ujjain.jpg';
import ladhak from '../media/card/ladaka.webp';
import varasi from '../media/card/Varanasi.jpg';
import assam from '../media/card/assam.jpg';
import shimla from '../media/card/Shimla.jpg';
import kerala from '../media/card/Kerala.jpg';
import goaa from '../media/card/goa.jpg';

import styless from '../css/MyComponent.module.css';

const CardSlider = () => {
    const data = [
        { 
            name: "Agra", 
            des: "Home to the iconic Taj Mahal, Agra is a city that showcases Mughal architecture and history.", 
            imgee: agra 
        },
        { 
            name: 'Jaipur', 
            des: "Known as the Pink City, Jaipur is famous for its royal palaces, historic forts, and vibrant bazaars.", 
            imgee: jaipur 
        },
        { 
            name: 'Jodhpur', 
            des: 'Jodhpur, the Blue City, is renowned for its Mehrangarh Fort and picturesque blue-painted houses.', 
            imgee: jodhpur 
        },
        { 
            name: 'Udaipur', 
            des: 'Often called the City of Lakes, Udaipur boasts serene lakes and majestic palaces.', 
            imgee: udaipur 
        },
        { 
            name: 'Gujrat', 
            des: 'Gujarat offers a mix of cultural heritage, temples, and the famous Gir National Park.', 
            imgee: gujrat 
        },
        { 
            name: 'Ujjain', 
            des: 'A spiritual hub, Ujjain is known for the Mahakaleshwar Temple and the Kumbh Mela.', 
            imgee: ujjain 
        },
        { 
            name: 'Ladakh', 
            des: 'A paradise for adventurers, Ladakh is famous for its stunning landscapes and monasteries.', 
            imgee: ladhak 
        },
        { 
            name: 'Varanasi', 
            des: 'One of the oldest cities in the world, Varanasi is a spiritual center with Ganga ghats and temples.', 
            imgee: varasi 
        },
        { 
            name: 'Assam', 
            des: 'Known for its tea gardens and the Kaziranga National Park, Assam is a land of natural beauty.', 
            imgee: assam 
        },
        { 
            name: 'Shimla', 
            des: 'The Queen of Hills, Shimla is a popular hill station with colonial architecture and scenic views.', 
            imgee: shimla 
        },
        { 
            name: 'Kerala', 
            des: 'God’s Own Country, Kerala is famous for its backwaters, beaches, and lush greenery.', 
            imgee: kerala 
        },
        { 
            name: 'Goa', 
            des: 'Known for its beaches, vibrant nightlife, and Portuguese heritage, Goa is a tourist hotspot.', 
            imgee: goaa 
        }
    ];

    return (
        <div className="p-5 gap-6 flex items-center justify-start flex-nowrap py-5 w-full mt-5 overflow-x-auto hide-scrollbar">
        {data.map((value, index) => (
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden w-60 sm:w-80 flex-shrink-0 transform hover:scale-105 transition-transform duration-400"
            key={index}
          >
            <img
              className="w-full h-40 sm:h-48 object-cover"
              src={value.imgee}
              alt={value.name}
            />
            <div className="p-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 text-center">
                {value.name}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base text-center">{value.des}</p>
            </div>
          </div>
        ))}
      </div>
      
  );
};

export default CardSlider;
