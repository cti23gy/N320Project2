import React from "react";
import { Button, ListItem } from "@material-ui/core";

export default function EnemyItem(props) {
  return (
    <ListItem>
      {props.item.name}
      
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          props.showInfo(props.item.id);
        }}
      >
        Info
      </Button>
    </ListItem>
  );
}