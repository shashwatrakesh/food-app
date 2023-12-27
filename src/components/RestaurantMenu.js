import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  /* * 
   --> THis part of code is fetching the data and setting the resInfo. 
      We can use custom hooks and let that custom hook be responsible for fetching the data and the RestaurantMenu will only be 
      responsible for displaying the info.  

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
      fetchMenu();
    }, []);

    const fetchMenu = async () => {
      const data = await fetch(
        MENU_API + resId + `&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      setResInfo(json);
    };

  */

  // Code through using custom hook. Get the data and display. How to get the data is abstracted.
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;

  const { name, cloudinaryImageId, costForTwo, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <p>{costForTwo} for two</p>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
