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

  console.log(resData?.info);

  const RestaurantCardStyle = {
    backgroundColor: "#F0F0F0",
  };

  return (
    <Link to={"restaurants/" + id}>
      <div className="res-card" style={RestaurantCardStyle}>
        <img
          className="res-logo"
          alt="res-logo"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
