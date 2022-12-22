"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const db_1 = require("./db");
const api_1 = require("./api");
(0, dotenv_1.config)();
// Run database controller
db_1.Database.Run();
// Run server controller
api_1.Server.Listen();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBZ0M7QUFDaEMsNkJBQWdDO0FBQ2hDLCtCQUErQjtBQUUvQixJQUFBLGVBQU0sR0FBRSxDQUFDO0FBRVQsMEJBQTBCO0FBQzFCLGFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVmLHdCQUF3QjtBQUN4QixZQUFNLENBQUMsTUFBTSxFQUFFLENBQUMifQ==