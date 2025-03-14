require('dotenv').config();

const {createRazorpayInstance} = require('../config/razorpay.config');
const crypto = require('crypto');
const razorpayInstance = createRazorpayInstance(); 

exports.createOrder = async (req, res)=>{
    // do not accept amout from client 
    const {courseId, amount} = req.body;
    // course id se fetch karenge course ka data including price 

    // create order
    const options = {
        amount: amount*100, // amount is smallest currecy unit
        currency: "INR",
        receipt: "receipt_orderr_11",
    };
    try{
        razorpayInstance.orders.create(options, (err, order)=>{
            if(err){
                return res.status(500).json({
                    success : false,
                    message : "Something went wrong",
                });
            }
            return res.status(200).json(order);
        } );
    }catch(error){
        return res.status(500).json({
            success : false,
            message : "Something went wrong",
        });
    }
}


exports.verifyPayment = async (req, res)=>{
    const {orderId, paymentId, signature} = req.body;
    const secret = RAZORPAY_SECRET_KEY;
    // create hmac object
    const hmac = crypto.createHmac('sha256', secret);

    hmac.update(orderId+ "|" + paymentId);
    const generatedSignature = hmac.digest('hex');
    if(generatedSignature === signature){
        // db operations 
        return res.status(200).json({
            success : true,
            message : "Payment verified successfully",
        });
    }else{
        return res.status(400).json({
            success : false,
            message : "Payment verification failed",
        });
    }
}
