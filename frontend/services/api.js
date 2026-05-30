import axios from "axios";

const API = axios.create({
  baseURL: "https://career-roadmap-generator-82l6.onrender.com/api/roadmap",
});

export const generateRoadmap = (data) => {
  return API.post("/generate", data);
};

export const getRoadmaps = () => {
  return API.get("/");
};

export const deleteRoadmap = (id) => {
  return API.delete(`/${id}`);
};
