// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach token to every request if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// === Auth APIs ===
export const loginUser = (credentials) => API.post("/auth/login", credentials);
export const registerUser = (data) => API.post("/auth/register", data);

// === Ticket APIs ===
export const getTickets = () => API.get("/tickets");
export const replyToTicket = (ticketId, message) =>
  API.put(`/tickets/${ticketId}/reply`, { reply: message });

export default API;
