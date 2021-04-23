import { ADD_TO_TASKLIST,REMOVE_FROM_TASKLIST,UPDTE_TASKLIST } from "../actionTypes";

const initialState = {
    taskList: [
        {
            name: 'Task1',
            type: 'bad',
            taskId: 1
        },
        {
            name: 'Task2',
            type: 'good',
            taskId: 2
        }
    ],
};

export function tasks (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_TASKLIST: {
            const { taskId, content } = action.payload;
            return {
                ...state,
                taskList: [...state.taskList, { taskId, ...content }],
            };
        }
        case REMOVE_FROM_TASKLIST: {
            const { taskId } = action.payload;
            return {
                ...state,
                taskList: state.taskList.filter(task=>task.taskId!==taskId),
            };
        }
        case UPDTE_TASKLIST: {
            const { content } = action.payload;
            const index = state.taskList.findIndex(task => task.taskId === content.taskId);
            const newArray = [...state.taskList]; 
            newArray[index].name = content.name;
            newArray[index].type= content.type;

            return {
                ...state,
                taskList: newArray
              };
        }
        default:
            return state;
    }
}





