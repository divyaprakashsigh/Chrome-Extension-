const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/greet", (req, res) => {
  const hour = new Date().getHours();
  let message = "HELLO ABHAY";

  if (hour < 12) {
    message = "GOOD MORNING ABHAY ☀️";
  } else if (hour < 18) {
    message = "GOOD AFTERNOON ABHAY 🌤️";
  } else {
    message = "GOOD EVENING ABHAY 🌙";
  }

  res.json({ message });
});

app.listen(4000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
