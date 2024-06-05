import { CDN_URL } from "../utils/constants";
const ItemsList = (props) => {
  const { list } = props;
 // console.log(props);
  return (
    <div>
      {list.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2  flex justify-between">
          <div className="w-9/12 ">
          <div className="py-2">
              <h3 className="text-left pr-64 font-bold ">
                {item.card.info.name}
              </h3>
              <h3 className="text-left pr-64 font-semibold">  {"  "}₹{item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}   ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}
              </h3>
            </div>
            <p className="text-xs text-left ">{item.card.info.description}</p>
          </div>
        <div className="w-[20%]  p-4">
            <div className="ml-5 absolute rounded bg-white ">
                <button className="mx-2 shadow-lg  font-bold text-green-500"> ADD+</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full rounded"></img>
            </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
