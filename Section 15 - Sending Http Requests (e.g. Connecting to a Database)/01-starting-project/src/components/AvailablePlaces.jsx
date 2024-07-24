import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import Errorr from "./Error.jsx";
import { sortPlacesByDistance } from "./../loc.js";
import { fetchPlacesData } from "./../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces() {
      try {
        const places = await fetchPlacesData();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
        });
      } catch (error) {
        setError({ message: error.message || "Could not fetch places" });
      }
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);
  if (error) {
    return <Errorr title="An error occcured" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
