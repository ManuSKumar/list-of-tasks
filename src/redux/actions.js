import {ADD_TO_TASKLIST,CHANGE_POPUP_VISIBILITY } from "./actionTypes";

let nextTaskId = 0;

export const addToTaskList = content => ({
  type: ADD_TO_TASKLIST,
  payload: {
    id: ++nextTaskId,
    content
  }
});

export const changePopupVisibility = () => ({
  type: CHANGE_POPUP_VISIBILITY,
});


