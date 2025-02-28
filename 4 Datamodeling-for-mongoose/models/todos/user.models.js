import mongoose from 'mongoose';

const userSchema = new mongoose.Schema
(
    {
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : [true, "Password is required"],
        minlength : [6, "Password must be atleast 6 characters long"],
        
    },
    }, {timestamps : true}
);
// there are also custom validators in mongoose
// timestamps : true is used to create createdAt and updatedAt fields in the database


export const User = mongoose.model("User", userSchema);


// import , schemadefine and export these threelines always same in all models 
// user = mongoose.model is we are saying to mongoose that mongoose we are creating a model called user and we are passing the userSchema to it


/// mongodb working style is 

// when we create User module it will create a collection called users in the database

// it is mongodb working style that it convert Model name User into users plurals and lowercase

// IQ

//"Todo" => "todos"
// "User" => "users"