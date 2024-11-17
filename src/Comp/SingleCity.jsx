import { useParams } from "react-router-dom"
import * as React from 'react';
import {addDestination, } from "../feature/citySlice/travelSlice.js"

import agra from '../media/card/agra.webp';
import jaipur from '../media/card/jaipur.jpg';
import jodhpur from '../media/card/jodhpur.webp';
import udaipur from '../media/card/udapir.jpg';
import gujarat from '../media/card/gujrat.jpg';
import ujjain from '../media/card/ujjain.jpg';
import ladakh from '../media/card/ladaka.webp';
import varanasi from '../media/card/Varanasi.jpg';
import assam from '../media/card/assam.jpg';
import shimla from '../media/card/Shimla.jpg';
import kerala from '../media/card/Kerala.jpg';
import goa from '../media/card/goa.jpg';
import mumbai from '../media/card/mumbai.webp';
import delhi from '../media/card/delhi.jpg';
import chennai from '../media/card/chennai.jpg';
import hyderabad from '../media/card/Hyderabad.jpg';
import kolkata from '../media/card/kolkata.webp';
import bangalore from '../media/card/banglore.jpeg';
import mysore from '../media/card/Mysore.webp';
import pondicherry from '../media/card/pondicherry.webp';
import ahmedabad from '../media/card/ahemdabad.jpg';
import amritsar from '../media/card/amritsars.jpg';
import rishikesh from '../media/card/RISHIKESH.jpg';
import bhopal from '../media/card/bhopal.jpg';
import lucknow from '../media/card/lucknow.jpg';
import manali from '../media/card/manali.jpg';
import jaisalmer from '../media/card/jaisalmer.jpg';
import coorg from '../media/card/coorg.jpg';
import ranthambore from '../media/card/ranthambore.jpg';
import darjeeling from '../media/card/darjeeling.jpg';
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";




   



function SingleCity(props){

    const data = [
        { 
            id: 1, 
            name: "Agra", 
            des: "Home to the iconic Taj Mahal.", 
            imgee: agra, 
            attractions: "Taj Mahal, Agra Fort, Fatehpur Sikri", 
            budget: "₹4,500",
            rating: 4.5, // Rating
            travelTips: "Visit early in the morning to avoid crowds.", // Travel Tips
            bestTimeToVisit: "November to March" // Best Time to Visit
        },
        { 
            id: 2, 
            name: 'Jaipur', 
            des: "The Pink City, known for its royal heritage.", 
            imgee: jaipur, 
            attractions: "Hawa Mahal, Amber Fort, City Palace", 
            budget: "₹4,800",
            rating: 3.6, // Rating
            travelTips: "Dress modestly when visiting temples.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 3, 
            name: 'Jodhpur', 
            des: 'The Blue City, famous for its forts and temples.', 
            imgee: jodhpur, 
            attractions: "Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada", 
            budget: "₹4,700",
            rating: 2.4, // Rating
            travelTips: "Try local street food at the Clock Tower area.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 4, 
            name: 'Udaipur', 
            des: 'The City of Lakes, renowned for its palaces.', 
            imgee: udaipur, 
            attractions: "City Palace, Lake Pichola, Jag Mandir", 
            budget: "₹4,600",
            rating: 4.7, // Rating
            travelTips: "Take a boat ride on Lake Pichola for the best experience.", // Travel Tips
            bestTimeToVisit: "September to March" // Best Time to Visit
        },
        { 
            id: 5, 
            name: 'Gujarat', 
            des: 'A state with diverse culture and historic sites.', 
            imgee: gujarat, 
            attractions: "Gir National Park, Rann of Kutch, Somnath Temple", 
            budget: "₹4,800",
            rating: 4.3, // Rating
            travelTips: "Attend the Rann Utsav for a unique cultural experience.", // Travel Tips
            bestTimeToVisit: "November to February" // Best Time to Visit
        },
        { 
            id: 6, 
            name: 'Ujjain', 
            des: 'An ancient city with deep spiritual significance.', 
            imgee: ujjain, 
            attractions: "Mahakaleshwar Temple, Kal Bhairav Temple, Ram Mandir Ghat", 
            budget: "₹4,200",
            rating: 4.2, // Rating
            travelTips: "Visit during the Simhastha Kumbh Mela for a spiritual experience.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 7, 
            name: 'Ladakh', 
            des: 'A land of high passes and stunning landscapes.', 
            imgee: ladakh, 
            attractions: "Pangong Lake, Nubra Valley, Thiksey Monastery", 
            budget: "₹4,999",
            rating: 4.8, // Rating
            travelTips: "Prepare for high altitude and cold weather.", // Travel Tips
            bestTimeToVisit: "June to September" // Best Time to Visit
        },
        { 
            id: 8, 
            name: 'Varanasi', 
            des: 'The spiritual heart of India on the Ganges.', 
            imgee: varanasi, 
            attractions: "Kashi Vishwanath Temple, Dashashwamedh Ghat, Sarnath", 
            budget: "₹4,500",
            rating: 4.6, // Rating
            travelTips: "Experience the Ganga Aarti on the ghats.", // Travel Tips
            bestTimeToVisit: "November to March" // Best Time to Visit
        },
        { 
            id: 9, 
            name: 'Assam', 
            des: 'Known for its tea gardens and wildlife.', 
            imgee: assam, 
            attractions: "Kaziranga National Park, Kamakhya Temple, Majuli Island", 
            budget: "₹4,700",
            rating: 4.5, // Rating
            travelTips: "Explore the tea estates and enjoy a river cruise in Majuli.", // Travel Tips
            bestTimeToVisit: "November to April" // Best Time to Visit
        },
        { 
            id: 10, 
            name: 'Shimla', 
            des: 'The Queen of Hills with colonial charm.', 
            imgee: shimla, 
            attractions: "Mall Road, Christ Church, Jakhoo Temple", 
            budget: "₹4,800",
            rating: 4.4, // Rating
            travelTips: "Book your accommodations early during peak season.", // Travel Tips
            bestTimeToVisit: "March to June, September to December" // Best Time to Visit
        },
        { 
            id: 11, 
            name: 'Kerala', 
            des: 'God’s Own Country with backwaters and beaches.', 
            imgee: kerala, 
            attractions: "Alleppey Backwaters, Munnar, Periyar Wildlife Sanctuary", 
            budget: "₹4,800",
            rating: 4.7, // Rating
            travelTips: "Stay in a houseboat for an authentic experience.", // Travel Tips
            bestTimeToVisit: "September to March" // Best Time to Visit
        },
        { 
            id: 12, 
            name: 'Goa', 
            des: 'A tropical paradise with beaches and vibrant nightlife.', 
            imgee: goa, 
            attractions: "Baga Beach, Se Cathedral, Dudhsagar Falls", 
            budget: "₹4,500",
            rating: 4.6, // Rating
            travelTips: "Try the local seafood and explore the markets.", // Travel Tips
            bestTimeToVisit: "November to March" // Best Time to Visit
        },
        { 
            id: 13, 
            name: 'Mumbai', 
            des: 'The city of dreams and Bollywood.', 
            imgee: mumbai, 
            attractions: "Gateway of India, Marine Drive, Elephanta Caves", 
            budget: "₹4,999",
            rating: 4.5, // Rating
            travelTips: "Visit the local markets for a vibrant experience.", // Travel Tips
            bestTimeToVisit: "November to February" // Best Time to Visit
        },
        { 
            id: 14, 
            name: 'Delhi', 
            des: 'The capital city with rich history.', 
            imgee: delhi, 
            attractions: "Red Fort, India Gate, Qutub Minar", 
            budget: "₹4,800",
            rating: 4.4, // Rating
            travelTips: "Explore historical sites and enjoy the diverse food.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 15, 
            name: 'Chennai', 
            des: 'A coastal city with a rich cultural heritage.', 
            imgee: chennai, 
            attractions: "Marina Beach, Kapaleeshwarar Temple, Fort St. George", 
            budget: "₹4,700",
            rating: 4.3, // Rating
            travelTips: "Visit the local temples and enjoy South Indian cuisine.", // Travel Tips
            bestTimeToVisit: "November to February" // Best Time to Visit
        },
        { 
            id: 16, 
            name: 'Hyderabad', 
            des: 'The City of Pearls with historic landmarks.', 
            imgee: hyderabad, 
            attractions: "Charminar, Golconda Fort, Ramoji Film City", 
            budget: "₹4,600",
            rating: 4.5, // Rating
            travelTips: "Try the famous Hyderabadi biryani.", // Travel Tips
            bestTimeToVisit: "November to February" // Best Time to Visit
        },
        { 
            id: 17, 
            name: 'Kolkata', 
            des: 'The cultural capital with colonial architecture.', 
            imgee: kolkata, 
            attractions: "Victoria Memorial, Howrah Bridge, Dakshineswar Kali Temple", 
            budget: "₹4,500",
            rating: 4.4, // Rating
            travelTips: "Experience the vibrant cultural festivals and local food.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 18, 
            name: 'Bangalore', 
            des: 'The Silicon Valley of India with gardens and IT hubs.', 
            imgee: bangalore, 
            attractions: "Lalbagh Botanical Garden, Bangalore Palace, Cubbon Park", 
            budget: "₹4,800",
            rating: 4.5, // Rating
            travelTips: "Explore the city's tech parks and green spaces.", // Travel Tips
            bestTimeToVisit: "September to March" // Best Time to Visit
        },
        { 
            id: 19, 
            name: 'Mysore', 
            des: 'The City of Palaces with rich history.', 
            imgee: mysore, 
            attractions: "Mysore Palace, Chamundi Hill, Brindavan Gardens", 
            budget: "₹4,600",
            rating: 4.4, // Rating
            travelTips: "Visit the Mysore Palace during the Dussehra festival.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 20, 
            name: 'Pondicherry', 
            des: 'A French colonial settlement with serene beaches.', 
            imgee: pondicherry, 
            attractions: "Promenade Beach, Auroville, Paradise Beach", 
            budget: "₹4,500",
            rating: 4.6, // Rating
            travelTips: "Explore the French quarters and enjoy the beaches.", // Travel Tips
            bestTimeToVisit: "November to February" // Best Time to Visit
        },
        { 
            id: 21, 
            name: 'Ahmedabad', 
            des: 'A city with a blend of tradition and modernity.', 
            imgee: ahmedabad, 
            attractions: "Sabarmati Ashram, Kankaria Lake, Adalaj Stepwell", 
            budget: "₹4,600",
            rating: 4.4, // Rating
            travelTips: "Visit during the Kite Festival for a unique experience.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 22, 
            name: 'Amritsar', 
            des: 'Home to the Golden Temple and rich history.', 
            imgee: amritsar, 
            attractions: "Go    lden Temple, Jallianwala Bagh, Wagah Border", 
            budget: "₹4,500",
            rating: 4.7, // Rating
            travelTips: "Don't miss the evening Wagah Border ceremony.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 23, 
            name: 'Rishikesh', 
            des: 'The Yoga Capital of the World.', 
            imgee: rishikesh, 
            attractions: "Lakshman Jhula, Triveni Ghat, Neelkanth Mahadev Temple", 
            budget: "₹4,600",
            rating: 4.5, // Rating
            travelTips: "Join a yoga class and visit the local ashrams.", // Travel Tips
            bestTimeToVisit: "September to March" // Best Time to Visit
        },
        { 
            id: 24, 
            name: 'Bhopal', 
            des: 'The City of Lakes with a mix of history and nature.', 
            imgee: bhopal, 
            attractions: "Upper Lake, Bhimbetka Caves, Sanchi Stupa", 
            budget: "₹4,500",
            rating: 4.4, // Rating
            travelTips: "Explore the lakes and the historic sites around Bhopal.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 25, 
            name: 'Lucknow', 
            des: 'The City of Nawabs known for its culture and cuisine.', 
            imgee: lucknow, 
            attractions: "Bara Imambara, Rumi Darwaza, Hazratganj", 
            budget: "₹4,600",
            rating: 4.5, // Rating
            travelTips: "Try the famous Awadhi cuisine and explore the historic monuments.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 26, 
            name: 'Manali', 
            des: 'A popular hill station with scenic beauty.', 
            imgee: manali, 
            attractions: "Rohtang Pass, Solang Valley, Hadimba Temple", 
            budget: "₹4,800",
            rating: 4.6, 
            travelTips: "Enjoy adventure sports in Solang Valley and visit the temples.", 
            bestTimeToVisit: "March to June, September to December" 
        },
        { 
            id: 27, 
            name: 'Jaisalmer', 
            des: 'The Golden City with its magnificent fort.', 
            imgee: jaisalmer, 
            attractions: "Jaisalmer Fort, Sam Sand Dunes, Patwon Ki Haveli", 
            budget: "₹4,700",
            rating: 4.5, // Rating
            travelTips: "Experience a desert safari and explore the sand dunes.", // Travel Tips
            bestTimeToVisit: "November to March" // Best Time to Visit
        },
        { 
            id: 28, 
            name: 'Coorg', 
            des: 'A hill station known for coffee plantations and misty hills.', 
            imgee: coorg, 
            attractions: "Abbey Falls, Raja’s Seat, Dubare Elephant Camp", 
            budget: "₹4,600",
            rating: 4.4, // Rating
            travelTips: "Visit the coffee estates and enjoy the scenic views.", // Travel Tips
            bestTimeToVisit: "October to March" // Best Time to Visit
        },
        { 
            id: 29, 
            name: 'Ranthambore', 
            des: 'A wildlife sanctuary famous for its tigers.', 
            imgee: ranthambore, 
            attractions: "Ranthambore National Park, Ranthambore Fort, Padam Lake", 
            budget: "₹4,900",
            rating: 4.7, // Rating
            travelTips: "Book safari tickets in advance and go for early morning safaris.", // Travel Tips
            bestTimeToVisit: "October to April" // Best Time to Visit
        },
        { 
            id: 30, 
            name: 'Darjeeling', 
            des: 'The Queen of the Hills with tea gardens.', 
            imgee: darjeeling, 
            attractions: "Tiger Hill, Batasia Loop, Darjeeling Himalayan Railway", 
            budget: "₹4,500",
            rating: 4.6, // Rating
            travelTips: "Visit the tea gardens and take a ride on the Himalayan Railway.", // Travel Tips
            bestTimeToVisit: "March to June, September to December" // Best Time to Visit
        }
    ];
    

 const {id} =  useParams()


 const [city, setCity] = useState([]);

 useEffect(() => {
    const cityId = parseInt(id, 10);

    const filteredCity = data.find((item) => item.id === cityId);
        setCity(filteredCity)


 }, [id])
 const dispatch = useDispatch();
console.warn(dispatch)
 




//                 const [city,setCity]=useState()
    
//                             useEffect(()=>{
//                      const filterData = data.filter((city)=> city.id===parseInt(id))
                     
//                     console.log(filterData) 
//                     //  data.filter((city)=> city.id === parseInt(id));
//                         // setCity(filterData[0])
//                         //     },[id])  

//                             })

// console.log(city)


    return (
       
        <div
        style={{
            zIndex: '-1',
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0'
        }}
      >
        <div
          style={{
            maxWidth: '345px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff'
          }}
        >
          <img
            alt="green iguana"
            style={{ height: '250px', width: '100%', objectFit: 'cover' }}
            src={city.imgee}
          />
          <div style={{ padding: '16px' }}>
            <h5 style={{ margin: '0 0 8px' }}>{city.name}</h5>
            <p style={{ color: 'red', margin: '0 0 8px' }}>{city.des}</p>
            <p style={{ color: '#555', margin: '0 0 8px' }}>
              Attraction -: {city.attractions}
            </p>
            <p style={{ color: '#555', margin: '0 0 16px' }}>
              Best Time To Visit -: {city.bestTimeToVisit}
            </p>
          </div>
          <div
            style={{
              padding: '16px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <button
    onClick={()=> dispatch(addDestination(city)) }

              style={{
                fontSize: '14px',
                padding: '8px 16px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Add To Cart
            </button>
        
          </div>
        </div>
      </div>
      

    )  
}


export default SingleCity;