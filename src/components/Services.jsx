import icon_1 from '../assets/img/icon_1.png'
import icon_2 from '../assets/img/icon_2.png'
import icon_3 from '../assets/img/icon_3.png'
import icon_4 from '../assets/img/icon_4.png'

const Services = () => {
   return (
      <div className="primaryBg py-6">
         <div className='flex sm:items-center sm:justify-between flex-col sm:flex-row max-w-7xl px-3 sm:mx-auto space-y-6 sm:space-y-0'>
            <div className='flex items-center '>
               <img src={icon_1} alt="" className='-mb-4' />
               <h4 className='text-lg font-semibold primaryColor'>convenient online & <br />In-clinic consultations</h4>
            </div>
            <div className='flex items-center '>
               <img src={icon_2} alt="" className='-mb-4' />
               <h4 className='text-lg font-semibold primaryColor'>Safe and effective <br />treatment</h4>
            </div>
            <div className='flex items-center '>
               <img src={icon_3} alt="" className='-mb-4' />
               <h4 className='text-lg font-semibold primaryColor'>Experienced Ayurvedic<br />Practitioners</h4>
            </div>
            <div className='flex items-center '>
               <img src={icon_4} alt="" className='-mb-4' />
               <h4 className='text-lg font-semibold primaryColor'>personalized Treatment<br />Plans & Guidance</h4>
            </div>
         </div>
      </div>
   );
};

export default Services;