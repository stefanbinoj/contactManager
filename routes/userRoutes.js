const express=require("express")
const { registerUser, loginUser, currUser } = require("../controller/userController")

const router=express.Router()

router.post('/register',registerUser)

router.post('/login',loginUser)    

router.get('/current',currUser )

module.exports=router 