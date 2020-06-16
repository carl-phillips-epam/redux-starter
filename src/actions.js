import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
});

export const bugRemove = (id) => ({
    type: actions.BUG_REMOVE,
    payload: {
        id
    }
});

export const bugResolved = (id) => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id
    }
});


// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "Bug1"
//         }
//     }
// }

// export function bugRemove(id) {
//     return {
//         type: actions.BUG_REMOVE,
//         payload: {
//             id: 1
//         }
//     }
// }