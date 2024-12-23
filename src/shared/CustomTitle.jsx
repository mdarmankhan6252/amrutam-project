

const CustomTitle = ({title, desc}) => {
   return (
      <div className="text-center max-w-2xl mx-auto space-y-4 py-12">
         <h2 className="text-4xl primaryColor font-semibold ">{title}</h2>
         <p className="text-[#adabab] text-xs sm:text-sm">{desc}</p>
         
      </div>
   );
};

export default CustomTitle;