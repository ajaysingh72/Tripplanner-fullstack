import React, { useState, useEffect } from "react";
import axios from "axios";

const PlanTrip = () => {
  const [trip, setTrip] = useState({
    id: null,
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
  });

  const [trips, setTrips] = useState([]);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Fetch all trips from backend
  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/trips");
      setTrips(res.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  // Submit (add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8081/api/trips/${trip.id}`, trip);
        setMessage("✏️ Trip updated successfully!");
      } else {
        await axios.post("http://localhost:8081/api/trips", trip);
        setMessage("✅ Trip added successfully!");
      }

      setTrip({ id: null, name: "", destination: "", startDate: "", endDate: "" });
      setIsEditing(false);
      fetchTrips(); // Refresh list
    } catch (error) {
      console.error("Error saving trip:", error);
      setMessage("❌ Error saving trip.");
    }
  };

  // Edit trip (load data into form)
  const handleEdit = (t) => {
    setTrip(t);
    setIsEditing(true);
    setMessage("");
  };

  // Delete trip
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      try {
        await axios.delete(`http://localhost:8081/api/trips/${id}`);
        setMessage("🗑 Trip deleted successfully!");
        fetchTrips();
      } catch (error) {
        console.error("Error deleting trip:", error);
        setMessage("❌ Error deleting trip.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-6 flex flex-col items-center">
      {/* Trip Form */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md mb-10">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          {isEditing ? "✏️ Edit Trip" : "✈️ Plan a New Trip"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Trip Name"
            value={trip.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={trip.destination}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex gap-4">
            <input
              type="date"
              name="startDate"
              value={trip.startDate}
              onChange={handleChange}
              required
              className="w-1/2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="date"
              name="endDate"
              value={trip.endDate}
              onChange={handleChange}
              required
              className="w-1/2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            {isEditing ? "Update Trip" : "Save Trip"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-green-600 font-medium">
            {message}
          </p>
        )}
      </div>

      {/* Trip List */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4 text-center">
          🧳 Your Trips
        </h3>

        {trips.length === 0 ? (
          <p className="text-center text-gray-500">No trips available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trips.map((t) => (
              <div
                key={t.id}
                className="border border-indigo-200 rounded-lg p-4 hover:shadow-md transition"
              >
                <h4 className="text-lg font-bold text-indigo-600">{t.name}</h4>
                <p className="text-gray-700">📍 {t.destination}</p>
                <p className="text-sm text-gray-500">
                  🗓 {t.startDate} → {t.endDate}
                </p>

                <div className="flex justify-end gap-3 mt-3">
                  <button
                    onClick={() => handleEdit(t)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanTrip;
