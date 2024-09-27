// Example of importing images in Webpack or similar setups
import img1 from '../media/slider/1.jpg';  // Use correct relative path
import img2 from '../media/slider/2.png'
import img3 from '../media/slider/3.jpeg'
import img4 from '../media/slider/4.jpg'
import img5 from '../media/slider/5.webp'
import img6 from '../media/slider/6.jpg'
const customUrls = [
  img4,  // Use the imported image
  img2,
  img3,
  img1, 
  img5,
  img6,
  // Add more URLs as needed
];

export function GenerateSlides(length = 10, sig = 0) {
  return Array.from({ length }).map((value, index) => {
    index = sig || index;
    
    // Use custom URLs, wrapping around if there are fewer URLs than slides
    return {
      src: customUrls[index % customUrls.length],
      alt: `Image ${index + 1}`,
    };
  });
}
