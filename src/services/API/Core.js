import axios from "axios";
import { uriEndPoint } from "./../../utils/Constant";

export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = "http://localhost:4000/api/v1/register";
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
  };
  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};

const Core = {
  login: (params) => {
    return axios({
      url: `${uriEndPoint}/users/auth`,
      method: "POST",
      crossdomain: true,
      data: {
        username: params.username,
        password: params.password,
      },
    }).catch((error) => {
      console.log("error", error);
      // if (error.response.status === 401) {
      //   localStorage.removeItem("accessToken");
      //   window.location = "/login";
      // }
    });
  },
};

export default Core;
