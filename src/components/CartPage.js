import { useSelector } from "react-redux";
import ItemsList from "./Itemslists";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/CartSlice";
const  Cartpage =()=>{
    const cartItems = useSelector((store)=>store.cart.items);
   // console.log(cartitems);
   const dispatch = useDispatch();
   const handleClearcart=()=>{  
    dispatch(clearCart());
    
   }
    return (
     <div>
       <h1 className="font-bold text-center">Welcome to Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="bg-red-300 p-2 m-2 rounded" onClick={handleClearcart}>Clear Cart</button>
           <ItemsList list={cartItems}/>
        </div>
     </div>
    )
}
export default Cartpage;