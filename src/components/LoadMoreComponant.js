import { useEffect,useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
const LoadMoreComponant =()=>{
    console.log(" its here");
    const [resInfo,setresInfo] = useState([]);

     useEffect(()=>{
        fetchMore()
     },[]);
     const fetchMore = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          const json = await data.json();
          console.log(json);
          setresInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     };
    // if(resInfo==null)return<Shimmer/>;
     return(
        <div className="res-container">
        {resInfo.map((restaurent) => (
          <Link
            to={"/restaurants/" + restaurent.info.id}
            key={restaurent.info.id}
          >
            <RestaurantCard data={restaurent} />
          </Link>
        ))}
      </div>
     )
}
export default LoadMoreComponant;