import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { data } = props;
  const { cloudinaryImageId, name, cuisines, avgRating,areaName, costForTwo } =
    data?.info;
    // const { header,subHeader}=data?.info?.aggregatedDiscountInfoV3;
  return (
    <div className="m-4 p-4 bg-gray-100 w-[270px] h-[300px] rounded-lg">
      <div>
      <label className= " absolute text-gray-100 font-extrabold pl-4 pt-[120] text-xl">{data?.info?.aggregatedDiscountInfoV3?.header+" "+data?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
        <img
          className="rounded-lg  w-[270px] h-[150px] "
          alt="image"
          src={CDN_URL + cloudinaryImageId}
        />
       
      </div>

      <div className="pt-2">
        <h3 className="font-bold ">{name}</h3>
        <h4 className="font-semibold">{cuisines[0] + ", " + cuisines[1]+" "}  ⭐{avgRating}</h4>
        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
