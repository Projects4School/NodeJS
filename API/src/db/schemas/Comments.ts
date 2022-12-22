import mongoose, { Schema } from "mongoose";

// Define interface of Schema
export interface CommentType {
    name: String,
    email: String,
    movie_id: Schema.Types.ObjectId,
    text: String,
    date: Date
}

// Create schema from interface
const schema: Schema = new Schema<CommentType> ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    movie_id: { type: Schema.Types.ObjectId, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

// Rewrite function to convert data in json data
schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

// Export schema as model
export default mongoose.model<CommentType>("comments", schema);