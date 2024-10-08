const mongoose = require("mongoose")

const userSchema=mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    username:{
        type: String,
        required:[true,"Pleasse add an username"]
    },
    email:{
        type: String,
        required:[true,"Pleasse add a email"],
        unique:[true,"Email alreaddy taken"]
    },
    password:{
        type:String,
        required:[true,"Please add an password"]
    }
},{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema)