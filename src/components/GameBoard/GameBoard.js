import React from 'react';

import BoardTile from '../BoardTile/BoardTile';
import classes from './GameBoard.module.scss';

const GameBoard = (props) => {

  return (
    <div className={classes.GameBoard}>
      Game Board

      <BoardTile />
    </div>
  );
};

export default GameBoard;