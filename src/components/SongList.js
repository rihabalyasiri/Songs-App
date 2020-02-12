import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

class SongList extends Component {
  renderSongs = songs => {
    return songs.map(song => {
      return (
        <div key={song.title}>
          <h3>{song.title}</h3>
          <p>{song.duration}</p>
          <button
            className="ui button primary"
            onClick={() => this.onClick(song)}
          >
            Select
          </button>
        </div>
      );
    });
  };

  onClick = song => {
    this.props.selectedSong(song);
  };

  render() {
  
    return <div>{this.renderSongs(this.props.songs)}</div>;
  }
}

const mapStateToProps = state => {
  // the state will be like the combineReducers
  return { songs: state.songs, song: state.selectedSong };
};

//all the return from  parameter of connect will be in props
export default connect(mapStateToProps, { selectedSong })(SongList);
