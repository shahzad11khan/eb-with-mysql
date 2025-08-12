// api.js
import axios from "axios";
// API`S
import {
  API_URL_USER,
  API_URL_TEAM,
  API_URL_Vacancy,
  API_URL_GetInTouch,
  API_URL_Request,
  API_URL_Projects,
  API_URL_Blog,
} from "./apiUrls";

export const ShowAllAdmins = () => {
  return axios
    .get(`${API_URL_USER}/specificuser`)
    .then((res) => {
      // console.log(res.data);
      // console.log(res.data.count);
      return { admins: res.data.result, count: res.data.count };
    })
    .catch((error) => {
      console.log(`error : ${error}`);
      throw error;
    });
};
export const TeamCount = () => {
  return axios
    .get(`${API_URL_TEAM}`)
    .then((res) => {
      // console.log(res.data);
      // console.log(res.data.count);
      return { admins: res.data.Result, count: res.data.count };
    })
    .catch((error) => {
      console.log(`error : ${error}`);
      throw error;
    });
};
export const VacancyCount = () => {
  return axios
    .get(`${API_URL_Vacancy}`)
    .then((res) => {
      // console.log(res.data);
      // console.log(res.data.count);
      return { admins: res.data.Result, count: res.data.count };
    })
    .catch((error) => {
      console.log(`error : ${error}`);
      throw error;
    });
};
export const GetInCount = () => {
  return axios
    .get(`${API_URL_GetInTouch}`)
    .then((res) => {
      // console.log(res.data);
      // console.log(res.data.count);
      return { admins: res.data.result, count: res.data.count };
    })
    .catch((error) => {
      console.log(`error : ${error}`);
      throw error;
    });
};
export const RequestCount = () => {
  return axios
    .get(`${API_URL_Request}`)
    .then((res) => {
      // console.log(res.data);
      // console.log(res.data.count);
      return { admins: res.data.Result, count: res.data.count };
    })
    .catch((error) => {
      console.log(`error : ${error}`);
      throw error;
    });
};
export const ProjectsCount = () => {
  return axios
    .get(`${API_URL_Projects}`)
    .then((res) => {
      // console.log(res.data);
      // console.log(res.data.count);
      return { admins: res.data.Result, count: res.data.count };
    })
    .catch((error) => {
      console.log(`error : ${error}`);
      throw error;
    });
};
export const BlogsCount = () => {
  return axios
    .get(`${API_URL_Blog}`)
    .then((res) => {
      // console.log(res.data);
      // console.log(res.data.count);
      return { admins: res.data.Result, count: res.data.count };
    })
    .catch((error) => {
      console.log(`error : ${error}`);
      throw error;
    });
};
