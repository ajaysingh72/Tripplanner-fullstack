import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
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
    <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 text-gray-800">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 text-indigo-800 drop-shadow-md">
            Plan Your Perfect Trip 🌍
          </h1>
          <p className="text-lg mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Discover breathtaking destinations, create your dream itineraries, and
            make your travel planning simple and exciting with our AI-powered
            Trip Planner.
          </p>

          <Link
            to="/trips"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all"
          >
            Start Planning
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Trip Planner"
            className="rounded-3xl shadow-2xl w-4/5 md:w-1/2 border-4 border-white"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-5 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          ✈️ Your adventure starts here
        </motion.div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
        <motion.h1
          className="text-4xl font-bold text-center text-indigo-700 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Top Indian Destinations 🇮🇳
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {destinations.map((place) => (
            <motion.div
              key={place.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
              whileHover={{ scale: 1.03 }}
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
                  onClick={() => alert(`✨ Trip planning for ${place.name} coming soon!`)}
                  className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Plan Trip
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
