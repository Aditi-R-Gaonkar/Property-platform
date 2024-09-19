import { BsAirplane } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between">
      <a href="#" className="flex items-center gap-1">
        <span>
          <BsAirplane className="w-8 h-7" />
        </span>
        <span className="font-bold underline ">W@NDERHUB</span>
      </a>
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Any week</div>
        <div className="border-l border-gray-300"></div>
        <div>Add guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <CiSearch />
        </button>
      </div>
      <Link
        to={"/login"}
        className="flex items-center gap-2 border border-gray-300 rounded-full py-1 px-3"
      >
        <RxHamburgerMenu className="w-5 h-5 text-gray-700" />
        <div className="bg-gray-500 text-white rounded-full p-1">
          <FaUser className="w-5 h-5" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
