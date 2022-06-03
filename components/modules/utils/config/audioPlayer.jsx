import React, { useState, useEffect, useRef } from 'react'
import AudioControls from "./audioControls"

const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // Destructure for conciseness
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];





  // Refs

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;


  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

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
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

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
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className='mx-2'>

      <div className='flex justify-between mx-4 items-center'>
        <div className='flex items-center  w-full'>
          <div className='w-24 max-w-24 max-h-24 rounded-bl-lg overflow-hidden h-16'>
            <img src={image} className="object-fit" alt={title} />
          </div>
          <div className='ml-6 '>
            <p className='text-2xl'>{title}</p>
            <p>{artist}</p>
          </div>
        </div>

        <div className=''>
          <AudioControls isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying} />
        </div>
      </div>
      <input
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        className="py-2 w-full  "
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
      />
    </div>

  );
};


export default AudioPlayer