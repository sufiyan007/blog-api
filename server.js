const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
