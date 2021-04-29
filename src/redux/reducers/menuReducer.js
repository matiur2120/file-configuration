import { HIDE_MENU_ITEM, SHOW_MENU_ITEM } from '../types';
const unCommonArray = (first, second) => {
  const res = [];
  for(let i = 0; i < first.length; i++){
     if(second.indexOf(first[i]) === -1){
        res.push(first[i]);
     }
  };
  for(let j = 0; j < second.length; j++){
     if(first.indexOf(second[j]) === -1){
        res.push(second[j]);
     };
  };
  return res;
};

const initialState = {
    showMenuItem: ['alpha', 'support', 'bravo', 'charlie', 'template']
}

export default function(state=initialState, action){
  switch(action.type){
    case SHOW_MENU_ITEM:
      return {
        showMenuItem: [...state.showMenuItem, action.payload[0], action.payload[1]]
      }
    case HIDE_MENU_ITEM:
      
      return{
        showMenuItem: unCommonArray(state.showMenuItem, action.payload)
      }
    default:
      return state
  }
}