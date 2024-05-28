import RestaurantCard from "./RestaurantCard";
import Resdata from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [listofRes,setlistofRes] = useState(Resdata);
  return (
    <div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           let filteredlist = listofRes.filter((res) => res.info.avgRating > 4);
            setlistofRes(filteredlist);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {listofRes.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} data={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
