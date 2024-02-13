const router=require("express").Router();
//GET ALL THE categories
router.get("/",(req,res)=>{
    const{limit,page,search}=req.query; // used for search, sorting and filter
    //database operation
    res.json({msg:"Hello from category route"});
});


//add new category
router.post("/",(req,res)=>{
    console.log(req.body);
    //database operation
    res.json({msg:"Hello from category post route"});
});

//update single category for more than 2 fields
router.put("/:id",(req,res)=>{
    const{id}=req.params;
    const data=req.body;
    console.log({id,data});
    //database operation
    res.json({msg:`Hello from category put route ID ${id}`});
});


//update single category for single fields
router.patch("/:id",(req,res)=>{
    const{id}=req.params;
    const data=req.body;
    console.log({id,data});
    //Database operation
    res.json({msg:`Hello from category patch route ID ${id}`});
});

//delete single category
router.delete("/:id",(req,res)=>{
    console.log(req.params.id);
    //database operation
    res.json({msg:"Hello from delete category route"});
});



module.exports=router;