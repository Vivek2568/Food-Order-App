import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between m-4 bg-green-100">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL} />
      </div>
      <div className="flex item-center">
        <ul className="flex p-4 m-4  items-center gap-4 font-semibold text-lg">
          <li>Online Status:{(onlineStatus==true)?"✅": "🔴"} </li>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
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
