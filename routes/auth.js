var express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const {signout, signup, signin, isSignedIn} = require('../controllers/auth');

router.post("/signup",[
            check('name',"Name should be of 5 chars").isLength({ min: 5 }),
            check('lastname',"last Name should be of 5 chars").isLength({ min: 5 }),
            check('email',"Email is Required").isEmail(),
            check('password',"Passowrd should be of 5 chars").isLength({ min: 5 }),

], signup);

router.post("/signin",[
    check('email',"Email is Required").isEmail(),
    check('password',"Passowrd should be of 5 chars").isLength({ min: 5 }),

], signin);

router.get("/signout", signout);

// router.get("/testroute", isSignedIn, (req, res) =>{
//         res.json(req.auth)
// })
module.exports = router; 