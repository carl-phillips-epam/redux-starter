import { produce } from "immer";
import * as actions from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
    return produce(state, draftState => {
        switch(action.type) {
            case actions.BUG_ADDED:
            {
                draftState.push({
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                });
            }
            case actions.BUG_REMOVE:
            {
                draftState.filter(bug => bug.id !== action.payload.id);
            }
            case actions.BUG_RESOLVED:
            {
                draftState.map(bug => (bug.id === action.payload.id) ? bug.resolved = true : bug);
            }
            default:
            {
                draftState = [];
            }
        }
    });
}

// export default function reducer(state = [], action) {
//     switch(action.type) {
//         case actions.BUG_ADDED:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ];
//         case actions.BUG_REMOVE:
//             return state.filter(bug => bug.id !== action.payload.id);
//         case actions.BUG_RESOLVED:
//             return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true});
//         default:
//             return state;
//     }
// }