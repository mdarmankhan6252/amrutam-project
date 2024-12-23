import google from '../assets/img/google.png'
import store from '../assets/img/store.png'
import circle from '../assets/img/circle.png'
import iPhone from '../assets/img/iPhone.png'


const AboutApp = () => {
   return (
      <div className="primaryBg py-16">
         <div className="max-w-7xl mx-auto px-3 flex items-center justify-between flex-col-reverse sm:flex-row ">
            <div className='space-y-3'>
               <h1 className='font-semibold text-4xl primaryColor text-center sm:text-left hidden sm:block'>Amrutam home App</h1>
               <p className='font-light text-[#7d7b7b] text-center sm:text-left hidden sm:block'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
               <h2 className='text-2xl font-semibold text-center sm:text-left'>Get a diet & lifestyle consultation with ayurvedic experts across the globe </h2>
               <h3 className='font-bold text-2xl pt-10 text-center sm:text-left'>Get the App now</h3>
               <div className='flex items-center sm:space-x-4 flex-col sm:flex-row justify-center sm:justify-start space-y-6 sm:space-y-0'>
                  <img src={google} alt="" className='w-52' />
                  <img src={store} alt="" className='w-52' />
               </div>
            </div>
            <div className='relative'>
               <h1 className='font-semibold text-4xl primaryColor text-center sm:text-left sm:hidden pb-4'>Amrutam home App</h1>
               <p className='font-light text-[#7d7b7b] text-center sm:text-left sm:hidden'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
               <img src={circle} alt="" className=' absolute left-20 top-6 hidden sm:inline-block' />
               <img src={circle} alt="" className=' absolute -bottom-10 right-16 hidden sm:inline-block' />
               <img src={iPhone} alt="" className='z-30 relative' />

            </div>
         </div>

      </div>
   );
};

export default AboutApp;