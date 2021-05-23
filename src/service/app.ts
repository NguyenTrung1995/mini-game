import axios from "axios";

import { parseResponse, parseError } from "utils/responseHelper";

export const fetchCurrentItemApi = () => {
  return axios
    .get("/api/current-item")
    .then((res) => parseResponse(res))
    .catch((err) => parseError(err));
};

export const updateCurrentItemApi = (data) => {
  return axios
    .post("/api/current-item", { data })
    .then((res) => parseResponse(res))
    .catch((err) => parseError(err));
};

export const resetCurrentItemApi = () => {
  return axios
    .get("/api/reset")
    .then((res) => parseResponse(res))
    .catch((err) => parseError(err));
};
