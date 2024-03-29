import express, { Express, Router } from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import fs from "fs";
import path from "path";
import { loadComponent } from "../utils";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

// Server class controller
export class Server {
    static port: number;
    static app: Express = undefined;

    static Listen(port: number = 8800): void {
        if(port) this.port = port;

        // Create and config express app
        this.app = express();

        this.app.use(cors());
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));

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

        const swaggerDocs = swaggerJsDoc(swaggerOptions);

        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

        // Launch server on 8800 port
        this.app.listen(this.port, () => {
            console.log(`API running on the port ${this.port} !`);
        });
    }

    // Autoloader router from files in ./routes/
    private static RoutesHandler(): void {
        fs.readdir(path.resolve(__dirname, "routes"), (error: NodeJS.ErrnoException, files: string[]) => {
            if(error) {
                console.error(error);
                return;
            }

            try {
                files.forEach(async (file: string) => {
                    const router: Router = await loadComponent(path.resolve(__dirname, "routes", file));
                    const fileName: string = file.split('.').shift();
                    this.app.use("/" + fileName, router);
                    console.log(`Router /${fileName} loaded`);
                });
            } catch (error: any) { console.error(error); }
        });
    }
}