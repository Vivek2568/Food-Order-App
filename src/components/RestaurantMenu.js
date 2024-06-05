import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurantcategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setshowIndex]=useState();
  console.log(resInfo);
  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]);
  const categories  =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
       c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.group(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold "> {name}</h1>
      <h2>{cuisines.join(", ")} {costForTwoMessage}</h2>
      
      {categories.map((category,index)=>
      <Restaurantcategory key={category?.card?.card?.title} 
      data={category} 
      showItems={index==showIndex?true:false}
      setshowIndex={()=>setshowIndex(index)}
      />)}
    </div>
  );
};
export default RestaurantMenu;
//"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
