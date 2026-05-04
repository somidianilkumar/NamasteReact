import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
const [listOfRestaurants,setListOfRestaurants]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={function () {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} restObject={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
