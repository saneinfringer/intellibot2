// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Register from "./components/Register";
import TicketList from "./components/TicketList"; // ✅ Make sure this path is correct
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Chatbot />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tickets" element={<TicketList />} />{" "}
          {/* ✅ New route */}
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
