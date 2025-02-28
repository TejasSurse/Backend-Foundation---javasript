import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
   content : {
    type : String,
    require : true,

   },
   completed : {
    type : Boolean,
    default : false,
   },
   createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",  // it should be model name "Double quotes"
   },
   subTodos : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "SubTodo",
   }]  // if array then use [] array of subTodos 
   
}, {timestamps : true});


export const Todo = mongoose.model("Todo", todoSchema);