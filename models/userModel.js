const { uniqueID } = require("mocha/lib/utils");
const mongoose=require("mongoose");

const userSchema= mongoose.Schema({
    username:{ 
        type:String,
        required:[true,"Please add user name"],
    },
    email:{
        type:String,
        required:[true,"Please provide email of user! "],
        unique:[true,"Email alredy registered"],
    },
    password:{
        type:String,
        required:[true,"Please enter the password"],
    },
},
    {
        timestamps:true,
    }
);
module.exports=mongoose.model("User",userSchema);