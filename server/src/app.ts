import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import session from "express-session";
import connectMongo from "connect-mongo";
import cookieParser from "cookie-parser";
import passport from "passport";
import router from "./router";
import dbConnect from "./config/db";
import http from "http";
import socketIO from "socket.io";
import path from "path";
import mongoose from "mongoose";
import morgan from "morgan";
// import webSocketHandler from "./websocket"

dotenv.config();
const MongoStore = connectMongo(session);
const app = express();

const server = new http.Server(app);
const io = new socketIO(server);
app.set("io", io);

// webSocketHandler.init(io);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(passport.initialize());

// TODO: Implement Passport Init configuration
// passportInit()

app.use(cookieParser(process.env.COOKIES_SECRET));
app.use(
  session({
    secret: process.env.SECRET || "secret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(express.static(path.resolve(__dirname, "../../client/build/")));

// Database Connection
dbConnect();

app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../client/build/index.html"));
  });
}

server.listen(process.env.PORT);

export default app;
