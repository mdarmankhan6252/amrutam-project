import { useEffect } from 'react';
import banner from '../assets/img/banner1.png';
// import bannerSm from '../assets/img/bannerSm.jfif'
import { useState } from 'react';

const Banner = () => {

   const [isSmall, setIsSmall] = useState(false);

   useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width :640px)");
      const handleMedia = () => {
         setIsSmall(mediaQuery.matches)
      }

      handleMedia();

      mediaQuery.addEventListener("change", handleMedia)

      return () => mediaQuery.removeEventListener("change", handleMedia)
   }, [])

   console.log(isSmall);

   return (
      <div
         style={{
            background: ` 
         linear-gradient(
            to right, 
            rgba(0, 0, 0, 1) 10%, 
            rgba(0, 0, 0, 0.4) 100%
         ), 
         url(${banner})
      `,
            backgroundRepeat: 'no-repeat', // Prevent repetition
            backgroundSize: 'cover', // Ensure the image covers the div
            backgroundPosition: 'center', // Center the image
         }}
         className="py-40 text-white"
      >
         <div className='max-w-7xl mx-auto px-3 w-full space-y-6'>
            <h3 className='text-2xl font-light text-[#FFF7E2]'>Namaste, Welcome to Amrutam</h3>
            <h1 className='text-3xl sm:text-5xl font-bold sm:leading-[5rem] leading-[3rem]' >Step into Holistic Healing with <span className='text-[#FFF7E2] border-b-4 border-[#FFF7E2]'>Ayurveda</span> Book Consultation with certified Experts.</h1>
            <p className='leading-9'>Dive into the world of ayurveda and Experience Personalized Health Solutions and<br /> Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
            <button className='uppercase text-white bg-[#3A643B] py-3 px-6 rounded-xl'>book an appointment</button>
         </div>
      </div>
   );
};

export default Banner;
