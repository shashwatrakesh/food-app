import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  //Local State Variable
  const [listOfAllRestaurants, setListOfAllRestaurants] = useState([]); // array destructuring
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    []
  );
  const [searchTxt, setSearchTxt] = useState(""); //always provide an initial value for an input
  /*
const arr = useState(resDataList)
listOfRestaurants = arr[0]
setListOfRestaurants = arr[1]
 */

  const filterResDataForSearch = () => {
    const filteredResDataForSearch = listOfAllRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    );
    setListOfFilteredRestaurants(filteredResDataForSearch);
  };

  // emptry array => once after render
  // dependency array => once after initial render + every time searchTxt changes and the component re-renderes.
  useEffect(() => {
    //API Call
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    //Optional Chaining
    setListOfAllRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfFilteredRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Early return => conditions for different use cases
  // Conditional rendering
  if (!listOfAllRestaurants) return null;

  if (listOfFilteredRestaurants?.length === 0)
    return <h1>No Restaurants Found</h1>;

  return listOfAllRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt} //this is one way data binding. The value of inout box is bound to sdearchText. It changes when the variable changes. But the variable cannot change from the input
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
            const filteredList = listOfAllRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfFilteredRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfFilteredRestaurants.map((res, i) => {
          return (
            <RestaurantCard resData={res} key={`resDataList?.data?.id${i}`} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
