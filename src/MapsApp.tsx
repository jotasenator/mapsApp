import { PlacesProvider } from "./context/places";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <h1>Hola mundo</h1>
    </PlacesProvider>
  );
};
