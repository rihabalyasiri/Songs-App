import React from "react";
import { connect } from "react-redux";

const SongDetail = ({song}) => {
    console.log(song)
  return (
    <div>
      <h2>Song Detail:</h2>
      <p>
        {song.title}
        <br />
        {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
