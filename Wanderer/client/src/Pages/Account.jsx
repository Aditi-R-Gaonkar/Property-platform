import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
export default function Account() {
  return (
    <div>
      <nav className="w-full flex mt-8 gap-4">
        <Link
          className="inline-flex gap-2 p-2 bg-primary rounded-full text-white shadow-md shadow-purple-300"
          to="/account"
        >
          <FaHome className="h-6" />
          Accommodations
        </Link>
        <Link
          to={"/account/new"}
          className="inline-flex  gap-1 bg-primary text-white py-2 px-3 rounded-full shadow-md shadow-purple-300"
        >
          <IoAdd className="h-6 text-white" />
          Add new place
        </Link>
      </nav>
    </div>
  );
}
