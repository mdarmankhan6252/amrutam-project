
const Nav = () => {
   return (
      <nav className="primaryBg">
         <div className=" flex items-center justify-between max-w-7xl mx-auto px-3 py-4">
            <h2 className="primaryColor font-semibold text-lg">AMRUTAM</h2>
            <ul className="flex items-center space-x-6 uppercase text-sm font-semibold text-gray-600">
               <a href="">Home</a>
               <a href="">About</a>
               <a href="">Contact</a>
            </ul>

         </div>

      </nav>

   );
};

export default Nav;