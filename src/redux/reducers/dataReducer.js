import { data } from '../../data';
import { GET_DISPLAY_DATA, INPUT_FIELD_ERROR, SAVE_UPDATE_DATA } from '../types';
const initialState = {
  itemId: 'alpha',
  err: '',
  itemData: '',
  isSaved: false,
  updateData: data
}

export default function(state=initialState, action){
  switch(action.type){
    case GET_DISPLAY_DATA:
      return {
        ...state,
        itemId: action.payload.itemId,
        itemData: action.payload.itemData
      }
    case SAVE_UPDATE_DATA:
      console.log(action.payload.itemId)
      console.log(action.payload.itemData)
      return {
        ...state,
        isSaved: true,
        updateData:{
          ...state.updateData,
          [action.payload.itemId]: action.payload.itemData
        }
      }
    case INPUT_FIELD_ERROR:
      console.log(action.payload.err)
      return{
        ...state,
        err: action.payload.err
      }
    default:
      return state;
  }
}