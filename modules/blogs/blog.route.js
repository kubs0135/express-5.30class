const router=require("express").Router();
//GET ALL THE USERS
router.get("/",(req,res,next)=>{

    try{
       
        const{limit,page,search}=req.query; // used for search, sorting and filter
    //database operation
    res.json({msg:"Hello from blog route"});
    }catch(error2){
        next(error2);

    }
    
});



//add new user
router.post("/",(req,res)=>{

    try{
        
    console.log(req.body);
    //database operation
    res.json({msg:"Hello from blog post route"});
    }catch(error2){
        next(error2);

    }
    
});

//update single user for more than 2 fields
router.put("/:id",(req,res)=>{
    try{
        const{id}=req.params;
        const data=req.body;
        console.log({id,data});
        //database operation
        res.json({msg:`Hello from blog put route ID ${id}`});
        }catch(error2){
            next(error2);
    
        }
    
});

//update single user for single fields
router.patch("/:id",(req,res)=>{

    try{
        const{id}=req.params;
        const data=req.body;
        console.log({id,data});
        //Database operation
        res.json({msg:`Hello from blog patch route ID ${id}`});
        }catch(error2){
            next(error2);
    
        }

});

//delete single user
router.delete("/:id",(req,res)=>{

    try{
        
        console.log(req.params.id);
        //database operation
        res.json({msg:"Hello from delete user route"});
        }catch(error2){
            next(error2);
    
        }
    
});



module.exports=router;