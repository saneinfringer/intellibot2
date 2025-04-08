// src/components/TicketList.jsx
import React, { useEffect, useState } from "react";
import { getTickets } from "../services/api";

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTickets();
        setTickets(res.data);
      } catch (err) {
        console.error("Failed to fetch tickets", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Support Tickets</h2>
      <ul className="space-y-2">
        {tickets.map((ticket) => (
          <li key={ticket._id} className="border p-3 rounded">
            <p className="font-semibold">{ticket.subject}</p>
            <p className="text-sm text-gray-600">{ticket.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
