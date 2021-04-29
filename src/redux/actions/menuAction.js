import { HIDE_MENU_ITEM, SHOW_MENU_ITEM } from '../types';

export const hideMenuItem = (menuItem)=>{
  return{
    type: HIDE_MENU_ITEM,
    payload: menuItem
  }
}

export const showMenuItem = (menuItem) =>{
  return {
    type: SHOW_MENU_ITEM,
    payload: menuItem
  }
}