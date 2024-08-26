const mongoose=require("mongoose")

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please pass an name"]
    },
    email:{
        type:String,
        required:[true,"Please pass an email"]
    },
    phone:{
        type:String,
        required:[true,"Please pass an number"]
    }
},{
    Timestamp:true
})
module.exports=mongoose.model("Contact",contactSchema)