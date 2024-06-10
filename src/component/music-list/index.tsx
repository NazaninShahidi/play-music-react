import { useState, useEffect } from "react";
import { Imusic, getAllMusic } from "../../dummyData";
import Table from "../ui/Table";
import Player from "../player";

function MusicList() {
  const [currentTrack, setCurrentTrack] = useState<Imusic>();
  const [musicTracks, setMusicTracks] = useState<Imusic[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track: Imusic) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  useEffect(() => {
    const AllTracks = getAllMusic();
    if (AllTracks) {
      setMusicTracks(AllTracks);
    }
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen">
      <div className="w-full bg-gray-800 p-4 max-w-screen-xl mx-auto my-[100px]">
        <div className="text-white mb-6">
          <h2 className="text-3xl font-semibold mb-2">Play List</h2>
        </div>
        <Table musicTracks={musicTracks} playTrack={playTrack} />
      </div>
      {currentTrack && (
        <Player
          currentTrack={currentTrack}
          playTrack={playTrack}
          musicTracks={musicTracks}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
    </div>
  );
}

export default MusicList;
