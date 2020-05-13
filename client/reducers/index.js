import { INCREASE_COUNT } from '../actions/index'

const initialState = {
  count: 0,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        ...state,
        count: state.count +1,
      }
    default:
      return state;
  }
}

export default rootReducer