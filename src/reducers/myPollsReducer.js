import I from 'immutable';
import { ADD_NEW_POLL } from '../constants/actionTypes';

const INITIAL_STATE = I.fromJS({
  polls: [
    {
      id: 1,
      pollName: 'Best Movie',
      date: '06.06.21',
      votes: 100,
      status: 'finished',
      question: {
        questionText: 'Choose the best movie for you ',
        options: [
          { optionText: 'Breaking Bad', optionResult: 70 },
          { optionText: 'Prison Break', optionResult: 70 },
          { optionText: 'Game of Thrones', optionResult: 70 },
        ],
      },
    },
    {
      id: 2,
      pollName: 'Personal Info',
      date: '12.12.21',
      votes: 150,
      status: 'finished',
      question: {
        questionText: 'Choose the best movie for you ',
        options: [
          { optionText: 'Breaking Bad', optionResult: 10 },
          { optionText: 'Prison Break', optionResult: 10 },
          { optionText: 'Game of Thrones', optionResult: 10 },
        ],
      },
    },
    {
      id: 3,
      pollName: 'Education Level',
      date: '09.08.21',
      votes: 70,
      status: 'finished',
      question: {
        questionText: 'Choose the best movie for you ',
        options: [
          { optionText: 'Breaking Bad', optionResult: 100 },
          { optionText: 'Prison Break', optionResult: 100 },
          { optionText: 'Game of Thrones', optionResult: 100 },
        ],
      },
    },
  ],
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_POLL: {
      return state.set('polls', [...state.get('polls', 'fallback'), action.payload]);
    }
    default:
      return state;
  }
};
