import RestaurantCard from "./RestaurantCard";
import restoList from "../utils/mockData";

const Body = () => {
  return (
    <div className="container">
      <div className="search">Search</div>
      <div className="resto-container">
        {restoList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restoData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
