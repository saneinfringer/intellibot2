import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Login from "../components/Login";
import TicketList from "../components/TicketList";

export default function Admin() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? <TicketList /> : <Login onLogin={handleLogin} />;
}
