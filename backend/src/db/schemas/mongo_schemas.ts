import mongoose, { Schema } from "mongoose";


export const pixelGenerationSchema: Schema = new mongoose.Schema({
    size: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: false
    }
});
