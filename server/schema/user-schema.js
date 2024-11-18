import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

// Pass the mongoose instance to mongoose-sequence
const AutoIncrement = mongooseSequence(mongoose);

const userSchema = new mongoose.Schema({
    _id: { type: Number }, 

    task: String,
    ftime: String,
    ttime: String,
    date: String
});

// Apply the auto-increment plugin
userSchema.plugin(AutoIncrement, { id: "user_seq", inc_field: "_id" });

const User = mongoose.model("User", userSchema);
export default User;
