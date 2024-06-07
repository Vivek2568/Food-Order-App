import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import {FaShoppingCart} from "react-icons/fa";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();
  const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between m-4 mx-auto h-20  w-2/3 bg-gray-50">
      <div className="">
        <img className=" mt-1 w-24 rounded-lg" src={LOGO_URL} />
      </div>
      <div className="flex item-center">
        <ul className="flex p-4 m-4  items-center gap-6 font-bold  font-serif text-lg">
          <li>Online Status:{(onlineStatus==true)?"✅": "🔴"} </li>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="flex flex-wrap gap-1">  
          <Link to="/cart"><span className="mt-1"><FaShoppingCart/></span>
          <span className="">({cartItems.length})</span></Link>
          </li>
          <li className=""><button
            className=" m-2 px-2  rounded border-2 border-black bg-red-500 text-white font-semibold"
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
