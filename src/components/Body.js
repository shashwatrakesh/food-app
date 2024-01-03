import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../../utils/useOnlineStatus";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    const resData = await checkJsonData(json);

    //Optional Chaining
    setListOfAllRestaurants(resData);
    setListOfFilteredRestaurants(resData);
  };

  //Early return => conditions for different use cases
  // Conditional rendering
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Internet is offline</h1>;

  if (!listOfAllRestaurants) return null;

  if (listOfFilteredRestaurants?.length === 0)
    return <h1>No Restaurants Found</h1>;

  return listOfAllRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="p-4 mb-4 flex">
        <input
          type="text"
          className="border border-solid	border-black mr-3"
          placeholder="Search"
          value={searchTxt} //this is one way data binding. The value of inout box is bound to searchTxt. It changes when the variable changes. But the variable cannot change from the input
          onChange={(e) => {
            setSearchTxt(e.target.value); // this is 2-way binding. I can update search text from here as well. Read and write both
          }}
        />
        <button
          className="px-2 bg-cyan-500 rounded-lg"
          onClick={filterResDataForSearch}
        >
          Search
        </button>
        <button
          className="mx-10 px-2 bg-gray-200 rounded-lg"
          onClick={() => {
            // using hooks to update state
            const filteredList = listOfAllRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfFilteredRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-between">
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
