import './Tile.scss';

import React from 'react';

const Tile = (props) => {

  const classList = ['Tile', `Tile${props.value}`, `TilePosition${props.row}${props.col}`];

  return (
    <div className={classList.join(' ')}>{props.value}</div>
  );
};

export default Tile;