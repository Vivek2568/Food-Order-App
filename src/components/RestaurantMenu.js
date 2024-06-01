import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Restaurant_Menu_URL } from "../utils/constants";

const RestaurantMenu = ()=>{
     const [resInfo,setResInfo]=useState(null);
     const {resId}= useParams();
     console.log(resId);
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const  fetchMenu = async()=>{
        
        const data= await fetch(Restaurant_Menu_URL + resId);
        const json =await data.json();
        console.log(json);
        setResInfo(json.data);
        
    };
    if(resInfo==null)return <Shimmer/>;
    const { name , cuisines, costForTwoMessage }=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(itemCards);
    return (
        <div className="menu">
          <h1> {name}</h1>
          <h2>{cuisines.join(", ")}</h2>
          <h2>{costForTwoMessage}</h2>
          <ul>
            {itemCards.map((item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} = Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 } </li>))}
          </ul>
        </div>
    )
}
export default RestaurantMenu;