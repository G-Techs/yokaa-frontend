import React, { Dispatch, SetStateAction, FC } from "react";
import { VPause, VPlay } from "../__modules__/_Vectors";

interface PlayerControlerProps {
  index: number;
  isPlaying: number;
  isPaused: boolean;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
  setIsPlaying: Dispatch<SetStateAction<number>>;
}

const PlayerController: FC<PlayerControlerProps> = ({
  index,
  isPaused,
  isPlaying,
  setIsPaused,
  setIsPlaying,
}) => {
  return (
    <div
      onClick={() => {
        if (isPlaying === index && !isPaused) {
          setIsPaused(true);
          setIsPlaying(index);
        } else {
          setIsPaused(false);
        }
        setIsPlaying(index);
      }}
      className="px-4"
    >
      {isPlaying === index && !isPaused ? (
        <VPause className="w-6 h-6" />
      ) : (
        <VPlay className="w-6 h-6" />
      )}
    </div>
  );
};

export default PlayerController;
