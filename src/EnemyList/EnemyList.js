import React, { useState, useEffect } from "react";
import EnemyItem from "./EnemyItem";
import MusicList from "./MusicList";
import PlayWidget from "./PlayWidget";
import { List, Modal, Grid } from "@material-ui/core";
import "./styles.css";


export default function EnemyList() {
  const [items, setItems] = useState([]);
  const [selectedItem, selectItem] = useState([]);
  const [showModal, setModalOpen] = useState(false);

  const [curPlaying, setCurPlaying] = useState({});
  const [curProgress, setCurProgress] = useState(0);

  useEffect(() => {
    fetch("data/enemies.json")
      .then((res) => res.json())
      .then((dataObject) => {
        //console.log(dataObject);
        setItems(dataObject);
      });
  }, []);

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
    <div>
      <Modal
        open={showModal}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <div id="infobox">
          <img src={selectedItem.image}/>
          
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.description}</p>
          <p>{selectedItem.type}</p>
          <p>{selectedItem.stats.level}</p>
          <p>{selectedItem.stats.weakness.join(", ")}</p>
          <div>
            <br/>
            Music Player
            <p>{selectedItem.music}</p>
            <PlayWidget currentItem={selectedItem} setCurProgress={setCurProgress} />
          </div>
        </div>
      </Modal>

      <Grid container>
        <Grid>
          <h2>Enemies</h2>
          <List>{itemsList}</List>
        </Grid>
        <Grid>
          <h2>Info</h2>
        </Grid>
      </Grid>
    </div>
  );
}