const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    deliveryTime,
    costForTwo,
  } = props.restObject?.data || {};
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={cloudinaryImageId}
        alt="restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>₹{costForTwo / 100} for two </h4>
    </div>
  );
};

export default RestaurantCard;