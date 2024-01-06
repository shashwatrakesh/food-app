import { CDN_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    deliveryTime,
    id,
  } = resData?.info;

  return (
    <Link to={"restaurants/" + id}>
      <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg mb-4"
          alt="res-logo"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    </Link>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-700 text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
