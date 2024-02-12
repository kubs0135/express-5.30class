const router=require("express").Router();

router.get("/",(req,res)=>{
    res.json({msg:"Hello from blog route"});
});



module.exports=router;