import { useEffect } from "react";

const MarketPlace = () => {
  useEffect(() => {
    window.location.href =
      "https://orange-ocean-04883010f.azurestaticapps.net/login";
  }, []);
  return <div></div>;
};

export default MarketPlace;
