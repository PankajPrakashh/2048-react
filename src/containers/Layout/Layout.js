import React, { Component } from 'react';

import Game from '../Game/Game';
import classes from './Layout.module.scss';

export default class Layout extends Component {


  render() {
    
    return (
      <div className={classes.GameLayout}>
        <Game />
      </div>
    );
  }
}