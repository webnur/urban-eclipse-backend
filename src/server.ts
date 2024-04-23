import mongoose from "mongoose";
import app from "./app";
const port = 3002;
import config from "./config/index";
import { Server } from "http";

process.on("uncaughtException", (error) => {
  console.error(error);
  process.exit(1);
});
let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Database connected Successfully!");
    server = app.listen(config.port, () => {
      console.log(`Server is Running on port ${config.port}`);
    });
  } catch (err) {
    console.log("Failed to connected database", err);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
main();
