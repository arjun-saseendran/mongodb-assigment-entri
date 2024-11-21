import mongoose, {Schema} from "mongoose";

const requestSchema = new Schema({
    message: {
        type: String,
        required: true
    }
})

export const Request = mongoose.model('request', requestSchema)