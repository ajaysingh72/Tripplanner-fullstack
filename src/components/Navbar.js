import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">🌎 TripPlanner</h1>
        <ul className="flex gap-6 text-lg">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/plan" className="hover:text-gray-300">Plan Trip</Link></li>
          <li><Link to="/trips" className="hover:text-gray-300">My Trips</Link></li>
          <li><Link to="/destinations" className="hover:text-gray-300">Destinations</Link></li>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
