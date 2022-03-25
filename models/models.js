import mongoose from "mongoose";

const Api = mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    }
})

export default mongoose.model('Apis', Api);