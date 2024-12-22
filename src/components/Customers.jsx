import CustomTitle from "../shared/CustomTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import user_1 from '../assets/img/user_1.png'
import star from '../assets/img/star.png'
import { Pagination } from 'swiper/modules';

const Customers = () => {
   return (
      <div className="primaryBg pb-10 pt-2">
         <CustomTitle title='Stories from our valued customers' />
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
                     slidesPerView: 3,
                     spaceBetween: 20,
                  }
               }}
               modules={[Pagination]}
               className="mySwiper"
            >

               <SwiperSlide className='mb-12'>
                  <div className="bg-white rounded-xl space-y-2">
                     <h5 className="bg-[#ECE7FF] py-2 rounded-t-xl text-lg font-semibold text-left pl-3">Consulted for Skin</h5>
                     <div className="px-4 space-y-3 pb-4">
                        <div className="flex justify-between pt-3">
                           <div className="flex">
                              <img src={user_1} alt="" className="w-12 h-12 rounded-full object-cover" />
                              <div className="pl-3">
                                 <h3 className="font-semibold">Sophie Moore</h3>
                                 <p className="font-light">Chennai</p>
                              </div>
                           </div>
                           <p>17/02/24</p>
                        </div>
                        <img src={star} alt="" />
                        <h3 className="text-xl font-semibold">One of a kind service</h3>
                        <p className="font-light">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                     </div>
                  </div>
               </SwiperSlide>

               <SwiperSlide className='mb-12'>
                  <div className="bg-white rounded-xl space-y-2">
                     <h5 className="bg-[#ECFEE7] py-2 rounded-t-xl text-lg font-semibold text-left pl-3">Consulted for Skin</h5>
                     <div className="px-4 space-y-3 pb-4">
                        <div className="flex justify-between pt-3">
                           <div className="flex">
                              <img src={user_1} alt="" className="w-12 h-12 rounded-full object-cover" />
                              <div className="pl-3">
                                 <h3 className="font-semibold">Sophie Moore</h3>
                                 <p className="font-light">Chennai</p>
                              </div>
                           </div>
                           <p>17/02/24</p>
                        </div>
                        <img src={star} alt="" />
                        <h3 className="text-xl font-semibold">One of a kind service</h3>
                        <p className="font-light">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide className='mb-12'>
                  <div className="bg-white rounded-xl space-y-2">
                     <h5 className="bg-[#ECFEE7] py-2 rounded-t-xl text-lg font-semibold text-left pl-3">Consulted for Skin</h5>
                     <div className="px-4 space-y-3 pb-4">
                        <div className="flex justify-between pt-3">
                           <div className="flex">
                              <img src={user_1} alt="" className="w-12 h-12 rounded-full object-cover" />
                              <div className="pl-3">
                                 <h3 className="font-semibold">Sophie Moore</h3>
                                 <p className="font-light">Chennai</p>
                              </div>
                           </div>
                           <p>17/02/24</p>
                        </div>
                        <img src={star} alt="" />
                        <h3 className="text-xl font-semibold">One of a kind service</h3>
                        <p className="font-light">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                     </div>
                  </div>
               </SwiperSlide>

               <SwiperSlide className='mb-12'>
                  <div className="bg-white rounded-xl space-y-2">
                     <h5 className="bg-[#ECFEE7] py-2 rounded-t-xl text-lg font-semibold text-left pl-3">Consulted for Skin</h5>
                     <div className="px-4 space-y-3 pb-4">
                        <div className="flex justify-between pt-3">
                           <div className="flex">
                              <img src={user_1} alt="" className="w-12 h-12 rounded-full object-cover" />
                              <div className="pl-3">
                                 <h3 className="font-semibold">Sophie Moore</h3>
                                 <p className="font-light">Chennai</p>
                              </div>
                           </div>
                           <p>17/02/24</p>
                        </div>
                        <img src={star} alt="" />
                        <h3 className="text-xl font-semibold">One of a kind service</h3>
                        <p className="font-light">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide className='mb-12'>
                  <div className="bg-white rounded-xl space-y-2">
                     <h5 className="bg-[#ECE7FF] py-2 rounded-t-xl text-lg font-semibold text-left pl-3">Consulted for Skin</h5>
                     <div className="px-4 space-y-3 pb-4">
                        <div className="flex justify-between pt-3">
                           <div className="flex">
                              <img src={user_1} alt="" className="w-12 h-12 rounded-full object-cover" />
                              <div className="pl-3">
                                 <h3 className="font-semibold">Sophie Moore</h3>
                                 <p className="font-light">Chennai</p>
                              </div>
                           </div>
                           <p>17/02/24</p>
                        </div>
                        <img src={star} alt="" />
                        <h3 className="text-xl font-semibold">One of a kind service</h3>
                        <p className="font-light">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                     </div>
                  </div>
               </SwiperSlide>

               <SwiperSlide className='mb-12'>
                  <div className="bg-white rounded-xl space-y-2">
                     <h5 className="bg-[#ECFEE7] py-2 rounded-t-xl text-lg font-semibold text-left pl-3">Consulted for Skin</h5>
                     <div className="px-4 space-y-3 pb-4">
                        <div className="flex justify-between pt-3">
                           <div className="flex">
                              <img src={user_1} alt="" className="w-12 h-12 rounded-full object-cover" />
                              <div className="pl-3">
                                 <h3 className="font-semibold">Sophie Moore</h3>
                                 <p className="font-light">Chennai</p>
                              </div>
                           </div>
                           <p>17/02/24</p>
                        </div>
                        <img src={star} alt="" />
                        <h3 className="text-xl font-semibold">One of a kind service</h3>
                        <p className="font-light">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                     </div>
                  </div>
               </SwiperSlide>





            </Swiper>



         </div>

      </div>
   );
};

export default Customers;