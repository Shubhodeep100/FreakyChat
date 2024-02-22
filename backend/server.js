import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/api/auth/signup", (req, res) => {
  console.log("Sign Up route");
});

app.get("/api/auth/signup", (req, res) => {
  console.log("Login route");
});

app.get("/api/auth/signup", (req, res) => {
  console.log("Logout route");
});



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
