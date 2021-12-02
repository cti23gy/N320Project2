import React, { useState, useEffect, useRef } from "react";

export default function PlayWidget(props) {
  const audioRef = useRef();

  return (
    <div>
      <audio
        controls
        ref={audioRef}
        src={props.currentItem.music}
        onPlay={() => {
          let ai = setInterval(() => {
            let progress =
              audioRef.current.currentTime / audioRef.current.duration;

            props.setCurProgress(progress);
          }, 100);
          props.setAudInterval(ai);
        }}
        onPause={() => {
          clearInterval(props.audInterval);
        }}
      />
    </div>
  );
}