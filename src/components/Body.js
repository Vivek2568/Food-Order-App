import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofRes, setlistofRes] = useState([]);
  const [filteredRestaurents, setfilteredRestaurents] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const [searchText, setSearchText] = useState("");

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    setlistofRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering
  if (listofRes.length == 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRes = listofRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
             setfilteredRestaurents(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredlist = listofRes.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRestaurents(filteredlist);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurents.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} data={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
