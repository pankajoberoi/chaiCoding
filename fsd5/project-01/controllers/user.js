const User=require("../models/user")

async function handleGetAllUsers(req,res){
    const allDbUsers=await User.find({});
    return res.json(allDbUsers)
}
async function handleGetUserById(req,res){
    const user=await User.findById(req.params.id)
    if(!user) return res.status(404).json({error : "mujhe ni mila user"})
    res.json(user);
}
async function handleCreateUser(req,res){
    const body = req.body;
  
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
    ) {
      return res.status(400).json({ msg: "all fields are required" });
    }
  
    //connect with db
    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });
  
    return res.status(201).json({ msg: "balle balle" });
}
async function handleUpadteUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{ lastName : "changed"})
    return res.json({status : "success"})
}
async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({status : "Deleted Successfully"})
}


module.exports={
    handleGetAllUsers,
    handleCreateUser,
    handleDeleteUserById,
    handleUpadteUserById,
    handleGetUserById
}







    