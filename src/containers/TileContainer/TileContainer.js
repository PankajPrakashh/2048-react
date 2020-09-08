import React, { Component } from 'react';

import Tile from '../../components/Tile/Tile';
import classes from './TileContainer.module.scss';

export default class TileContainer extends Component {

  state = {
    board: [],
  };

  componentDidMount() {
    this.initBoard();
  }

  initBoard() {

    const board = [
      [8192, 16384, 32768, 65536],
      [512, 1024, 2048, 4096],
      [32, 64, 128, 256],
      [2, 4, 8, 16],
    ];

    this.updateBoard(board);
  }

  updateBoard(board) {
    this.setState({
      board: Array.from(board)
    });
  }
  
  mapBoardToTemplate() {

    const template = [];

    this.state.board.forEach((row, rowIndex) => {

      row.forEach((col, colIndex) => {

        if (col) {
          const key = `${rowIndex + 1}${colIndex + 1}`;
          template.push(<Tile key={key} row={rowIndex + 1} col={colIndex + 1} value={col}/>);
        }
      });
    });

    return template;
  }

  render() {

    const tileTemplates = this.mapBoardToTemplate();

    return(
      <div className={classes.TileContainer}>
        {/* <Tile board={this.state.board}/> */}
        { tileTemplates }
      </div>
    );
  }
}