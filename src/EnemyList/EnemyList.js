import React, { useState, useEffect, useRef } from "react";
import EnemyItem from "./EnemyItem";
import EnemyModal from "./EnemyModal";
import PlayWidget from "./PlayWidget";
import { List, Modal, Grid } from "@material-ui/core";

import "./styles.css";


export default function EnemyList() {
  const [items, setItems] = useState([]);
  const [selectedItem, selectItem] = useState([]);
  const [showModal, setModalOpen] = useState(false);
  
  const audioRef = useRef();
  const [audInterval, setAudInterval] = useState(0);
  const [curPlaying, setCurPlaying] = useState({});
  const [curProgress, setCurProgress] = useState(0);
  


  useEffect(() => {
    fetch("data/enemies.json")
      .then((res) => res.json())
      .then((dataObject) => {
        setItems(dataObject);
      });
  }, []);

  try { //must have variables defined up here to run properly but causes insane amount of errors in console
    var name = selectedItem.name;
    var type = selectedItem.type;
    
    //stats
    var level = selectedItem.stats.level;
    var hp = selectedItem.stats.hp;
    var pp = selectedItem.stats.pp;
    var offense = selectedItem.stats.offense;
    var defense = selectedItem.stats.defense;
    var iq = selectedItem.stats.iq;
    var speed = selectedItem.stats.speed;
    var weakness = selectedItem.stats.weakness.join(", ");

    var description = selectedItem.description;
    var image = selectedItem.image;
    var music = selectedItem.music.split("./music/").pop();

    

  } catch (error) {
    //console.log(error);
  }

  const itemsList = items.map((item) => (
    <EnemyItem
      key="{item.id}"
      item={item}
      showInfo={showInfo}
    />
  ));

  function showInfo(itemId) {
    selectItem(items[itemId]);
    setModalOpen(true);
  }

  function trackSelected(id) {
    const foundItem = items.find((item) => item.id == id);
    setCurPlaying(foundItem);
  }

  
  return (
    <div class="maindiv">
      <Modal
        className="modal"
        open={showModal}
        onClose={() => {
          setModalOpen(false);
          clearInterval(audInterval);
        }}
      >
        <EnemyModal
          selectedItem={selectedItem}
          name={name}
          type={type}
          level={level}
          hp={hp}
          pp={pp}
          offense={offense}
          defense={defense}
          iq={iq}
          speed={speed}
          weakness={weakness}
          description={description}
          image={image}
          music={music}
          setCurProgress={setCurProgress}
          setAudInterval={setAudInterval}
        />
      </Modal>
      
      <h1>MOTHER 3 BOSSES</h1>
      <Grid container>
        {itemsList}
      </Grid>
    </div>
  );
}