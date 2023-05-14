import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  const RestaurantCardStyle = {
    backgroundColor: "#F0F0F0",
  };

  return (
    <div className="res-card" style={RestaurantCardStyle}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
