import bodyParser from "body-parser";
import express from "express";
import userRoutes from "./routes/users.js";
const app = express();
const port = 5001;

//middleware
app.use(bodyParser.json());

//routes
app.use("/users", userRoutes);

//main page
app.get("/", (req, res) => {
  console.log("test");
  res.send("Hello from homepage!");
});

//start server
app.listen(
  port,
  console.log(`Server running on port: http://localhost:${port}`)
);
