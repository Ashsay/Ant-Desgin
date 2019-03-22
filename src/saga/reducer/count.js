import { INCREMENT } from './../constant/count';
const count = (state=1,actions)=>{
  switch(actions.type){
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}

export default count;