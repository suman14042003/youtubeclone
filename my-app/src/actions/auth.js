import * as api from "../api";
import { setCurrentUser } from "./currentUser";

export const login = (authData) => async (dispatch) => {
  try {
    console.log("Sending login request with authData:", authData); // Debug log
    const { data } = await api.login(authData);
    console.log("Received data from login API:", data); // Debug log
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  } catch (error) {
    console.error("Login error:", error.response ? error.response.data : error.message); // Improved error logging
    alert(error.message || "Login failed");
  }
};
