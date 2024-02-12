const router=require("express").Router();
//GET ALL THE USERS
router.get("/",(req,res)=>{
    const{limit,page,search}=req.query; // used for search, sorting and filter
    //database operation
    res.json({msg:"Hello from user route"});
});


//add new user
router.post("/",(req,res)=>{
    console.log(req.body);
    //database operation
    res.json({msg:"Hello from user post route"});
});

//update single user for more than 2 fields
router.put("/:id",(req,res)=>{
    const{id}=req.params;
    const data=req.body;
    console.log({id,data});
    //database operation
    res.json({msg:`Hello from user put route ID ${id}`});
});

//update single user for single fields
router.patch("/:id",(req,res)=>{
    const{id}=req.params;
    const data=req.body;
    console.log({id,data});
    //Database operation
    res.json({msg:`Hello from user patch route ID ${id}`});
});

//delete single user
router.delete("/:id",(req,res)=>{
    console.log(req.params.id);
    //database operation
    res.json({msg:"Hello from delete user route"});
});



module.exports=router;