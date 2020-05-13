export const INCREASE_COUNT = 'INCREASE_COUNT'
const regeneratorRuntime = require("regenerator-runtime");
import {delay} from './delay'

export const increaseCountAction = () => async (dispatch, getState) =>  {
  await delay();
   dispatch({
    type: INCREASE_COUNT
  })
}  