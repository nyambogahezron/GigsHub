require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// database
const connectDB = require("./config/connect");

//routes
const authRoutes = require("./routes/authRoutes");
const gigsRoutes = require("./routes/gigsRoutes");
const userRoutes = require("./routes/userRoutes");

// middlewares
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const asyncHandlerMiddleware = require("./middleware/asyncHandler");

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ["http://localhost:5173", "https://gigs-hub.vercel.app/"],
    credentials: true,
  })
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/gigs", gigsRoutes);
app.use("/api/v1/company", userRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
app.use(asyncHandlerMiddleware);

// start sever
const port = process.env.PORT || 5000;

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`app listing to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
