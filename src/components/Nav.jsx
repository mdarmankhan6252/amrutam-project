import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {
   const [menu, setMenu] = useState(false);
   const handleMenu = () =>{
      setMenu(!menu)
   }
   return (
      <nav className="primaryBg relative">
         <div className=" flex items-center justify-between max-w-7xl mx-auto px-3 py-4">
            <h2 className="primaryColor font-semibold text-lg">AMRUTAM</h2>
            <ul className="sm:flex hidden items-center space-x-6 uppercase text-sm font-semibold text-gray-600">
               <a href="">Home</a>
               <a href="">About</a>
               <a href="">Contact</a>
            </ul>
            <div onClick={handleMenu} className="text-2xl cursor-pointer sm:hidden">
               <CiMenuBurger />
            </div>

            {/* for small screen */}

            <ul className={`sm:hidden items-center uppercase text-sm font-semibold text-gray-600 absolute *:block duration-500 primaryBg ${menu ? 'right-0' : '-right-40'} top-14 bg-[#FFF7E2] z-40 p-10 *:pb-3`}>
               <a href="">Home</a>
               <a href="">About</a>
               <a href="">Contact</a>
            </ul>

         </div>

      </nav>

   );
};

export default Nav;