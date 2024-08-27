const express=require("express");
const router = express.Router();
const {getContacts , createContact , updateContact,deleteContact }=require("../controller/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)
router.route('/').get(getContacts).post(createContact)
router.route('/:id').put(updateContact).delete(deleteContact)

module.exports=router;  