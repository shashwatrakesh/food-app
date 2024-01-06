import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

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

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;

  const { name, costForTwo, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold m-6 text-2xl">{name}</h1>
      <p className="font-bold text-l">
        {cuisines.join(", ")} - {costForTwo} for two
      </p>
      {/* categories accordian*/}
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
