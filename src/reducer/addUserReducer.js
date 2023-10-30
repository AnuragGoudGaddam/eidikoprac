const initialState = { username: "" };
const ADD_USER = "ADD_USER";
export function setUser(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return { username: action.payload };
    default:
      return state;
  }
}
