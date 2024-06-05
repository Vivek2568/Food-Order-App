import { lazy, Suspense } from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
//import LoadMoreComponant from "./LoadMoreComponant";
const LoadMoreres = lazy(() => import("./LoadMoreComponant"));
const Body = () => {
  const [listofRes, setlistofRes] = useState([]);
  const [filteredRestaurents, setfilteredRestaurents] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const [searchText, setSearchText] = useState("");
  const [showLoadMore, setShowLoadMore] = useState(false);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setlistofRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const checkstatus = useOnlineStatus();
  if (checkstatus == false)
    return <h1>Something Went wrong!! check your connection;</h1>;
  // conditional rendering
  if (listofRes.length == 0) {
    return <Shimmer />;
  }
  const clickhandler = () => {
    setShowLoadMore(true); // Toggle the state to show LoadMoreComponant
  };
  return (
    <div>
      <div className="flex">
        <div className="search m-4 p-4 gap-4">
          <input
            type="text"
            className="rounded border-2 border-black  hover:cursor-pointer bg-slate-100 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 bg-green-100 m-4 hover:cursor-pointer rounded border-2 border-black"
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
        <div className=" flex items-center px-2">
          <button
            className="border-2 rounded-md px-4 bg-slate-100 hover:cursor-pointer"
            onClick={() => {
              let filteredlist = listofRes.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRestaurents(filteredlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurents.map((restaurent) => (
          <Link
            to={"/restaurants/" + restaurent.info.id}
            key={restaurent.info.id}
          >
            <RestaurantCard data={restaurent} />
          </Link>
        ))}
      </div>
      <div>
        <button className="load-more-button" onClick={clickhandler}>
          {" "}
          Load More
        </button>
      </div>
      {showLoadMore && (
        <Suspense fallback={<Shimmer />}>
          <LoadMoreres />
        </Suspense>
      )}
    </div>
  );
};
export default Body;
