import React from 'react';

import './Option.scss';

import Container from './Container';

function Option({ handleUpvote, name }) {
  const EMOJI_MAP = {
    burger: '🍔',
    pizza: '🍕',
    taco: '🌮',
  };

  return (
    <Container name={name}>
      {({ handleUpvote, points }) => (
        <div className="option">
          <div className="option__points">{points}</div>
          <button
            onClick={() => handleUpvote({ name, points })}
            className="option__btn"
          >
            {EMOJI_MAP[name]}
          </button>
        </div>
      )}
    </Container>
  );
}

export default Option;
