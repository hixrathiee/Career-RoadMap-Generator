import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/roadmap",
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