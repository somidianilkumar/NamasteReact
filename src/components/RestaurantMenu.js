import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { resData } from "../utils/LuckyRestData";

const RestaurantMenu = () => {
  const [RestaurantMenu, setRestaurantMenu] = useState(null);
  const { restId } = useParams();
  console.log(restId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // commenting below code to avoid CORS error. We will use mock data for now.
    // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3684881&lng=78.5458548&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`);
    // const json = await data.json();
    console.log(resData);
    setRestaurantMenu(resData);
  };
    if (!RestaurantMenu) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    locality,
    sla,
  } = RestaurantMenu?.data?.cards[2]?.card?.card?.info || {};

  console.log(RestaurantMenu.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

  const menuItems = RestaurantMenu.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];


  const ratingsText = totalRatingsString
    ? `(${totalRatingsString} ratings)`
    : "";

  return (
    <div className="restaurant-menu">
      <div className="restaurant-menu-header">
        <h1 className="restaurant-menu-title">{name}</h1>
      </div>

      <div className="restaurant-details restaurant-details-card">
        <div className="details-top-row">
          <span className="rating-badge">★</span>
          <span className="details-rating">
            {avgRatingString} {ratingsText}
          </span>
          <span className="details-divider">•</span>
          <span className="details-cost">{costForTwoMessage}</span>
        </div>

        <p className="details-cuisines">
          {cuisines?.map((cuisine, index) => (
            <span key={cuisine} className="details-cuisine-link">
              {cuisine}
              {index !== cuisines.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>

        <div className="details-timeline">
          <div className="timeline-marker">
            <span className="timeline-dot" />
            <span className="timeline-stick" />
            <span className="timeline-dot" />
          </div>

          <div className="timeline-content">
            <p className="timeline-row">
              <span className="timeline-label">Outlet</span>
              <span className="timeline-value">{locality}</span>
            </p>
            <p className="timeline-time">{sla?.deliveryTime} mins</p>
          </div>
        </div>
      </div>

      <div className="menu">
        <h2 className="menu-section-title">Menu</h2>
        <div className="menu-items-list">
          {menuItems.map((item) => {
            const info = item.card.info;
            const price = info.price / 100;
            const rating = info.ratings?.aggregatedRating?.rating;
            const ratingCount = info.ratings?.aggregatedRating?.ratingCountV2;
            const imgUrl = info.imageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`
              : null;

            return (
              <div key={info.id} className="menu-item">
                <div className="menu-item-left">
                  {info.isBestseller && (
                    <p className="menu-item-bestseller">
                      <span className="bestseller-icon">▲</span> ☆ Bestseller
                    </p>
                  )}
                  <h3 className="menu-item-name">{info.name}</h3>
                  <p className="menu-item-price">₹{price}</p>
                  {rating && (
                    <p className="menu-item-rating">
                      <span className="menu-star">★</span> {rating}
                      {ratingCount && (
                        <span className="menu-rating-count"> ({ratingCount})</span>
                      )}
                    </p>
                  )}
                  {info.description && (
                    <p className="menu-item-desc">{info.description}</p>
                  )}
                </div>

                {imgUrl && (
                  <div className="menu-item-right">
                    <img
                      src={imgUrl}
                      alt={info.name}
                      className="menu-item-img"
                    />
                    <button className="menu-item-add-btn">ADD</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
