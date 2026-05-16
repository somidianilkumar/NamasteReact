import { useEffect, useState } from "react";
import { resData } from "./LuckyRestData";

const useRestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    console.log(resData);
    setRestaurantMenu(resData);
  };
  return restaurantMenu;
};
export default useRestaurantMenu;
