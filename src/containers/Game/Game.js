import React, { Component } from 'react';

import GameBoard from '../../components/GameBoard/GameBoard';
import HighScoreCard from '../../components/HighScoreCard/HighScoreCard';
import ScoreCard from '../../components/ScoreCard/ScoreCard';
import classes from './Game.module.scss';

export default class Game extends Component {

  render() {

    return (
      <div className={classes.Game2048}>
        Game 2048

        <ScoreCard />
        <HighScoreCard />
        
        <GameBoard />
      </div>
    );
  }
}