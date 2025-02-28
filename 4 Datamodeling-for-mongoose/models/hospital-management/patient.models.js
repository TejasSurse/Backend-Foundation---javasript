import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    diagonsedWith : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    age: {
        type : Number,
        require : true
    },
    bloodGroup : {
        type : String,
        require : true
    },
    gender : {
        type : String,
        require : true,
        enum : ["M", "F", "O"]
    },
    admittedIn : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital",  
    }
}, {timestamps : true});

export const Patient = mongoose.model("Patient", patientSchema);
