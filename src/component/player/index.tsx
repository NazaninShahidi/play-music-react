import React, { useEffect, useRef, useState } from "react";
import { Imusic } from "../../dummyData";
import VolumeComponent from "../volume";

type props = {
  musicTracks: Imusic[];
  currentTrack: Imusic;
  playTrack: (track: Imusic) => void;
  isPlaying: boolean;
  setIsPlaying: (item: boolean) => void;
};

function Player({
  musicTracks,
  currentTrack,
  playTrack,
  isPlaying,
  setIsPlaying,
}: props) {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const nextTrack = () => {
    const currentIndex = musicTracks.findIndex(
      (track) => track.id === currentTrack?.id
    );
    const nextIndex = (currentIndex + 1) % musicTracks.length;
    playTrack(musicTracks[nextIndex]);
  };

  const prevTrack = () => {
    const currentIndex = musicTracks.findIndex(
      (track) => track.id === currentTrack?.id
    );
    const prevIndex =
      (currentIndex - 1 + musicTracks.length) % musicTracks.length;
    playTrack(musicTracks[prevIndex]);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current && audioRef.current.duration) {
      const newProgress = parseFloat(e.target.value);
      setProgress(newProgress);
      audioRef.current.currentTime =
        (newProgress / 100) * audioRef.current.duration;
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Failed to play the audio track:", error);
          });
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (currentTrack) {
        audioRef.current.src = currentTrack.src;
        audioRef.current.load();
        if (isPlaying) {
          audioRef.current.play().catch((error) => {
            console.error("Failed to play the audio track:", error);
          });
        }
      }
    }
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current && audioRef.current.duration) {
        setProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  return (
    <div className="fixed flex justify-around bottom-0 left-0 right-0 bg-gray-800 p-4 items-center">
      <div className="flex items-center">
        <img
          src={currentTrack.img}
          alt={currentTrack.title}
          className="w-16 h-16 mr-4"
        />
        <div className="mx-2">
          <h3 className="text-xl font-semibold">{currentTrack.title}</h3>
          <p className="text-gray-400">{currentTrack.artist}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mr-4"
          onClick={prevTrack}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 20V4l-15 8 15 8zM5 20V4l-1 0v16l1 0z" />
          </svg>
        </button>
        <button
          className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mr-4"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm-1 17h-2V7h2v10zm4-10v10h-2V7h2z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M6 4l12 8-12 8z" />
            </svg>
          )}
        </button>
        <button
          className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center"
          onClick={nextTrack}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5 4v16l15-8-15-8zM18 4v16l1 0V4l-1 0z" />
          </svg>
        </button>
      </div>
      <div className=" mx-4">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="w-[500px]"
        />
      </div>
      <VolumeComponent audioRef={audioRef} />
    </div>
  );
}

export default Player;
