// const express = require("express");
// const router = express.Router();
// const axios = require("axios");

// router.post("/", async (req, res) => {
//   const { message } = req.body;

//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: message }]
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//           "Content-Type": "application/json"
//         }
//       }
//     );

//     const reply = response.data.choices[0].message.content;
//     res.json({ reply });
//   } catch (err) {
//     console.error("OpenAI error:", err.response?.data || err.message);
//     res.status(500).json({ error: "Failed to get response from OpenAI." });
//   }
// });

// module.exports = router;


//mock replies
const express = require("express");
const router = express.Router();

// Mock route to simulate OpenAI reply
router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  // Simulated "AI" response
  const mockReply = `🤖 Mock reply from IntelliBot: You said, "${message}"`;

  res.json({ reply: mockReply });
});

module.exports = router;
