// DragonsList.js
import React from 'react';
import { useSelector } from 'react-redux';

function DragonsList() {
  // Make sure to select the correct slice from the Redux state
  const dragonsState = useSelector(state => state.dragons);

  // Check if dragonsState is undefined before destructuring
  if (!dragonsState) {
    return <div>Loading...</div>;
  }

  // Now you can safely destructure dragons from dragonsState
  const { dragons } = dragonsState;

  // Check if dragons is undefined before further destructuring
  if (!dragons) {
    return <div>No dragons available</div>;
  }

  // Now you can safely destructure data from dragons
  const { data } = dragons;

  // Rest of your component logic...
}

export default DragonsList;
