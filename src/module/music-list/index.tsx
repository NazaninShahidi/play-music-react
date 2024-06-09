import React, { useState } from "react";

const musicTracks = [
  { id: 1, title: "Song One", src: "/path/to/song1.mp3" },
  { id: 2, title: "Song Two", src: "/path/to/song2.mp3" },
  { id: 3, title: "Song Three", src: "/path/to/song3.mp3" },
];

function MusicList() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  const playTrack = (src: string) => {
    setCurrentTrack(src);
  };

  return (
    <div>
      <h2>Music List</h2>
      <ul>
        {musicTracks.map((track) => (
          <li key={track.id}>
            {track.title}
            <button onClick={() => playTrack(track.src)}>Play</button>
          </li>
        ))}
      </ul>
      {currentTrack && (
        <div>
          <h3>Now Playing</h3>
          <audio controls src={currentTrack} autoPlay>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

export default MusicList;
