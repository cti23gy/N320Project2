import React, { useState, useEffect, useRef } from "react";

export default function PlayWidget(props) {
  const audioRef = useRef();
  const [audInterval, setAudInterval] = useState(0);

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
          setAudInterval(ai);
        }}
        onPause={() => {
          clearInterval(audInterval);
        }}
      />
    </div>
  );
}