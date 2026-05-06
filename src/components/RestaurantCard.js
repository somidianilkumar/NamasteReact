import { Restaurant_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
    costForTwo,
  } = props.restObject?.info || {};
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={Restaurant_IMAGE_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};

export default RestaurantCard;