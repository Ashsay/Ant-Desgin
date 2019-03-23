import {INCREMENT, INCREMENT_ASYNC} from './../constant/count';

export const increment = () => {
  return {
    type:INCREMENT
  }
}

export const incrementAsync = () => {
  return {
    type:INCREMENT_ASYNC
  }
}