const initialScoreState = {
  pizza: 0,
  burger: 0,
  taco: 0,
};

function score(state = initialScoreState, action) {
  switch(action.type) {
    case 'UPDATE_SCORE':
      const { name, points } = action.data;
      return { ...state,  [name]: points };
    default:
      return state;
  }
}

export default score;
