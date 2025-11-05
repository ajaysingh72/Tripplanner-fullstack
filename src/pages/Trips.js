import { useEffect, useState } from "react";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activities, setActivities] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all trips on component mount
  useEffect(() => {
    fetch("http://localhost:8081/api/trips")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch trips");
        return res.json();
      })
      .then((data) => setTrips(data))
      .catch((err) => console.error("Error fetching trips:", err))
      .finally(() => setLoading(false));
  }, []);

  // Add a new trip
  const addTrip = (e) => {
    e.preventDefault();

    const newTrip = {
      destination,
      start_date: startDate,
      end_date: endDate,
      activities,
    };

    fetch("http://localhost:8081/api/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTrip),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add trip");
        return res.json();
      })
      .then((data) => {
        setTrips((prev) => [...prev, data]);
        setDestination("");
        setStartDate("");
        setEndDate("");
        setActivities("");
      })
      .catch((err) => console.error("Error adding trip:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌍 My Trips</h2>

      <form onSubmit={addTrip} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Activities"
          value={activities}
          onChange={(e) => setActivities(e.target.value)}
        />
        <button type="submit">Add Trip</button>
      </form>

      {loading ? (
        <p>Loading trips...</p>
      ) : trips.length > 0 ? (
        <ul>
          {trips.map((t) => (
            <li key={t.id}>
              <strong>{t.destination}</strong> — {t.start_date} to {t.end_date}
              <br />
              Activities: {t.activities || "None"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No trips available.</p>
      )}
    </div>
  );
}
