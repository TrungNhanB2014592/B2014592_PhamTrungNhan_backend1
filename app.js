// app.js
const express = require("express");
const cors = require("cors");
// Create Express app
const app = express();

app.use(cors());
app.use(express.json());
// A sample route
app.get("/", (req, res) => {
  res.json({ message: "Welcom to contact book application" });
});
module.exports = app;
// // Start the Express server
// app.listen(3000, () => console.log("Server running on port 3000!"));

// const contactsRouter = require("./app/routes/contact.route");

// app.use("/api/contacts", contactsRouter);
