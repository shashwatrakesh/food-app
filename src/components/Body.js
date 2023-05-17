import RestaurantCard from "./RestaurantCard";
import resDataList from "../../utils/mockdata";
import { useState } from "react";

const Body = () => {
  //Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resDataList); // array destructuring
  const [searchTxt, setSearchTxt] = useState(""); //always provide an initial value for an input

  /*
const arr = useState(resDataList)
listOfRestaurants = arr[0]
setListOfRestaurants = arr[1]
 */

  const filterResDataForSearch = () => {
    if (searchTxt) {
      const filteredResDataForSearch = listOfRestaurants.filter((res) =>
        res.data.name.toLowerCase().includes(searchTxt)
      );
      setListOfRestaurants(filteredResDataForSearch);
    }
  };

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt} //this is one way data binding. It changes when the variable changes. But the variable cannot change from the input
          onChange={(e) => {
            setSearchTxt(e.target.value); // this is 2-way binding. I can update search text from here as well. Read and write both
          }}
        />
        <button className="search-btn" onClick={filterResDataForSearch}>
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // using hooks to update state
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res, i) => {
          return (
            <RestaurantCard resData={res} key={`resDataList?.data?.id${i}`} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
