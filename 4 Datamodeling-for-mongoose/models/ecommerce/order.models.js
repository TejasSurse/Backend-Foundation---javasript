import mongoose from "mongoose";


// this is mini schema it is used to store the product and quantity in the order
// it helps orderSchema to store the product and quantity in the order
const orderItemSchema = new mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
        required : true,
    },
    quantity : {
        type : Number,
        required : true,
    }
});


const orderSchema = new mongoose.Schema({
    orderPrice : {
        type : Number,
        required : true,
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    orderItems : {
        type : [orderItemSchema],
    },
    address : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        enum : ['pending', 'completed', 'cancelled'],  // enum is used to restrict the value of the field it gives choices to the user
        default : 'pending',
    }
}, {timestamps : true});

export const Order = mongoose.model("Order", orderSchema);
