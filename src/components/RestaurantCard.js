import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {data}=props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo
    }= data?.info;
    return(
       <div className="card">
        <img  className="card-img"
         alt="image" src={CDN_URL + cloudinaryImageId}/>
         <div className="card-info">
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
         </div>
      </div>
    )
  };
  export default RestaurantCard;