import {ADD_TO_TASKLIST,REMOVE_FROM_TASKLIST,UPDTE_TASKLIST } from "./actionTypes";



export const addToTaskList = content => ({
  type: ADD_TO_TASKLIST,
  payload: {
    taskId: new Date().getTime() ,
    content
  }
});

export const removeFromTaskList = content => ({
    type: REMOVE_FROM_TASKLIST,
    payload: {
     taskId:content
    }
  });

export const updateTaskList = content => ({
    type: UPDTE_TASKLIST,
    payload: {
      content
    }
  });


