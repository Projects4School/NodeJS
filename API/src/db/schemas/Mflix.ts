import mongoose, { Schema } from "mongoose";

const schema: Schema = new Schema ({
    name: String,
    email: String,
    movie_id: [Schema.Types.ObjectId],
    text: String,
    date: { type: Date, default: Date.now }
});

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export default mongoose.model("sample_mflix", schema);