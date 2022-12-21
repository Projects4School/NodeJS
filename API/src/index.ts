import { config } from "dotenv";
import { Database } from "./db";
import { Server } from "./api";

config();

Database.Run();
Server.Listen();