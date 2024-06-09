import React, { useContext } from "react";
import { userContext } from "../context/userContext";
import MusicList from "../module/music-list";

function HomePage() {
  const { logout } = useContext(userContext);
  const logoutHandler = () => {
    if (logout) {
      logout();
    }
  };
  return (
    <div>
      this home <button onClick={logoutHandler}>logout</button>
      <h1>Welcome to the Music Player</h1>
      <MusicList />
    </div>
  );
}

export default HomePage;
