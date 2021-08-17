const express =require("express")
const router =express.Router();
//controller
const {Register,Login} = require('../controllers/authcontroller')
//middlware
const isAuth = require('../middlewares/isAuth')
//vaidator
const {validation,registerValidate,loginValidate}
 = require ('../middlewares/validators')
/*
@method: POST
@ path:http:localhost:5000/api/auth/register
@ parameter: req.body  
public
*/
router.post('/register', registerValidate() ,validation ,  Register);

/*
@method: POST
@ path:http:localhost:5000/api/auth/login
@ parameter: req.body  
public
*/

router.post('/login',loginValidate(), validation, Login);
/*
@method: GET
@ path:http:localhost:5000/api/auth/current
@ parameter: req.headers  
public
*/


router.get('/current',isAuth,(req,res)=>{
    res.send({msg:"authorized",user:req.user})
})

module.exports=router