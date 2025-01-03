import { useEffect, useState } from "react";
import {
  StepFourFormData,
  Activity,
  Restaurant,
} from "@/types/step/StepFourFormData";
import { FaHiking, FaUtensils } from "react-icons/fa";
import ButtonBlue from "../ui/buttonBlue";
import { AiOutlineDollar } from "react-icons/ai";
import { t } from "i18next";
import { useAuth } from "@/context/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface StepFourProps {
  onNext: (data: StepFourFormData) => void;
  destinationId: number;
  stepFourData: StepFourFormData | null;
}

const API_URL = import.meta.env.VITE_API_URL;

const StepFour: React.FC<StepFourProps> = ({ onNext, destinationId }) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState<Restaurant[]>(
    []
  );
  const [activitiesData, setActivitiesData] = useState<Activity[]>([]);
  const [restaurantsData, setRestaurantsData] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivitiesAndRestaurants = async () => {
      console.log(destinationId);
      if (!destinationId) {
        console.error("destinationId is undefined");
        return;
      }

      setLoading(true);
      setError(null);
      try {
        console.log("Fetching data for destinationId:", destinationId);
        console.log("Using token:", token);

        const [activitiesResponse, restaurantsResponse] = await Promise.all([
          axios.get(`${API_URL}/destinations/${destinationId}/activities`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${API_URL}/destinations/${destinationId}/meals`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const activities =
          activitiesResponse.data?.map((activity) => ({
            ...activity,
            image: activity.image?.url || "",
          })) || [];
        const restaurants =
          restaurantsResponse.data.content?.map((restaurant) => ({
            ...restaurant,
            image: restaurant.image?.url || "",
          })) || [];

        setActivitiesData(activities);
        setRestaurantsData(restaurants);
      } catch (error) {
        console.error("Error fetching activities and restaurants:", error);
        if (axios.isAxiosError(error)) {
          console.error("Response data:", error.response?.data);
          setError(
            error.response?.data.message || t("stepFour.error_loading_act_rest")
          );
        } else {
          setError(t("stepFour.set_error"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchActivitiesAndRestaurants();
  }, [destinationId, token]);

  const handleActivitySelect = (activity: Activity) => {
    setSelectedActivities((prev) =>
      prev.some((item) => item.id === activity.id) ? prev : [...prev, activity]
    );
  };

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurants((prev) =>
      prev.some((item) => item.id === restaurant.id)
        ? prev
        : [...prev, restaurant]
    );
  };

  const handleNext = () => {
    if (selectedActivities.length === 0 || selectedRestaurants.length === 0) {
      return;
    }
    onNext({
      activities: selectedActivities,
      restaurants: selectedRestaurants,
    });
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div className="font-primary">
      <div className="pb-5 mx-auto text-sm text-justify font-regular text-secondary-celeste md:text-base lg:text-lg md:w-[30em] w-72 lg:w-[35em]">
        {t("stepFour.return_information_message")}
      </div>
      {loading ? (
        <div className="px-1 overflow-hidden text-lg font-bold text-center loader-text whitespace-nowrap text-primary-blue">
          {t("stepFour.loading_act_res")}
        </div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 mb-36">
          <h3 className="text-xl font-bold text-center text-primary-blue">
            {t("stepFour.title_activity")}
          </h3>
          <div className="flex flex-col items-center">
            <div className="grid w-full grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3 md:w-[45em] lg:w-[70em] px-4">
              {activitiesData.map((activity) => (
                <div
                  key={activity.id}
                  className={`transition-all duration-300 border border-transparent rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 mb-2 mx-auto ${
                    selectedActivities.some((item) => item.id === activity.id)
                      ? "bg-blue-500"
                      : "bg-background-light"
                  }`}
                  onClick={() => handleActivitySelect(activity)}
                >
                  <div className="flex flex-col h-full p-4 text-white rounded-lg bg-primary-blue bg-opacity-60">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="object-cover w-full h-48 mb-4 rounded-md"
                    />
                    <h3 className="flex items-center text-xl font-bold text-primary-celeste">
                      <FaHiking className="mr-2 text-white align-middle" />
                      {activity.name}
                    </h3>
                    <h4 className="flex items-center text-lg text-white">
                      <AiOutlineDollar className="mr-2 align-middle" />
                      {activity.price}
                    </h4>
                    <p className="mt-2 text-base text-white">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h3 className="text-xl font-bold text-center text-primary-blue">
            {t("stepFour.meals")}
          </h3>
          <div className="flex flex-col items-center">
          <div className="grid w-full grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3 md:w-[45em] lg:w-[70em] px-4">
              {restaurantsData.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className={`transition-all duration-300 border border-transparent rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 mb-6${
                    selectedRestaurants.some(
                      (item) => item.id === restaurant.id
                    )
                      ? "bg-blue-500"
                      : "bg-background-light"
                  }`}
                  onClick={() => handleRestaurantSelect(restaurant)}
                >
                  <div className="flex flex-col h-full p-4 text-white rounded-lg bg-primary-blue bg-opacity-60">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="object-cover w-full h-48 mb-4 rounded-md"
                    />
                    <h3 className="flex items-center text-xl font-bold text-primary-celeste">
                      <FaUtensils className="mr-2 text-white align-middle" />
                      {restaurant.name}
                    </h3>
                    <h4 className="flex items-center text-lg text-white">
                      <AiOutlineDollar className="mr-2 align-middle" />
                      {restaurant.price}
                    </h4>
                    <p className="mt-2 text-base text-white">
                      {restaurant.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          <div className="flex justify-center space-x-4 w-[18em] pt-2">
            <ButtonBlue
              text={t("buttons.nextButton")}
              onClick={handleNext}
              isActive={
                selectedActivities.length > 0 || selectedRestaurants.length > 0
              }
            />
            <ButtonBlue
              text={t("buttons.cancelButton")}
              onClick={handleCancel}
              isActive={false}
            />
          </div>
        </div></div>
      )}
    </div>
  );
};

export default StepFour;
