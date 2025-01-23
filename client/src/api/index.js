// FitnessTrack/client/src/api/index.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://fitnesstrack-wnqb.onrender.com/api/",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },  // Fixed the string interpolation issue
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },  // Fixed string interpolation
  });

export const addWorkout = async (token, data) =>
  await API.post("/user/workout", data, {
    headers: { Authorization: `Bearer ${token}` },  // Fixed string interpolation
  });
