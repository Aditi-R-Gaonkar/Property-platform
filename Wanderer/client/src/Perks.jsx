import { FaWifi } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
export default function Perks({ selected, onChange }) {
  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input type="checkbox" />
        <FaWifi />
        <span>Wifi</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input type="checkbox" />
        <FaCarSide />
        <span>Free Parking</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input type="checkbox" />
        <FaTv />
        <span>Tv</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input type="checkbox" />
        <MdOutlinePets />
        <span>Pets</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input type="checkbox" />
        <FaSwimmingPool />
        <span>Pool</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input type="checkbox" />
        <TbAirConditioning />
        <span>AC</span>
      </label>
    </>
  );
}
