import User from '../models/user.model.js'
import bcrypt from "bcryptjs"
import generateTokenAndSetCokkie from '../utils/generateTokens.js';

//Signup route:-
export const signup = async (req, res) => {
  try {
    const {fullname, username, password, confirmpassword, gender } = req.body;
    if (password != confirmpassword)
      return res.status(400).json({error:"password doesnt match"})
    
    const user = await User.findOne({ username });

    if (user)
    {
      return res.status(400).json({error:"user already exists"})
    }
    
    //hash password here
    const salt = await bcrypt.genSalt(10)
    const hashpass = await bcrypt.hash(password, salt)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newuser = new User({
      fullname,
      username,
      password:hashpass,
      gender,
      profilepic: gender==="male" ? boyProfilePic : girlProfilePic
    })

    if (newuser) {
      //generate jwt token
      generateTokenAndSetCokkie(newuser._id,res)
      await newuser.save()

      res.status(201).json({
        _id: newuser._id,
        fullname: newuser.fullname,
        username: newuser.username,
        profilepic: newuser.profilepic
      })
    }
      else {
  res.status(500).json({error:"invalid user data"})
    }
   
  }
  
  catch (error) {
    console.log("error in signup controller")
    res.status(500).json({error:"internal server error"})
  }
};

//Login Route :-
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    const ispassword= await bcrypt.compare(password, user?.password || "")
    
    if (!user || !ispassword) {
      return res
        .status(400)
        .json({ error: "invalid username or password..." });
    }

    generateTokenAndSetCokkie(user._id, res)
    
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilepic: user.profilepic
    })
    
  } catch (error) {
     console.log("error in login controller");
     res.status(500).json({ error: "internal server error" });
  }
};

//Logout route:-
export const logout =(req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 })  //we dont need cookie so we delete it when logout
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log("error in logout controller");
    res.status(500).json({ error: "internal server error" });
  }
};
