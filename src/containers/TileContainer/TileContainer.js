import React, { Component } from 'react';

import Tile from '../../components/Tile/Tile';
import classes from './TileContainer.module.scss';

export default class TileContainer extends Component {

  render() {

    return(
      <div className={classes.TileContainer}>
        <Tile />
      </div>
    );
  }
}