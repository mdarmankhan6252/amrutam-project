import banner from '../assets/img/sub_banner.jfif';

const SubBanner = () => {
  return (
    <div
      className="relative py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />
      {/* Optional content inside the banner */}
      <div className="relative z-10 flex items-center justify-center h-full max-w-xl mx-auto flex-col space-y-6">
        <h1 className="text-4xl font-bold text-center text-[#FFF7E2]">Ready to restore harmony in your mind, body and spirit?</h1>
        <button className='uppercase text-white bg-[#3A643B] py-3 px-6 rounded-xl'>book an appointment</button>

      </div>
    </div>
  );
};

export default SubBanner;
