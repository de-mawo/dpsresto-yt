"use client";

import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiMapPin } from "react-icons/hi2";

const LocationSearchForm = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Array<{ place_name: string }>>(
    []
  );

  const [isEditing, setIsEditing] = useState<boolean>(false);

  /* Reverse geocoding */
  /* Get User Location on page load and if granted permission by User */
  useEffect(() => {
    const askForLocationPermission = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation((prevLocation) => ({
            ...prevLocation,
            latitude,
            longitude,
          }));
        },
        (error) => {
          // Handle location access denied or error
          toast.error("Error getting location:");
          console.log(error);
        }
      );
    };

    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
      // Ask for permission
      navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          if (result.state === "granted") {
            // Permission already granted
            askForLocationPermission();
          } else if (result.state === "prompt") {
            // Permission not yet granted, ask the user
            askForLocationPermission();
          } else if (result.state === "denied") {
            // Permission denied, handle accordingly
            toast.error("Location access denied by the user.", {
              duration: 1000,
            });
          }
        })
        .catch((error) => {
          // Handle error
          console.error("Error checking location permission:", error);
        });
    } else {
      // Geolocation is not supported
      toast.error("Geolocation is not supported by this browser.", {
        duration: 1000,
      });
    }
  }, []);

  useEffect(() => {
    if (location) {
      // search for place name using mapbox API
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location.longitude},${location.latitude}.json?proximity=-33.9249,18.4241&country=ZA&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`;
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          const place = data.features[0].place_name;
          localStorage.setItem("delivery_address", place);
          setQuery(place);
        });
    }
  }, [location]);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setQuery(event.target.value);
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?proximity=-33.9249,18.4241&country=ZA&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&autocomplete=true`;

      const response = await fetch(endpoint);
      const results = await response.json();
      setSuggestions(results?.features);
    } catch (error: any) {
      console.log("Error fetching data: " + error.message);
    }
  };

  const handleClearAddress = () => {
    localStorage.removeItem("delivery_address");
    setQuery("");
  };

  const handleSelectAddress = (selectedAddress: string) => {
    localStorage.setItem("delivery_address", selectedAddress);
    setQuery(selectedAddress);
    setSuggestions([]);
    setIsEditing(false);
  };

  return (
    <div className="mx-8 md:mx-12 mt-12">
      <form className="max-w-6xl mx-auto ">
        <div className="relative">
          {isEditing ? (
            <>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <HiMapPin
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-700 "
                />
              </div>
              <input
                type="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-200 outline-none"
                placeholder="Enter your address"
                value={query}
                onChange={handleChange}
              />
            </>
          ) : (
            <div className="flex flex-col " onClick={() => setIsEditing(true)}>
              <p className="">{query}</p>
              <button className="px-4 py-1 mt-2 w-24 text-green-600 bg-green-200 hover:bg-green-300 border border-green-500 focus-visible:ring-2 rounded-full  ">
                Edit
              </button>
            </div>
          )}
          {suggestions?.length > 0 && (
            <div className="absolute bg-gray-100 w-full shadow-sm">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full p-1 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSelectAddress(suggestion.place_name)}
                >
                  {suggestion.place_name}
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LocationSearchForm;
