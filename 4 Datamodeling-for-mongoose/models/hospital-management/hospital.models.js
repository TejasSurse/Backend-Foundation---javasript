import mongoose from "mongoose";

const hospotalSchema = new mongoose.model
({
    name : {
        type : String,
        required : true,
    },
    addressLine1 : {
        type : String,
        required : true,

    },
    pincode : {
        type : String,
        require : true
    },
    specializedIn : {   
        type : String,
        required : true,
    },
}, {
    timestamps : true
});

export const Hospital = mongoose.model("Hospital", hospotalSchema);