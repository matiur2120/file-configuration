import { GET_DISPLAY_DATA, INPUT_FIELD_ERROR, RELOADE_FILE_DATA, SAVE_UPDATE_DATA } from '../types'

export const getDiplayData=(itemId, updateData)=>{
  return (dispatch)=>{
    const diplayData = updateData[itemId]
    console.log(diplayData)
    dispatch({
      type: GET_DISPLAY_DATA,
      payload: {itemId, itemData: diplayData}
    })
  }
}
export const saveUpdateData=(itemId, itemData)=>{
  return (dispatch)=>{
    console.log(itemId)
    console.log(itemData)
    dispatch({
      type: SAVE_UPDATE_DATA,
      payload: {itemId: itemId, itemData: itemData}
    })

  }
}
 
export const reloadFile=(fileData)=>{
  return{
    type: RELOADE_FILE_DATA,
    payload: fileData
  }
}

export const setInputFieldError = (err) =>{
  return{
    type: INPUT_FIELD_ERROR,
    payload: err
  }
}

