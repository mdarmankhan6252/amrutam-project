import banner from '../assets/img/banner.png';

const Banner = () => {
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
            backgroundPosition: '80% right', // Move the image closer to the right
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
         }}
         className="relative flex items-center justify-between py-40 text-white"
      >
         <div className='max-w-7xl mx-auto px-3 w-full space-y-6'>
            <h3 className='text-2xl font-light text-[#FFF7E2]'>Namaste, Welcome to Amrutam</h3>
            <h1 className='text-3xl sm:text-5xl font-bold' style={{ lineHeight: '4rem' }}>Step into Holistic Healing with <span className='text-[#FFF7E2] border-b-4 border-[#FFF7E2]'>Ayurveda</span> <br />Book Consultation with certified Experts.</h1>
            <p>Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
            <button className='uppercase text-white bg-[#3A643B] py-3 px-6 rounded-xl'>book an appointment</button>
         </div>
      </div>
   );
};

export default Banner;
