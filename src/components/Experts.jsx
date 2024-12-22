import CustomTitle from "../shared/CustomTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import user_1 from '../assets/img/user_1.png'
import star_1 from '../assets/img/star_1.png'

import { Navigation, Pagination } from 'swiper/modules';
import { SlGraduation } from "react-icons/sl";
import { GiMedicines } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

const Experts = () => {
   return (
      <div className="pb-10 pt-2">
         <CustomTitle title='Meet our Ayurveda experts ' />
         <div className="max-w-7xl mx-auto px-3 ">

            <Swiper
               slidesPerView={1}
               spaceBetween={20}
               loop={true}
               pagination={{
                   clickable: true,
               }}
               navigation={true}
               modules={[Pagination, Navigation]}
               className="mySwiper"
               breakpoints={{
                  640: {
                     slidesPerView: 2,
                     spaceBetween: 10,
                  },
                  768: {
                     slidesPerView: 3,
                     spaceBetween: 20,
                  }
               }}
               
               
            >

               <SwiperSlide className='mb-12'>
                  <div className="primaryBg rounded-3xl  pt-5 space-y-2">
                     <div className="flex items-center justify-center relative">
                        <img src={user_1} alt="" className="w-24 h-24 rounded-full object-cover" />
                        <div className="bg-black text-white rounded-full px-1 absolute -bottom-3 flex items-center space-x-1">
                           <span className="text-sm font-semibold">6.5</span>
                           <img src={star_1} alt="" className="w-5" />
                        </div>
                     </div>
                     <h3 className="text-xl font-semibold text-center pt-4">Dr. Vaishali sharma</h3>
                     <p className="text-[#838383] text-center">Ayurveda Practitioner(BAMS, MD)</p>
                     <div className="flex items-center space-x-2 justify-center">
                        <SlGraduation className="primaryColor"/>
                        <p>25 years of experience</p>
                     </div>

                     <div className="flex items-center space-x-2 justify-center bg-[#3A643B1F] primaryColor max-w-36 rounded-xl mx-auto">
                        <GiMedicines />
                        <p>Skin Specialist</p>
                     </div>

                     <p className="pb-3"></p>
                     
                     <h3 className="p-2.5 text-center bg-[#3A643B] text-white rounded-b-3xl font-semibold">Book a session</h3>

                  </div>
               </SwiperSlide>
               <SwiperSlide className='mb-12'>
                  <div className="primaryBg rounded-3xl  pt-5 space-y-2">
                     <div className="flex items-center justify-center relative">
                        <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-24 h-24 rounded-full object-cover" />
                        <div className="bg-black text-white rounded-full px-1 absolute -bottom-3 flex items-center space-x-1">
                           <span className="text-sm font-semibold">6.5</span>
                           <img src={star_1} alt="" className="w-5" />
                        </div>
                     </div>
                     <h3 className="text-xl font-semibold text-center pt-4">Dr. Vaishali sharma</h3>
                     <p className="text-[#838383] text-center">Ayurveda Practitioner(BAMS, MD)</p>
                     <div className="flex items-center space-x-2 justify-center">
                        <SlGraduation className="primaryColor"/>
                        <p>25 years of experience</p>
                     </div>

                     <div className="flex items-center space-x-2 justify-center bg-[#3A643B1F] primaryColor max-w-36 rounded-xl mx-auto">
                        <GiMedicines />
                        <p>Skin Specialist</p>
                     </div>

                     <p className="pb-3"></p>
                     
                     <h3 className="p-2.5 text-center bg-[#3A643B] text-white rounded-b-3xl font-semibold">Book a session</h3>

                  </div>
               </SwiperSlide>
               <SwiperSlide className='mb-12'>
                  <div className="primaryBg rounded-3xl  pt-5 space-y-2">
                     <div className="flex items-center justify-center relative">
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-24 h-24 rounded-full object-cover" />
                        <div className="bg-black text-white rounded-full px-1 absolute -bottom-3 flex items-center space-x-1">
                           <span className="text-sm font-semibold">6.5</span>
                           <img src={star_1} alt="" className="w-5" />
                        </div>
                     </div>
                     <h3 className="text-xl font-semibold text-center pt-4">Dr. Vaishali sharma</h3>
                     <p className="text-[#838383] text-center">Ayurveda Practitioner(BAMS, MD)</p>
                     <div className="flex items-center space-x-2 justify-center">
                        <SlGraduation className="primaryColor"/>
                        <p>25 years of experience</p>
                     </div>

                     <div className="flex items-center space-x-2 justify-center bg-[#3A643B1F] primaryColor max-w-36 rounded-xl mx-auto">
                        <GiMedicines />
                        <p>Skin Specialist</p>
                     </div>

                     <p className="pb-3"></p>
                     
                     <h3 className="p-2.5 text-center bg-[#3A643B] text-white rounded-b-3xl font-semibold">Book a session</h3>

                  </div>
               </SwiperSlide>
               <SwiperSlide className='mb-12'>
                  <div className="primaryBg rounded-3xl  pt-5 space-y-2">
                     <div className="flex items-center justify-center relative">
                        <img src={user_1} alt="" className="w-24 h-24 rounded-full object-cover" />
                        <div className="bg-black text-white rounded-full px-1 absolute -bottom-3 flex items-center space-x-1">
                           <span className="text-sm font-semibold">6.5</span>
                           <img src={star_1} alt="" className="w-5" />
                        </div>
                     </div>
                     <h3 className="text-xl font-semibold text-center pt-4">Dr. Vaishali sharma</h3>
                     <p className="text-[#838383] text-center">Ayurveda Practitioner(BAMS, MD)</p>
                     <div className="flex items-center space-x-2 justify-center">
                        <SlGraduation className="primaryColor"/>
                        <p>25 years of experience</p>
                     </div>

                     <div className="flex items-center space-x-2 justify-center bg-[#3A643B1F] primaryColor max-w-36 rounded-xl mx-auto">
                        <GiMedicines />
                        <p>Skin Specialist</p>
                     </div>

                     <p className="pb-3"></p>
                     
                     <h3 className="p-2.5 text-center bg-[#3A643B] text-white rounded-b-3xl font-semibold">Book a session</h3>

                  </div>
               </SwiperSlide>
               <SwiperSlide className='mb-12'>
                  <div className="primaryBg rounded-3xl  pt-5 space-y-2">
                     <div className="flex items-center justify-center relative">
                        <img src={user_1} alt="" className="w-24 h-24 rounded-full object-cover" />
                        <div className="bg-black text-white rounded-full px-1 absolute -bottom-3 flex items-center space-x-1">
                           <span className="text-sm font-semibold">6.5</span>
                           <img src={star_1} alt="" className="w-5" />
                        </div>
                     </div>
                     <h3 className="text-xl font-semibold text-center pt-4">Dr. Vaishali sharma</h3>
                     <p className="text-[#838383] text-center">Ayurveda Practitioner(BAMS, MD)</p>
                     <div className="flex items-center space-x-2 justify-center">
                        <SlGraduation className="primaryColor"/>
                        <p>25 years of experience</p>
                     </div>

                     <div className="flex items-center space-x-2 justify-center bg-[#3A643B1F] primaryColor max-w-36 rounded-xl mx-auto">
                        <GiMedicines />
                        <p>Skin Specialist</p>
                     </div>

                     <p className="pb-3"></p>
                     
                     <h3 className="p-2.5 text-center bg-[#3A643B] text-white rounded-b-3xl font-semibold">Book a session</h3>

                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
         <button className="flex items-center space-x-2 bg-[#DBE3DC63] hover:bg-[#bed5c163] primaryColor border py-2 px-6 rounded-lg mx-auto mt-4 font-semibold">
            <span>Find More Experts</span>
            <IoIosArrowForward />
         </button>


      </div>
   );
};

export default Experts;