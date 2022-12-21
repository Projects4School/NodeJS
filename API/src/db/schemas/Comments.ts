import mongoose, { Schema } from "mongoose";

export interface CommentType {
    name: String,
    email: String,
    movie_id: Schema.Types.ObjectId,
    text: String,
    date: Date
}

const schema: Schema = new Schema<CommentType> ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    movie_id: { type: Schema.Types.ObjectId, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export default mongoose.model<CommentType>("comments", schema);