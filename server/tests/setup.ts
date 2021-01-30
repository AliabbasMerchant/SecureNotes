import mongoose from "mongoose";
import {MongoMemoryServer} from "mongodb-memory-server";
import "mocha";
mongoose.Promise = global.Promise;

const mongoOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

let mongoServer : MongoMemoryServer;

before(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getUri();
  await mongoose.createConnection(mongoUri, mongoOptions);
});

after(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
  console.log(`Mongo URI stopped`);
});