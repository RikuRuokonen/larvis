import {callApi} from "../api/callApi";

export const getAcquisitions = () =>
  callApi("GET", "/acquisitions", null, true);