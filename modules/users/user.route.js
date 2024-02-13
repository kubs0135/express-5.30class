const router=require("express").Router();
//GET ALL THE USERS
router.get("/",(req,res,next)=>{
    try{
        states;
        const{limit,page,search}=req.query; // used for search, sorting and filter
    //database operation
    res.json({msg:"Hello from user route"});
    }catch(err){
        next(err);
    }
});


//add new user
router.post("/",(req,res,next)=>{
    try{
        console.log(req.body);
    //database operation
    res.json({msg:"Hello from user post route"});
    }catch(e){
        next(e);
    }
});

//update single user for more than 2 fields
router.put("/:id",(req,res)=>{
    try{
        const{id}=req.params;
    const data=req.body;
    console.log({id,data});
    //database operation
    res.json({msg:`Hello from user put route ID ${id}`});
    }catch(er){
        next(er);
    }
    
});

//update single user for single fields
router.patch("/:id",(req,res)=>{

    try{
        const{id}=req.params;
    const data=req.body;
    console.log({id,data});
    //Database operation
    res.json({msg:`Hello from user patch route ID ${id}`});
    }catch(error){
        next(erorr);
    }
    
});

//delete single user
router.delete("/:id",(req,res)=>{

    try{
        console.log(req.params.id);
        //database operation
        res.json({msg:"Hello from delete user route"});
    }catch(error){
        next(erorr);
    }
    

});



module.exports=router;