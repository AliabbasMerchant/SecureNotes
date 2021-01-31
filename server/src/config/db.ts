import mongoose from "mongoose";

function dbConnect() {
  const mongooseOptions: mongoose.ConnectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  let connectionString = "mongodb://localhost:27017/test";

  if (process.env.NODE_ENV !== "test") {
    connectionString = process.env.MONGO_URI || "";
  }
  mongoose.connect(connectionString, mongooseOptions);
  mongoose.Promise = global.Promise;
  mongoose.connection.on("open", () => console.log(`MongoDB Connected`));
  mongoose.connection.on("error", console.error.bind(console, "Mongo Error"));
}

export default dbConnect;
