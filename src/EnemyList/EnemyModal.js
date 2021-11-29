import React from "react";
import PlayWidget from "./PlayWidget";
import { Button, ListItem, List, Modal, Grid } from "@material-ui/core";

export default function EnemyModal(props) {
  return ( 
    <div id="infobox">
        <div class="imgholder">
        <img src={props.image}/>
        </div>
        
        <div class="section">
            <div class="header">
                <h3>{props.name}</h3>
                <h4>{props.type}</h4>
                <p>{props.description}</p>
                <p>Weaknesses: {props.weakness}</p>
                <br/>
                <h4>Music Player</h4>
                <p>{props.music}</p>
                <PlayWidget currentItem={props.selectedItem} setCurProgress={props.setCurProgress} />
            </div>
            <div class="stats">
                <p>Level: {props.level}</p>
                <p>HP: {props.hp}</p>
                <p>PP: {props.pp}</p>
                <p>Offense: {props.offense}</p>
                <p>Defense: {props.defense}</p>
                <p>IQ: {props.iq}</p>
                <p>Speed: {props.speed}</p>
            </div>
        </div>
        
        
        
    </div>
    
  );
}