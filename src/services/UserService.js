import { callApi } from "../api/callApi";

export const loginUser = (user) =>
  callApi("POST", "/token", user, false );

export const getUsers = () =>
  callApi("GET", "/users", true);

export const getUserById = (userId) =>
  callApi("GET", `/users/${userId}`, true);

export const updateUser = (updatedUser) =>
  callApi("POST", `/users/${updatedUser["user_id"]}`, updatedUser, true);


