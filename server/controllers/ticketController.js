// server/controllers/ticketController.js
const Ticket = require("../models/Ticket");

exports.createTicket = async (req, res) => {
  try {
    const { message } = req.body;
    const ticket = await Ticket.create({ message, user: req.user.userId });
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user.userId });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.replyToTicket = async (req, res) => {
  try {
    if (req.user.role !== "admin") return res.status(403).json({ error: "Access denied" });

    const { reply } = req.body;
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, { reply, status: "closed" }, { new: true });
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
