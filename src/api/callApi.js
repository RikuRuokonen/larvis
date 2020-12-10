import axios from "axios";
import { getFromLocalStorage, removeFromLocalStorage} from "../helpers/utils";

const API_ROOT = process.env.REACT_APP_API_ROOT;

export const callApi = (method, endpoint, data, auth = true ) => {
  let headers = null;
  if (auth) {
    const token = getFromLocalStorage("token")
    if (!token) {
      removeFromLocalStorage("token");
      removeFromLocalStorage("userId")
      return Promise.reject("Session expired")
    }
    headers = {
      'Authorization': `Bearer ${token}`,
    }
  }
  return axios({
    method,
    url: API_ROOT + endpoint,
    data,
    headers
  })
};
