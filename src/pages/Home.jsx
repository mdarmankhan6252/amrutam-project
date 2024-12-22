import About from "../components/About";
import AboutApp from "../components/AboutApp";
import Approach from "../components/Approach";
import Banner from "../components/Banner";
import Customers from "../components/Customers";
import Discover from "../components/Discover";
import Experts from "../components/Experts";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Services from "../components/Services";
import SubBanner from "../components/SubBanner";
import CustomTitle from "../shared/CustomTitle";


const Home = () => {
   return (
      <div>
         <Nav />
         <Banner />
         <Services />
         <CustomTitle title="Discover Ayurveda’s magic with us" desc="Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, a totally effective approach for a better life." />
         <Discover />
         <About />
         <SubBanner />
         <CustomTitle title="Our ayurvedic approach" desc="At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions." />
         <Approach />
         <Customers />
         <Experts />
         <AboutApp />
         <Footer />
      </div>
   );
};

export default Home;