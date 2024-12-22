import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Approach = () => {
   return (
      <div className="max-w-7xl mx-auto px-3 ">

         <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               }
            }}
            modules={[Pagination]}
            className="mySwiper"
         >

            <SwiperSlide className='mb-12'>
               <div className="primaryBg text-center p-5 border-t-4 border-[#3A643B] rounded-xl space-y-2">
                  <h1 className="bg-[#3A643BA8] text-white text-3xl font-semibold rounded-full p-2 w-14 h-14 flex items-center justify-center  border border-green-900 mx-auto"><span>1</span></h1>
                  <h4 className="text-xl font-semibold primaryColor">Make Appointment</h4>
                  <p>You must make an appointment in advance, to choose the service and date.</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="primaryBg text-center p-5 border-t-4 border-[#3A643B] rounded-xl space-y-2">
                  <h1 className="bg-[#3A643BA8] text-white text-3xl font-semibold rounded-full p-2 w-14 h-14 flex items-center justify-center  border border-green-900 mx-auto"><span>2</span></h1>
                  <h4 className="text-xl font-semibold primaryColor">Consultations</h4>
                  <p>The next stage involves a thorough consultation with an Ayurveda practitioner. </p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="primaryBg text-center p-5 border-t-4 border-[#3A643B] rounded-xl space-y-2">
                  <h1 className="bg-[#3A643BA8] text-white text-3xl font-semibold rounded-full p-2 w-14 h-14 flex items-center justify-center  border border-green-900 mx-auto"><span>3</span></h1>
                  <h4 className="text-xl font-semibold primaryColor">Treatment Planning</h4>
                  <p>The Ayurvedic practitioner creates a personalized treatment plan treatment plan for you.</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="primaryBg text-center p-5 border-t-4 border-[#3A643B] rounded-xl space-y-2">
                  <h1 className="bg-[#3A643BA8] text-white text-3xl font-semibold rounded-full p-2 w-14 h-14 flex items-center justify-center  border border-green-900 mx-auto"><span>4</span></h1>
                  <h4 className="text-xl font-semibold primaryColor">Maintenance</h4>
                  <p>These visits allow for assessment of progress, adjustments to the treatment.</p>
               </div>
            </SwiperSlide>





         </Swiper>



      </div>
   );
};

export default Approach;