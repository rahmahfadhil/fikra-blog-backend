const router=require('express').Router();
const {create}=require('../controllers/user.controller')
router.post('/',create);
module.exports=router;