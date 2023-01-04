import { PlacesProvider } from "./context/places";
import { HomeScreen } from "./screens/HomeScreen";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomeScreen />
    </PlacesProvider>
  );
};
