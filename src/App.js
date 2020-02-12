import React from "react";
import "./App.css";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

function App() {
  
  return (
    <div className="App">
      <SongList />
      <SongDetail/>
    </div>
  );
}

export default App;
