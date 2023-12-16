// a reducer function that takes a state and the action object and return the value based on the action.type
function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + action.value;
    case "decrease":
        if(state === 0){
            return 0
        }
      return state - action.value;
    default:
      throw new Error("unexpected action:", action.type);
  }
}

export { reducer };
