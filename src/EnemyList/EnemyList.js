import React, { useState, useEffect } from "react";
import EnemyItem from "./EnemyItem";
import { List, Modal, Grid } from "@material-ui/core";
import "./styles.css";


export default function EnemyList() {

  const [items, setItems] = useState([]);
  const [selectedItem, selectItem] = useState([]);
  const [showModal, setModalOpen] = useState(false);

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

    
  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <div id="infobox">
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.description}</p>
          <p>{selectedItem.type}</p>
        </div>
      </Modal>

      <Grid container>
        <Grid>
          <h2>Items</h2>
          <List>{itemsList}</List>
        </Grid>
        <Grid>
          <h2>Bag</h2>
        </Grid>
      </Grid>
    </div>
  );
  }