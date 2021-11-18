import React, { useState, useEffect, useRef } from "react";


export default function MusicList(props) {
  let trackEls = props.items.map((item) => (
    <div
      key={item.id}
      className={props.curPlaying.id == item.id ? "active" : ""}
      onClick={() => {
        props.onSelected(item.id);
      }}
    >
      {item.title}
    </div>
  ));

  return <div>{trackEls}</div>;
}
