import { config } from "dotenv";
import { Database } from "./db/index";
import { Server } from "./api/index";

config();

Database.Run();
Server.Listen();