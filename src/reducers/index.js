import { combineReducers } from "redux";


const songsReducer = (state = {}) => {
  return [
    {
      title: "Ain't Going to Goa",
      duration: "3:15"
    },
    {
      title: "Do the Strand",
      duration: "4:08"
    },
    {
      title: "Leave Them All Behind",
      duration: "3:04"
    }
  ];
};

const selectedSongReducer = (state = {}, action) => {
  if (action.type === "SELECTED_SONG") {
    return { ...action.payload };  // always use spread to avoid nested named objects
  }
  return state;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
