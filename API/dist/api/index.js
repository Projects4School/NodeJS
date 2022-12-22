"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("../utils");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// Server class controller
class Server {
    static Listen(port = 8800) {
        if (port)
            this.port = port;
        // Create and config express app
        this.app = (0, express_1.default)();
        this.app.use((0, cors_1.default)());
        this.app.use((0, body_parser_1.json)());
        this.app.use((0, body_parser_1.urlencoded)({ extended: true }));
        this.RoutesHandler();
        const swaggerOptions = {
            definition: {
                openapi: '3.0.0',
                info: {
                    title: "Library API",
                    version: "0.0.1",
                },
                servers: [
                    {
                        url: 'http://localhost:8800',
                        description: 'Development server',
                    },
                ],
            },
            apis: ["routes/*"],
        };
        const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
        // Launch server on 8800 port
        this.app.listen(this.port, () => {
            console.log(`API running on the port ${this.port} !`);
        });
    }
    // Autoloader router from files in ./routes/
    static RoutesHandler() {
        fs_1.default.readdir(path_1.default.resolve(__dirname, "routes"), (error, files) => {
            if (error) {
                console.error(error);
                return;
            }
            try {
                files.forEach(async (file) => {
                    const router = await (0, utils_1.loadComponent)(path_1.default.resolve(__dirname, "routes", file));
                    const fileName = file.split('.').shift();
                    this.app.use("/" + fileName, router);
                    console.log(`Router /${fileName} loaded`);
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.Server = Server;
Server.app = undefined;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUFtRDtBQUNuRCw2Q0FBK0M7QUFDL0MsZ0RBQXdCO0FBQ3hCLDRDQUFvQjtBQUNwQixnREFBd0I7QUFDeEIsb0NBQXlDO0FBQ3pDLGtFQUF5QztBQUN6Qyw0RUFBMkM7QUFFM0MsMEJBQTBCO0FBQzFCLE1BQWEsTUFBTTtJQUlmLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBZSxJQUFJO1FBQzdCLElBQUcsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRTFCLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGtCQUFJLEdBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsd0JBQVUsRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLE1BQU0sY0FBYyxHQUFHO1lBQ25CLFVBQVUsRUFBRTtnQkFDUixPQUFPLEVBQUUsT0FBTztnQkFDaEIsSUFBSSxFQUFFO29CQUNGLEtBQUssRUFBRSxhQUFhO29CQUNwQixPQUFPLEVBQUUsT0FBTztpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMO3dCQUNFLEdBQUcsRUFBRSx1QkFBdUI7d0JBQzVCLFdBQVcsRUFBRSxvQkFBb0I7cUJBQ2xDO2lCQUNKO2FBQ0o7WUFDRCxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDckIsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLElBQUEsdUJBQVksRUFBQyxjQUFjLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsNEJBQVMsQ0FBQyxLQUFLLEVBQUUsNEJBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUV6RSw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQTRDO0lBQ3BDLE1BQU0sQ0FBQyxhQUFhO1FBQ3hCLFlBQUUsQ0FBQyxPQUFPLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUE0QixFQUFFLEtBQWUsRUFBRSxFQUFFO1lBQzVGLElBQUcsS0FBSyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU87YUFDVjtZQUVELElBQUk7Z0JBQ0EsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBWSxFQUFFLEVBQUU7b0JBQ2pDLE1BQU0sTUFBTSxHQUFXLE1BQU0sSUFBQSxxQkFBYSxFQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNwRixNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsUUFBUSxTQUFTLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUFDLE9BQU8sS0FBVSxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFBRTtRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0FBNURMLHdCQTZEQztBQTNEVSxVQUFHLEdBQVksU0FBUyxDQUFDIn0=