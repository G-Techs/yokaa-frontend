import React, { useState, useEffect, useRef, FC } from "react";
import { ISong } from "../../../../types";
import AudioControls from "./audioControls";
interface NewReleasesSongsProps {
  tracks: ISong[];
  isMinified?: boolean;
  className?: string;
}

const AudioPlayer: FC<NewReleasesSongsProps> = ({ tracks, isMinified = false, className }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  // Destructure for conciseness
  const { title, artist, img, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<HTMLAudioElement | number>(0);
  const isReady = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    const { duration } = audioRef.current;
    setDuration(duration);
    // TODO: This lint should be recked again
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startTimer = () => {};

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startTimer();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current?.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
    // TODO: This lint should be recked again
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <div className="mx-2">
      <div className="flex justify-between mx-4 items-center">
        <div className="flex items-center w-full">
          <div className={`${isMinified ? className : "w-24 max-w-24 max-h-24 rounded-lg overflow-hidden h-16"}`}>
            <img src={img} className="object-fit rounded-lg" alt={title} />
          </div>
          <div className="ml-6 font-semibold ">
            <p className="text-base">{title}</p>
            <p className="text-gray-300 text-sm">{artist}</p>
          </div>
        </div>
        <div className="w-32">
          <AudioControls isPlaying={isPlaying} onPrevClick={toPrevTrack} onNextClick={toNextTrack} onPlayPauseClick={setIsPlaying} />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
