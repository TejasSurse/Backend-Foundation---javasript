import mongoose from "mongoose";




const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    salary : {
        type : Number,
        required : true,
    },
    qualification : {
        type : String,
        required : true,
    },
    experienceInYears : {
        type : Number,
        required : true,
        default : 0,
    },
    worksInHospitals: 
    [{
       type : mongoose.Schema.Types.ObjectId,
       ref : "Hospital", 
    }],


}, {timestamps : ture});

export const Doctor = mongoose.model("Doctor", doctorSchema);