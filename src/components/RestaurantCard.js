import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restoData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla: { deliveryTime },
    costForTwo,
    cuisines,
  } = restoData?.info;

  return (
    <div className="resto-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Image"
        className="resto-image"
      />
      <div className="title">
        <h3>{name}</h3>
        <h3 className="stars">
          {avgRating} stars &nbsp; {deliveryTime}
          mins
        </h3>
        <h3>{costForTwo}</h3>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
