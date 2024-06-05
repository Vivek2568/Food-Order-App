import { useState } from "react";
import ItemsList from "./Itemslists";

const Restaurantcategory = ({ data ,showItems,setshowIndex }) => {
  //console.log(data);
  const [showItems1,setshowItems1]=useState();
  const handleClick=()=>{
      setshowIndex(!showItems);
      setshowItems1(!showItems1);
  }
  return (
    <div>
      <div className="w-6/12 m-auto my-4 shadow-lg bg-gray-50 p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data?.card?.card?.title} ({data?.card?.card?.itemCards.length}){" "}
          </span>
          <span className="text-center">▼</span>
        </div>
        { showItems && showItems1 && <ItemsList list={data?.card?.card?.itemCards} />}
      </div>
      
    </div>
  );
};
export default Restaurantcategory;
