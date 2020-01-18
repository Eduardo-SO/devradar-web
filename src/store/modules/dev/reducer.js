import { produce } from 'immer'

const INITIAL_STATE = [];

function DevReducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case 'ADD_DEV':
            return produce(state, draft => {
               draft.push(action.dev);
            });
        default:
            return state;
    }
}

export default DevReducer;