import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    // images is not recommended to store in database, but for this example we will store it in database
    // i.e buffer is not recommended to store in database
    // it should be store in another folder and then their url is stored in the database
    // it can be store in cloud storage or server folder aws bucket and cloudinary
    productImage : {
        type : String,

    },
    price : {
        type : Number,
        default : 0,
    },
    stock : {
        type : Number,
        default : 0,
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required : true,
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    }
}, {timestamps: true});


export const Product = mongoose.model('Product', productSchema);