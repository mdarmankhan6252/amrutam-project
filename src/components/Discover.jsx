import icon_11 from '../assets/img/11.png'
import icon_12 from '../assets/img/12.png'
import icon_13 from '../assets/img/13.png'
import icon_14 from '../assets/img/14.png'
import icon_15 from '../assets/img/15.png'
import icon_16 from '../assets/img/16.png'

import user_1 from '../assets/img/girl.png'
import user_bg from '../assets/img/bg_img.png'

const Discover = () => {
   return (
      <div className='flex items-center justify-between gap-6 max-w-7xl mx-auto'>
         {/* left side */}

         <div className=' space-y-10'>
            <div className='flex items-center space-x-2 -mr-6' >
               <div className='space-y-2 text-right'>
                  <h3 className='text-lg font-semibold'>Personalized Wellness
                  </h3>
                  <p className='text-sm text-[#969292]'>Get treatments made just for you based on your individual doshas ( body type)</p>
               </div>
               <img src={icon_11} alt="" className='w-20' />
            </div >
            <div className='flex items-center space-x-2' >
               <div className='space-y-2 text-right'>
                  <h3 className='text-lg font-semibold'>Personalized Wellness
                  </h3>
                  <p className='text-sm text-[#969292]'>Get treatments made just for you based on your individual doshas ( body type)</p>
               </div>
               <img src={icon_12} alt="" className='w-20' />
            </div >
            <div className='flex items-center space-x-2 -mr-6' >
               <div className='space-y-2 text-right'>
                  <h3 className='text-lg font-semibold'>Personalized Wellness
                  </h3>
                  <p className='text-sm text-[#969292]'>Get treatments made just for you based on your individual doshas ( body type)</p>
               </div>
               <img src={icon_13} alt="" className='w-20' />
            </div >

         </div >

         {/* center */}

         <div className='relative'>
            <img src={user_bg} alt="" className='' />
            <img src={user_1} alt="" className='absolute left-0 top-0' />
         </div>


         {/* right side */}

         <div className=' space-y-10'>
            <div className='flex items-center space-x-2 -ml-6' >
               <img src={icon_14} alt="" className='w-20' />
               <div className='space-y-2'>
                  <h3 className='text-lg font-semibold'>Personalized Wellness
                  </h3>
                  <p className='text-sm text-[#969292]'>Get treatments made just for you based on your individual doshas ( body type)</p>
               </div>
            </div >
            <div className='flex items-center space-x-2' >
               <img src={icon_15} alt="" className='w-20' />
               <div className='space-y-2'>
                  <h3 className='text-lg font-semibold'>Personalized Wellness
                  </h3>
                  <p className='text-sm text-[#969292]'>Get treatments made just for you based on your individual doshas ( body type)</p>
               </div>
            </div >
            <div className='flex items-center space-x-2 -ml-6' >
               <img src={icon_16} alt="" className='w-20' />
               <div className='space-y-2'>
                  <h3 className='text-lg font-semibold'>Personalized Wellness
                  </h3>
                  <p className='text-sm text-[#969292]'>Get treatments made just for you based on your individual doshas ( body type)</p>
               </div>
            </div >
         </div >

      </div>

   );
};

export default Discover;