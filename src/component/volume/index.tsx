import React, { useState } from "react";
import { VolumeIcon } from "../ui/svg";

type props = {
  audioRef: React.RefObject<HTMLAudioElement>;
};

function VolumeComponent({ audioRef }: props) {
  const [volume, setVolume] = useState(1);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef?.current) {
      audioRef.current.volume = newVolume;
    }
  };
  return (
    <div className="flex  items-center">
      <div className="mx-2">
        <VolumeIcon />
      </div>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="mr-4"
      />

      <audio ref={audioRef} />
    </div>
  );
}

export default VolumeComponent;
