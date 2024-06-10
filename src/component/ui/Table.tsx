import React from "react";
import { Imusic } from "../../dummyData";

type props = {
  musicTracks: Imusic[];
  playTrack: Function;
};

function Table({ musicTracks, playTrack }: props) {
  return (
    <table className="w-full text-left text-gray-400 mb-6">
      <thead>
        <tr>
          <th className="pb-2">#</th>
          <th className="pb-2">Title</th>
          <th className="pb-2">Artist</th>
          <th className="pb-2">Duration</th>
          <th className="pb-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {musicTracks.map((track, index) => (
          <tr key={track.id} className="border-t border-gray-700">
            <td className="py-2">{index + 1}</td>
            <td className="py-2 font-semibold">
              <div className="flex items-center">
                <img
                  src={track.img}
                  alt={track.title}
                  className="w-10 h-10 mr-4"
                />
                {track.title}
              </div>
            </td>
            <td className="py-2">{track.artist}</td>
            <td className="py-2">{track.duration}</td>
            <td className="py-2">
              <button
                onClick={() => playTrack(track)}
                className="text-green-500"
              >
                Play
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
