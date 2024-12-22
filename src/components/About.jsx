import CustomTitle from "../shared/CustomTitle";
import photo_1 from '../assets/img/1.jfif'
import photo_2 from '../assets/img/2.png'
import photo_3 from '../assets/img/3.jfif'

const About = () => {
   return (
      <div className="primaryBg my-12 pb-16">
         <div className="max-w-7xl mx-auto px-3">
            <CustomTitle title="What sets Ayurvedic consultations apart?" />
            <div className="space-y-6">
               {/* about top section */}
               <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                  <div className="bg-white p-8 rounded-xl border-t-8 border-[#3A643B] text-center space-y-6 sm:col-span-5">
                     <h2 className="text-3xl font-semibold primaryColor">स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।</h2>
                     <p className="text-[#a6a3a3] primaryColor">Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person.</p>
                  </div>
                  <div className="max-h-64 sm:col-span-4">
                     <img src={photo_1} alt="" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="bg-white p-8 rounded-xl border-t-8 border-[#3A643B] text-center space-y-6 sm:col-span-3">
                     <h2 className="text-xl font-semibold primaryColor">precise diagnosis</h2>
                     <p className="text-[#a6a3a3] primaryColor">Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p>
                  </div>
               </div>

               {/* about bottom section */}

               <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                  <div className="bg-white p-8 rounded-xl border-t-8 border-[#3A643B] text-center space-y-6">
                     <h2 className="text-xl font-semibold primaryColor">Zero side-effects</h2>
                     <p className="text-[#a6a3a3] primaryColor">Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p>
                  </div>

                  <div className="max-h-64">
                     <img src={photo_2} alt="" className="w-full h-full object-cover rounded-xl" />
                  </div>

                  <div className="bg-white p-8 rounded-xl border-t-8 border-[#3A643B] text-center space-y-6">
                     <h2 className="text-xl font-semibold primaryColor">Zero side-effects</h2>
                     <p className="text-[#a6a3a3] primaryColor">Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p>
                  </div>

                  <div className="max-h-64">
                     <img src={photo_3} alt="" className="w-full h-full object-cover rounded-xl" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;