import store from "./store";

store.subscribe(() => console.log("Stored changed!", store.getState()));

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
});

store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
});
