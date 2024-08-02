const mongoose=require("mongoose");

const contactSchema= mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{ 
        type:String,
        required:[true,"Please provide name of contact!"],
    },
    email:{
        type:String,
        required:[true,"Please provide email of contact! "],
    },
    phone:{
        type:String,
        required:[true,"Please provide contacts phn no."],
    },
},
    {
        timestamps:true,
    }
);
module.exports=mongoose.model("Contact",contactSchema);