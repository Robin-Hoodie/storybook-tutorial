import { combineReducers, createStore } from 'redux';
import { TASK_STATES } from '../components/Task';

export const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK'
};

export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, payload: { id } });
export const pinTask = id => ({ type: actions.PIN_TASK, payload: { id } });

const initialState = {
    tasks: [
        { id: '1', title: 'Something', state: TASK_STATES.TASK_INBOX },
        { id: '2', title: 'Something more', state: TASK_STATES.TASK_INBOX },
        { id: '3', title: 'Something else', state: TASK_STATES.TASK_INBOX },
        { id: '4', title: 'Something again', state: TASK_STATES.TASK_INBOX }
    ]
};

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ARCHIVE_TASK:
            return {
                tasks: state.tasks.map(task => {
                    return task.id === action.payload.id ? { ...task, state: TASK_STATES.TASK_ARCHIVED } : task
                })
            };
        case actions.PIN_TASK:
            return {
                tasks: state.tasks.map(task => {
                    return task.id === action.payload.id ? { ...task, state: TASK_STATES.TASK_PINNED } : task
                })
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    taskList: taskListReducer
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


