import StarRate from "../components/StarRate";
import StoreDetail from "../components/StoreDetail";

function RestaurantDetail() {
  const restaurantList = {
    result: "SUCCESS",
    data: [
      {
        storeId: 1,
        starRating: 5,
        name: "해피덮",
        type: "음식점",
        foodType: "양식",
      },
      {
        storeId: 2,
        starRating: 4.5,
        name: "백소정",
        type: "음식점",
        foodType: "일식",
      },
      {
        storeId: 3,
        starRating: 4.2,
        name: "단대골목",
        type: "음식점",
        foodType: "한식",
      },
    ],
  };
  return (
    <div>
      <StoreDetail storeData={restaurantList.data} />
      <StarRate />
    </div>
  );
}

export default RestaurantDetail;
