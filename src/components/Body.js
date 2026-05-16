import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { Link,useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DinoGame from "./DinoGame";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37395676909566&lng=78.54742515832186&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants,
    );
  };
 const onlineStatus = useOnlineStatus();
 if (onlineStatus === false) return <DinoGame />;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const searchedRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              console.log(searchedRestaurants);
              setFilteredRestaurants(searchedRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={function () {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
            <RestaurantCard restObject={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
