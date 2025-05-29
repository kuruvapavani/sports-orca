import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
const MatchCard = ({ homeTeam, awayTeam, date, time }) => {
  const dateTimeUtc = new Date(`${date}T${time}Z`);
  const formattedDate = dateTimeUtc.toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short'
  });
  const formattedTime = dateTimeUtc.toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit'
  });

  return (
    <div className="w-full max-w-xs sm:max-w-md bg-black border border-white rounded-2xl p-4 shadow-lg mx-auto transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Teams Section */}
      <div className="flex flex-row flex-wrap items-center justify-between mb-4">
        <span className="text-white text-lg sm:text-2xl font-bold text-center">{homeTeam}</span>
        <span className="text-white text-md sm:text-xl font-extrabold mx-2">vs</span>
        <span className="text-white text-lg sm:text-2xl font-bold text-center">{awayTeam}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-white opacity-50 mb-4" />

      {/* Date & Time Section */}
      <div className="flex flex-row flex-wrap items-center justify-center space-x-2">
        <div className="bg-white bg-opacity-10 rounded-full px-3 py-1 flex items-center text-white font-medium text-xs sm:text-sm">
          <FontAwesomeIcon icon={faCalendar} className="mr-1" /> {formattedDate}
        </div>
        <div className="bg-white bg-opacity-10 rounded-full px-3 py-1 flex items-center text-white font-medium text-xs sm:text-sm">
          <FontAwesomeIcon icon={faClock} className="mr-1" /> {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
