import React, { Dispatch, FC, SetStateAction } from "react";
import { VPrev, VNext, VPlay, VPause } from "../../__modules__/_Vectors"

interface AudioControlsProps{
    isPlaying:boolean;
    onPlayPauseClick:Function;
    onPrevClick: Function;
    onNextClick:Function;
}

const AudioControls: FC<AudioControlsProps> = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick
}) => (
    <div className="flex  justify-center p-4 space-x-9">
        <button
            type="button"
            className="prev"
            aria-label="Previous"
            onClick={(e)=>onPrevClick}
        >
            <VPrev className="w-12 h-12" />
        </button>
        {isPlaying ? (
            <button
                type="button"
                className="pause"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
            >
                <VPause className="w-12 h-12" />
            </button>
        ) : (
            <button
                type="button"
                className="play"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
            >
                <VPlay className="w-12 h-12" />
            </button>
        )}
        <button
            type="button"
            className="next"
            aria-label="Next"
            onClick={onNextClick()}
        >
            <VNext className="w-12 h-12" />
        </button>
    </div>
);

export default AudioControls;
