// MissionsList.js
import React from 'react';
import { useSelector } from 'react-redux';

function MissionsList() {
  // Make sure to select the correct slice from the Redux state
  const { missions } = useSelector(state => state.missions);

  // Check if missions is undefined before destructuring
  if (!missions) {
    return <div>Loading...</div>;
  }

  // Now you can safely destructure missions
  const { data } = missions;

  // Rest of your component logic...
}

export default MissionsList;
