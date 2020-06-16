import store from "./store";
import { bugAdded, bugRemove, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => console.log("Stored changed!", store.getState()));

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch(bugRemove(1));

console.log(store.getState());

// state = reducer(state, action);
// notify the subscribers
