import React, { useEffect, useState } from "react";
import axios from "axios";
import MatchCard from "../components/MatchCard";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const url = `${API_BASE}/upcoming-soccer-matches`;
        const response = await axios.get(url);
        setMatches(response.data.matches || []);
      } catch (err) {
        console.error("Error fetching matches:", err);
        setError("Failed to load matches.");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center text-white font-extrabold mb-16">
          Upcoming Soccer Matches
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {matches.length > 0 ? (
            matches.map((match, idx) => (
              <MatchCard
                key={idx}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                date={match.date}
                time={match.time}
              />
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-gray-400 text-xl">
                No matches scheduled for the next 7 days.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
