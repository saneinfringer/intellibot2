// server/routes/ticketRoutes.js
const express = require("express");
const { createTicket, getUserTickets, replyToTicket } = require("../controllers/ticketController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, createTicket);
router.get("/", auth, getUserTickets);
router.put("/:id/reply", auth, replyToTicket);

module.exports = router;
