import mongoose, { Schema } from "mongoose";

export class Database {
    static database: mongoose.Connection = undefined;

    static Run(): void {
        if(!this.database) {
            mongoose.set('strictQuery', false);
            mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@database.qfjizji.mongodb.net/sample_mflix?retryWrites=true&w=majority`);
            
            this.database = mongoose.connection;
            this.database.on('error', console.error.bind(console, 'connection error:'));
            this.database.once('open', () => {
                console.log('DB connected !');
            });
        }
    }

    static LoadSchema(schemaName: string, schema: Schema) {
        return mongoose.model(schemaName, schema);
    }
}