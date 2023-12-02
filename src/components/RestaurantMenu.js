import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = () => {
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
    console.log(json);
    setResInfo(json);
  };

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
