"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Database class controller
class Database {
    static Run() {
        if (!this.database) {
            // Database connection
            mongoose_1.default.set('strictQuery', false);
            mongoose_1.default.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@database.qfjizji.mongodb.net/sample_mflix?retryWrites=true&w=majority`);
            this.database = mongoose_1.default.connection;
            this.database.on('error', console.error.bind(console, 'connection error:'));
            this.database.once('open', () => {
                console.log('DB connected !');
            });
        }
    }
    static LoadSchema(schemaName, schema) {
        // Load database schema and return model of it
        return mongoose_1.default.model(schemaName, schema);
    }
}
exports.Database = Database;
Database.database = undefined;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0RBQTRDO0FBRTVDLDRCQUE0QjtBQUM1QixNQUFhLFFBQVE7SUFHakIsTUFBTSxDQUFDLEdBQUc7UUFDTixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLHNCQUFzQjtZQUN0QixrQkFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyx3RUFBd0UsQ0FBQyxDQUFDO1lBRTFKLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQVEsQ0FBQyxVQUFVLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFrQixFQUFFLE1BQWM7UUFDaEQsOENBQThDO1FBQzlDLE9BQU8sa0JBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7O0FBcEJMLDRCQXFCQztBQXBCVSxpQkFBUSxHQUF3QixTQUFTLENBQUMifQ==