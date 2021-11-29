import React from "react";
import { Button, ListItem, List, Modal, Grid } from "@material-ui/core";

export default function EnemyItem(props) {
  return ( 
  <div>
    <Grid>
          <List>
            <ListItem class="itemholder">
              <img src={props.item.image} />
                <div class="btnholder">
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
                </div>
            </ListItem>
          </List>
    </Grid>
    
  </div>
    
  );
}