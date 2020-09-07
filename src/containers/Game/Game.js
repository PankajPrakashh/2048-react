import React, { Component } from 'react';

import GameBoard from '../../components/GameBoard/GameBoard';
import classes from './Game.module.scss';

export default class Game extends Component {

  state = {
    // Empty board state
    board: [[null, null, null, null, ], [null, null, null, null, ], [null, null, null, null, ], [null, null, null, null, ]],
  };

  render() {

    return (
      <div className={classes.Game2048}>
        {/* Game 2048 */}

        {/* <ScoreCard />
        <HighScoreCard /> */}
        
        <GameBoard board={this.state.board}/>
      </div>
    );
  }
}