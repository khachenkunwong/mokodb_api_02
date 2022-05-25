const express= require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: "hello thsi is user request"
    });
});
router.post('/:userId',(req,res,next) => {
    
    const userid=req.params.userId;

    res.status(200).json({
        message: "hello thsi is user request",
        user_name:req.body.name,
        user_age:req.body.age,
        user_id:userid
    });
});

router.put('/',(req,res,next) => {
    res.status(200).json({
        message: "hello thsi is user request"
    });
});
router.patch('/',(req,res,next) => {
    res.status(200).json({
        message: "hello thsi is user request"
    });
});
module.exports=router;