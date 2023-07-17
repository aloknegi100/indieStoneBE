const User = require("../models/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.login = async function(req,res){    
    console.log("login ",req.body)

    try {
        const email = req.body.email;
        const password = req.body.psd;
    
        // Find the user by username
        const user = await User.findOne({ email });
        if (!user) {
          return res.json({ success:false, message: 'Invalid username or password' });
        }
    
        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.json({success:false, message: 'Invalid username or password' });
        }
    
        // Create and sign a JWT
        const token = jwt.sign({ userId: user._id }, 'indiestonesecret', { expiresIn: '6h' });
    
        res.json({ success:true,token ,message:"login success"});
      } catch (error) {
        console.error(error);
        res.json({ success:false,message: 'Server error' });
      }
    


}
exports.register = async function(req,res){ 
    
    try{

    
    console.log("register ",req.body)

    const email = req.body.newEmail;
    const password = req.body.newpsd;


    let user =await User.findOne({email})
    console.log("user ",user)
    if(user){
       return res.json({
            success:false,
            message:"User with this email already exist"
        })
    }

    const hashpsd = await bcrypt.hash(password,10)
    console.log("hashed password ",hashpsd)

    const newUser = new User({email,password:hashpsd})
    await newUser.save()
    res.json({
        success:true,
        message:"User Successfully Created"
    })




}catch(e){
    console.log("server error ",e)
    res.json({
        success:false,
        message:"Server Error"
    })
}


}