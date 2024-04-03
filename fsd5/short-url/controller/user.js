const User=require('../model/user')



async function handleUserSignUp(req,res){
    const {name,email,password}=req.body;

    await User.create({
        name,
        email,
        password,
    });

    return res.redirect("/login")

}


async function handleUserLogin(req,res){
    const {email,password}=req.body;
    const user=await User.findOne({email,password});

    if(!user) return res.render("login",{
        error : "Invalid UserName or password"
    })

    return res.redirect("/")

}

module.exports={
    handleUserSignUp,
    handleUserLogin
}