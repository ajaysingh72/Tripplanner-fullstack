import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center px-6 py-16">
      <motion.div
        className="max-w-4xl bg-white shadow-2xl rounded-3xl p-10 md:p-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">
          About Trip Planner 🌍
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Trip Planner was created with one goal in mind — to make travel
          planning effortless, inspiring, and personalized. Whether you are a
          solo traveler, a couple planning a romantic getaway, or a family
          exploring new adventures, our platform helps you design your perfect
          journey with just a few clicks.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          With intelligent trip recommendations, curated destinations, and
          seamless itinerary management, Trip Planner brings your travel dreams
          closer to reality. Our system leverages smart algorithms to understand
          your preferences and suggest destinations, activities, and experiences
          that truly match your style.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          What makes us different is our focus on user experience — blending
          modern design with powerful technology. From serene mountains and
          golden beaches to bustling cities and hidden villages, we help you
          discover India and the world like never before. Your journey begins
          here, and every adventure is just one plan away!
        </p>

        <p className="text-center text-indigo-600 font-semibold mt-8 text-xl">
          ✈️ Travel smart. Travel beautiful. Travel with Trip Planner.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
