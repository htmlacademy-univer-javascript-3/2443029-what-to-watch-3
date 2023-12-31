import React from 'react';

interface MyListButtonProps {
  myFilmsCount: number;
}

const MyListButton: React.FC = (props: MyListButtonProps) => {
  const {myFilmsCount} = props;

  return (
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{myFilmsCount}</span>
    </button>
  );
};

export default MyListButton;
