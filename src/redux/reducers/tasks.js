import { ADD_TO_TASKLIST } from "../actionTypes";

const initialState = {
    taskList: [
        {
            name: 'Task1',
            type: 'good',
            taskId: 3
        },
        {
            name: 'Task1',
            type: 'good',
            taskId: 4
        }
    ],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_TASKLIST: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.taskList, { id, ...content }],
            };
        }
        default:
            return state;
    }
}
