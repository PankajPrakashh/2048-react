import React from 'react';

import BoardTile from '../BoardTile/BoardTile';
import classes from './GameBoard.module.scss';

const GameBoard = (props) => {

  // Generate board
  let boardTilesTemplate;
  if (Array.isArray(props.board)) {

    boardTilesTemplate = props.board.reduce((acc, row, rowIndex) => {

      const rowTemplate = (
        <div key={rowIndex} className={classes.Row}>
          { row.map((col, index) => <BoardTile key={index} />) }
        </div>
      );

      (acc || []).push(rowTemplate);

      return acc;
    }, []);
  }

  return (
    <div className={classes.GameBoard}>

      { boardTilesTemplate }
      
    </div>
  );
};

export default GameBoard;