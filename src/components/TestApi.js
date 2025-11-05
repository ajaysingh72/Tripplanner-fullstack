import React, { useEffect } from "react";

const TestApi = () => {
  useEffect(() => {
    fetch("http://localhost:8081/api/trips")
      .then((response) => response.json())
      .then((data) => {
        console.log("✅ API Response:", data);
      })
      .catch((error) => {
        console.error("❌ Error fetching trips:", error);
      });
  }, []);

  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-semibold">Testing API Connection...</h2>
      <p>Check your browser console (F12 → Console tab) for results.</p>
    </div>
  );
};

export default TestApi;
