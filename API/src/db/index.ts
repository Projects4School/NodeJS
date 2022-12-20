import mongoose from "mongoose";

export class Database {
    static database: mongoose.Connection = undefined;

    static Run(): void {
        if(!this.database) {
            mongoose.set('strictQuery', false);
            mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@database.qfjizji.mongodb.net/database`);
            
            this.database = mongoose.connection;
            this.database.on('error', console.error.bind(console, 'connection error:'));
            this.database.once('open', () => {
                console.log('DB connected !');
            });
        }
    }
}