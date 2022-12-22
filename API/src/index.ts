import { config } from "dotenv";
import { Database } from "./db";
import { Server } from "./api";

config();

// Run database controller
Database.Run();

// Run server controller
Server.Listen();