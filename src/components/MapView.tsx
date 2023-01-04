import { useContext } from "react";
import { PlacesContext } from "../context/places";
import { Loading } from "./";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);

  if (isLoading) {
    return <Loading />;
  }

  return <div className="center-div">{userLocation?.join(",")}</div>;
};
