const express=require("express")
const { handleGetAllUsers,handleCreateUser,
    handleDeleteUserById,
    handleUpadteUserById,
    handleGetUserById }=require("../controllers/user")
const router=express.Router();

router.get("/",handleGetAllUsers);
  
router.get("/:id", handleGetUserById);
  
  
router.post("/", handleCreateUser);
  
router.patch("/:id",handleUpadteUserById);
  
router.delete("/:id", handleDeleteUserById);

module.exports=router;