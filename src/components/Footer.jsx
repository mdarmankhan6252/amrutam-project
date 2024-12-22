import { CiInstagram, CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {

   return (
      <footer className="bg-[#3A643B2E]">
         <div className="w-full px-3 max-w-7xl mx-auto  pt-12">
            <div
               className="grid grid-cols-1 sm:grid-cols-3 gap-10">

               <div className="w-full">
                  <h3 className="text-xl font-semibold primaryColor pb-6">Get in touch</h3>
                  <div className="flex flex-col gap-[20px] text-primary">
                     <p>
                        support@amrutam.co.in
                     </p>
                     <p>Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
                     <p className="font-semibold">+91 9713171999</p>
                     <div className="flex items-center space-x-4">
                        <FaFacebookF className="bg-[#3A643B] p-2 text-4xl text-white rounded-full"/>
                        <CiInstagram className="bg-[#3A643B] p-2 text-4xl text-white rounded-full"/>
                        <CiYoutube className="bg-[#3A643B] p-2 text-4xl text-white rounded-full"/>
                        <CiTwitter className="bg-[#3A643B] p-2 text-4xl text-white rounded-full"/>
                        <CiLinkedin className="bg-[#3A643B] p-2 text-4xl text-white rounded-full"/>
                     </div>
                  </div>
               </div>


               <div className="">
                  <h3 className="text-[1.2rem] font-semibold text-text pb-6">Information</h3>
                  <div className="flex text-black flex-col gap-[10px]">
                     <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">About Us</p>
                     <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Terms and Conditions</p>
                     <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Privacy Policy</p>
                     <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Privacy Policy for Mobile Apps</p>
                     <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Shipping and Returns Policy</p>
                     <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">International Delivery</p>
                     <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">For Businesses, Hotels and Resorts</p>
                  </div>
               </div>


               <div className="">
                  <h3 className="text-xl font-semibold primaryColor mb-6">Subscribe to our Newsletter and join Amrutam Family today!</h3>

                  <form className="flex items-center border border-black rounded-full">
                     <input type="email" name="email" placeholder="Your Email Address" className="flex-grow p-2 rounded-l-full bg-transparent outline-none" />
                     <input type="submit" value="Subscribe" className="p-2.5 rounded-r-full bg-black text-white text-sm font-semibold cursor-pointer" />
                  </form>

               </div>
            </div>
            <p className="text-[12px] text-center py-4">All Right Reserved - Amrutam Ltd.</p>
         </div>
      </footer>
   );
};

export default Footer;