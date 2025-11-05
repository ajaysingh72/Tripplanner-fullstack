import React, { useState, useEffect } from "react";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const places = [
      { id: 1, name: "Goa", state: "Goa", description: "Famous for beaches, nightlife, and tropical weather." },
      { id: 2, name: "Jaipur", state: "Rajasthan", description: "Known as the Pink City with forts and royal palaces." },
      { id: 3, name: "Manali", state: "Himachal Pradesh", description: "Snow-capped mountains and a paradise for adventurers." },
      { id: 4, name: "Kerala Backwaters", state: "Kerala", description: "Beautiful houseboats and peaceful lagoons." },
      { id: 5, name: "Leh-Ladakh", state: "Jammu & Kashmir", description: "High-altitude deserts and monasteries." },
      { id: 6, name: "Darjeeling", state: "West Bengal", description: "Tea gardens and Himalayan views." },
      { id: 7, name: "Rishikesh", state: "Uttarakhand", description: "Yoga capital of the world with river rafting." },
      { id: 8, name: "Andaman Islands", state: "Andaman & Nicobar", description: "Crystal-clear waters and coral reefs." },
      { id: 9, name: "Agra", state: "Uttar Pradesh", description: "Home to the world-famous Taj Mahal." },
    ];

    const destinationsWithImages = places.map((place) => ({
      ...place,
      image: `https://picsum.photos/seed/${encodeURIComponent(place.name)}/600/400`,
    }));

    setDestinations(destinationsWithImages);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Explore Top Indian Destinations 🇮🇳
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((place) => (
          <div
            key={place.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
                {place.name}
              </h2>
              <p className="text-gray-600 mb-2 font-medium">{place.state}</p>
              <p className="text-gray-700 mb-4">{place.description}</p>

              <button
                onClick={() =>
                  alert(`✨ Trip planning for ${place.name} coming soon!`)
                }
                className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Plan Trip
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
