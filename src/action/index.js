const ADD_USER = "ADD_USER";
export function addUser(username) {
  return {
    type: "ADD_USER",
    payload: username,
  };
}
