import React from 'react';

const PlayButton: React.FC = () => (
  <button className="btn btn--play film-card__button" type="button">
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </button>
);

export default PlayButton;
