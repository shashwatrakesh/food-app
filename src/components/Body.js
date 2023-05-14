import RestaurantCard from "./RestaurantCard";
import resDataList from "../../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resDataList.map((res, i) => {
          return (
            <RestaurantCard resData={res} key={`resDataList?.data?.id${i}`} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
