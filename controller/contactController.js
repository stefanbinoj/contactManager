const asyncHandler=require("express-async-handler")

const getContacts=asyncHandler(async (req,res)=>{
    res.status(200).json({msg:"Get all contacts"})
})

const createContact=asyncHandler(async(req,res)=>{
    console.log(req.body)
    const{name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(404);
        throw new Error("All Fields are Mandatory")
    }
    res.status(201).json({msg:"Created Contact"})
})

const updateContact=asyncHandler(async(req,res)=>{
    res.status(200).json({msg:"Update Contact"})
})

const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({msg:"Deleted Contact"})
})  

module.exports = {getContacts,createContact,updateContact,deleteContact}