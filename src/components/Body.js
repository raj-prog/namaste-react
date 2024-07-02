import RestaurantCard from "./RestaurantCard";
import restoList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restoList);

  return (
    <div className="container">
      <button
        className="btn"
        onClick={() => {
          const filteredList = restaurantList.filter(
            (resto) => resto.info.avgRating > 4.0
          );
          setRestaurantList(filteredList);
          console.log(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="resto-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restoData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
